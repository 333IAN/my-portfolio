"""
URL configuration for portcontact project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse


def check_env_vars(request):
    """Check if environment variables are loaded correctly"""
    import os
    return JsonResponse({
        "EMAIL_HOST": os.getenv('EMAIL_HOST', 'NOT SET'),
        "EMAIL_HOST_USER": os.getenv('EMAIL_HOST_USER', 'NOT SET'),
        "EMAIL_HOST_PASSWORD": "SET" if os.getenv('EMAIL_HOST_PASSWORD') else "NOT SET",
        "DEFAULT_FROM_EMAIL": os.getenv('DEFAULT_FROM_EMAIL', 'NOT SET'),
        "RAILWAY_ENVIRONMENT": os.getenv('RAILWAY_ENVIRONMENT', 'NOT SET'),
    })

urlpatterns = [
    path("admin/", admin.site.urls),
    path("check-env/", check_env_vars),  # Endpoint to check env vars
    path("api/", include("contactapp.urls")),
]
