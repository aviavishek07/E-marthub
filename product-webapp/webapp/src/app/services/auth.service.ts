import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  registerUser(registeruser:any):Observable<any>{
    return this.http.post('http://localhost:8080/user/register', registeruser)
  }

  authenticateUser(loginUser: any):Observable<any>{
    return this.http.post('http://localhost:8080/user/login', loginUser);
  }

  setBearerToken(token: string){
    sessionStorage.setItem('bearerToken', token);
  }

  getBearerToken(){
    sessionStorage.getItem('bearerToken')
  }

  public isAuthenticated():boolean{
    const token = localStorage.getItem('bearerToken');
    return token !== null;
  }
}
