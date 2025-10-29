from rest_framework import status
from .serializers import ContactSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
import logging
import threading  # <-- 1. Import threading
from .tasks import send_contact_email_async  # <-- 2. Import your task

logger = logging.getLogger(__name__)

class ContactCreateView(APIView):
    serializer_class = ContactSerializer

    def post(self, request):
        logger.info("📨 CONTACT FORM RECEIVED")
        
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            contact = serializer.save()
            
            # ✅ CONTACT SAVED SUCCESSFULLY
            logger.info(f"💾 CONTACT SAVED: {contact.name} - {contact.email} - {contact.message}")
            
            try:
                logger.info("🚀 Starting background email thread...")
                
                email_data = {
                    'name': contact.name,
                    'email': contact.email,
                    'message': contact.message,
                    'sent_at': contact.sent_at  # 'sent_at' is from the saved model
                }
                
                # Create and start the thread
                email_thread = threading.Thread(
                    target=send_contact_email_async,
                    args=(email_data,)
                )
                email_thread.start()
                
                logger.info("✅ API response sent, email thread running.")
            
            except Exception as e:
                # Log if starting the thread fails, but don't block the user
                logger.error(f"❌ Failed to start email thread: {str(e)}")
            # --- END ASYNCHRONOUS EMAIL ---
            
            return Response(
                {
                    "message": "Thank you for your message! I'll get back to you soon.",
                    "data": serializer.data,
                    "note": "Message saved and email sending initiated." 
                },
                status=status.HTTP_201_CREATED
            )
        else:
            logger.error(f"❌ Validation errors: {serializer.errors}")
            return Response(
                {"errors": serializer.errors},
                status=status.HTTP_400_BAD_REQUEST
            )