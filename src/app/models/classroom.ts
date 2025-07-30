import { Course } from "./course";
import { Quiz } from "./quiz";
import { Student } from "./student";
import { Teacher } from "./teacher";

export interface ClassRoom {
  classroomId: number;
  coursesName: string;
  description: string;
  section: string;
  room: string;
  matter: string;
  classJoinCode: string;
  courses: Course[];
  quizzes: Quiz[];
  teacher: Teacher;
  enrolledStudents: Student[];
}
