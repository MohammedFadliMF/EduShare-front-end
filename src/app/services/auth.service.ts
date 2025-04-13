import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import {jwtDecode} from 'jwt-decode';
import { Teacher } from '../models/teacher';
import { Student } from '../models/student';
import {BehaviorSubject, catchError, map, Observable, throwError} from 'rxjs';
import { ClassRoom } from '../models/classroom';
import { ClassRoomDto } from '../models/ClassRoomDto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  classrooms = signal<ClassRoom[]>([]);

  email!: string;
  isAuthenticated: boolean = false;
  roles: any;
  accessToken!: string;

  private dataSource = new BehaviorSubject<any>(null);
  classrooms$ = this.dataSource.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  sendClassrooms(data: any) {
    this.dataSource.next(data);
  }

  getClassrooms() {
    return this.http.get<ClassRoomDto[]>(
      'http://localhost:8085/api/auth/classrooms',);
  } 
  public login(email: string, password: string) {
    let options = {
      headers: new HttpHeaders().set(
        'Content-Type',
        'application/x-www-form-urlencoded'
      ),
    };
    let params = new HttpParams()
      .set('username', email)
      .set('password', password);

    return this.http.post(
      'http://localhost:8085/api/auth/login',
      params,
      options
    );
  }

  loadProfile(data: any) {
    this.isAuthenticated = true;
    this.accessToken = data['access-token'];
    console.log(data['access-token']);
    let decodedJwt: any = jwtDecode(this.accessToken);
    this.email = decodedJwt.sub;
    this.roles = decodedJwt.scope;
  }

  public registerTeacher(teacher: Teacher): Observable<any> {
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    };

    return this.http
      .post('http://localhost:8085/api/auth/register/teacher', teacher, options)
      .pipe(catchError(this.handleError));
  }

  public registerStudent(student: Student): Observable<any> {
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    };

    return this.http
      .post('http://localhost:8085/api/auth/register/student', student, options)
      .pipe(catchError(this.handleError));
  }

  public getUserRole(): Observable<string[]> {
    return this.http
      .get<{ roles: string[] }>('http://localhost:8085/api/auth/profile', {
        withCredentials: true,
      })
      .pipe(map((res) => res.roles));
  }
  //Global Error Handling
  private handleError(error: HttpErrorResponse) {
    let errorMsg = 'An unknown error occurred';

    if (error.error) {
      // If the error response contains a message, show it
      if (typeof error.error === 'object' && error.error.message) {
        errorMsg = error.error.message;
      } else {
        errorMsg = error.error;
      }
    } else if (error.status === 400) {
      errorMsg =
        error.error?.message || 'Invalid request. Please check your input.';
    } else if (error.status === 404) {
      errorMsg = 'Resource not found';
    } else if (error.status === 500) {
      errorMsg = 'Server error. Please try again later.';
    } else if (error.error instanceof ErrorEvent) {
      errorMsg = 'Network error. Please check your connection.';
    }

    return throwError(() => new Error(errorMsg));
  }
}
