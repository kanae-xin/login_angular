import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }
  
  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    sessionStorage.setItem("user", token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem("user");
  }
}
