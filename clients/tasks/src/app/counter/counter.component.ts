import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CounterComponent {
  constructor(private router: Router){}
  goToAgeCounter() {
     this.router.navigate(['/counter/age'])
  }
  hello(){
    console.log('fuck')
  }
}
