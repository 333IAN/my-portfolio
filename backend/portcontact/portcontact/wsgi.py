import os
import sys
from django.core.wsgi import get_wsgi_application

current_path = os.path.dirname(os.path.abspath(__file__))
project_root = os.path.dirname(current_path)
sys.path.append(project_root)


os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'portcontact.settings')

application = get_wsgi_application()


app = application