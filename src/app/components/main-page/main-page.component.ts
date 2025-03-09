import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CustomSidenavComponent } from '../custom-sidenav/custom-sidenav.component';
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
export class MainPageComponent {
  collapsed = signal(false);
  sidenavWidth = computed(() => (this.collapsed() ? '65px' : '250px'));
}
