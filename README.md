# USER MANAGEMENT API
# PROJECT OVERVIEW
The User Management API is designed to handle CRUD (Create, Read, Update, Delete) operations for user accounts in a system. 
It provides endpoints for managing user data, including user registration, retrieving user details, and deleting accounts.
# SETUP INSTRUCTIONS
- **Cloninng our repository** - git clone https://github.com/irizcelarias/user_management_api.git
  
- **Install Dependencies**
  ```npm install 
  npm install express typeorm mysql2 bcrypt reflect-metadata
  npm install --save-dev typescript ts-node nodemon @types/express @types/bcrypt
  npm install mysql2
  npx tsc --init
  
- **Configure the Database**
  ```import { DataSource } from "typeorm";
  import { User } from "../entities/User";
  
  export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "user_management",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
  });
  
  AppDataSource.initialize()
    .then(() => console.log("Database Connected"))
    .catch((error) => console.log(error));

- **Testing**
  ```$ npm run dev
  
  > user_management_api@1.0.0 dev
  > ts-node-dev --respawn --transpile-only src/app.ts
  
  [INFO] 00:34:33 ts-node-dev ver. 2.0.0 (using ts-node ver. 10.9.2, typescript ver. 5.8.2)
  Database Connected
  Database connected successfully!
  Database contains 0 users
  Server running on port 3000

  
- **API Documentation**
  POSTMAN URL: http://localhost:3000/api/users
  ```
  POST:
  URL: POST/users
  
   GET /users/:id

    Request Body:
 ```
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
Response:
  { 
    "message": "User created successfully!"
  }

  
  Request Body:
{
  "name": "Zaira Mier",
  "email": "zairamier@example.com",
  "password": "123456"
}
Response:
  { 
    "message": "User created successfully!"
  }


  GET ALL USERS:
  URL: GET/users

  Response:
[
  {
    "id": 1,
    "name": "Hamela Sala",
    "email": "salahamela@example.com",
    "password": "password123"
  }
]
  Response:
[
  {
    "id": 2,
    "name": "Zaira Mier",
    "email": "zairamier@example.com",
    "password": "123456"
  }
] 


  GET USERS BY ID:
  URL: GET /users/:id

  Response:
[
  {
    "id": 2,
    "name": "Zaira Mier",
    "email": "zairamier@example.com",
    "password": "123456"
  }
] 


  DELETE:
  URL: DELETE/users
  
  Response:
{
  "message": "User deleted successfully"
}
