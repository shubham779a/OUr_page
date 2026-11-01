import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import openai

load_dotenv()  # loads .env file variables

app = Flask(__name__)
CORS(app)  # allow all origins for development

# Ensure the API key is set
def get_api_key():
    key = os.getenv("OPENAI_API_KEY")
    if not key:
        raise RuntimeError("OPENAI_API_KEY not set in .env")
    return key

@app.route("/api/chat", methods=["POST"])
def chat():
    data = request.get_json()
    messages = data.get("messages", [])
    # Forward to OpenAI ChatCompletion API (gpt-3.5-turbo as example)
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=messages,
        api_key=get_api_key()
    )
    reply = response.choices[0].message.content
    return jsonify({"reply": reply})

if __name__ == "__main__":
    # default to port 5000
    port = int(os.getenv("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
