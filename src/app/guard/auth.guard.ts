import { inject } from '@angular/core';
import { CanActivateFn,Router } from '@angular/router';


export const authGuard: CanActivateFn = (route, state) => {
  const router=inject(Router)
  const isLogin=localStorage.getItem("userToken")
  if(!isLogin){
   router.navigate(['/login'])
   return false;
  }
  return true;
};
