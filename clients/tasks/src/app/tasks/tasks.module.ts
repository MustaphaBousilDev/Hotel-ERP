import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import "zone.js"
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from '../components/modal/modal.module';
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    BrowserModule,
    HttpClientModule,
    ModalModule,
    MatSlideToggleModule,
  ],

})
export class TasksModule { 
  constructor(private injector: Injector){}
  ngDoBootstrap(){
    const counterApp = createCustomElement(TasksComponent, {injector:this.injector})
    customElements.define('tasks-hotel',counterApp)
  }
}
