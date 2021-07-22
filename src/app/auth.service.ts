import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost/test/';
interface LoginInfo {
  id:string
  password:string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'content-type': 'application/json'}) ;
    const info: LoginInfo = {"id": username, "password":password};
    console.log(info);
    return this.http.post(AUTH_API+"login.php", info,{'headers':headers});
  }

  register(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'content-type': 'application/json'}) ;
    const info: LoginInfo = {"id": username, "password":password};
    console.log(info);
    return this.http.post(AUTH_API+"register.php", info,{'headers':headers});
  }
}
