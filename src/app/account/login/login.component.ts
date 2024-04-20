import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// Login Auth
import { TokenStorageService } from 'src/app/core/services/token-storage.service';
import { AuthenticationService } from '../../core/services/auth.service';
import { ITokenResponse } from './login.modal';
import { ToastService } from './toast-service';

import { jwtDecode } from "jwt-decode";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

/**
 * Login Component
 */
export class LoginComponent implements OnInit {

  // Login Form
  loginForm!: UntypedFormGroup;
  submitted = false;
  fieldTextType!: boolean;
  error = '';
  returnUrl!: string;

  toast!: false;

  // set the current year
  year: number = new Date().getFullYear();

  constructor(private formBuilder: UntypedFormBuilder, private authenticationService: AuthenticationService, private router: Router,
    public toastService: ToastService, private tokenService: TokenStorageService) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    if (sessionStorage.getItem('currentUser')) {
      this.router.navigate(['/']);
    }

    this.loginForm = this.formBuilder.group({
      username: ['winwallpuvilink@gmail.com', [Validators.required, Validators.email]],
      password: ['Puvitech@143', [Validators.required]],
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.authenticationService.authenticate(this.f['username'].value, this.f['password'].value).subscribe({
      next: (res: ITokenResponse) => {
        const data = jwtDecode(res.idToken);

        this.tokenService.saveInStorage('token', res.idToken);
        this.tokenService.saveInStorage('accessToken', res.accessToken);
        this.tokenService.saveInStorage('refreshToken', res.refreshToken);
        this.tokenService.saveInStorage('loggedInUser', JSON.stringify(data));

        this.router.navigate(['/']);
      }
    });
  }

  /**
   * Password Hide/Show
   */
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

}
