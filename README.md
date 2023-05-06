# Pizza Project

<img width="826" alt="Screenshot 2023-05-06 at 14 19 59" src="https://user-images.githubusercontent.com/103258353/236612440-dec0b1c3-6d78-47f1-8a7d-c956e1db3a6c.png">

<img width="1440" alt="Screenshot 2023-05-06 at 14 03 22" src="https://user-images.githubusercontent.com/103258353/236611730-b00b7200-d08f-4b14-a4c9-5f61b1889a51.png">

<img width="1439" alt="Screenshot 2023-05-06 at 14 02 55" src="https://user-images.githubusercontent.com/103258353/236611731-7413541d-f8bc-48b2-beec-3185c531417a.png">

<img width="1436" alt="Screenshot 2023-05-06 at 14 02 45" src="https://user-images.githubusercontent.com/103258353/236611733-4de26de6-cabc-4f06-839e-bf7c1a3d07a0.png">

<img width="1440" alt="Screenshot 2023-05-06 at 14 09 16" src="https://user-images.githubusercontent.com/103258353/236611979-7828b9a7-c3d5-4607-81ae-98e07fe7d2e7.png">


This is a web application for ordering pizzas. It consists of a backend and a frontend that are developed separately and communicate with each other through REST API.

Django Pizza Menu Project
This is a Django project that allows users to order pizzas from a menu.

Table of Contents
Installation
Running the Application
Database
Server
Testing
Contributing
Documentation
Installation
Clone the repository to your local machine using 2. git clone https://github.com/abdulra7ma/pizza_project.git
Create a virtual environment for the project using python -m venv env.
Activate the virtual environment using source env/bin/activate (Linux/Mac) or env\Scripts\activate (Windows).
Install the project dependencies using 5. pip install -r requirements.txt. 
Running the Application
Activate the virtual environment using source env/bin/activate (Linux/Mac) or env\Scripts\activate (Windows).
Run the Django development server using 3. python manage.py runserver.
Access the application in your browser at http://localhost:8000/.
Database
this project does support both sqlite and postgres DB

Install PostgreSQL on your machine. You can download PostgreSQL from the official website: https://www.postgresql.org/download/
Once PostgreSQL is installed, open the command prompt and enter the following command to create a new database:
createdb pizza_menu_db
Next, create a new user for the database. Enter the following command:
createuser -P pizza_menu_user
When prompted, enter a password for the new user.
grant all privileges on database pizza_menu_db to pizza_menu_user;
grant all privileges on database pizza_menu_db to pizza_menu_user;
Update the DATABASES setting in your Django project's settings.py file with the following information:
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'pizza_menu_db',
        'USER': 'pizza_menu_user',
        'PASSWORD': 'your_password',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
Replace "your_password" with the password you created for the new user. 7. Migrate the database using the following command:

python manage.py migrate
Server
The application is served using the Django development server by default. However, for production deployment, you can use any server that supports WSGI, such as Apache or Nginx.

Testing
Activate the virtual environment using 2. source env/bin/activate (Linux/Mac) 3. env\Scripts\activate (Windows).
Run the tests using 3. python manage.py test.
Contributing
Fork the repository on GitHub.
Clone the forked repository to your local machine using 3. git clone https://github.com/abdulra7ma/pizza_project.git
Create a new branch for your changes using 4. git checkout -b feature/your-feature-name.
Make your changes and commit them with a descriptive commit message.
Push your changes to your forked repository using 6. git push origin feature/your-feature-name.
Open a pull request on the original repository.

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
