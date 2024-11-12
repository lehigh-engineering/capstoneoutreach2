import boto3
import os
from decimal import Decimal
import json

def decimal_default(obj):
    if isinstance(obj, Decimal):
        return float(obj)
    raise TypeError

def send_response(statusCode, body):
    return {
        'statusCode': statusCode,
        'headers': {
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        'body': json.dumps(body, default=decimal_default)
    }

# gets all modules from dynamodb to build the 
def get_modules():
    try:
        # Initialize the DynamoDB client
        dynamodb = boto3.resource('dynamodb')
        # Name of your DynamoDB table
        table_name = 'capstonemodules-'+os.environ['ENV']
        # Retrieve the DynamoDB table
        table = dynamodb.Table(table_name)
        # Get all items from the DynamoDB table
        response = table.scan()
        # Extract the items from the response
        items = response.get('Items', [])
        # Return the IDs and titles
        return send_response(200, items)
    except Exception as e:
        # Log the error for debugging purposes
        print(f"An error occurred: {e}")
        # Return an error response
        return send_response(500, f"An error occurred: {e}")

def handler(event, context):
    action = event.get("action", "getModules")

    if action == "getModules":
        return get_modules()