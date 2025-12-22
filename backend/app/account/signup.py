import json
from django.http import JsonResponse
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def signup_api(request):
    print("=== signup_api CALLED ===")
    print("method:", request.method)
    print("raw body:", request.body)
    if request.method != "POST":
        return JsonResponse(
            {"error": "POST only"},
            status=405
        )

    try:
        data = json.loads(request.body)
        print("parsed data:", data)

    except json.JSONDecodeError as e:
        print("JSON ERROR:", e)
        return JsonResponse(
            {"error": "Invalid JSON"},
            status=400
        )

    username = data.get("username")
    password = data.get("password")

    if not username or not password:
        return JsonResponse(
            {"error": "username and password are required"},
            status=400
        )

    if User.objects.filter(username=username).exists():
        return JsonResponse(
            {"error": "User already exists"},
            status=400
        )

    user = User.objects.create_user(
        username=username,
        password=password
    )

    return JsonResponse(
        {
            "message": "User created successfully",
            "user_id": user.id
        },
        status=201
    )