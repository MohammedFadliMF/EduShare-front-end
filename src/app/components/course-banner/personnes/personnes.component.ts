import { Component } from '@angular/core';
import { ClassroomService } from '../../../services/classroom.service';
import { Observable, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-personnes',
  standalone: true,
  imports: [],
  templateUrl: './personnes.component.html',
  styleUrl: './personnes.component.css',
})
export class PersonnesComponent {

  members$!: Observable<any[]>; // Observable<Member[]>;

  constructor(private classroomService: ClassroomService) {}
  ngOnInit(): void {
    this.members$ = this.classroomService.getCurrentClassroom().pipe(
      switchMap((classroom) => {
        if (!classroom) return of([]);
        return this.classroomService.getMembers(classroom.classroomId);
      })
    );
  }
}
