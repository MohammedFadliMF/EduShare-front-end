import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-document-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
  ],
  templateUrl: './document-card.component.html',
  styleUrl: './document-card.component.css',
})
export class DocumentCardComponent {
  @Input() document: {
    title: string;
    type: string;
    previewUrl: string;
    isLink?: boolean;
  } | null = null;
}
