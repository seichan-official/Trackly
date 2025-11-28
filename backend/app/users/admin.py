from django.contrib import admin
from .models import UserProfile

@admin.register(UserProfile)
class userProfileAdmin(admin.ModelAdmin):
  list_display = ('id', 'name', 'email', 'total_earnings', 'total_distance','hourly_wage')