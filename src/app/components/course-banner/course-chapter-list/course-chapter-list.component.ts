import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { DocumentCardComponent } from "../document-card/document-card.component";
@Component({
  selector: 'app-course-chapter-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    DocumentCardComponent
],
  templateUrl: './course-chapter-list.component.html',
  styleUrl: './course-chapter-list.component.css',
})
export class CourseChapterListComponent {
  documents = [
    {
      title: 'TPcurseur.doc',
      type: 'Word',
      previewUrl: 'assets/pic.jpg',
    },
    {
      title: 'TPTrigger.doc',
      type: 'Word',
      previewUrl: 'assets/pic.jpg',
    },
    {
      title: 'TPPackage.doc',
      type: 'Word',
      previewUrl: 'assets/pic.jpg',
    },
    {
      title: 'TP_structure_controle.doc',
      type: 'Word',
      previewUrl: 'assets/pic.jpg',
      isLink: true,
    },
    {
      title: 'TP_Curseur.doc',
      type: 'Word',
      previewUrl: 'assets/pic.jpg',
    },
    {
      title: 'interagir_oracle.doc',
      type: 'Word',
      previewUrl: 'assets/pic.jpg',
    },
  ];
}
