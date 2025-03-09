import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Course } from '../../interfaces/course';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-course-grid',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule, NgFor],
  templateUrl: './course-grid.component.html',
  styleUrl: './course-grid.component.css',
})
export class CourseGridComponent {
  courses: Course[] = [
    {
      id: 1,
      title: 'Développement avancés des SI',
      field: 'Master Ingénierie des Système Inte...',
      icon: 'D',
      color: '',
    },
    {
      id: 2,
      title: 'DWFS avec Javascript',
      field: 'Master ISI',
      icon: 'D',
      color: '',
    },
    {
      id: 3,
      title: 'Structures de données avancées',
      field: 'SKASMI',
      icon: 'S',
      color: '',
    },
  ];
 
}
