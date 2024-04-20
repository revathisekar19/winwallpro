import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITokenResponse } from 'src/app/account/login/login.modal';
import { environment } from 'src/environments/environment';
import { GlobalComponent } from "../../global-component";

const AUTH_API = GlobalComponent.AUTH_API;
const BASE_URL = environment.nodeconfig.authDomain;

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    currentUserValue!: any;
    constructor(private http: HttpClient) { }

    public authenticate(username: string, password: string): Observable<ITokenResponse> {
        return this.http.post<ITokenResponse>(BASE_URL + AUTH_API, {
            username,
            password
        }).pipe();
    }

    logout() {
        sessionStorage.removeItem('currentUser');
        sessionStorage.removeItem('token');
    }

}

