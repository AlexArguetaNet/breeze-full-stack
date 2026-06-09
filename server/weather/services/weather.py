from django.conf import settings
import requests
from requests.exceptions import (Timeout, ConnectionError, HTTPError)

API_KEY = settings.API_KEY

def get_current(city: str) -> dict:
    try:
        
        res = requests.get(f"https://api.openweathermap.org/data/2.5/weather?q={city}&units=imperial&appid={API_KEY}")
        res.raise_for_status()

        data = res.json()

        # Extract necessary data
        icon = data["weather"][0]["icon"]
        main = data["weather"][0]["main"]
        temp = data["main"]["temp"]
        wind = data["wind"]
        sunrise = data["sys"]["sunrise"]
        sunset = data["sys"]["sunset"]
        dt = data["dt"]
        tz_offset = data["timezone"]
        name = data["name"]

        return {
            "icon": icon,
            "main": main,
            "temp": temp,
            "wind": wind,
            "sunrise": sunrise,
            "sunset": sunset,
            "dt": dt,
            "name": name
        }

    except Timeout:
        return {"err": "Request timed out"}
    except HTTPError as e:
        return {"err": "HTTP error", "status": e.response.status_code}
    except ConnectionError:
        return {"err": "Weather service cannot be reached"}