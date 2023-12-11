from django.urls import path, include
from . import views
from rest_framework import routers
from .views import TodoList, TodoDetail


# router = routers.DefaultRouter()
# router.register('todo', viewset=views.ToDoViewSet, basename='todo')

urlpatterns = [
    path('todo/', TodoList.as_view(), name='todo-list'),
    path('todo/<int:pk>/', TodoDetail.as_view(), name='todo-detail'),
]

# urlpatterns += router.urls