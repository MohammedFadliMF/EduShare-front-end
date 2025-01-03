import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { MatListModule } from '@angular/material/list'; 
import { MatIconModule } from '@angular/material/icon';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { MatExpansionModule } from '@angular/material/expansion';



@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    NgFor,
    RouterModule,
    MatExpansionModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  readonly panelOpenState = signal(false);
  courses = [
    {
      title: 'Développement avancés des SI',
      subtitle: 'Master Ingénierie des Système Inte...',
      initial: 'D',
    },
    {
      title: 'DWFS avec Javascript',
      subtitle: 'Master ISI',
      initial: 'D',
    },
    {
      title: 'Structures de données avancées',
      subtitle: 'SKASMI',
      initial: 'S',
    },
  ];
}