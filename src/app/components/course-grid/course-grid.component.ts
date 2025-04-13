import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ClassRoomDto } from '../../models/ClassRoomDto';
import { NgFor } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-course-grid',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule, NgFor],
  templateUrl: './course-grid.component.html',
  styleUrl: './course-grid.component.css',
})
export class CourseGridComponent implements OnInit {
  classrooms!: ClassRoomDto[];

  constructor(private authService: AuthService) {}
  
  ngOnInit(): void {
    this.authService.classrooms$.subscribe((data) => {
      this.classrooms = data;
    });
  }
}
