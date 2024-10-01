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
def handler(event, context):
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
        # Extract IDs and titles from each module
        modules_info = [{'id': item['id'], 'title': item['title'], 'level': item['level'], 'keyword': item['keyword'], 'description': item['description'], 'url': item['url']} for item in items]
        # Return the IDs and titles
        return send_response(200, modules_info)
    except Exception as e:
        # Log the error for debugging purposes
        print(f"An error occurred: {e}")
        # Return an error response
        return send_response(500, f"An error occurred: {e}")
