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


def createSandwich(request):
    if request.method == 'POST':
        request_data = loads(request.body)
        ingredient_list = request_data["ingredients"]
        size_id = request_data["size_id"]

        sandwich = Sandwich.objects.create( tamano_id = size_id, id_factura = 0 )
        print(sandwich.id)

        for ingredient in ingredient_list:
            print(ingredient)
            Ingredientes.objects.create(ingrediente_id = ingredient["ingredient_id"], sandwich_id = sandwich.id, quantity = ingredient["quantity"])

        response = {
            "message" : "sandiwch guardado correctamente",
            "sandwich_id" : sandwich.id
        }

        return JsonResponse(response)

    else:
        return HttpResponseBadRequest("Ese metodo no esta permitido")