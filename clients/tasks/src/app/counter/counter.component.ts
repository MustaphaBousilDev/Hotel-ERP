import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
  
} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
  standalone: true,
  imports:[CdkDropListGroup, CdkDropList, CdkDrag],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CounterComponent {
  
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
  constructor(private router: Router){}
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
}
