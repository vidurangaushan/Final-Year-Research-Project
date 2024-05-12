from application import app
from flask import Flask, jsonify, request
from pymongo import MongoClient
import random

#mongodb connection
client = MongoClient("mongodb+srv://superushan17521:Hj8k9zVx5PBUEWai@cluster0.l09ymk4.mongodb.net/")
db = client["Eduflex"]
#collection = db["english_quizzes"]  # Assuming this is defined elsewhere

collection_map = {
    "maths": db["maths_quizzes"],
    "science": db["science_quizzes"],
    "english": db["english_quizzes"],
}

def get_quizzes(collection):
    """Fetches and converts quizzes from the provided collection."""
    try:
        all_quizzes = list(collection.find())
        quizzes = random.sample(all_quizzes, min(10, len(all_quizzes)))

        return jsonify([
            {key: value for key, value in quiz.items() if key != "_id"}
            for quiz in quizzes
        ]),200
        return jsonify(quizzes), 200  # OK status code
    except Exception as e:
        print(f"Error fetching quizzes: {e}")
        return jsonify({"message": "Error fetching quizzes"}), 500  # Internal Server Error


@app.route("/quizzes", methods=["GET"])
def handle_quiz_requests():
    """Handles requests for quizzes based on the subject parameter."""
    try:
        subject = request.args.get("subject").lower()
        collection = collection_map.get(subject)
        if not collection:
            return jsonify({"error": "Invalid subject"}), 400

        # Call the appropriate function with the chosen collection
        if subject == "maths":
            return get_maths_quizzes(collection)
        elif subject == "science":
            return get_science_quizzes(collection)
        elif subject == "english":
            return get_english_quizzes(collection)
        else:
            return jsonify({"error": "Invalid subject"}), 400
       
        return get_quizzes(collection)

    except Exception as e:
        print(f"Error fetching quizzes: {e}")
        return jsonify({"message": "Error fetching quizzes"}), 500  # Internal Server Error


# Maths
@app.route("/maths", methods=["GET"])
def get_maths_quizzes():
    try:
        # Find 10 math quizzes
        # maths_quizzes = list(collection.find())
        collection = collection_map["maths"]
        return get_quizzes(collection)
    except Exception as e:
        print(f"Error fetching math quizzes: {e}")
        return jsonify({"message": "Error fetching Maths quizzes"}), 500  # Internal Server Error

# Science
@app.route("/science", methods=["GET"])
def get_science_quizzes():
    try:
        collection = collection_map["science"]
        return get_quizzes(collection) 
    except Exception as e:
        print(f"Error fetching science quizzes: {e}")
        return jsonify({"message": "Error fetching science quizzes"}), 500  # Internal Server Error

# English
@app.route("/english", methods=["GET"])
def get_english_quizzes():
    try:
        collection = collection_map["english"]
        return get_quizzes(collection)
    except Exception as e:
        print(f"Error fetching english quizzes: {e}")
        return jsonify({"message": "Error fetching english quizzes"}), 500  # Internal Server Error


