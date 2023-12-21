import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
export const routes: Routes = [
  {
    path:"",
    redirectTo:"",
    pathMatch:"full",
  },
  {
    path:"",
    loadChildren: () => import("./counter/counter.module").then(m => m.CounterModule)
  }
];
