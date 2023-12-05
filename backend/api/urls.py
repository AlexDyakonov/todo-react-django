from django.urls import path, include
from . import views
from rest_framework import routers


router = routers.DefaultRouter()
router.register('todo', viewset=views.ToDoViewSet, basename='todo')

urlpatterns = [
]

urlpatterns += router.urls