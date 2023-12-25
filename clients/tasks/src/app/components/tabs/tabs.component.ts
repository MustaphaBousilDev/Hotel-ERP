import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [MatTabsModule],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})
export class TabsComponent {
  title = 'Bytes';
  activeTab: string = 'all-task';
  type:string | null = '';

  ngOnInit() {
    // Call your custom function when the component is initialized
    this.type=localStorage.getItem('type')
    if(this.type){
      this.activeTab = this.type
      // console.log('init',this.activeTab)
    }else{
      localStorage.setItem('type',this.activeTab)
    }
  }

  onTabClick(tab:any) {
    this.activeTab = tab;
    localStorage.setItem('type',this.activeTab)
    // console.log(this.activeTab)
  }

  storeLocalStorage(data:string){
    
    
  }
}

