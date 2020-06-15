import {Component, OnInit} from '@angular/core';
import {AuthService} from 'src/app/services/auth/auth.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  authChoice = 'login';
  loginForm: FormGroup;
  registerForm: FormGroup;
  loginFormError = '';
  registerFormError = '';

  constructor(
    private _authService: AuthService,
    private _router: Router
  ) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });

    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  loginWithOauth(): void {
    this._authService.loginWithOauth('google');
  }

  onSubmitLoginForm(): void {
    this._authService.loginWithEmailAndPassword(
      this.loginForm.value,
      (error) => {
        if (error) {
          this.loginFormError = error;
        } else {
          this._router.navigate(['/movies']);
        }
      }
    );
  }

  onSubmitRegisterForm(): void {
    this._authService.registerWithEmailAndPassword(
      this.loginForm.value,
      (error) => {
        if (error) {
          this.registerFormError = error;
        } else {
          this._router.navigate(['/movies']);
        }
      }
    );
  }
}
