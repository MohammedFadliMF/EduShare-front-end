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
import { AuthService } from '../../../../services/auth.service';
import { Teacher } from '../../../../models/teacher';

@Component({
  selector: 'app-as-professor',
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
  templateUrl: './as-professor.component.html',
  styleUrl: './as-professor.component.css',
})
export class AsProfessorComponent implements OnInit {
  showPassword: boolean = false;
  selectedCountry: string = '';

  formRegister!: FormGroup;
  teacher!: Teacher;
  errorMessage!:string;

  // Without 'private' or 'public', Angular doesn't know how to store
  // the fb and authService instances for use in the class, hence the error.
  constructor(private fb: FormBuilder, private authService: AuthService,private router:Router) {}

  ngOnInit(): void {
    this.formRegister = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['',[Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(8),   Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&]).{8,}$')]],
    });
  }

  registerHandler() {
    let username =this.formRegister.value.firstName + this.formRegister.value.lastName;
    let email = this.formRegister.value.email;
    let pwd = this.formRegister.value.password;

    this.teacher = {
      username:username,
      email:email ,
      password: pwd
    };
    this.authService.registerTeacher(this.teacher).subscribe({
      next: (data) => {
        //this.authService.loadProfile(data);
        this.router.navigateByUrl('/u/2');
      },
      error: (error) => {
        this.errorMessage=error.message;
      },
    });
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  onGoogleSignIn() {
    console.log('onGoogleSignIn');
  }
  onAppleSignIn() {
    console.log('onAppleSignIn');
  }
  setShowPassword() {
    console.log('setShowPassword');
  }
}
