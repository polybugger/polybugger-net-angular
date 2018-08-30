import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ClassesComponent } from './classes/classes.component';
import { TeachersComponent } from './teachers/teachers.component';
import { StudentsComponent } from './students/students.component';
import { SchoolmatesComponent } from './schoolmates/schoolmates.component';

const mainRoutes: Routes = [
  { path: 'main', component: MainComponent,
    children: [
      { path: '', redirectTo: 'classes', pathMatch: 'full' }
      , { path: 'classes', component: ClassesComponent }
      , { path: 'teachers', component: TeachersComponent }
      , { path: 'students', component: StudentsComponent }
      , { path: 'schoolmates', component: SchoolmatesComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(mainRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule { }
