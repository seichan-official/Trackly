from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate, login
import json

@csrf_exempt
def login_api(request):
    # ✅ preflight を最優先で通す
    if request.method == "OPTIONS":
        return JsonResponse({}, status=200)

    if request.method != "POST":
        return JsonResponse({"error": "POST only"}, status=405)

    try:
        body = json.loads(request.body)
        username = body.get("username")
        password = body.get("password")

        user = authenticate(username=username, password=password)
        if user is None:
            return JsonResponse({"error": "認証失敗"}, status=401)

        login(request, user)

        return JsonResponse({
            "message": "ログイン成功",
            "user": user.username,
        })

    except Exception as e:
        return JsonResponse({"error": str(e)}, status=400)