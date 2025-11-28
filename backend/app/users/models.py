from django.db import models

class UserProfile(models.Model):
  # 配達ドライバーのユーザー情報
  name = models.CharField(max_length=255) #ユーザー名
  email = models.EmailField(unique=True) #メールアドレス
  phone = models.CharField(max_length=20,blank=True,null=True) #電話番号
  total_distance = models.FloatField(default=0.0) #累計距離
  total_earnings = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)  # 累計報酬
  hourly_wage = models.DecimalField(max_digits=10, decimal_places=2, default=0.00) #時給
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)
  
  def __str__(self):
    return self.name