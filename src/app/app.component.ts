import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from "./components/header/header.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { CourseGridComponent } from "./components/course-grid/course-grid.component";
import { BrowserModule } from '@angular/platform-browser';
import { CourseBannerComponent } from "./components/course-banner/course-banner.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    MatButtonModule, MatDividerModule, MatIconModule, HeaderComponent, SidebarComponent, CourseGridComponent, CourseBannerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'EduShare-front-end';
}
