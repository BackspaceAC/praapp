# 在web端被调用 返回web.html
# 被urls文件里的index.py调用

from django.shortcuts import render  # 服务器端渲染html文件


# render函数返回一个字符串到用户前端 也即html页面
def index(request):
    return render(request, "multiends/web.html")
