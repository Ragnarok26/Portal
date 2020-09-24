import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  MenuItems: MenuItem[];
  constructor() { }

  ngOnInit() {


    this.MenuItems = [

      {label: 'Home', icon: 'ui-menuitem-icon ng-tns-c4-0 ng-star-inserted'},
      //{
      //	label: 'Operations',
      //	icon: 'ui-menuitem-icon ng-tns-c4-0 - regions_gtps_menu ng-star-inserted',
      //	command: () => { this.load(2); this.sideBarDisplay = !this.sideBarDisplay; }
      //}

    ]

  }

}
