from django.urls import path
from . import signup,login

urlpatterns = [
    path("signup/", signup.signup_api),
    path("login/", login.login_api),
]
