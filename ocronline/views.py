from django.http import HttpResponse
from django.shortcuts import render


# return HttpResponse('Hello LZQ!')
def home(request):
    return render(request, 'one.html', {})

def play(request):
    line1 = '<h1 style="text-align: center">测试界面<h1>'
    return HttpResponse(line1)
