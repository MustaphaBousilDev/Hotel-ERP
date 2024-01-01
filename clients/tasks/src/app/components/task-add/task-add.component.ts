import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-add',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule 
  ],
  templateUrl: './task-add.component.html',
  styleUrl: './task-add.component.scss'
})
export class TaskAddComponent implements OnInit {
  form: FormGroup | any=''
  ngOnInit(): void {
    this.form = this.createForm();
  }
  createForm() {
    return new FormGroup({
      name: new FormControl(''),
      white_wine: new FormControl(0),
      red_wine: new FormControl(0),
      beer: new FormControl(0)
    });
  }

}
