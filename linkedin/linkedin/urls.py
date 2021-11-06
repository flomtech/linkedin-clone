from django.conf import settings
from django.conf.urls.static import static

from django.contrib import admin
from django.urls import path
from api.views import index

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index),
    path('login', index),
    path('feed', index),
]


urlpatterns = urlpatterns + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)