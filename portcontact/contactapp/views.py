from rest_framework import status
from .serializers import ContactSerializer
from django.core.mail import send_mail
from rest_framework.views import APIView
from rest_framework.response import Response

class ContactCreateView(APIView):
    serializer_class=ContactSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            send_mail(
                subject=f"New contact from {serializer.validated_data['name']}",
                message=serializer.validated_data['message'],
                from_email=serializer.validated_data['email'],
                recipient_list=['amuguneisavwa@gmail.com'],
            )
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

# Create your views here.
