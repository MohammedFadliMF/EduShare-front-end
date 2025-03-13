import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {jwtDecode} from 'jwt-decode';
import { Teacher } from '../models/teacher';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  email!: string;
  isAuthenticated: boolean = false;
  roles: any;
  accessToken!: string;

  constructor(private http: HttpClient, private router: Router) {}

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

    return this.http.post('http://localhost:8085/auth/login', params, options);
  }

  loadProfile(data: any) {
    this.isAuthenticated = true;
    this.accessToken = data['access-token'];

    this.accessToken = data['access-token'];
    let decodedJwt: any = jwtDecode(this.accessToken);
    this.email = decodedJwt.sub;
    this.roles = decodedJwt.scope;
  }

  public registerStudent(teacher: Teacher) {
    let options = {
      headers: new HttpHeaders().set(
        'Content-Type',
        'application/json'
      ),
    };
    
    return this.http.post(
      'http://localhost:8085/auth/register/teacher',
      teacher,
      options
    );
  }

  public registerTeacher(student:Student) {
     let options = {
       headers: new HttpHeaders().set('Content-Type', 'application/json'),
     };

     return this.http.post(
       'http://localhost:8085/auth/register/student',
       student,
       options
     );
  }
}
