## Simple CRUD API with Node.js, MongoDB and Express.js

This repository contains a simple CRUD (Create, Read, Update, Delete) API built with Node.js, MongoDB, and Express.js. The API allows you to perform basic CRUD operations on a collection of resources.

### Prerequisites
Before you can run this API, you need to have the following dependencies installed:

- Node.js: Make sure you have Node.js installed on your machine. You can download it from the official [Node.js website](https://nodejs.org).

- MongoDB: You need to have MongoDB installed and running on your system. You can download and install it from the [official MongoDB website](https://www.mongodb.com/try/download/community).

### Getting Started
To get started with this API, follow these steps:

#### 1. Clone the repository:
Open your terminal (command prompt) and run the following command to clone the repository:

`git clone https://github.com/samuel-adeyeye/NODE-API.git`

#### 2. Navigate to the project directory:
Change into the project directory by running:

`cd NODE-API`

#### 3. Install dependencies:
Next, you need to install the required Node.js packages. Run the following command to do so:

`yarn add`

#### 4. Configure MongoDB:
Before running the API, you need to make sure your MongoDB server is up and running. If you are running MongoDB locally, it should be available at (mongodb://localhost:27017/).

#### 5. Set environment variables:
Define the following environment variables:

```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/your-database-name

```
Replace your-database-name with the name of the MongoDB database you want to use for this API.

#### 6. Start the server:
Finally, start the Node.js server by running:

`yarn start` or `yarn dev`

Depending on how you wrote your **package.json** file.

The server will start running on the defined port (default is 3000). You should see a message in the terminal indicating that the server is running.

#### 7. Testing the API:

Now that the server is up and running, you can use a tool like **Postman** or **cURL** to test the API endpoints.

- To create a new resource, make a POST request to **'/products'** with the necessary data in the request body.
- To retrieve all resources, make a GET request to **'/products'**.
- To retrieve a specific resource, make a GET request to **'/products/:id'**, replacing ':id' with the ID of the resource you want to retrieve.
To update a resource, make a PUT request to **'/products/:id'**, replacing ':id' with the ID of the resource you want to update, and include the updated data in the request body.
To delete a resource, make a DELETE request to **'/products/:id'**, replacing ':id' with the ID of the resource you want to delete.


#### Contributing
If you find any issues with the API or want to contribute to its improvement, feel free to create a pull request.