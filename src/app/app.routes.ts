import { Routes } from '@angular/router';
import { CourseBannerComponent } from './components/course-banner/course-banner.component';
import { CourseGridComponent } from './components/course-grid/course-grid.component';
import { TodoComponent } from './components/todo/todo.component';
import { ArchivedCoursesComponent } from './components/archived-courses/archived-courses.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { SettingComponent } from './components/setting/setting.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect root to /home
  { path: 'home', component: CourseGridComponent },
  { path: 'agenda', component: AgendaComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'archived-courses', component: ArchivedCoursesComponent },
  { path: 'settings', component: SettingComponent },

  { path: 'coure-banner', component: CourseBannerComponent },
  { path: '**', redirectTo: '/home' }, // Wildcard route for a 404 page
];
