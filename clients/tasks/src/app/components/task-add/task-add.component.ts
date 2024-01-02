import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../input/input.component';
@Component({
  selector: 'app-task-add',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    InputComponent
  ],
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss','../input/input.component.scss']
})
export class TaskAddComponent {

}
