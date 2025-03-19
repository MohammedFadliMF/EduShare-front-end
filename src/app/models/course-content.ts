import { FileType } from "./file-type";

export interface CourseContent {
  contentId: number;
  fileName: string;
  fileType: FileType;
  fileContent: Uint8Array;
}
