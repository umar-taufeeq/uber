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
## Captain Logout Endpoint
GET /captains/logout
This endpoint is used to log out the authenticated captain.

# Request
URL: /captains/logout
Method: GET
Headers: Authorization: Bearer <token>
Response
Success Response:

Code: 200 OK
Content:{
  "message": "Captain logged out successfully"
}



##  Get Fare Endpoint

### GET /rides/get-fare

This endpoint calculates the fare for a ride based on the pickup and destination locations.

#### Request

- **URL**: `/rides/get-fare`
- **Method**: `GET`
- **Headers**: 
  - `Authorization: Bearer <token>`
- **Query Parameters**:
  - `pickup` (string, required): The pickup location.
  - `destination` (string, required): The destination location.

#### Response

- **Success Response**:
  - **Code**: `200 OK`
  - **Content**:
    ```json
    {
      "auto": 50,
      "car": 100,
      "moto": 30
    }
    ```

- **Error Response**:
  - **Code**: `400 Bad Request`
  - **Content**:
    ```json
    {
      "errors": [
        {
          "msg": "Invalid pickup address",
          "param": "pickup",
          "location": "query"
        }
      ]
    }
    ```

---

##  Get Suggestions Endpoint

### GET /maps/get-suggestions

This endpoint provides autocomplete suggestions for a location input.

#### Request

- **URL**: `/maps/get-suggestions`
- **Method**: `GET`
- **Headers**: 
  - `Authorization: Bearer <token>`
- **Query Parameters**:
  - `input` (string, required): The partial input for the location.

#### Response

- **Success Response**:
  - **Code**: `200 OK`
  - **Content**:
    ```json
    [
      {
        "placeId": "ChIJd8BlQ2BZwokRAFUEcm_qrcA",
        "mainText": "New York",
        "secondaryText": "NY, USA"
      },
      {
        "placeId": "ChIJN1t_tDeuEmsRUsoyG83frY4",
        "mainText": "Sydney",
        "secondaryText": "NSW, Australia"
      }
    ]
    ```

- **Error Response**:
  - **Code**: `400 Bad Request`
  - **Content**:
    ```json
    {
      "errors": [
        {
          "msg": "Input must be at least 3 characters long",
          "param": "input",
          "location": "query"
        }
      ]
    }
    ```

---

##  Get Coordinates Endpoint

### GET /maps/get-coordinates

This endpoint retrieves the latitude and longitude of a given address.

#### Request

- **URL**: `/maps/get-coordinates`
- **Method**: `GET`
- **Headers**: 
  - `Authorization: Bearer <token>`
- **Query Parameters**:
  - `address` (string, required): The address to get coordinates for.

#### Response

- **Success Response**:
  - **Code**: `200 OK`
  - **Content**:
    ```json
    {
      "ltd": 40.712776,
      "lng": -74.005974
    }
    ```

- **Error Response**:
  - **Code**: `404 Not Found`
  - **Content**:
    ```json
    {
      "message": "Coordinates not found"
    }
    ```

---

##  Get Distance and Time Endpoint

### GET /maps/get-distance-time

This endpoint calculates the distance and estimated travel time between two locations.

#### Request

- **URL**: `/maps/get-distance-time`
- **Method**: `GET`
- **Headers**: 
  - `Authorization: Bearer <token>`
- **Query Parameters**:
  - `origin` (string, required): The starting location.
  - `destination` (string, required): The destination location.

#### Response

- **Success Response**:
  - **Code**: `200 OK`
  - **Content**:
    ```json
    {
      "distance": {
        "text": "5.3 km",
        "value": 5300
      },
      "duration": {
        "text": "15 mins",
        "value": 900
      }
    }
    ```

- **Error Response**:
  - **Code**: `400 Bad Request`
  - **Content**:
    ```json
    {
      "errors": [
        {
          "msg": "Invalid origin address",
          "param": "origin",
          "location": "query"
        }
      ]
    }
    ```

---

### Notes:
- All endpoints require a valid JWT token in the `Authorization` header.
- Ensure that the query parameters are properly encoded when making requests.