import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  RouterOutlet,
  RouterLink,
  RouterLinkActive,
  ActivatedRoute,
} from '@angular/router';
import { TeacherService } from '../../../services/teacher.service';
import { ClassroomService } from '../../../services/classroom.service';
import { Observable, switchMap } from 'rxjs';
import { ClassRoom } from '../../../models/classroom';

@Component({
  selector: 'app-taught-course-item',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    FormsModule,
    MatTabsModule,
  ],
  templateUrl: './taught-course-item.component.html',
  styleUrl: './taught-course-item.component.css',
})
export class TaughtCourseItemComponent implements OnInit {
  classroom$!: Observable<ClassRoom | null>;

  constructor(
    private route: ActivatedRoute,
    private classroomService: ClassroomService
  ) {
     this.classroom$ = this.classroomService.getCurrentClassroom();
  }

  ngOnInit() {
    this.route.params
      .pipe(
        switchMap((params) => this.classroomService.getClassroom(params['id']))
      )
      .subscribe();
  }
}
interface Document {
  id: string;
  title: string;
  fileName: string;
}
