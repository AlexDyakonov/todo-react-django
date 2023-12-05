from django.shortcuts import render
from rest_framework import viewsets
from django.http import Http404
from . import serializers
from . import models

# Create your views here.
class ToDoViewSet(viewsets.ModelViewSet):
    queryset = models.Todo.objects.all()
    serializer_class = serializers.TodoSerializer