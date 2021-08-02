from django.http.response import Http404, HttpResponseBadRequest, JsonResponse
from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .models import Delivery, Descuento, Factura, Ingrediente, Sandwich, Ingredientes, Tamano
from json import loads

# Create your views here.
def index(request, id=0):
    template = loader.get_template('caja/index.html')
    if (id):
        try:
            sandwiches = Sandwich.objects.get(id_factura=id)
        except Sandwich.DoesNotExist:
            raise Http404("No existen Sandwiches con dicha factura")
    context = { 'Sandwiches' : sandwiches, }
    return HttpResponse(template.render(context,request))


def getSandwiches(request, factura):
    if request.method == 'GET':
        try:
            sandwich_list = []
            sandwiches = Sandwich.objects.filter(factura = factura)
            for sandwich in sandwiches:
                total = sandwich.tamano.precio
                sandwich_dict = {
                    "id" : sandwich.id,
                    "size": {
                        "price": sandwich.tamano.precio,
                        "size_name": sandwich.tamano.nombre
                    },
                    "ingredients" : []
                }
                ingredients_sandwich = sandwich.ingredientes_set.filter()
                for ingredient in ingredients_sandwich:
                    total += ingredient.quantity * ingredient.ingrediente.precio
                    ingredient_dict = {
                        "quantity" : ingredient.quantity,
                        "price" : ingredient.ingrediente.precio,
                        "name" : ingredient.ingrediente.nombre
                    }
                    sandwich_dict["ingredients"].append(ingredient_dict)

                sandwich_dict.update({
                    "total" : total
                })
                #finally add the sandwich to the list
                sandwich_list.append(sandwich_dict)

            

            return JsonResponse(sandwich_list, safe=False)
        except Sandwich.DoesNotExist:
            return HttpResponseBadRequest("no hay sandwiches guardados")

    else:
        return HttpResponseBadRequest("Ese metodo no esta permitido")

def getTamanos(request):
    if request.method == 'GET':
        try:
            tamanos_list = []
            tamanos = Tamano.objects.filter()
            for tamano in tamanos:
                tamano_dict = {
                    "id" : tamano.id,
                    "nombre": tamano.nombre,
                    "precio" : tamano.precio
                }

                #finally add the sandwich to the list
                tamanos_list.append(tamano_dict)

            

            return JsonResponse(tamanos_list, safe=False)
        except Tamano.DoesNotExist:
            return HttpResponseBadRequest("no hay tamanos guardados")

    else:
        return HttpResponseBadRequest("Ese metodo no esta permitido")

def getIngredientes(request):
    if request.method == 'GET':
        try:
            ingredientes_list = []
            ingredientes = Ingrediente.objects.filter()
            for ingrediente in ingredientes:
                ingrediente_dict = {
                    "id" : ingrediente.id,
                    "nombre": ingrediente.nombre,
                    "precio" : ingrediente.precio
                }

                #finally add the sandwich to the list
                ingredientes_list.append(ingrediente_dict)

            

            return JsonResponse(ingredientes_list, safe=False)
        except Ingrediente.DoesNotExist:
            return HttpResponseBadRequest("no hay ingredientes guardados")

    else:
        return HttpResponseBadRequest("Ese metodo no esta permitido")

def getDescuentos(request, factura):
    if request.method == 'GET':
        try:
            descuentos_list = []
            descuentos = Descuento.objects.filter(factura=factura)
            for descuento in descuentos:
                descuento_dict = {
                    "id" : descuento.id,
                    "descuento": descuento.descuento,
                    "descripcion" : descuento.descripcion
                }

                #finally add the sandwich to the list
                descuentos_list.append(descuento_dict)

            

            return JsonResponse(descuentos_list, safe=False)
        except Descuento.DoesNotExist:
            return []

    else:
        return HttpResponseBadRequest("Ese metodo no esta permitido")

def getDelivery(request, factura):
    if request.method == 'GET':
        try:
            delivery_list = []
            deliveries = Delivery.objects.filter(factura=factura)
            for delivery in deliveries:
                delivery_dict = {
                    "id" : delivery.id,
                    "precio": delivery.precio,
                    "descripcion" : delivery.descripcion
                }

                #finally add the sandwich to the list
                delivery_list.append(delivery_dict)

            

            return JsonResponse(delivery_list, safe=False)
        except Descuento.DoesNotExist:
            return []

    else:
        return HttpResponseBadRequest("Ese metodo no esta permitido")

def getFactura(request, factura):
    if request.method == 'GET':
        total=0
        try:
            factura = Factura.objects.filter(factura)
        except Factura.DoesNotExist:
            return HttpResponseBadRequest("no hay factura registrada")
        deliveries = Delivery.objects.filter(factura=factura)
        delivery_app=0
        for delivery in deliveries:
            total+=delivery.precio
            delivery_app+=delivery.precio

        sandwiches = Sandwich.objects.filter(factura = factura)
        for sandwich in sandwiches:
            total+=sandwich.tamano.precio
            ingredients_sandwich = sandwich.ingredientes_set.filter()
            for ingredient in ingredients_sandwich:
                total += ingredient.quantity * ingredient.ingrediente.precio
            
        descuentos = Descuento.objects.filter(factura=factura)
        descuento_app=0
        for descuento in descuentos:
            total-=total*descuento.descuento
            descuento_app=+descuento.descuento

        factura.update(total=total)
        factura.total= total

        response = {
            "message" : "Factura correspondiente obtenida",
            "factura_id" : factura.id,
            "nombre": factura.nombre,
            "apellido": factura.apellido,
            "precio_total": factura.total,
            "descuento_aplicado": descuento_app,
            "precio_delivery": delivery_app
        }

        return JsonResponse(response)

    else:
        return HttpResponseBadRequest("Ese metodo no esta permitido")

def createFactura(request):
    if request.method == 'POST':
        request_data = loads(request.body)
        nombre = request_data["nombre"]
        apellido = request_data["apellido"]

        factura = Factura.objects.create(total= 0, nombre= nombre, apellido= apellido )

        response = {
            "message" : "factura creada correctamente",
            "factura_id" : factura.id
        }

        return JsonResponse(response)

    else:
        return HttpResponseBadRequest("Ese metodo no esta permitido")

def agregarDescuento(request):
    if request.method == 'POST':
        request_data = loads(request.body)
        factura_id = request_data["factura"]
        descuento = request_data["descuento"]
        descripcion = request_data["descripcion"]
        try:
            Factura.objects.filter(factura_id)
        except Factura.DoesNotExist:
            return HttpResponseBadRequest("no hay factura registrada")

        descuento= Descuento.objects.create(descuento= descuento, descripcion=descripcion )

        response = {
            "message" : "factura creada correctamente",
            "descuento_id" : descuento.id
        }

        return JsonResponse(response)

    else:
        return HttpResponseBadRequest("Ese metodo no esta permitido")

def agregarDelivery(request):
    if request.method == 'POST':
        request_data = loads(request.body)
        factura_id = request_data["factura"]
        precio = request_data["precio"]
        descripcion = request_data["descripcion"]
        try:
            Factura.objects.filter(factura_id)
        except Factura.DoesNotExist:
            return HttpResponseBadRequest("no hay factura registrada")

        delivery= Delivery.objects.create(precio=precio, descripcion=descripcion)

        response = {
            "message" : "factura creada correctamente",
            "descuento_id" : delivery.id
        }

        return JsonResponse(response)

    else:
        return HttpResponseBadRequest("Ese metodo no esta permitido")


def createSandwich(request):
    if request.method == 'POST':
        request_data = loads(request.body)
        ingredient_list = request_data["ingredients"]
        size_id = request_data["size_id"]
        factura_id = request_data["factura"]
        try:
            Factura.objects.filter(factura_id)
        except Factura.DoesNotExist:
            return HttpResponseBadRequest("no hay factura registrada")

        sandwich = Sandwich.objects.create( tamano_id = size_id, id_factura = factura_id )

        for ingredient in ingredient_list:
            Ingredientes.objects.create(ingrediente_id = ingredient["ingredient_id"], sandwich_id = sandwich.id, quantity = ingredient["quantity"])

        response = {
            "message" : "sandiwch guardado correctamente",
            "sandwich_id" : sandwich.id
        }

        return JsonResponse(response)

    else:
        return HttpResponseBadRequest("Ese metodo no esta permitido")