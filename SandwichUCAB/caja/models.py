from django.db import models

# Create your models here.
class Ingrediente(models.Model):
    nombre = models.CharField(max_length=200)
    precio = models.DecimalField(decimal_places=2,max_digits=100)

    def __str__(self) -> str:
        return self.nombre

class Tamano(models.Model):
    nombre = models.CharField(max_length=200)
    precio = models.DecimalField(decimal_places=2,max_digits=100)

    def __str__(self) -> str:
        return self.nombre

class Sandwich(models.Model):
    
    id_factura = models.IntegerField()
    tamano = models.ForeignKey(Tamano, on_delete=models.CASCADE)


    def individual(self):
        foo
    
    def doble(self):
        foo

    def triple(self):
        foo

    def tipoSandwich(self, tipo):
        foo

    def agregarIngrediente(self, ingrediente_adicional):
        foo

    def agregarIngredientes(self, ingredientes):
        foo


    def getIngredientesAdicionales(self):
        foo

    def getTipoSandwich(self):
        foo

    def __searchIngredient(self, ingredientName):
        foo


    def getPrice(self):
        foo

class Ingredientes(models.Model):
    ingrediente = models.ForeignKey(Ingrediente, on_delete= models.CASCADE)
    sandwich = models.ForeignKey(Sandwich, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)