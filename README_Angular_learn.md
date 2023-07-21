# How to debug Angular apps

1. Adding "console” statements in code to debug - simplest way
2. Checking the sources in developers console log and adding breakpoints
3. Add the json pipe in template to check if the values are correct!
4. Always unsubscribe the subscription - always, else it will lead to memory leaks!!!
5. If making HTTP Calls -> Inspect the Network Tab for data being sent/received
6. Always "lint" to make sure - bad code does not peek in

# Everything about Angular Modules

> Angular applications are modular and Angular has its own modularity system called NgModules. NgModules are containers for a cohesive block of code dedicated to an application domain, a workflow, or a closely related set of capabilities. They can contain components, service providers, and other code files whose scope is defined by the containing NgModule

- > **ng generate module <module-name>**

# Everything about Angular Components

- Components are the most fundamental building blocks of Angular applications.
- We group logical components inside modules or can also be used a as a standalone component
- We can share data/communicate between various components.
- Deep dive into component's files and details.

- > **ng generate component <component-name>**
- > **ng g c <component-name> --module app.module.ts** , to specify witch module to update

# Everything about Angular Standalone Components

- Standalone components provide a simplified way to build Angular applications.
- Standalone components specify the dependencies right inside the component class.
- We can reduce the dependency on ng Module by not importing not needed components.
- We can make any component as standalone by passing **_"standalone"_** flag

- > **ng g c <component-name> --standalone**

- regular component -> entry in appmodule
  _"Even though your not using/calling the component -> its still loaded as part of the appModule "_

#### 100 components ->

- standalone component -> no entry in appmodule
  _"it will work without importing any dependencies on ngModule"_

# How to convert a component from Regular to standalone component ?

add :
1- **standalone: true,**
2- **imports: [CommonModule],**
3- **import { CommonModule } from '@angular/common';**
in the component
4- remouve the component declaration from it's Module

# Everything about Angular Component Class

- Component class is the where we write **all the component logic**.
- A component class will contain variables and methods related to the component
- A component needs to be imported into any Module we want to use it - _Not applicable for standalone components_.
- Components have lifecycle methods that can be implemented

# Everything about Angular Component Lifecycle Hooks

- Every Angular component goes through a series of stages also called lifecycle Right from component initialization to everything that happens to component to destroying all covered as part of lifecycle hooks
- We need to implement lifecycle hook interfaces in component class to respond to events in lifecycle.

# List of Lifecycle Hooks

**ngOnChanges**
Called before ngOnInit() and whenever data-bound input field changes
**ngOnInit**
Called once, after the first ngOnChanges()
**ngDoCheck**
Called immediately after ngOnChanges() on every change detection run, and immediately after ngOnInit() on the first run.
_Force when Angular cannot detect_
**ngAfterContentInit**
Called once after the first ngDoCheck()
**ngAfterContentChecked**
Called after ngAfterContentInit() and every subsequent ngDoCheck().
**ngAfterViewInit**
Called once after the first ngAfterContentChecked()
**ngAfterViewChecked**
Called after the ngAfterViewInit() and every subsequent ngAfterContentChecked()
**ngOnDestroy**
Called immediately before Angular destroys the directive or component.

# Component Communication in Angular

1. via Parent to Child
   - (@Input)
2. via Child to Parent

   - ViewChild
   - @Output / Event Emitter

3. Between different components - not releated

- via **Services**

## ng-container

- In Angular, you cannot use more than one template binding on an element.
- This approach helps in removing the redundant div element to the DOM.
- Think of **ng-container** as a external parent element used for wrapping child elements

## ng-template

- Angular's <ng-template> element defines a template that doesn't render anything by default.
- Used with structural directives like **nglf**, **ngSwitch**, **ngFor** etc

# ViewChild

- We can use @viewChild to inject a reference to existing component or DOM element
- @ViewChild gets loaded after _ngAfterViewlnit()_ method **NOT in oninit**

# ViewChildren

- We can use @viewChildren to inject a reference to a query list of a component or DOM element(s)
- @ViewChildren gets loaded after _ngAfterViewlnit()_ method **NOT in oninit**

# Data Binding

- Means to bind the data from view (Template) to Controller (Component class) and vice versa
- Data binding as the name suggest - interacting with data
- Defines how the data flows and how the data gets updated based on business logic

1. Each component
   users .component.html -> view/HTML/UI
   users .component.scss -> classNames
   users.component.ts -> what data to be displayed/expressions
   users. component. spec.ts
2. Data is spread throughout these files
3. Data Binding intercating with data of the component
4. Data can be from component to template -› one way
5. Data can be from template to component -> one way
6. Two way to/from component from/to template

## One-way Data Binding

• Component to View
• Interpolation
• Property Binding
• Style Binding
• Attribute Binding
• View to Component
• Event Binding

## Two-way Data Binding

• Data flows from view to component and back to component from the view

# Interpolation

- Is a technique that allows the user to bind data from component to view( template)
- The data flow is only one-way i.e from component to view
- Can be used for integers, strings, objects, arrays and much more
- Syntax for defining Interpolation is double curly braces **{{ variable_name }}**

#

# Multiple Router Outlets

### Example of declaring multiple router outlets

> <router-outlet></router-outlet>
> <router-outlet name="route 1"></router-outlet>
> <router-outlet name="route2"></router-outlet>
> {
      path: 'add',
      component: AddLoansComponent,
      outlet:'route 1'
  },
> http://localhost:4200/loans(route1:add)

# Routing - Routing Strategy

- Before we start implementing our routes in our application, its important to understand and plan what will be our routing strategy
  > **import { LocationStrategy } from '@angular/common';**
- We need to add this in Providers of our Module
  > **{provide: LocationStrategy, useClass: HashLocationStrategy}**
  > Angular provides 2 types of routing strategy we can use:
              1. PathLocationStrategy
              2. HashLocationStrategy
  > By default - Angular makes use of the PathLocation Strategy
  > With HashLocationStrategy we will see the **#** in the URL
  > Various examples of HashLocationStrategy are given here:
          - #/products
          - #/product/10
          - #/product/10/details
          - #/product?search=param1

# Routing - Base Href

- Wrong configuration leads to pointing to wrong folder root path
- Setting the base href using the command line -base-href=
- Syntax: <base href="/<app1>" >
- **ng build --base-href="<path>"**

# Routing Module

• Routing Module is a placeholder for configuring all routes and navigations in one module
• Best practice is to have all routes configured in one place
• Easy to maintain and debug

> **ng generate module app-routing --flat --module=app**

# Router Module

• We need to import modules from the package
**import { Routes, RouterModule } from '@angular/router";**
• We need to configure route path array in the file
**const routes: Routes = [];**
• Then we need to define our module
• @NgModule({
• imports: [RouterModule. forRoot(routes)],
• exports: [RouterModule]
• })
We need to export the module
**export class AppRoutingModule { }**
• Import the module in the AppModule file

- We can configure routes to redirect route for various paths :
  Path,
  Component,
  redirect To,
  Children,
  Outlet,
  pathMatch

# Component Routes - Configuring Routes

- Create a Routes Array in App Routing module
  > const routes Routes =[ { path :" redirectTo: 'home', pathMatch: 'full'},{ path :'home', component : componentName},{ path :'dashboard', component : componentName2 },{ path :'terms', component : componentName3 },{ path: '**', redirect To: 'enroll', pathMatch: 'full'} ]

# Router Link

- When applied to an element in a template, makes that element a link that initiates navigation to a route.
- Navigation opens one or more routed components in one or more <router-outlet> locations on the page.
- For e.g

<a [routerLink]="['/user/bob']"> Some link </a>

# Query Params

- We can configure and send query parameters to our routes
- _Search?keyword=toys&country=usa_
- We can read the values in the component class and process the parameters

# Routing - Wildcard Routes

- Wild card intercepts any invalid URLs in our application
- When NO matching routes are found in the routes array, the router does not know where to go and hence results in console errors.
- Wild card routes are defined in the routes array using **{path:**}**
- Usually a component named **PageNotFound** is mapped as best practice
- Let's learn how to use wildcard routes in the routing module

# Routing - Lazy Loading

- By default, NgModules are eagerly loaded, which means that as soon as the app loads, so do all the NgModules, whether or not they are immediately necessary.
- For large apps with lots of routes, consider lazy loading- **a design pattern that loads NgModules as needed.**
- Lazy loading helps keep initial bundle sizes smaller, which in turn helps decrease load times.
- From Angular 8. loadChildren expects a function that uses the dynamic import syntax to import your lazy-loaded module only when it's needed

- There are 2 steps to create a lazy loading feature module
  • Create Feature Module
  • Configure loadChildren in appRouting
- Feature Module is a module specific to certain functionality
- To load a feature module lazily (only on demand) we need to load its children using
- the **loadChildren** property in route configuration
  > **ng g module customers --route customer --module app.module**

# Routing - Route Guards

- Use route guards to prevent users from navigating to parts of an app without authorization
- Route Guards are used to secure the route paths
- In most cases, the routes and screens are protected behind a good authentication system
- The route guard resolves to true or false based on custom logic and functionality
- We can generate any number of guards based on our application requirements

> **ng generate guard <guard-name>**

- Inject the guard in our module under providers
- There are various types of route guards available
  • **CanActivate** - Checks to see if a user can visit a route
  • **CanActivateChild** - Checks to see if a user can visit a routes children
  • **CanLoad** - Checks to see if a user can route to a module that lazy loaded <!-- deprecated-->
  • **CanDeactivate** - Checks to see if a user can exit a route
  • **Resolve** - Performs route data retrieval before route activation <!--deprecated-->
- The route guard resolves to _true_ or _false_ based on custom logic and functionality

### Resolve route guard

1. allows us to provide data needed for a route
2. If some data is "MANDATORY" for a component - try using the logic from **ngOnit** to Resolve
3. Using the _activatedRoute.snapshot.data_ we can access data and process it

##### Exemple of a resorve Guard
> https://poe.com/s/aiFo9dX6BZDhqVrje7Ls

# Directives

- Angular directives are used to extend the power of the HTML by giving it new syntax
- Directives can extend, change or modify behavior of the DOM elements

- There are 3 types of Directives :
  1. Component Directives
     - Every Angular application must have at least _one_ component
     - Have it's own templates
     - Events attached
  2. Structural Directives (*)
     - Updates structure of the view
     - **ngFor**, **nglf** and **ngSwitch**
  3. Attribute Directives
     - **ngStyle**, **ngClass**

> \_ ng g directive <name-directive>

### What are Structural Directives?
- Structural directives are responsible for HTML layout. They shape or reshape the DOM's structure, typically by adding, removing, or manipulating elements
- As with other directives, you apply a structural directive to a host element. The directive then does whatever it's supposed to do with that host element and its descendants
- Structural directives are easy to recognize. An asterisk **(\*)**

#### ngStyle
- The ng Style directives lets you set a given DOM elements style properties.
- We can pass dynamic values via variables
- For e.g <div [ngStyle]=" background-color': value">Example 1</div>

## Pipes

- Pipes are used to transform the data
- Pipes will take data input and convert/transform into a desired format
- Pipes are written using the pipe operator (I)
- We can apply pipes to any view/template and to any data inputs

#### Types of Pipes
• Built in Pipes
• Lowercase
• Uppercase
• Currency
• Date
• Parametrized Pipes
• We can pass one or more parameters to pipes
• Chaining Pipes
• We can connect multiple pipes to a data input
• Custom Pipes
• We can create our own custom pipes for various data formatting


# Services 

### Dependency Injection
• Dependency injection (DI), is an important application design pattern.
• Dependency injection is the ability to add the functionality of components at runtime
• The DI framework lets you supply data to a component from an injectable service class, defined in its own file
• Angular has its own DI framework, which is typically used in the design of Angular applications to increase their efficiency and modularity.
• Dependencies are services or objects that a class needs to perform its function.
• DI is a coding pattern in which a class asks for dependencies from external sources rather than creating them itself.

----------------------------------------------------------------
1. Services allows us to create reusable common shared functionality between various modules and components
2. Services are singleton
3. Services are injected into application using Dependency Injection mechanism
4. We need to create and inject services in components where we want to use them
5. Services are an abstraction layer or process layer which consists of our application business logic
6. Services are commonly used for making HTTP requests to our endpoints APIs to request and receive the response
7. A service can have a value, methods or a combination of both!
-------------------------------------------------------------------