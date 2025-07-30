import { Component, OnInit } from '@angular/core';
import { ClassroomService } from '../../../services/classroom.service';
import { Observable, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-homework',
  standalone: true,
  imports: [],
  templateUrl: './homework.component.html',
  styleUrl: './homework.component.css',
})
export class HomeworkComponent implements OnInit {
  assignments$!: Observable<any[]>; // Observable<Assignment[]>;

  constructor(private classroomService: ClassroomService) {}
  ngOnInit(): void {
     this.assignments$ = this.classroomService.getCurrentClassroom().pipe(
       switchMap((classroom) => {
         if (!classroom) return of([]);
         return this.classroomService.getAssignments(classroom.classroomId);
       })
     );
  }
}
