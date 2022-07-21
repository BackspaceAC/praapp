# 在服务器接数据 然后处理数据

from django.http import JsonResponse


def getinfo_web(request): # 以字典的形式返回结果
    return JsonResponse({
        'result': "success",
        'path': "Image_path",
        'size': "Image_size",
        })

def getinfo_noweb(request):
     return JsonResponse({
            'result': "false",
            'path': "OHNO!",
            })


def getinfo(request):
    # 寻找名为image_base64的GET参数，而且如果参数没有提交，返回一个NONO字符串
    image_base64 = request.GET.get('image_base64', "POI")
    if image_base64 == "YU":
        return getinfo_web(request)
    elif image_base64 == "POI":
        return getinfo_web(request)






    
    # return JsonResponse({
    #    'result': "success",
    #   'image': image_base64,
    #   })
    
