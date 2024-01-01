import { Component, ViewEncapsulation, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import {TabsComponent} from "../components/tabs/tabs.component"
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
  
} from '@angular/cdk/drag-drop';
import { ModalService } from '../components/modal/modal.service';
import { MatIconModule } from '@angular/material/icon';
import { TaskAddComponent } from '../components/task-add/task-add.component';
@Component({
  selector: 'app-counter',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
  standalone: true,
  imports:[
    CdkDropListGroup,
    CdkDropList,
    CdkDrag,
    TabsComponent,
    MatIconModule,
    TaskAddComponent
  ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class TasksComponent {
  constructor(
    private router: Router,
    private modalService: ModalService,
    
  ){}
  dataFromChild: string='';

  
 
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  todoArr=[
    {
      name:'todo 1',
      status:'todo'
    },
    {
      name:'todo 2',
      status:'todo'
    },
    {
      name:'todo 3',
      status:'todo'
    }
  ]
  doneArr=[
    {
      name:'done 1',
      status:'done'
    },
    {
      name:'done 2',
      status:'done'
    },
    {
      name:'done 3',
      status:'done'
    }
  ]
  progressArr=[
    {
      name:'progress 1',
      status:'progress'
    },
    {
      name:'progress 2',
      status:'progress'
    },
    {
      name:'progress 3',
      status:'progress'
    }
  ]
  
  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  progress = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];
  
  drop(event: CdkDragDrop<{name: string; status: string;}[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const movedItem = event.previousContainer.data[event.previousIndex];
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      switch (event.container.id) {
        case 'todoList':
          movedItem.status = 'todo';
          break;
        case 'doneList':
          movedItem.status = 'done';
          break;
        case 'progressList':
          movedItem.status = 'progress';
          break;
        default:
          movedItem.status = 'Unknown';
      }

      console.log('todList',this.todoArr)
      console.log('todProgress',this.progressArr)
      console.log('todDone',this.doneArr)
    }
  }

  receviedDataFromChild(data:string){
    this.dataFromChild = data
    console.log('from parent')
    console.log(this.dataFromChild)
  }

  //for modal
  openModal(modalTemplate: TemplateRef<any>) {
    this.modalService
      .open(modalTemplate, { size: 'lg', title: 'Add New' })
      .subscribe((action) => {
        console.log('modalAction', action);
      });
  }
}
