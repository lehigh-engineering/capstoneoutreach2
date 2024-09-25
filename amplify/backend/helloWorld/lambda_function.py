import boto3
import json

def lambda_handler(event, context):
    try:
        # Initialize the DynamoDB client
        dynamodb = boto3.resource('dynamodb')
        
        # Name of your DynamoDB table
        table_name = 'modules'
        
        # Retrieve the DynamoDB table
        table = dynamodb.Table(table_name)
        
        # Get all items from the DynamoDB table
        response = table.scan()
        
        # Extract the items from the response
        items = response.get('Items', [])
        
        # Extract IDs and titles from each module
        modules_info = [{'id': item['id'], 'title': item['title'], 'level': item['level'], 'keyword': item['keyword'], 'description': item['description']} for item in items]
        
        # Return the IDs and titles
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json'
            },
            'body': json.dumps(modules_info)  # Convert to JSON string
        }
    except Exception as e:
        # Log the error for debugging purposes
        print(f"An error occurred: {e}")
        
        # Return an error response
        return {
            'statusCode': 500,
            'body': 'Internal Server Error'
        }
