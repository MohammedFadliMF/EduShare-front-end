import { FileType } from "./file-type";

export interface File {
    fileId: number;
    fileName: string;
    fileType:FileType;
    fileUrl:string;
}
//   {
//    title: 'TPcurseur.doc',
//    type: 'Word',
//    previewUrl: 'assets/pic.jpg',
//   }