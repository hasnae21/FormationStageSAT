# How to debug Angular apps 

1. Adding "console” statements in code to debug - simplest way
2. Checking the sources in developers console log and adding breakpoints
3. Add the json pipe in template to check if the values are correct!
4. Always unsubscribe the subscription - always, else it will lead to memory leaks!!!
5. If making HTTP Calls -> Inspect the Network Tab for data being sent/received
6. Always "lint" to make sure - bad code does not peek in

# Everything about Angular Modules

> Angular applications are modular and Angular has its own modularity system called NgModules. NgModules are containers for a cohesive block of code dedicated to an application domain, a workflow, or a closely related set of capabilities. They can contain components, service providers, and other code files whose scope is defined by the containing NgModule

- > __ng generate module <module-name>__

# Everything about Angular Components

- Components are the most fundamental building blocks of Angular applications.
- We group logical components inside modules or can also be used a as a standalone component
- We can share data/communicate between various components.
- Deep dive into component's files and details.

- > __ng generate component <component-name>__
- > __ng g c <component-name> --module app.module.ts__ , to specify witch module to update


# Everything about Angular Standalone Components

- Standalone components provide a simplified way to build Angular applications.
- Standalone components specify the dependencies right inside the component class.
- We can reduce the dependency on ng Module by not importing not needed components.
- We can make any component as standalone by passing __*"standalone"*__ flag

- > __ng g c <component-name> --standalone__
 
- regular component -> entry in appmodule
*"Even though your not using/calling the component -> its still loaded as part of the appModule "*

#### 100 components ->
- standalone component -> no entry in appmodule
*"it will work without importing any dependencies on ngModule"*

# How to convert a component from Regular to standalone component  ?

add :
1-  __standalone: true,__ 
2- __imports: [CommonModule],__
3- __import { CommonModule } from '@angular/common';__
in the component
4- remouve the component declaration from it's Module


# Everything about Angular Component Class

- Component class is the where we write __all the component logic__.
- A component class will contain variables and methods related to the component
-  A component needs to be imported into any Module we want to use it - *Not applicable for standalone components*.
- Components have lifecycle methods that can be implemented


# Everything about Angular Component Lifecycle Hooks

- Every Angular component goes through a series of stages also called lifecycle Right from component initialization to everything that happens to component to destroying all covered as part of lifecycle hooks
- We need to implement lifecycle hook interfaces in component class to respond to events in lifecycle.


# List of Lifecycle Hooks

__ngOnChanges__ 
Called before ngOnInit() and whenever data-bound input field changes
__ngOnInit__ 
Called once, after the first ngOnChanges()
__ngDoCheck__ 
Called immediately after ngOnChanges() on every change detection run, and immediately after ngOnInit() on the first run. 
*Force when Angular cannot detect*
__ngAfterContentInit__ 
Called once after the first ngDoCheck()
__ngAfterContentChecked__ 
Called after ngAfterContentInit() and every subsequent ngDoCheck().
__ngAfterViewInit__ 
Called once after the first ngAfterContentChecked()
__ngAfterViewChecked__ 
Called after the ngAfterViewInit() and every subsequent ngAfterContentChecked()
__ngOnDestroy__ 
Called immediately before Angular destroys the directive or component.


# Component Communication in Angular

1. via Parent to Child 
      - (@Input)
2. via Child to Parent
      - ViewChild
      - @Output / Event Emitter

3. Between different components - not releated
- via __Services__


## ng-container
- In Angular, you cannot use more than one template binding on an element.
- This approach helps in removing the redundant div element to the DOM.
- Think of __ng-container__ as a external parent element used for wrapping child elements

## ng-template
- Angular's <ng-template> element defines a template that doesn't render anything by default.
- Used with structural directives like __nglf__, __ngSwitch__, __ngFor__  etc


# ViewChild

- We can use @viewChild to inject a reference to existing component or DOM element
- @ViewChild gets loaded after *ngAfterViewlnit()* method __NOT in oninit__


# ViewChildren

- We can use @viewChildren to inject a reference to a query list of a component or DOM element(s)
- @ViewChildren gets loaded after *ngAfterViewlnit()* method __NOT in oninit__
