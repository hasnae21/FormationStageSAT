import { CanActivateFn } from '@angular/router';

export const modeleGuard: CanActivateFn = (route, state) => {
  return false;
};

