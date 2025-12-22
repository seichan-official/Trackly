from django.contrib import admin
from .models import UserProfile

@admin.register(UserProfile)
class userProfileAdmin(admin.ModelAdmin):
  list_display = (
        "id",
        "user",
        "phone",
        "created_at",
        "updated_at",
    )