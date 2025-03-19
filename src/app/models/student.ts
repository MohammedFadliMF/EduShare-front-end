import { Course } from "./course";
import { QuizAttempt } from "./quiz-attempt";

export interface Student {
  username: string;
  email: string;
  password: string;
  
  role?: string;
  enrolledCourses?: Course[];
  quizAttempts?:QuizAttempt[];
}
