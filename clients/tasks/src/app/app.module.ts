import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TasksComponent } from './tasks/tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    MatSlideToggleModule,
    TasksComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
  ]
})
export class AppModuleModule { }
