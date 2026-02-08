from rest_framework import status
from .serializers import ContactSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
import logging
from .tasks import send_contact_email_async

logger = logging.getLogger(__name__)

class ContactCreateView(APIView):
    serializer_class = ContactSerializer
    
    def post(self, request):
        serializer=self.serializer_class(data=request.data)
        if serializer.is_valid():
            contact=serializer.save()

            try:
                email_data={
                    'name': contact.name,
                    'email': contact.email,
                    'message': contact.message,
                    'sent_at': contact.sent_at
                }
                send_contact_email_async(email_data)

            except Exception as e:
                logger.error(f"Failed to send email: {str(e)}")

            return Response(
                {"message": "Message sent!"},
                status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
