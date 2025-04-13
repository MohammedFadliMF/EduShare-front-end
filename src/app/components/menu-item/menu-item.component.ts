import { Component, input, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';
import { MenuItem } from '../custom-sidenav/custom-sidenav.component';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [RouterLink, MatListModule, MatIcon, RouterLinkActive],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.css',
  animations: [
    trigger('expandContractMenu', [
      transition(':enter', [
        style({ opacity: 0, height: '0px' }),
        animate('500ms ease-in-out', style({ opacity: 1, height: '*' })),
      ]),
      transition(':leave', [
        animate('500ms ease-in-out'),
        style({ opacity: 0, height: '0px' }),
      ]),
    ]),
  ],
})
export class MenuItemComponent {
  item = input.required<MenuItem>();

  collapsed = input(false);
  nestedMenuOpen = signal(false);
  
  toggleNested() {
    if (!this.item().classrooms) {
      return;
    }
    this.nestedMenuOpen.set(!this.nestedMenuOpen());
  }
}
