import json
import base64

with open("./service-account.json", "rt") as f:
    data = json.load(f)

encoded = base64.b64encode(json.dumps(data).encode("utf-8"))
print(encoded)
