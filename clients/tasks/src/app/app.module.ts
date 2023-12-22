import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';



@NgModule({
  declarations: [
    AppComponent,
    MatSlideToggleModule,
  ],
  imports: [
    CommonModule,
    BrowserModule
  ]
})
export class AppModuleModule { }
