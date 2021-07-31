from django.contrib import admin
from .models import Ingrediente, Ingredientes, Tamano, Sandwich
# Register your models here.




admin.site.register([ Ingredientes, Ingrediente, Tamano, Sandwich ])