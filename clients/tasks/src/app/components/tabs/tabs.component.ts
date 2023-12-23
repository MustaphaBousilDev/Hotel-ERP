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

  onTabClick(tab:any) {
    this.activeTab = tab;
    console.log(this.activeTab)
  }
}

