import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CourseChapterListComponent } from "../course-chapter-list/course-chapter-list.component";

@Component({
  selector: 'app-flow-course',
  standalone: true,
  imports: [MatCardModule, MatIconModule, CourseChapterListComponent],
  templateUrl: './flow-course.component.html',
  styleUrl: './flow-course.component.css',
})
export class FlowCourseComponent {}
