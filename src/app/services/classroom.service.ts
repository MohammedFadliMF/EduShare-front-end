import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, shareReplay, tap } from 'rxjs';
import { ClassRoom } from '../models/classroom';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root',
})
export class ClassroomService {
  private classroomCache = new Map<number, ClassRoom>();
  private assignmentsCache = new Map<number, any[]>();
  private membersCache = new Map<number, any[]>();
  private coursesCache = new Map<number, Course[]>();

  private currentClassroom$ = new BehaviorSubject<ClassRoom | null>(null);
  private currentCourses$ = new BehaviorSubject<Course[] | null>(null);

  constructor(private http: HttpClient) {}

  // Get classroom and cache it
  getClassroom(id: number): Observable<ClassRoom> {
    if (this.classroomCache.has(id)) {
      this.currentClassroom$.next(this.classroomCache.get(id)!);
      return of(this.classroomCache.get(id)!);
    }

    return this.http
      .get<ClassRoom>(`http://localhost:8085/api/teacher/classrooms/${id}`)
      .pipe(
        tap((classroom) => {
          this.classroomCache.set(id, classroom);
          this.currentClassroom$.next(classroom);

          this.coursesCache.set(id, classroom.courses); 
        }),
        shareReplay(1) // Share the result with multiple subscribers
      );
  }

  getCourses(id: number): Observable<Course[]> {
    if (this.coursesCache.has(id)) {
      this.currentCourses$.next(this.coursesCache.get(id)!);
      return of(this.coursesCache.get(id)!);
    }

    return this.http
      .get<Course[]>(`http://localhost:8085/api/teacher/classrooms/${id}/courses`)
      .pipe(
        tap((courses) => {
          this.currentCourses$.next(courses);
        }),
        shareReplay(1) 
      );
  }

  getAssignments(classroomId: number, forceRefresh = false): Observable<any[]> {
    if (!forceRefresh && this.assignmentsCache.has(classroomId)) {
      return of(this.assignmentsCache.get(classroomId)!);
    }

    return this.http
      .get<any[]>(
        `http://localhost:8085/api/teacher/classrooms/${classroomId}/assignments`
      )
      .pipe(
        tap((assignments) =>
          this.assignmentsCache.set(classroomId, assignments)
        )
      );
  }

  // Get members with cache
  getMembers(classroomId: number, forceRefresh = false): Observable<any[]> {
    if (!forceRefresh && this.membersCache.has(classroomId)) {
      return of(this.membersCache.get(classroomId)!);
    }

    return this.http
      .get<any[]>(
        `http://localhost:8085/api/teacher/classrooms/${classroomId}/members`
      )
      .pipe(tap((members) => this.membersCache.set(classroomId, members)));
  }

  // Get the current classroom as observable
  getCurrentClassroom(): Observable<ClassRoom | null> {
    return this.currentClassroom$.asObservable();
  }

  // Clear cache (optional)
  clearCache() {
    this.classroomCache.clear();
    this.assignmentsCache.clear();
    this.membersCache.clear();
    this.currentClassroom$.next(null);
  }
}
