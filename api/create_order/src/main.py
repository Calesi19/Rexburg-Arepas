from appwrite.client import Client
import os

def main(context):


    # Connect to Appwrite Database

    client = Client()

    client.set_endpoint(os.getenv("https://cloud.appwrite.io/v1")) # Your API Endpoint
    client.set_project(os.getenv("APPWRITE_PROJECT_ID")) # Your project ID
    client.set_key(os.getenv("APPWRITE_API_KEY")) # Your secret API key

    database = Database(client)
    
    # Get Orders From Database
    try:
        collection_id = os.getenv("APPWRITE_COLLECTION_ID")
        database_id = os.getenv("APPWRITE_DATABASE_ID")

        documents = database.list_documents(collection_id, database_id)

        return context.res.json(documents)


    except Exception as e:
        return context.res.json({"error": str(e)})


    return context.res.json(
        {
            "motto": "Build like a team of hundreds_",
            "learn": "https://appwrite.io/docs",
            "connect": "https://appwrite.io/discord",
            "getInspired": "https://builtwith.appwrite.io",
        }
    )
