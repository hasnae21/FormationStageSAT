# What is Express JS?
• Express is a minimal and flexible Node.js web application framework that provides Ritor robust set of features for web and mobile applications.
• It is an open source framework developed and maintained by the Node.js foundation.
• Express JS is a web application framework that provides you with a simple middleware APIs to build websites, web apps and back ends
• With Express JS, you need not worry about low level protocols, processes, etc
• It is flexible as there are numerous modules available on pm, which can be directly plugged into Express.

> Express JS is maintained by the Node JS foundation and numerous open source contributors


# Why Express?
• Easy, Robust and quick way to set up backend APIs
• All batteries included
• Express IS is unopinionated which means there is no "best way" to do something
• It is very flexible and pluggable.


# Install Express JS using the steps

- Step #1 - We should have the Node and the npm (node package manager) installed.
__node --version__
__npm--version__
- Step #2 - Since we will need to continuously change/update code - we want it to auto monitor/hot reload
__npm i -g nodemon__
- Step #3 - Initialize the npm using the below command 
__npm init__
- Step #4 - Install Express using the below command
__npm i express --save__


# what's middleware? Why we need them?

- Middleware functions are functions that have access to the __request object__ (req), the __response object__ (res), and the __next middleware function__ in the application's request-response cycle.
- These functions are used to modify *req* and *res* objects for tasks like parsing request bodies, adding response headers, etc

__Remember the order of the methods is extremely important__


# What's Express Generator?

- Use the application generator tool, express-generator, to quickly create an application skeleton.
- Easily get standard application shell for quick and rapid prototyping
How to use Express Generator?
• __npx express-generator__
Or
•__npm express-generator__


# What is a Template Engine?

- A template engine enables you to use static template files in your application.
- At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client.
- This approach makes it easier to design an HTML page.


#  What is MongoDB?

• MongoDB is a document database with the scalability and flexibility that you want with the querying and indexing that you need
• A document-oriented database provides APIs or a query/update language that exposes the ability to query or update based on the internal structure in the document
• MongoDB documents are composed of field-and-value pairs and have the following structure
• Example
    {
        field1: value1,
        field2: value2
    }

#  What is Mongoose?

• Elegant mongodb object modeling for node.js
• Mongoose provides a straight-forward, schema-based solution to model your application data.
• It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.

####  Let's install Mongoose on our machines
- Visit official website: http://mongoosejs.com
- Install using npm package module
> __npm install mongoose --save__

#### To connect to MongoDB - Follow the below steps
- Step #1 - var mongoose = require('mongoose");
- Step #2 - Create a Properties File
- Step #3 - Import the properties file in index.js file
- Step #4 - mongoose.connect(dbURL);
- Step #5 - mongoose.connection.on('connected', function(){
    console.log("Mongoose default connection is open to ", dbURL);
});


## CRUD METHODES :
- save()
- find()
- findById()

#### Delete Documents
    • Remove()
    • findByldAndRemove()
    • deleteOne()
    • findByldAndDelete()
    • findOneAndRemove()

#### Update Documents

    • findOneAndUpdate()
    Student.findOneAndUpdate({name: "ARC"}, {age: 40}, function (err, response) {
    console.log(response);
    });

    • update()
    Student.update({age: 25}, {nationality: "American"}, function(err, response){
    console.log(response);})

    • findByldAndUpdate()
    Student.findByldAndUpdate("507f1f77bcf86cd799439011", {name: "James"},
    function(err, response) {
    console.log(response);
    })

