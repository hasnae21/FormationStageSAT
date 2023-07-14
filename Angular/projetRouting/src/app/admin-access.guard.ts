import { CanActivateChildFn } from '@angular/router';

export const adminAccessGuard: CanActivateChildFn = (childRoute, state) => {
  return true;
};
