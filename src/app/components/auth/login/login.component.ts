import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  authMode: 'login' | 'signup' = 'login';
  selectedRole: 'STUDENT' | 'TEACHER' | null = null;

  formLogin!: FormGroup;
  errorMessage!: string;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
  loginHandler() {
    if (this.formLogin.invalid) {
      return;
    }

    let email = this.formLogin.value.email;
    let password = this.formLogin.value.password;

    this.authService.login(email, password).subscribe({
      next: (data) => {
        //this.authService.loadProfile(data);
        this.router.navigateByUrl('/u/1');
      },
      error: (err) => {
        this.errorMessage = err.error.message;
      },
    });
  }
  loginWithGoogle() {
    window.location.href = 'http://localhost:8085/api/auth/oauth2/login/google';
  }
}
