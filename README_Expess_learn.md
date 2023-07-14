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

> Step #1 - We should have the Node and the npm (node package manager) installed.
__node --version__
__npm--version__
> Step #2 - Since we will need to continuously change/update code - we want it to auto monitor/hot reload
__npm i -g nodemon__
> Step #3 - Initialize the npm using the below command 
__npm init__
> Step #4 - Install Express using the below command
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
