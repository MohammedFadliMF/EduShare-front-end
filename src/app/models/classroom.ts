import { CourseContent } from "./course-content";
import { Quiz } from "./quiz";
import { Student } from "./student";
import { Teacher } from "./teacher";

export interface ClassRoom {
  coursesName: string;
  description: string;
  section: string;
  room: string;
  matter: string;
  classJoinCode: string;
  contents: CourseContent[];
  quizzes: Quiz[];
  teacher: Teacher;
  enrolledStudents: Student[];
}
