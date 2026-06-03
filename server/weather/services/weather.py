from django.conf import settings
import requests
from requests.exceptions import (Timeout, ConnectionError, HTTPError)

API_KEY = settings.API_KEY

def get_current(city: str) -> dict:
    try:
        
        res = requests.get(f"https://api.openweathermap.org/data/2.5/weather?q={city}&units=imperial&appid={API_KEY}")
        res.raise_for_status()

        return res.json()

    except Timeout:
        return {"err": "Request timed out"}
    except HTTPError as e:
        return {"err": "HTTP error", "status": e.response.status_code}
    except ConnectionError:
        return {"err": "Weather service cannot be reached"}