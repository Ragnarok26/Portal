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
  items: MenuItem[];
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    //  this.mainMenuItems = this.menuService.getItems();


    this.items = [

      {
        label: 'Home',
        icon: 'pi pi-home',
        items: [
          {
            label: 'Gestion CFDI',
            icon: 'pi pi-fw pi-align-left'
          },
          {
            label: 'Conciliación de pagos',
            icon: 'pi pi-fw pi-align-right'
          },
          {
            label: 'Auditoría fiscal',
            icon: 'pi pi-fw pi-align-center'
          }
        ]
      },

    ]

  }

  //public load(index: number | null) {
  //  const item = this.mainMenuItems[index];
  //  const componentFactory = this.componentFactoryResolver.resolveComponentFactory(item.component);
  //  const viewContainerRef = this.mainDirective.viewContainerRef;
  //  viewContainerRef.clear();
  //  const componentRef = viewContainerRef.createComponent(componentFactory);
  //}

}
