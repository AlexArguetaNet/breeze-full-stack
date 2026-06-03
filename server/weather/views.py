from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status
from .services.weather import get_current

class CurrForecastView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):

        city = request.query_params.get("q")

        currForecast = get_current(city)
        return Response(currForecast)