import json
import boto3

def handler(event, context):
  print('received event:')
  print(event)

  dynamodb = boto3.resource('dynamodb')
  table = dynamodb.Table('firsttable')
  response = table.scan()
  
  return {
      'statusCode': 200,
      'headers': {
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
      },
      'body': json.dumps('Hello from your new Amplify Python lambda! DynamoDB says:', response)
  }