import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuService } from 'src/app/services/menu/menu.service';
import { MainDirective } from 'src/app/directives/main/main.directive';
import { MainMenuItem } from 'src/app/models/menu/MainMenuItem';
import { AuthenticationService } from '../../../services/auth/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {
  mainMenuItems: MainMenuItem[];
  items: MenuItem[];
  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private authService: AuthenticationService,
    private router: Router) { }

  ngOnInit() {

    this.items = [
      {
        label: 'Log Out',
        icon: 'pi pi-sign-out',
        command: () => this.onLogoutClick(),

      }


    ]

  }
  onLogoutClick() {
    this.authService.logout();
    //this.flashMessage.show('You are logged out', {
    //  cssClass: 'alert-success',
    //  timeout: 3000
    //});
    this.router.navigate(['/login']);

  }
}
