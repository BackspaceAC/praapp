# 在web端被调用 返回web.html

from django.shortcuts import render  # 服务器端渲染html文件

def index(request):
    retunr render(request, "multiends/web.html")

