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

# Captain Registration Endpoint

## POST /captains/register

This endpoint is used to register a new captain.

### Request

- **URL**: `/captains/register`
- **Method**: `POST`
- **Headers**: `Content-Type: application/json`
 ## Validation
email: Must be a valid email address.
fullname.firstname: Must be at least 3 characters long.
password: Must be at least 6 characters long.
vechile.color: Must be at least 3 characters long.
vechile.plate: Must be at least 3 characters long.
vechile.capacity: Must be at least 1.
vechile.vechileType: Must be one of car, motorcycle, auto.
# Example
  ## Request
curl -X POST http://localhost:4000/captains/register \
-H "Content-Type: application/json" \
-d '{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123",
  "vechile": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vechileType": "car"
  }
}'
 ## Response
{
  "token": "jwt_token_here",
  "captain": {
    "_id": "captain_id_here",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "hashed_password_here",
    "socketId": null,
    "status": "inactive",
    "vechile": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vechileType": "car"
    },
    "location": {
      "lat": null,
      "lng": null
    }
  }
}
# Captain Login Endpoint
POST /captains/login
This endpoint is used to log in an existing captain.

## Request
URL: /captains/login
Method: POST
Headers: Content-Type: application/json
Body:
{
  "email": "john.doe@example.com",
  "password": "password123"
}
## response
Success Response:

Code: 200 OK
Content:
{
  "token": "jwt_token_here",
  "captain": {
    "_id": "captain_id_here",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "hashed_password_here",
    "socketId": null,
    "status": "inactive",
    "vechile": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vechileType": "car"
    },
    "location": {
      "lat": null,
      "lng": null
    }
  }
}
## validation
email: Must be a valid email address.
password: Must be at least 6 characters long.

# Captain Profile Endpoint
GET /captains/profile
This endpoint is used to get the profile of the authenticated captain.

Request
URL: /captains/profile
Method: GET
Headers: Authorization: Bearer <token>
Response
Success Response:

Code: 200 OK
## Content
{
  "_id": "captain_id_here",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "socketId": null,
  "status": "inactive",
  "vechile": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vechileType": "car"
  },
  "location": {
    "lat": null,
    "lng": null
  }
}
# Captain Logout Endpoint
GET /captains/logout
This endpoint is used to log out the authenticated captain.

## Request
URL: /captains/logout
Method: GET
Headers: Authorization: Bearer <token>
Response
Success Response:

Code: 200 OK
Content:{
  "message": "Captain logged out successfully"
}
