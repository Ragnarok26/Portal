import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuService } from 'src/app/services/menu/menu.service';
import { MainMenuItem } from '../../models/menu/MainMenuItem';
import { MainDirective } from 'src/app/directives/main/main.directive';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @ViewChild(MainDirective, { static: true }) mainDirective: MainDirective;

  mainMenuItems: MainMenuItem[];
  MenuItems: MenuItem[];
  constructor(private menuService: MenuService, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.mainMenuItems = this.menuService.getItems();


    this.MenuItems = [

      { label: 'Home', icon: 'ui-menuitem-icon ng-tns-c4-0 ng-star-inserted' },


    ]

  }

  public load(index: number | null) {
    const item = this.mainMenuItems[index];
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(item.component);
    const viewContainerRef = this.mainDirective.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
  }

}
