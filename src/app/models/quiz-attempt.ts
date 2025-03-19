import { Quiz } from "./quiz";
import { StudentAnswer } from "./student-answer";

export interface QuizAttempt {
  quiz: Quiz;
  answers: StudentAnswer[];
  score: number;
  attemptDate: Date;
}
