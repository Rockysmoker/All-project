# import requests
# import json

# headers = {
#     'Content-Type': 'application/json',
#     'Authorization': 'Bearer <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>',
# }

# data = {
#   "model": "gpt-3.5-turbo",
#   "messages": [{"role": "user", "content": "Say this is a test!"}],
#   "temperature": 0.7
# }

# response = requests.post('https://api.openai.com/v1/chat/completions', headers=headers, data=json.dumps(data))

# print(response.json())

import openai

openai.api_key = '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'

response = openai.ChatCompletion.create(
  model="gpt-3.5-turbo",
  messages=[
        {"role": "user", "content": "Say this is a test!"},
    ]
)

print(response.choices[0].message['content'])
