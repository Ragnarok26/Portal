import { Component, OnInit, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MenuComponent } from '../menu/menu.component';
import { SideMenuComponent } from '../menu/side-menu/side-menu.component';
import { PanelComponent } from '../panel/panel.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0);'
      })),
      state('out', style({
        transform: 'translate3d(-8vw, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class HomeComponent implements OnInit {
  @ViewChild("sideMenu", { static: true }) sideMenu: SideMenuComponent;
  @ViewChild("panel", { static: true }) panel: PanelComponent;

  tabs: any[];
  constructor() { }

  ngOnInit() {



  }
  menuState: string = 'in';

  toggleMenu() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
    this.sideMenu.load(this.menuState);
  }


  onmenuchange(event) {
    let target = event.target || event.srcElement || event.currentTarget;
    let option = target.textContent;

    switch (option) {
      case 'Gestión CFDI': {
        //statements;
        this.tabs = [
          { code: 'code', name: 'name', category: 'category', quantity: 'quantity' },
          { code: 'code', name: 'name', category: 'category', quantity: 'quantity' },
          { code: 'code', name: 'name', category: 'category', quantity: 'quantity' },
          { code: 'code', name: 'name', category: 'category', quantity: 'quantity' },
          { code: 'code', name: 'name', category: 'category', quantity: 'quantity' }
        ];

        break;
      }
      case 'Conciliación de pagos': {

        this.tabs = [
          { code: 'code1', name: 'name1', category: 'category1', quantity: 'quantity1' },
          { code: 'code1', name: 'name1', category: 'category1', quantity: 'quantity1' },
          { code: 'code1', name: 'name1', category: 'category1', quantity: 'quantity1' },
          { code: 'code1', name: 'name1', category: 'category1', quantity: 'quantity1' },
          { code: 'code1', name: 'name1', category: 'category1', quantity: 'quantity1' }
        ];
        //statements; 
        break;
      }
      default: {
        //statements; 
        break;
      }
    }

    //console.log("onmenuchange" + event);
    //if (option == 'Gestión CFDI') {
    //  this.tabs = [
    //    { code: 'code', name: 'name', category: 'category', quantity: 'quantity' },
    //    { code: 'code', name: 'name', category: 'category', quantity: 'quantity' },
    //    { code: 'code', name: 'name', category: 'category', quantity: 'quantity' },
    //    { code: 'code', name: 'name', category: 'category', quantity: 'quantity' },
    //    { code: 'code', name: 'name', category: 'category', quantity: 'quantity' }
    //  ];
    //}
  }
}
