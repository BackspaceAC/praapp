# 将该路径下所有文件夹里的python文件include进来

from django.urls import path, include
from ocronline.views.index import index


urlpatterns = [
    path("", index, name="index"), # 总函数不需要加路径 直接可以访问
    path("menu/", include("ocronline.urls.menu.index")),
    path("playground/", include("ocronline.urls.playground.index")),
    path("settings", include("ocronline.urls.settings.index")),
]
