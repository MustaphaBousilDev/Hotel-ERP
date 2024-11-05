import { Component, Output, EventEmitter } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [MatTabsModule],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})
export class TabsComponent{
  //event emitter
  @Output() activeTabShared = new EventEmitter<string>()


  title = 'Bytes';
  activeTab: string = 'all-task';
  type:string | null = '';
  filterLocal: boolean | any = false;
  sortLocal: boolean | any  = false;
  sort:boolean = false;
  filter:boolean = false ;

  
  sendDataToParent() {
    const sharedData = this.activeTab;
    this.activeTabShared.emit(sharedData)
  }

  ngOnInit() {
    // Call your custom function when the component is initialized
    this.localStorageTasks()
    this.localStorageFilter()
    this.localStorageSort()
    this.sendDataToParent()
  }


  onTabClick(tab:any) {
    this.activeTab = tab;
    localStorage.setItem('type',this.activeTab)
    // console.log(this.activeTab)
    this.sendDataToParent()
  }

  sortClick(){
    this.sort=true 
    this.filter=false 
    localStorage.setItem('sort',JSON.stringify(this.sort))
    localStorage.setItem('filter',JSON.stringify(false))
  }
  filterClick(){
    this.sort=false 
    this.filter=true  
    localStorage.setItem('filter',JSON.stringify(this.filter))
    localStorage.setItem('sort',JSON.stringify(false))
  }

  localStorageTasks(){
    this.type=localStorage.getItem('type')
    if(this.type){
      this.activeTab = this.type
      // console.log('init',this.activeTab)
    }else{
      localStorage.setItem('type',this.activeTab)
    }
  }
  localStorageFilter(){
    this.filterLocal=localStorage.getItem('filter')
    this.filter=JSON.parse(this.filterLocal)
  }
  localStorageSort(){
    this.sortLocal=localStorage.getItem('sort')
    this.sort=JSON.parse(this.sortLocal)
    
  }
}

