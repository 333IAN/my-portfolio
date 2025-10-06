from rest_framework import status
from .serializers import ContactSerializer
from django.core.mail import send_mail
from rest_framework.views import APIView
from rest_framework.response import Response
from django.conf import settings
import logging

logger = logging.getLogger(__name__)

class ContactCreateView(APIView):
    serializer_class = ContactSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            contact = serializer.save()
            
            # Send email notification
            try:
                send_mail(
                    subject=f"New Portfolio Contact from {contact.name}",
                    message=f"""
Name: {contact.name}
Email: {contact.email}
Message: {contact.message}

Sent at: {contact.sent_at}
                    """.strip(),
                    from_email=settings.DEFAULT_FROM_EMAIL,
                    recipient_list=[settings.EMAIL_HOST_USER],  # Sends to yourself
                    fail_silently=False,
                )
                logger.info(f"Contact form submitted and email sent: {contact.email}")
                
            except Exception as e:
                logger.error(f"Email sending failed: {str(e)}")
                # Still save the contact even if email fails
                # You can implement a retry mechanism or use Celery for async emails
            
            return Response(
                {"message": "Thank you for your message! I'll get back to you soon.", "data": serializer.data},
                status=status.HTTP_201_CREATED
            )
        
        return Response(
            {"errors": serializer.errors},
            status=status.HTTP_400_BAD_REQUEST
        )