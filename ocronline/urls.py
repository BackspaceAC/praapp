from django.urls import path
from ocronline.views import home, play
# 引入要使用views里的哪些函数

urlpatterns = [
    path("", home, name="indextest"),
    path('play/', play, name="play")
]
