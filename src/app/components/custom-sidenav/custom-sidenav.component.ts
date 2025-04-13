import { CommonModule } from '@angular/common';
import { Component, computed, Input, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { ClassRoomDto } from '../../models/ClassRoomDto';

export type MenuItem = {
  icon: string;
  label: string;
  route?: string;
  classrooms?: ClassRoomDto[];
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
  navItems:any;

  @Input() set collapsed(val: boolean) {
    this.sidenavCollapsed.set(val);
  }

  @Input() set items(val: any) {
    this.navItems = val;
  }

  profilePicSize = computed(() => (this.sidenavCollapsed() ? '32' : '100'));
}
