import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const userToken = true ;

  //this.userToken = true;

  if (userToken) {
    return true;
  } else {
    return false;
  }


};
