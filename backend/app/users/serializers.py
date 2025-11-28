from rest_framework import serializers
from .models import UserProfile

class postSerializer(serializers.ModelSerializer):
  class Meta:
    model = UserProfile
    fields = ('id', 'name', 'email', 'total_earnings', 'total_distance','hourly_wage')
    read_only_fields = ('id',)
