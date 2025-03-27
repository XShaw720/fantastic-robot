## How to run locally
1. `Ensure MongoDb is running`
1. `npm install`
1. `npm start`

## How to run in container 
1. `Ensure MongoDB and Docker are running`
1. `npm install`
1. `docker compose up`

## How to test 
1. `npm test`

## Description
- The todo controller exposes the endpoints required by the frontend and returns responses in the format it expects
- I left the frontend project alone aside from a small bug I notice where put and post request were sending the data as plain text instead of json
- The database (MongoDB as requested) is equipped with createdAt and updatedAt metadata and soft delete has been implemented for data preservation
- A validator is used to ensure the data coming in is as expected, and mappers are used to ensure data quality in saving and returning
- A global error handler has been implemented to provide a dry and robust catch all for bad requests and unexpected errors
- The backend services and database have been containerized as requested
- Unit tests have been written for the error handler, more can be written but I feel it is enough to show my capability
