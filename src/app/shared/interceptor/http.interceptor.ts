import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const httpInterceptor: HttpInterceptorFn = (request, next) => {
  const router = inject(Router); // Inject Router
  const authToken = localStorage.getItem('access_token');

  /* if (!authToken) {
    router.navigate(['/']); // Redirect to home if no token is found
    return next(request); // Optional: Only proceed if necessary or return an error
  }
 */
  const clonedRequest = request.clone({
    headers: request.headers
      .set('Accept', 'application/json')
      .set('withCredentials', 'true')
      .set('Authorization', `Bearer ${authToken}`)
      .set('Access-Control-Allow-Origin', '*')
  });

  return next(clonedRequest);
};
