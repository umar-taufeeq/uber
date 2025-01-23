# User Registration Endpoint

## POST /users/register

This endpoint is used to register a new user.

### Request

- **URL**: `/users/register`
- **Method**: `POST`
- **Headers**: `Content-Type: application/json`
- **Body**:
  ```json
  {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "password123"
  }

#  User Login Endpoint
## POST /users/login
This endpoint is used to log in an existing user.

# Request
# URL: /users/login
# Method: POST
# Headers: Content-Type: application/json
# Body:
{
  "email": "john.doe@example.com",
  "password": "password123"
}

# Response
Success Response:

## Code: 200 OK
## Content:
{
  "token": "jwt_token_here",
  "user": {
    "_id": "user_id_here",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "hashed_password_here",
    "socketId": null
  }
}
## Error Response:
## Code: 400 Bad Request

## content:                         
{
  "errors": [
    {
      "msg": "Please enter a valid email address",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}

## Code: 401 Unauthorized

## Content:

{
  "message": "Invalid email or password"
}
## Validation
email: Must be a valid email address.
user.controller.js : Must be at least 6 characters long.
Example
Requestcurl -X POST http://localhost:4000/users/login \
-H "Content-Type: application/json" \
-d '{
  "email": "john.doe@example.com",
  "password": "password123"
}'
# User Profile Endpoint
## GET /users/profile
This endpoint is used to get the profile of the authenticated user.

# Request
URL: /users/profile
Method: GET
## Headers: Authorization: Bearer <token>
Response
## Success Response:

Code: 200 OK
Content:
{
  "_id": "user_id_here",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "socketId": null
}
## Error Response:

# Code: 401 Unauthorized
Content:
{
  "message": "Unauthorized"
}

## user Logout Endpoint
# GET /users/logout
This endpoint is used to log out the authenticated user.
blacklist the token provided in cookie or header

# Request
URL: /users/logout
Method: GET
Headers: Authorization: Bearer <token>
Response
# Success Response:

# Code: 200 OK
Content:
{
  "message": "User logged out successfully"
}
## Error Response:

Code: 401 Unauthorized
# Content:
{
  "message": "Unauthorized"
}

example
## Request
url -X GET http://localhost:4000/users/logout \
-H "Authorization: Bearer <token>"
## Response:
{
  "message": "User logged out successfully"
}
## Authentication
Require a valid jwt token i the authiorization header or cookies