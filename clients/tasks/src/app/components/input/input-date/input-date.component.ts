import { Component, OnInit } from '@angular/core';
export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-input-date',
  standalone: true,
  imports: [],
  templateUrl: './input-date.component.html',
  styleUrl: './input-date.component.scss',
})
export class InputDateComponent implements OnInit{
  constructor(){}
  minDate ="2022-10-01"
  maxDate ="2022-12-25"

  ngOnInit(): void {
    
  }
  
}
