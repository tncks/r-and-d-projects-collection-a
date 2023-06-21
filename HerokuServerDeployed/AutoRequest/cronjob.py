import time
import json
import requests

from timeloop import Timeloop

from main import cronjob

with open("./hasung.json", "w") as f:
    json.dump([], f)

cronjob()