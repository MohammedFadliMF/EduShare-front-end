import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const newReq = req.clone({
      withCredentials: true, // Include credentials (cookies) in the request
    });
    return next(newReq);
};
