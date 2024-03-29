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
from django.urls.conf import re_path
from . import views
from django.conf.urls import url

# drf_yasg code starts here
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
schema_view = get_schema_view(
    openapi.Info(
        title="Jaseci API",
        default_version='v1',
        description="Welcome to the world of Jaseci",
        terms_of_service="https://www.jaseci.org",
        contact=openapi.Contact(email="jason@jaseci.org"),
        license=openapi.License(name="Awesome IP"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)
# ends here

app_name = 'caja'

urlpatterns = [
    re_path(r'^doc(?P<format>\.json|\.yaml)$',
            schema_view.without_ui(cache_timeout=0), name='schema-json'),
    path('doc/', schema_view.with_ui('swagger', cache_timeout=0),
         name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0),
         name='schema-redoc'),
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
