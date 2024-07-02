from appwrite.client import Client
from appwrite.services.databases import Databases
import os

def main(context):

    # Connect to Appwrite Database

    client = Client()

    client.set_endpoint("https://cloud.appwrite.io/v1") # Your API Endpoint
    client.set_project(os.environ["APPWRITE_PROJECT_ID"]) # Your project ID
    client.set_key(os.environ["APPWRITE_API_KEY"]) # Your secret API key

    database = Databases(client)

    context.log("Connected to Appwrite Database")
    
    # Get Orders From Database
    try:
        collection_id = os.environ["APPWRITE_COLLECTION_ID"]
        database_id = os.environ["APPWRITE_DATABASE_ID"]

        documents = database.list_documents(collection_id, database_id)

        context.log("Fetched Orders from Database")
        context.log(documents)

        return context.res.json(documents)


    except Exception as e:
        return context.res.json({"error": str(e)})
