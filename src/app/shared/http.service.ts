import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // baseUrl = 'http://127.0.0.1:8000/api/';
  baseUrl = 'https://api.resourcehub.cloud/api/';

  get(loc: string, data?: any) {
    return this.http.get(`${this.baseUrl}` + 'v1/' +loc, data ? data : '')
  }

  post(loc: string, data: any) {
    return this.http.post(`${this.baseUrl}` + 'v1/'+ loc, data)
  }

  delete(loc: string, id: string) {
    return this.http.delete(`${this.baseUrl}` + 'v1/' + loc + id)
  }

  forgotPass(data: any) {
    return this.http.post(`${this.baseUrl}`+ 'forgot-password', data);
  }

  resetPass(data: any){
    return this.http.post(`${this.baseUrl}`+ 'reset-password', data);
  }

  register(data: any) {
    return this.http.post(`${this.baseUrl}`+ 'register', data);
  }

  checkEmail(data: any) {
    return this.http.get(`${this.baseUrl}`+ 'check-email', data);
  }

  login(data: any) {
    return this.http.post(`${this.baseUrl}`+ 'login', data);
  }

  signout() {
    return this.http.get(`${this.baseUrl}`+ 'logout');
  }

  update(loc: string, id: string, data: any) {
    return this.http.put(`${this.baseUrl}` + 'v1/' + loc + id, data)
  }

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }
}
