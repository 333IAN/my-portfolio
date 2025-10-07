from rest_framework import status
from .serializers import ContactSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from django.conf import settings
import logging
import threading
from django.core.mail import send_mail

logger = logging.getLogger(__name__)

def send_contact_email_async(contact_data):
    """Send email in background thread"""
    try:
        logger.info(f"Attempting to send email to: {contact_data['email']}")
        
        send_mail(
            subject=f"New Portfolio Contact from {contact_data['name']}",
            message=f"""
Name: {contact_data['name']}
Email: {contact_data['email']}
Message: {contact_data['message']}

Sent at: {contact_data['sent_at']}
            """.strip(),
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[settings.DEFAULT_FROM_EMAIL],  # Send to yourself
            fail_silently=False,
        )
        logger.info(f"✅ Email sent successfully to: {contact_data['email']}")
        return True
    except Exception as e:
        logger.error(f"❌ Email failed: {str(e)}")
        return False

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
                logger.info("Starting email thread...")
                email_thread = threading.Thread(
                    target=send_contact_email_async,
                    args=(email_data,)
                )
                email_thread.daemon = True
                email_thread.start()
                logger.info(f"✅ Email queued for: {contact.email}")
                email_sent = True
            except Exception as e:
                logger.error(f"❌ Failed to queue email: {str(e)}")
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