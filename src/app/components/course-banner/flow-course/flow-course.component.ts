import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CourseChapterListComponent } from "../course-chapter-list/course-chapter-list.component";
import { ActivatedRoute } from '@angular/router';
import { TeacherService } from '../../../services/teacher.service';
import { ClassroomService } from '../../../services/classroom.service';
import { Observable } from 'rxjs';
import { ClassRoom } from '../../../models/classroom';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-flow-course',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    CourseChapterListComponent,
    AsyncPipe,
  ],
  templateUrl: './flow-course.component.html',
  styleUrl: './flow-course.component.css',
})
export class FlowCourseComponent implements OnInit {
  classroom$!: Observable<ClassRoom | null>;

  constructor(
    private route: ActivatedRoute,
    private classroomService: ClassroomService,
    private teacherService: TeacherService
  ) {}

  ngOnInit(): void {
    this.classroom$ = this.classroomService.getCurrentClassroom();
    //  this.classroom$.subscribe((c) => {
    //     console.log('length: ', c?.courses);
    //   });
  }
}
