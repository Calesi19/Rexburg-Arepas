from appwrite.client import Client
from appwrite.services.databases import Databases
from appwrite.id import ID
import os
import json

collection_id = os.environ["APPWRITE_COLLECTION_ID"]
database_id = os.environ["APPWRITE_DATABASE_ID"]

# This is your Appwrite function
# It's executed each time we get a request
def main(context):

    # Connect to Appwrite Database

    client = Client()

    client.set_endpoint("https://cloud.appwrite.io/v1") # Your API Endpoint
    client.set_project(os.environ["APPWRITE_FUNCTION_PROJECT_ID"]) # Your project ID
    client.set_key(os.environ["APPWRITE_API_KEY"]) # Your secret API key

    database = Databases(client)


    # Extract the path and method from the request
    path = context.req.path
    method = context.req.method

    # Handle the request

    if path == "/orders" and method == "GET":
        return context.res.json(get_orders(context, database))
    elif path == "/orders" and method == "POST":
        return context.res.json(add_order(context, database))
    else:
        return context.res.json("Not Found", 404)


def get_orders(context, database):
    # Get Orders From Database
    try:
        documents = database.list_documents(database_id, collection_id)
        return documents

    except Exception as e:
        context.log("Failed to get orders: " + str(e))
        return {"error": str(e)}

def add_order(context, database):
    # Add a new order to the database
    try:
        order_data = json.loads(context.req.body)
        document = database.create_document(
            database_id=database_id,
            collection_id=collection_id,
            document_id=ID.unique(),  # Automatically generate a unique ID
            data={
                "plain": 2,
                "chicken": 3,
                "sauce": 4,
                "chicken_and_sauce": 0,
                "comment": "test",
                "phone_number": "889382918",
                "customer_name": "John Doe"
            }
        )
        return document
    except Exception as e:
        context.log("Failed to add order: " + str(e))
        return {"error": str(e)}




