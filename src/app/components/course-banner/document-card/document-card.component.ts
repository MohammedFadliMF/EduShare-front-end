import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { File } from '../../../models/file';

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
  @Input() file: File | null = null;

  constructor(private sanitizer: DomSanitizer) {}
  
  handleImageError(event: any) {
    event.target.src = 'assets/pic.jpg';
  }
  get thumbnailUrl(): string {
    if (
      this.file?.fileType?.toString().toLowerCase() === 'pdf' &&
      this.file.fileUrl
    ) {
      return `/api/files/thumbnail?url=${encodeURIComponent(
        this.file.fileUrl
      )}`;
    }
    return 'assets/google.png';
  }

  openFile() {
    if (this.file?.fileUrl) {
      window.open(this.file.fileUrl, '_blank');
    }
  }

  get encodedFileUrl(): string {
    return encodeURIComponent(this.file?.fileUrl || '');
  }

  getGoogleViewerUrl(fileUrl: string): string {
    return `https://docs.google.com/gview?url=${encodeURIComponent(
      fileUrl
    )}&embedded=true`;
  }

  get safeGoogleViewerUrl(): SafeResourceUrl {
    const rawUrl = `https://docs.google.com/gview?url=${encodeURIComponent(
      this.file?.fileUrl || 'assets/pic.jpg'
    )}&embedded=true`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(rawUrl);
  }
}
