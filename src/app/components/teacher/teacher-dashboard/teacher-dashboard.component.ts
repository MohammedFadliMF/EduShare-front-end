import { CommonModule } from '@angular/common';
import { Component, computed, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import {
  CustomSidenavComponent,
  MenuItem,
} from '../../custom-sidenav/custom-sidenav.component';
import { ClassRoomDto } from '../../../models/ClassRoomDto';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-teacher-dashboard',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    CustomSidenavComponent,
  ],
  templateUrl: './teacher-dashboard.component.html',
  styleUrl: './teacher-dashboard.component.css',
})
export class TeacherDashboardComponent implements OnInit {
  teacherSidebarItems = signal<MenuItem[]>([
      {
        icon: 'home',
        label: 'Accueil',
        route: 'h',
      },
      {
        icon: 'today',
        label: 'Agenda',
        route: 'a',
      },
      {
        icon: 'group',
        label: 'Cours enseignés',
        classrooms: [],
      },
      {
        icon: 'archive',
        label: 'Cours archivés',
        route: 'archived',
      },
      {
        icon: 'settings',
        label: 'Paramètres',
        route: 's',
      },
    ]);

  collapsed = signal(false);
  sidenavWidth = computed(() => (this.collapsed() ? '65px' : '300px'));

  constructor(private authService: AuthService) {}
  
  ngOnInit(): void {
    this.fetchCourses();
  }

  fetchCourses() {
    this.authService.getClassrooms().subscribe((data) => {
      // Update the local variable with the retrieved classroom data to store in authService
   
      this.authService.sendClassrooms(data);

      const updated = this.teacherSidebarItems().map((item) =>
        item.label === 'Cours enseignés' ? { ...item, classrooms: data } : item
      );
      // Set classrooms in sidebar items
      this.teacherSidebarItems.set(updated);
    });
  }
  
}
