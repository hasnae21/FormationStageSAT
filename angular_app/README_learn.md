# How to debug Angular apps 
1. Adding "console” statements in code to debug - simplest way
ARC Tutorials
2. Checking the sources in developers console log and adding breakpoints
3. Add the json pipe in template to check if the values are correct!
4. Always unsubscribe the subscription - always, else it will lead to memory leaks!!!
5. If making HTTP Calls -> Inspect the Network Tab for data being sent/received
6. Always "lint" to make sure - bad code does not peek in

# Everything about Angular Modules
###  Modules in Angular 

> Angular applications are modular and Angular has its own modularity system called NgModules. NgModules are containers for a cohesive block of code dedicated to an application domain, a workflow, or a closely related set of capabilities. They can contain components, service providers, and other code files whose scope is defined by the containing NgModule

- > ng generate module <module-name>

# Everything about Angular Components

- Components are the most fundamental building blocks of Angular applications.
- We group logical components inside modules or can also be used a as a standalone component
- > ng generate component <component-name>
- We can share data/communicate between various components.
- Deep dive into component's files and details.