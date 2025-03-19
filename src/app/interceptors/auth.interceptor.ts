import { HttpInterceptorFn } from '@angular/common/http';
import {inject} from '@angular/core';
import {AuthService} from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
 // Inject the current `AuthService` and use it to get an authentication token:
  const authToken = inject(AuthService).accessToken;
  // Clone the request to add the authentication header.
  if (!req.url.includes("auth/")) {
    const newReq = req.clone({
      headers: req.headers.append('X-Authentication-Token', authToken),
    });
    return next(newReq);
  }
  return next(req);
};
