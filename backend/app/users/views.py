from rest_framework import viewsets
from .models import UserProfile
from .serializers import postSerializer

class UserProfileViewSet(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = postSerializer

