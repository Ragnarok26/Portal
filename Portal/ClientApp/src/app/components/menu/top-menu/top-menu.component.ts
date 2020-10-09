import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuService } from 'src/app/services/menu/menu.service';
import { MainDirective } from 'src/app/directives/main/main.directive';
import { MainMenuItem } from 'src/app/models/menu/MainMenuItem';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {
  mainMenuItems: MainMenuItem[];
  items: MenuItem[];
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {

    this.items = [
      {
        label: 'Log Out',
        icon: 'pi-sign-out'
      }


    ]

  }
}
