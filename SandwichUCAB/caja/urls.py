"""SandwichUCAB URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
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
from django.urls import path
from . import views

app_name = 'caja'

urlpatterns = [
    path('addSandwich', views.createSandwich, name='create'),
    path('getSandwiches/<int:factura>/', views.getSandwiches, name='get' ),
    path('getTamanos', views.getTamanos, name='get' ),
    path('getIngredientes', views.getIngredientes, name='get' ),
    path('getDescuentos/<int:factura>', views.getDescuentos, name='get' ),
    path('getDelivery/<int:factura>', views.getDelivery, name='get' ),
    path('getFactura/<int:factura>', views.getFactura, name='get' ),
    path('addDelivery', views.agregarDelivery, name='create'),
    path('addDescuento', views.agregarDescuento, name='create'),
    path('addFactura', views.createFactura, name='create'),
]
