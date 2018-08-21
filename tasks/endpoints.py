from django.conf.urls import include, url
from rest_framework import routers

from .api import TodoViewSet

router = routers.DefaultRouter()
router.register('tasks', TodoViewSet)

urlpatterns = [
    url("^", include(router.urls)),
]