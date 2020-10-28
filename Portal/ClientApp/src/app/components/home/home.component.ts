
import { Component, OnInit, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MenuComponent } from '../menu/menu.component';
import { SideMenuComponent } from '../menu/side-menu/side-menu.component';
import { PanelComponent } from '../panel/panel.component';
import { Gestion } from '../../models/Gestion';
import { OperationService } from '../../services/operation/operation.service';
import { User } from '../../models/User';
import { MessageService } from 'primeng/api';
import { Operation } from '../../models/enumoperation';

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
  cols: any[];
  loading: boolean = false;
  constructor(public operationService: OperationService, public messageService: MessageService) { }

  ngOnInit() {
    this.cols = [];


  }
  menuState: string = 'in';

  toggleMenu() {
    this.cols = [];
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
    this.sideMenu.load(this.menuState);
  }


  onmenuchange(event) {
    let target = event.target || event.srcElement || event.currentTarget;
    let option = target.textContent;

    let userForm = new User();
    userForm.email = 'loqgarcia@hotmail.com';
    userForm.idUser = 1;
    //userForm.Rol.idRol = 1;
    this.cols.length = 0;

    let userLogin: User[] = [userForm];

    switch (option) {
      case Operation.Gestion: {
        this.operationService.getGestion(
          userLogin,
          (resp: Models.Response<Gestion[]>) => {
            if (resp.success) {

              this.tabs = resp.responseData;

              for (const key in resp.responseData[0]) {
                this.cols.push({ field: key, header: key });

              }
            }
            else {
              this.messageService.add({ severity: 'error', summary: 'Error', detail: resp.message });
            }
            this.loading = false;
          },
          (error: any) => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: JSON.stringify(error, null, 4) });
            this.loading = false;
          }
        );
        break;
      }
      case Operation.Conciliation: {

        this.cols = [
          { field: 'code', header: 'Code' },
          { field: 'name', header: 'Name' },
          { field: 'category', header: 'Category' },
          { field: 'quantity', header: 'Quantity' }
        ];

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

  }
}
