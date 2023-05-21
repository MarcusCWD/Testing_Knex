# Testing_Knex

## Download packages using npm
- Run npm install OR
- Run npm express cors dotenv knex mysql2

## Setup of tools
- mysql download [here](https://dev.mysql.com/downloads/installer/)
- git bash download [here](https://git-scm.com/downloads)
- nodeJs download [here](https://nodejs.org/en/download)
- dbbeaver as database administration tool download [here](https://dbeaver.io/download/)

## Configure .env file
- With the help of .envsample, copy the settings into a newly created .env in the root project folder.
- Populate with respective infomation such as application port and Database settings.

## Configure mysql data
- With the help of samplesql.sql, copy out this sql file to local device.
- In dbbeaver, right click on the database that you are using > tools > execute script.
- Select the samplesql.sql file and run.
- db will be ready once done.

## Create migration file
- In gitbash terminal of VSC, run "npx knex migrate:make create_categories_table". This should create a new migration file under the migrations folder.
- Define the categories table schema with a primary key and other attributes.
- Run the migration with "npx knex migrate:latest". This will create the table.
- To revert the migration "npx knex migrate:rollback"
- In this test, there is a many-one and many-many relationship. refer to the migration files

## Create models
- Typical CRUD operation

## Create controller (logic)
- Found in the routes folder, create the business logic