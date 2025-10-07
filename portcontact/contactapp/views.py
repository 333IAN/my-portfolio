from rest_framework import status
from .serializers import ContactSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from django.conf import settings
from django.core.mail import send_mail
import logging

logger = logging.getLogger(__name__)

class ContactCreateView(APIView):
    serializer_class = ContactSerializer

    def post(self, request):
        logger.info("📨 CONTACT FORM RECEIVED - Starting email process")
        
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            contact = serializer.save()
            logger.info(f"💾 Contact saved: {contact.name} - {contact.email}")
            
            # SYNC EMAIL SENDING (no threads)
            email_sent = False
            try:
                logger.info("🔄 ATTEMPTING TO SEND EMAIL SYNCHRONOUSLY")
                logger.info(f"📧 Using EMAIL_HOST: {settings.EMAIL_HOST}")
                logger.info(f"📧 From: {settings.DEFAULT_FROM_EMAIL}")
                logger.info(f"📧 To: amuguneisavwa@gmail.com")
                
                send_mail(
                    subject=f"New Portfolio Contact from {contact.name}",
                    message=f"""
Name: {contact.name}
Email: {contact.email}
Message: {contact.message}

Sent at: {contact.sent_at}
                    """.strip(),
                    from_email=settings.DEFAULT_FROM_EMAIL,
                    recipient_list=['amuguneisavwa@gmail.com'],  # Send to your actual email
                    fail_silently=False,
                )
                logger.info("✅ EMAIL SENT SUCCESSFULLY VIA RESEND!")
                email_sent = True
                
            except Exception as e:
                logger.error(f"❌ EMAIL FAILED: {str(e)}", exc_info=True)
                email_sent = False
            
            return Response(
                {
                    "message": "Thank you for your message! I'll get back to you soon.",
                    "data": serializer.data,
                    "email_sent": email_sent
                },
                status=status.HTTP_201_CREATED
            )
        else:
            logger.error(f"❌ Validation errors: {serializer.errors}")
            return Response(
                {"errors": serializer.errors},
                status=status.HTTP_400_BAD_REQUEST
            )