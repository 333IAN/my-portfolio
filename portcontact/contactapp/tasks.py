# contactapp/tasks.py
import threading
from django.core.mail import send_mail
from django.conf import settings
import logging

logger = logging.getLogger(__name__)

def send_contact_email_async(contact_data):
    """Send email in background thread to avoid timeout"""
    try:
        send_mail(
            subject=f"New Portfolio Contact from {contact_data['name']}",
            message=f"""
Name: {contact_data['name']}
Email: {contact_data['email']}
Message: {contact_data['message']}

Sent at: {contact_data['sent_at']}
            """.strip(),
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[settings.EMAIL_HOST_USER],
            fail_silently=False,
        )
        logger.info(f"Email sent successfully to: {contact_data['email']}")
    except Exception as e:
        logger.error(f"Email failed: {str(e)}")