from django.contrib import admin
from .models import Delivery, Descuento, Factura, Ingrediente, Ingredientes, Tamano, Sandwich
# Register your models here.




admin.site.register([ Ingredientes, Ingrediente, Tamano, Sandwich, Descuento, Factura, Delivery ])