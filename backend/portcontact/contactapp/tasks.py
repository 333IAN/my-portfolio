import os
import resend
from django.conf import settings
import logging

logger = logging.getLogger(__name__)


try:
    resend.api_key = os.getenv("RESEND_API_KEY")
    if not resend.api_key:
        logger.warning("RESEND_API_KEY is not set. Emails will not send.")
except Exception as e:
    logger.error(f"Failed to initialize Resend: {e}")


def send_contact_email_async(contact_data):
    """
    Send email using Resend's HTTP API to avoid SMTP blocks.
    """
    
    if not resend.api_key:
        logger.error("Email failed: RESEND_API_KEY is not configured.")
        return

    try:
        to_email = settings.EMAIL_HOST_USER
        from_email = settings.DEFAULT_FROM_EMAIL

        if not to_email:
            logger.error("Email failed: EMAIL_HOST_USER (as 'to_email') is not set.")
            return
        if not from_email:
            logger.error("Email failed: DEFAULT_FROM_EMAIL (as 'from_email') is not set.")
            return

        subject = f"New Portfolio Contact from {contact_data['name']}"
        

        html_body = f"""
        <p><strong>Name:</strong> {contact_data['name']}</p>
        <p><strong>Email:</strong> {contact_data['email']}</p>
        <p><strong>Message:</strong></p>
        <p>{contact_data['message'].replace('n', '<br>')}</p>
        <hr>
        <p><em>Sent at: {contact_data['sent_at']}</em></p>
        """

        text_body = f"""
        Name: {contact_data['name']}
        Email: {contact_data['email']}
        Message: {contact_data['message']}

        Sent at: {contact_data['sent_at']}
        """.strip()


        params = {
            "from": from_email,
            "to": [to_email],
            "subject": subject,
            "html": html_body,
            "text": text_body,
            "reply_to": contact_data['email']
        }

    
        email = resend.Emails.send(params)
        

        if email.get("id"):
            logger.info(f"✅ Email sent successfully via Resend! ID: {email.get('id')}")
        else:

            logger.error(f"❌ Resend API error: {email}")

    except Exception as e:
        logger.error(f"❌ Email task failed (Resend API): {str(e)}")