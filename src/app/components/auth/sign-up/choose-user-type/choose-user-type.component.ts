import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-choose-user-type',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    RouterModule,
  ],
  templateUrl: './choose-user-type.component.html',
  styleUrl: './choose-user-type.component.css',
})
export class ChooseUserTypeComponent {
  selected: 'teacher' | 'student' = 'teacher';

  selectOption(option: 'teacher' | 'student') {
    this.selected = option;
  }
}
