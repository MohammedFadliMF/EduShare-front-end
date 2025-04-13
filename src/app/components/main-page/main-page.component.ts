import { CommonModule } from '@angular/common';
import { Component, computed, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CustomSidenavComponent, MenuItem } from '../custom-sidenav/custom-sidenav.component';
import { ClassRoomDto } from '../../models/ClassRoomDto';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-main-page',
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
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent implements OnInit {
  studentSidebarItems = signal<MenuItem[]>([
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
      icon: 'school',
      label: 'Inscrit',
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
    this.fetchClassrooms();
  }

  fetchClassrooms() {
    this.authService.getClassrooms().subscribe((data) => {
      // Update the local variable with the retrieved classroom data to store in authService
      this.authService.sendClassrooms(data);
      const updated = this.studentSidebarItems().map((item) =>
        item.label === 'Inscrit' ? { ...item, classrooms: data } : item
      );
      // Set classrooms in sidebar items
      this.studentSidebarItems.set(updated);
    });
  }

}
