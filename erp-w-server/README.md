# ERP W

This repository contains a NodeJs api server using a workflow for writing Node code in Typescript. You can run this project either locally or using Docker as detailed in the instructions bellow.

## Running locally Instructions

### Pre-reqs

To build and run this app locally you will need to do the following:

- Install [Node.js](https://nodejs.org/en/)
- Install [MongoDB](https://docs.mongodb.com/)

### Running the application

- Clone the repository

```shell
git clone https://gitlab.com/Welyne-Dev/shovpel-user-service.git <project_name>
```

- Install dependencies

```shell
cd <project_name>
yarn install
```

- Configure your mongoDB server<br/>
  You will need to configure and run a mongoDB server, the official [MongoDB Community Edition documentation](https://www.mongodb.com/docs/manual/administration/install-community/) provides instructions to install and run mongoDB and required dependencies on your Operating System.<br/>
- Build and run the project<br/>

* To build and serve the app in production mode

```shell
yarn start
```

- To build and watch the project in production mode
  <br/>

```shell
yarn debug
```

- To build and watch the project in development mode
  <br/>

```shell
yarn debug:dev
```

- To run tests
  <br/>

```shell
yarn test
```
