
# Authentication Implementation

Implemented Authentication (userSignup,userLogin ,authValidator private routes public routes )



## Run Locally

Clone the project

```bash
  git clone git@github.com:vinaybajjuri58/Authentication-Blog.git auth-implementation
```

Go to the project directory

```bash
  cd auth-implementation
```

Install dependencies

```bash
  npm install
```
create a .env file and put the following environment variables 
### Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DB_URL`

`KEY = require('crypto').randomBytes(256).toString('base64')`

Start the server

```bash
  npm run start
```

  
## Tech Stack

**Server:** Node, Express,MongoDB 

**Password-encryption:** bcrypt

**token creation:** jsonwebtoken

  


  
