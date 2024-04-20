import { Injectable } from '@angular/core';
import { ITokenResponse } from 'src/app/account/login/login.modal';
import { IUser } from 'src/app/pages/users/shared/modals/users.interface';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'loggedInUser';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() { }

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public saveInStorage(key: string, value: string) {
    window.sessionStorage.removeItem(key);
    window.sessionStorage.setItem(key, value);
  }

  public getToken(): string | null {
    return sessionStorage.getItem('token');
  }

  public getStorageItem(key: string): string | null {
    return sessionStorage.getItem(key);
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }
}
