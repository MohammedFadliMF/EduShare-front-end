import { File } from "./file";

export interface Course {
  courseId: number;
  title: string;
  files: File[];
  createdAt: Date;
  lastUpdate: Date;
}
