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
import { Student } from '../../../../models/student';

@Component({
  selector: 'app-as-student',
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
  templateUrl: './as-student.component.html',
  styleUrl: './as-student.component.css',
})
export class AsStudentComponent implements OnInit {
  formRegister!: FormGroup;
  student!: Student;
  errorMessage!: string;
  showPassword: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.formRegister = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['',[Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(8),   Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&]).{8,}$')]],
    });
  }
  registerStudentHandler() {
    let username =
      this.formRegister.value.firstName + this.formRegister.value.lastName;
    let email = this.formRegister.value.email;
    let pwd = this.formRegister.value.password;

    this.student = {
      username: username,
      email: email,
      password: pwd,
    };
    this.authService.registerStudent(this.student).subscribe({
      next: (data) => {
        this.authService.loadProfile(data);
        this.router.navigateByUrl('/home');
      },
      error: (error) => {
        console.log(error.message);
        this.errorMessage = error.message;
      },
    });
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
