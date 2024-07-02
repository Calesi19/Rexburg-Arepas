from appwrite.client import Client
from appwrite.services.databases import Databases
import os

def main(context):

    # Connect to Appwrite Database

    client = Client()

    client.set_endpoint("https://cloud.appwrite.io/v1") # Your API Endpoint
    client.set_project(os.environ["APPWRITE_FUNCTION_PROJECT_ID"]) # Your project ID
    client.set_key(os.environ["APPWRITE_API_KEY"]) # Your secret API key

    database = Databases(client)

    context.log("Project Id: " + os.environ["APPWRITE_PROJECT_ID"])
    context.log("Project Id: " + os.environ["APPWRITE_FUNCTION_PROJECT_ID"])
    context.log("API KEY: " + os.environ["APPWRITE_API_KEY"])
    context.log("Collection Id: " + os.environ["APPWRITE_COLLECTION_ID"])
    context.log("Database Id: " + os.environ["APPWRITE_DATABASE_ID"])
    context.log("Connected to Appwrite Database")
    
    # Get Orders From Database
    try:
        colle_id = os.environ["APPWRITE_COLLECTION_ID"]
        db_id = os.environ["APPWRITE_DATABASE_ID"]

        documents = database.list_documents(db_id, colle_id)

        context.log("Fetched Orders from Database")
        context.log(documents)

        return context.res.json(documents)


    except Exception as e:
        return context.res.json({"error": str(e)})

