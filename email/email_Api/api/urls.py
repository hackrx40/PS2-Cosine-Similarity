from . import views
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('email/', views.email, name='email'),
    path('diet', views.diet, name="diet"),
]