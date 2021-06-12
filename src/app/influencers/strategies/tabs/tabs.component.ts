/**
 * The main component that renders single TabComponent
 * instances.
 */

 import {
  Component,
  ContentChildren,
  QueryList,
  AfterContentInit
} from '@angular/core';

import { TabComponent } from './tab.component';

@Component({
  selector: 'my-tabs',
  template: `
    <ul class="nav nav-tabs">
      <li *ngFor="let tab of tabs" class="nav-item tab-close" (click)="selectTab(tab)">
        <a class="nav-link" [class.active]="tab.active">{{tab.title}}</a>
      </li>
    </ul>
    <ng-content></ng-content>
  `,
  styles: [
    `
    .tab-close {
      color: gray;
      text-align: right;
      cursor: pointer;
    }
    `
  ]
})
export class TabsComponent implements AfterContentInit {

  @ContentChildren(TabComponent) tabs: any;

  // contentChildren are set
  ngAfterContentInit() {
    // get all active tabs
    let activeTabs = this.tabs.filter((tab: any)=>tab.active);

    // if there is no active tab set, activate the first
    if(activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: any){
    // deactivate all tabs
    this.tabs.toArray().forEach((tab: any) => tab.active = false);

    // activate the tab the user has clicked on.
    tab.active = true;
  }
}
