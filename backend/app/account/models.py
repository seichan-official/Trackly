from django.db import models

class accountModels(models.Model):
  username = models.CharField(max_length=255)
  