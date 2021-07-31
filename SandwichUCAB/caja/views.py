from django.http.response import Http404, HttpResponseBadRequest, JsonResponse
from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .models import Sandwich, Ingredientes
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


def getSandwiches(request):
    if request.method == 'GET':
        try:
            sandwich_list = []
            sandwiches = Sandwich.objects.filter()
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




def createSandwich(request):
    if request.method == 'POST':
        request_data = loads(request.body)
        ingredient_list = request_data["ingredients"]
        size_id = request_data["size_id"]

        sandwich = Sandwich.objects.create( tamano_id = size_id, id_factura = 0 )

        for ingredient in ingredient_list:
            Ingredientes.objects.create(ingrediente_id = ingredient["ingredient_id"], sandwich_id = sandwich.id, quantity = ingredient["quantity"])

        response = {
            "message" : "sandiwch guardado correctamente",
            "sandwich_id" : sandwich.id
        }

        return JsonResponse(response)

    else:
        return HttpResponseBadRequest("Ese metodo no esta permitido")