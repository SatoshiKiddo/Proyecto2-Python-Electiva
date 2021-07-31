from django.http.response import Http404
from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .models import Sandwich

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