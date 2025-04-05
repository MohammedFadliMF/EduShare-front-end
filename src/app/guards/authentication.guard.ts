import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import {catchError, map, of} from 'rxjs';

export const authenticationGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  return authService.getUserRole().pipe(
    map(roles => {
      console.log("roles"+roles);
      // Check if the user has the "SCOPE_STUDENT" role
      if (roles.includes("SCOPE_STUDENT")) {
        return true; // Allow access to the route
      }
      // Check if the user has the "SCOPE_TEACHER" role
      else if (roles.includes("SCOPE_TEACHER")) {
        router.navigateByUrl('/pannel'); // Redirect to the teacher panel
        return false; // Deny access to the route
      }
      // If the user doesn't have either role, redirect to a default route (e.g., home)
      else {
        router.navigateByUrl('/auth'); // Redirect to a authentication route
        return false; // Deny access to the route
      }
    }),
    catchError(() => {
      // Handle errors (e.g., if getUserRole() fails)
      router.navigateByUrl('/auth'); // Redirect to a default route on error
      return of(false); // Deny access to the route
    })
  );

};
