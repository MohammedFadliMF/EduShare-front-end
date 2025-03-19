import { CourseContent } from "./course-content";
import { Quiz } from "./quiz";
import { Student } from "./student";
import { Teacher } from "./teacher";

export interface CourseC {
  title: string;
  description: string;
  contents: CourseContent[];
  quizzes: Quiz[];
  teacher: Teacher;
  enrolledStudents:Student[];
}
