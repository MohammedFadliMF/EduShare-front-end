import { ClassRoom } from "./classroom";

export interface Teacher {
  username: string;
  email: string;
  password: string;

  role?: string;
  createdCourses?: ClassRoom[];
}
