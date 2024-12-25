import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Course } from '../../interfaces/course';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-course-grid',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule, NgFor],
  templateUrl: './course-grid.component.html',
  styleUrl: './course-grid.component.css',
})
export class CourseGridComponent {
  courses: Course[] = [
    {
      title: 'Sample Title 1',
      subtitle: 'Sample Subtitle 1',
      instructor: 'Instructor 1',
      initial: 'A',
      color: 'bg-blue-500',
    },
    {
      title: 'Sample Title 2',
      subtitle: 'Sample Subtitle 2',
      instructor: 'Instructor 2',
      initial: 'B',
      color: 'bg-green-500',
    },
    {
      title: 'Sample Title 3',
      subtitle: 'Sample Subtitle 3',
      instructor: 'Instructor 3',
      initial: 'C',
      color: 'bg-green-500',
    },
    {
      title: 'Sample Title 4',
      subtitle: 'Sample Subtitle 4',
      instructor: 'Instructor 4',
      initial: 'D',
      color: 'bg-green-500',
    },
    {
      title: 'Sample Title 5',
      subtitle: 'Sample Subtitle 5',
      instructor: 'Instructor 5',
      initial: 'E',
      color: 'bg-green-500',
    },
    {
      title: 'Sample Title 6',
      subtitle: 'Sample Subtitle 6',
      instructor: 'Instructor 6',
      initial: 'F',
      color: 'bg-green-500',
    },
  ];
  title = 'Sample Title';
  subtitle = 'Sample Subtitle';
  instructor = 'Instructor Name';
  initial = 'A'; // Avatar initial
  color = 'bg-blue-500'; // Example color cla
}
