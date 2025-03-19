import { Course } from "./course";

export interface Teacher {
  username: string;
  email: string;
  password: string;

  role?: string;
  createdCourses?: Course[];
}
