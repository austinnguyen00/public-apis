# Public-Apis

This repo consists of files for task 2 and task 3 of the skill assessment.

## Task 2

The file for this task is **app.js**. The file can be run from the command line to fetch data from the API Endpoint: https://api.publicapis.org/entries.

The file accepts two arguments, 'category' and 'limit'

Example: `node app.js weather 5`

The file first returns a list of 'API' values from the API Endpoint in decreasing alphabetical order. 
After that, it returns the records that match the category and the limit record number the user supply.

## Task 3

A mock database named **task3.db** is created based on the table description.
**query.sql** file contains a query to generate a summary of how many customers are under a particular broker in the required order as the task description.
