import { CommonModule } from '@angular/common';
import { Component, computed, Input, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { Course } from '../../models/course';

export type MenuItem = {
  icon: string;
  label: string;
  route?: string;
  courses?: Course[];
};

@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    RouterLink,
    RouterLinkActive,
    MenuItemComponent,
  ],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.css',
})
export class CustomSidenavComponent {
  sidenavCollapsed = signal(false);
  
  @Input() set collapsed(val: boolean) {
    this.sidenavCollapsed.set(val);
  }

  menuItems = signal<MenuItem[]>([
    {
      icon: 'home',
      label: 'Accueil',
      route: 'accueil',
    },
    {
      icon: 'today',
      label: 'Agenda',
      route: 'agenda',
    },
    {
      icon: 'school',
      label: 'Inscrit',
      route: 'inscrit',
      courses: [
        {
          id: 1,
          title: 'Développement avancés des SI',
          field: 'Master Ingénierie des Système Inte...',
          icon: 'D',
          color: '',
        },
        {
          id: 2,
          title: 'DWFS avec Javascript',
          field: 'Master ISI',
          icon: 'D',
          color: '',
        },
        {
          id: 3,
          title: 'Structures de données avancées',
          field: 'SKASMI',
          icon: 'S',
          color: '',
        },
      ],
    },
    {
      icon: 'archive',
      label: 'Cours archivés',
      route: 'archived-courses',
    },
    {
      icon: 'settings',
      label: 'Paramètres',
      route: 'settings',
    },
  ]);

  profilePicSize = computed(() => (this.sidenavCollapsed() ? '32' : '100'));
}
