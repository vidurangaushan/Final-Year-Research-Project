from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_pymongo import PyMongo


app = Flask(__name__)
CORS(app, origins=['http://localhost:5173'])
app.config["MONGO_URI"] = "mongodb+srv://superushan17521:Hj8k9zVx5PBUEWai@cluster0.l09ymk4.mongodb.net/Eduflex"

# mongodb database
mongodb_client = PyMongo(app)
db = mongodb_client.db

from application import routes