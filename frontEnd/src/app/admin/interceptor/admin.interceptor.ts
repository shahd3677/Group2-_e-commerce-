import { HttpInterceptorFn } from '@angular/common/http';

export const adminInterceptor: HttpInterceptorFn = (req, next) => {
  let token = localStorage.getItem('token')
  if (token) {
    req = req.clone(
      { headers: req.headers.set('token', token) }
    )
  }
  return next(req);
};
