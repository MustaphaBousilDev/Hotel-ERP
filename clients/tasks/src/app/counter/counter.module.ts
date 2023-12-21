import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { CounterRoutingModule } from './counter-routing.module';
import { CounterComponent } from './counter.component';
import "zone.js"
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations: [
    CounterComponent
  ],
  imports: [
    CommonModule,
    CounterRoutingModule,
    BrowserModule
  ],

})
export class CounterModule { 
  constructor(private injector: Injector){}
  ngDoBootstrap(){
    const counterApp = createCustomElement(CounterComponent, {injector:this.injector})
    customElements.define('tasks-hotel',counterApp)
  }
}
