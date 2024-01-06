import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { InputDateComponent } from './input-date/input-date.component';
@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    InputDateComponent,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

}
