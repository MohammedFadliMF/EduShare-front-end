import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

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
  ],
  templateUrl: './as-student.component.html',
  styleUrl: './as-student.component.css',
})
export class AsStudentComponent {
  showPassword: boolean = false;
  selectedCountry: string = '';

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
