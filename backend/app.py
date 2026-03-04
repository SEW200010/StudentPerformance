from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
CORS(app)

# 🔗 Replace with your connection string (from MongoDB Compass)
try:
    client = MongoClient("mongodb://localhost:27017/")
    # Test the connection
    client.admin.command('ping')
    print("Connected to MongoDB successfully!")
except Exception as e:
    print(f"Failed to connect to MongoDB: {e}")
    exit(1)

db = client["auth_system"]            # database name
users = db["users"]              # collection name

@app.route("/register", methods=["POST"])
def register():
    data = request.json
    if not data:
        return jsonify({"message": "No data received"}), 400

    email = data.get("email", "").strip().lower()
    if users.find_one({"email": email}):
        return jsonify({"message": "User already exists"}), 409

    users.insert_one({
        "name": data.get("name"),
        "email": email,
        "password": generate_password_hash(data.get("password")),
        "role": data.get("role", "user")
    })

    # Debug
    print("Registered user:", users.find_one({"email": email}))

    return jsonify({"message": "Registration successful!"}), 201


@app.route('/login', methods=['POST'])
def login():
    data = request.json
    if not data:
        return jsonify({"message": "No data received"}), 400

    email = data.get("email", "").strip().lower()
    password = data.get("password")

    print(f"Login attempt for email: {email}")
    user = users.find_one({"email": email})
    print(f"User found: {user}")

    if not user:
        return jsonify({"message": "User not found"}), 404

    if not check_password_hash(user["password"], password):
        return jsonify({"message": "Incorrect password"}), 401

    return jsonify({
        "message": "Login successful",
        "user": {
            "name": user["name"],
            "email": user["email"],
            "role": user["role"]
        }
    }), 200

if __name__ == "__main__":
    app.run(host='127.0.0.1', debug=True)
