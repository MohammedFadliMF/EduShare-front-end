import { Routes } from '@angular/router';
import { CourseGridComponent } from './components/course-grid/course-grid.component';
import { TodoComponent } from './components/todo/todo.component';
import { ArchivedCoursesComponent } from './components/archived-courses/archived-courses.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { SettingComponent } from './components/setting/setting.component';
import { ContentComponent } from './components/content/content.component';
import { PageComponent } from './components/course-banner/page/page.component';
import { FlowCourseComponent } from './components/course-banner/flow-course/flow-course.component';
import { HomeworkComponent } from './components/course-banner/homework/homework.component';
import { PersonnesComponent } from './components/course-banner/personnes/personnes.component';
import { ChooseUserTypeComponent } from './components/auth/sign-up/choose-user-type/choose-user-type.component';
import { AsProfessorComponent } from './components/auth/sign-up/as-professor/as-professor.component';
import { AsStudentComponent } from './components/auth/sign-up/as-student/as-student.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AuthPageComponent } from './components/auth/auth-page/auth-page.component';
import { LoginComponent } from './components/auth/login/login.component';
import { authenticationGuard } from './guards/authentication.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'auth',
    component: AuthPageComponent,
    children: [
      { path: '', redirectTo: 'choose-user-type', pathMatch: 'full' }, // Default child route
      { path: 'choose-user-type', component: ChooseUserTypeComponent },
      { path: 'professor', component: AsProfessorComponent },
      { path: 'student', component: AsStudentComponent },
      { path: 'login', component: LoginComponent },
    ],
  },

  {
    path: 'home',
    component: MainPageComponent,
    canActivate: [authenticationGuard],
    children: [
      { path: '', redirectTo: 'accueil', pathMatch: 'full' }, // Default child route
      { path: 'accueil', component: CourseGridComponent },
      { path: 'agenda', component: AgendaComponent },
      {
        path: 'inscrit',
        component: ContentComponent,
        children: [
          {
            path: '1',
            component: PageComponent,
            children: [
              { path: 'flow-course', component: FlowCourseComponent },
              { path: 'homework', component: HomeworkComponent },
              { path: 'personnes', component: PersonnesComponent },
            ],
          },
          // { path: '2', component: PageComponent },
          // { path: '3', component: PageComponent },
        ],
      },
      { path: 'todo', component: TodoComponent },
      { path: 'archived-courses', component: ArchivedCoursesComponent },
      { path: 'settings', component: SettingComponent },
    ],
  },

  { path: '**', redirectTo: '/home' }, // Wildcard route for a 404 page
];
