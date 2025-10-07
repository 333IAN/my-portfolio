from rest_framework import status
from .serializers import ContactSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
import logging

logger = logging.getLogger(__name__)

class ContactCreateView(APIView):
    serializer_class = ContactSerializer

    def post(self, request):
        logger.info("📨 CONTACT FORM RECEIVED")
        
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            contact = serializer.save()
            
            # ✅ CONTACT SAVED SUCCESSFULLY - Email disabled for now
            logger.info(f"💾 CONTACT SAVED: {contact.name} - {contact.email} - {contact.message}")
            
            # 🚫 Email temporarily disabled to fix 502 errors
            # All contacts are saved to database and can be viewed in admin
            logger.info("📧 Email disabled - contact saved to database only")
            
            return Response(
                {
                    "message": "Thank you for your message! I'll get back to you soon.",
                    "data": serializer.data,
                    "note": "Message saved successfully"
                },
                status=status.HTTP_201_CREATED
            )
        else:
            logger.error(f"❌ Validation errors: {serializer.errors}")
            return Response(
                {"errors": serializer.errors},
                status=status.HTTP_400_BAD_REQUEST
            )