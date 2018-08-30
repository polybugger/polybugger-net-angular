import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MainNavBarComponent } from './main-nav-bar/main-nav-bar.component';
import { MainComponent } from './main/main.component';
import { ClassesComponent } from './classes/classes.component';
import { TeachersComponent } from './teachers/teachers.component';
import { StudentsComponent } from './students/students.component';
import { SchoolmatesComponent } from './schoolmates/schoolmates.component';
import { MainRoutingModule } from './/main-routing.module';

@NgModule({
  declarations: [
    MainNavBarComponent,
    MainComponent,
    ClassesComponent,
    TeachersComponent,
    StudentsComponent,
    SchoolmatesComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    NgbModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MainRoutingModule
  ]
})
export class MainModule { }
