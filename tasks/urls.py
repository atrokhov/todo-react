from django.conf.urls import include, url
from rest_framework import routers

from .api import TodoViewSet, UpdateTodo

router = routers.DefaultRouter()
router.register('tasks', TodoViewSet)

urlpatterns = [
    url(r'^', include(router.urls), name='tasks'),
    url(r'^done/(?P<pk>[0-9]+)/$', UpdateTodo.as_view(), name='done')
]