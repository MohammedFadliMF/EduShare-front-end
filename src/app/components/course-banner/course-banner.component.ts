import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-course-banner',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    NgFor,
  ],
  templateUrl: './course-banner.component.html',
  styleUrl: './course-banner.component.css',
})
export class CourseBannerComponent {
  searchQuery: string = '';
  documents: Document[] = [
    { id: '1', title: 'Course Material 1', fileName: 'material1.pdf' },
    { id: '2', title: 'Course Material 2', fileName: 'material2.pdf' },
    { id: '3', title: 'Course Material 3', fileName: 'material3.pdf' },
    { id: '4', title: 'Course Material 4', fileName: 'material4.pdf' },
    { id: '5', title: 'Course Material 5', fileName: 'material5.pdf' },
    { id: '6', title: 'Course Material 6', fileName: 'material6.pdf' },
    { id: '7', title: 'Course Material 7', fileName: 'material7.pdf' },
    { id: '8', title: 'Course Material 8', fileName: 'material8.pdf' },
  ];

  get filteredDocuments(): Document[] {
    return this.documents.filter((doc) =>
      doc.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
interface Document {
  id: string;
  title: string;
  fileName: string;
}
