# Pizza Project

<img width="1440" alt="Screenshot 2023-05-06 at 14 03 50" src="https://user-images.githubusercontent.com/103258353/236611719-ac78e68a-3b00-4afc-8c73-cfd15a4b83ba.png">

<img width="1440" alt="Screenshot 2023-05-06 at 14 03 22" src="https://user-images.githubusercontent.com/103258353/236611730-b00b7200-d08f-4b14-a4c9-5f61b1889a51.png">

<img width="1439" alt="Screenshot 2023-05-06 at 14 02 55" src="https://user-images.githubusercontent.com/103258353/236611731-7413541d-f8bc-48b2-beec-3185c531417a.png">

<img width="1436" alt="Screenshot 2023-05-06 at 14 02 45" src="https://user-images.githubusercontent.com/103258353/236611733-4de26de6-cabc-4f06-839e-bf7c1a3d07a0.png">

<img width="1440" alt="Screenshot 2023-05-06 at 14 09 16" src="https://user-images.githubusercontent.com/103258353/236611979-7828b9a7-c3d5-4607-81ae-98e07fe7d2e7.png">


This is a web application for ordering pizzas. It consists of a backend and a frontend that are developed separately and communicate with each other through REST API.

## Backend

The backend is developed using Node.js and Express.js. It uses MongoDB as the database to store information about pizzas, customers, and orders. 

### Getting started

To get started with the backend, follow these steps:

1. Clone the repository:
git clone https://github.com/abdulra7ma/pizza_project.git


2. Install the dependencies:
cd pizza_project/backend
npm install

3. Create a `.env` file in the `backend` directory with the following contents:
```
PORT=3000
MONGODB_URI=mongodb://localhost/pizza_project
JWT_SECRET=mysecretkey
```
4. Start the server:
```
npm start
```

### API Documentation

The backend provides the following APIs:

#### Pizzas

- `GET /pizzas`: Get a list of all pizzas
- `GET /pizzas/:id`: Get details of a specific pizza
- `POST /pizzas`: Add a new pizza
- `PUT /pizzas/:id`: Update details of a specific pizza
- `DELETE /pizzas/:id`: Delete a specific pizza

#### Customers

- `GET /customers`: Get a list of all customers
- `GET /customers/:id`: Get details of a specific customer
- `POST /customers`: Add a new customer
- `PUT /customers/:id`: Update details of a specific customer
- `DELETE /customers/:id`: Delete a specific customer

#### Orders

- `GET /orders`: Get a list of all orders
- `GET /orders/:id`: Get details of a specific order
- `POST /orders`: Add a new order
- `PUT /orders/:id`: Update details of a specific order
- `DELETE /orders/:id`: Delete a specific order

## Frontend

The frontend is developed using HTML/JS/CSS js and communicates with the backend through REST API. 

### Getting started

To get started with the frontend, follow these steps:

1. Clone the repository:
```
git clone https://github.com/Pasha-007/Pizza.git
```
2. Install the dependencies:
```
cd Pizza
npm install
```
3. Create a `.env` file in the root directory with the following contents:
```
REACT_APP_API_URL=http://localhost:3000
```
4. Start the app:
```
npm start
```

### Features

The frontend provides the following features:

- View a list of all pizzas
- View details of a specific pizza
- Add a new pizza to the list
- Update details of a specific pizza
- Delete a specific pizza
- View a list of all customers
- View details of a specific customer
- Add a new customer to the list
- Update details of a specific customer
- Delete a specific customer
- View a list of all orders
- View details of a specific order
- Add a new order to the list
- Update details of a specific order
- Delete a specific order

## Conclusion

This Pizza Project is a simple but functional web application for ordering pizzas. It is developed using Node.js, Express.js, MongoDB, and React.js. Feel free to use it as a starting point for your own projects.

For more information, Please contact: mohammedmuntahaa.alatoo.edu.kg
