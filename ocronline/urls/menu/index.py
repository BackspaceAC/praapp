from django.urls import path
from ocronline.views.menu.getinfo import getinfo

urlpatterns = [
    path("getinfo/", getinfo, name="menus_getinfo"),
]
