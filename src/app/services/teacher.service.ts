import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClassRoom } from '../models/classroom';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http:HttpClient) { }
  getTeacherClassroom(id: string):Observable<ClassRoom> {
    return this.http.get<ClassRoom>(
      `http://localhost:8085/api/teacher/classrooms/${id}`);
    // ).pipe(catchError(this.handleError));
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
