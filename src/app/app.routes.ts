import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SchoolProjectsComponent } from './school-projects/school-projects.component';

export const routes: Routes = [
     { path: '', component: HomeComponent },
       { path: 'school-projects', component: SchoolProjectsComponent }
];
