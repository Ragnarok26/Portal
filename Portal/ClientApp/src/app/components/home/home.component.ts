
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
import { environment } from '../../../environments/environment';

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

  public sessionStorage = sessionStorage;
  tabs: any[];
  cols: any[];
  loading: boolean = false;
  currentUser: User;


  filterGestion: boolean = false;
  filterConciliation: boolean = false;
  filterAudit: boolean = false;

  constructor(public operationService: OperationService, public messageService: MessageService) {
  }

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

    this.currentUser = JSON.parse(this.sessionStorage.getItem('currentUser')).forEach((item: User) => {
      userForm = item;
    });

    console.log(this.sessionStorage.getItem("email"));

    this.cols.length = 0;
    let title: string;
    let userLogin: User[] = [userForm];

    switch (option) {
      case Operation.Gestion: {
        this.filterGestion = true;
        this.filterConciliation = false;
        this.filterAudit = false;
        this.operationService.getGestion(
          userLogin,
          (resp: Models.Response<Gestion[]>) => {
            if (resp.success) {
              this.tabs = resp.responseData;
              for (const key in resp.responseData[0]) {
                for (const header in environment.labelsTableGestion[0]) {
                  if (header == key) {
                    title = environment.labelsTableGestion[0][header];
                    console.log(environment.labelsTableGestion[0][header]);
                  }
                }
                this.cols.push({ field: key, header: title });
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
        this.filterGestion = false;
        this.filterConciliation = true;
        this.filterAudit = false;
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
      case Operation.Audit: {
        this.filterGestion = false;
        this.filterConciliation = false;
        this.filterAudit = true;
        this.cols = [
          { field: 'code', header: 'Code' },
          { field: 'name', header: 'Name' },
          { field: 'category', header: 'Category' },
          { field: 'quantity', header: 'Quantity' }
        ];

        this.tabs = [
          { code: 'code1122', name: 'name1122', category: 'category1122', quantity: 'quantity1' },
          { code: 'code1122', name: 'name1122', category: 'category1122', quantity: 'quantity1' },
          { code: 'code1122', name: 'name1122', category: 'category1122', quantity: 'quantity1' },
          { code: 'code1122', name: 'name1122', category: 'category1122', quantity: 'quantity1' },
          { code: 'code1122', name: 'name1122', category: 'category1122', quantity: 'quantity1' }
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
