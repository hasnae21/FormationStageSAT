  import { CanDeactivateFn } from '@angular/router';
  import { SearchComponent } from './search/search.component';

  export const unsavedGuard: CanDeactivateFn<SearchComponent> = (component, currentRoute, currentState, nextState) => {

    console.log(component.isDirty);
    return window.confirm("You have some unsaved changes?")

    // if( !component.isDirty)
    //   return false;
    // else
    // return true;

  };
