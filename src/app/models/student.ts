import { ClassRoom } from "./classroom";
import { QuizAttempt } from "./quiz-attempt";

export interface Student {
  username: string;
  email: string;
  password: string;
  
  role?: string;
  enrolledCourses?: ClassRoom[];
  quizAttempts?:QuizAttempt[];
}
