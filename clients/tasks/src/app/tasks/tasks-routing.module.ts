import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks.component';
import { loadRemoteModule } from '@angular-architects/module-federation';
const routes: Routes = [
  {
    path:"",
    component:TasksComponent,
    pathMatch:"full",
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
