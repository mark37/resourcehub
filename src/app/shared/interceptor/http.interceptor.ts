import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';

export const httpInterceptor: HttpInterceptorFn = (request, next) => {
  // const cookieService = inject(CookieService);
  // const authToken = cookieService.get('access_token');
  const authToken = localStorage.getItem('access_token')
  const clonedRequest = request.clone({
    headers: request.headers
      .set('Accept', 'application/json')
      .set('withCredentials', 'true')
      .set('Authorization', `Bearer ${authToken}`)
      .set('Access-Control-Allow-Origin', '*')
  });

  return next(clonedRequest);
};
