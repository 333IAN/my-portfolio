from rest_framework import status
from .serializers import ContactSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from django.conf import settings
import logging
from .tasks import send_contact_email_async  # Add this import

logger = logging.getLogger(__name__)

class ContactCreateView(APIView):
    serializer_class = ContactSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            contact = serializer.save()
            
            # Prepare email data
            email_data = {
                'name': contact.name,
                'email': contact.email,
                'message': contact.message,
                'sent_at': str(contact.sent_at)
            }
            
            # Send email in background thread
            try:
                email_thread = threading.Thread(
                    target=send_contact_email_async,
                    args=(email_data,)
                )
                email_thread.daemon = True
                email_thread.start()
                logger.info(f"Contact submitted, email queued: {contact.email}")
                email_sent = True
            except Exception as e:
                logger.error(f"Failed to queue email: {str(e)}")
                email_sent = False
            
            return Response(
                {
                    "message": "Thank you for your message! I'll get back to you soon.",
                    "data": serializer.data,
                    "email_queued": email_sent
                },
                status=status.HTTP_201_CREATED
            )
        
        return Response(
            {"errors": serializer.errors},
            status=status.HTTP_400_BAD_REQUEST
        )