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
import { TeacherDashboardComponent } from './components/teacher/teacher-dashboard/teacher-dashboard.component';
import { TaughtCourseItemComponent } from './components/teacher/taught-course-item/taught-course-item.component';

export const routes: Routes = [
  { path: '', redirectTo: 'u/1', pathMatch: 'full' },
  {
    path: 'auth',
    component: AuthPageComponent,
    children: [
      { path: '', redirectTo: 'choose-user-type', pathMatch: 'full' }, // Default child route
      { path: 'choose-user-type', component: ChooseUserTypeComponent },
      { path: 'teacher', component: AsProfessorComponent },
      { path: 'student', component: AsStudentComponent },
      { path: 'login', component: LoginComponent },
    ],
  },

  {
    path: 'u/1',
    component: MainPageComponent,
    canActivate: [authenticationGuard],
    children: [
      { path: '', redirectTo: 'h', pathMatch: 'full' }, // Default child route
      { path: 'h', component: CourseGridComponent },
      { path: 'a', component: AgendaComponent },
      { path: 'todo', component: TodoComponent },
      {
        path: 'c',
        component: ContentComponent,
        children: [
          {
            path: ':courseId',
            component: PageComponent,
            children: [
              { path: '', component: FlowCourseComponent },
              { path: 't/all', component: HomeworkComponent },
              { path: 'p', component: PersonnesComponent },
            ],
          },
        ],
      },
      { path: 'archived', component: ArchivedCoursesComponent },
      { path: 's', component: SettingComponent },
    ],
  },
  {
    path: 'u/2',
    component: TeacherDashboardComponent,
    children: [
      { path: '', redirectTo: 'h', pathMatch: 'full' },
      { path: 'h', component: CourseGridComponent },
      { path: 'a', component: AgendaComponent },
      { path: 'todo', component: TodoComponent },
      {
        path: 'c',
        component: ContentComponent,
        children: [
          {
            path: ':courseId',
            component: TaughtCourseItemComponent,
            children: [
              { path: '', component: FlowCourseComponent },
              { path: 't/all', component: HomeworkComponent },
              { path: 'p', component: PersonnesComponent },
            ],
          },
        ],
      },
    ],
  },

  // { path: '**', redirectTo: 'u/1' }, // Wildcard route for a 404 page
];
