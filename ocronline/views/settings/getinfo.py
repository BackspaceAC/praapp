from django.http import JsonResponse


def getinfo_web(request):
    return JsonResponse({
        'result': "success",
        'path': "Image_path",
        'size': "Image_size",
    })

def getinfo(request):
    return getinfo_web(request)
