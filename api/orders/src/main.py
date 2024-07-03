from appwrite.client import Client
from appwrite.services.databases import Databases
import os

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
        return get_orders(context, database)
    else:
        return context.res.json("Not Found", 404)


def get_orders(context, database):

    context.log("Getting Orders")
    # Get Orders From Database
    try:
        context.log(database_id)
        context.log(collection_id)
        documents = database.list_documents(database_id, collection_id)
        return documents

    except Exception as e:
        context.log("Failed to get orders")
        return {"error": str(e)}

