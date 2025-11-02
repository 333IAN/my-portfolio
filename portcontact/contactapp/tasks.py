import os
import resend  # <-- Import the resend library
from django.conf import settings
import logging

logger = logging.getLogger(__name__)

# Initialize the Resend client
# It will automatically find the API key from the
# RESEND_API_KEY environment variable in your .env file
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
        # Get the email addresses from settings.py
        # EMAIL_HOST_USER is who you're sending TO
        to_email = settings.EMAIL_HOST_USER
        # DEFAULT_FROM_EMAIL is who it's FROM (must be verified in Resend)
        from_email = settings.DEFAULT_FROM_EMAIL

        if not to_email:
            logger.error("Email failed: EMAIL_HOST_USER (as 'to_email') is not set.")
            return
        if not from_email:
            logger.error("Email failed: DEFAULT_FROM_EMAIL (as 'from_email') is not set.")
            return

        subject = f"New Portfolio Contact from {contact_data['name']}"
        
        # Create a nice HTML body for the email
        html_body = f"""
        <p><strong>Name:</strong> {contact_data['name']}</p>
        <p><strong>Email:</strong> {contact_data['email']}</p>
        <p><strong>Message:</strong></p>
        <p>{contact_data['message'].replace('n', '<br>')}</p>
        <hr>
        <p><em>Sent at: {contact_data['sent_at']}</em></p>
        """

        # Create a plain text version for email clients that don't use HTML
        text_body = f"""
        Name: {contact_data['name']}
        Email: {contact_data['email']}
        Message: {contact_data['message']}

        Sent at: {contact_data['sent_at']}
        """.strip()

        # Build the API request
        params = {
            "from": from_email,
            "to": [to_email],
            "subject": subject,
            "html": html_body,
            "text": text_body,
            "reply_to": contact_data['email']  # This sets the "reply-to" button!
        }

        # Send the email!
        email = resend.Emails.send(params)
        
        # Check Resend's response
        if email.get("id"):
            logger.info(f"✅ Email sent successfully via Resend! ID: {email.get('id')}")
        else:
            # Log the error response *from Resend*
            logger.error(f"❌ Resend API error: {email}")

    except Exception as e:
        # This will catch configuration errors or connection failures
        logger.error(f"❌ Email task failed (Resend API): {str(e)}")