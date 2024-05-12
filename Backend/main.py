from flask import Flask
from application.routes import app

app = Flask(__name__)

if __name__ == "__main__":
    app.run(debug=True)