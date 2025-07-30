
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DocumentCardComponent } from "../document-card/document-card.component";
import { Course } from '../../../models/course';
import { Observable, of, switchMap } from 'rxjs';
import { ClassroomService } from '../../../services/classroom.service';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-course-chapter-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    AsyncPipe,
  ],
  templateUrl: './course-chapter-list.component.html',
  styleUrl: './course-chapter-list.component.css',
})
export class CourseChapterListComponent implements OnInit {
  courses$!: Observable<Course[] | null>;
  constructor(private classroomService: ClassroomService) {}

  ngOnInit(): void {
    this.courses$ = this.classroomService.getCurrentClassroom().pipe(
      switchMap((classroom) => {
        if (!classroom) return of([]);
        return this.classroomService.getCourses(classroom.classroomId);
      })
    );
  //  this.courses$.subscribe((courses) => {
  //     this.courses = courses;     
  //   });

  }

 
}
