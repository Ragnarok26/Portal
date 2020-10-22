import { Injectable } from '@angular/core';
import { MainMenuItem } from '../../models/menu/MainMenuItem';
import { ManagementComponent } from 'src/app/components/management/management.component';
import { ConciliationComponent } from 'src/app/components/operation/conciliation/conciliation.component';
import { AuditComponent } from 'src/app/components/operation/audit/audit.component';
import { HomeComponent } from 'src/app/components/home/home.component';

@Injectable()
export class MenuService {
  constructor() { }

  getItems() {
    return [
      new MainMenuItem(ConciliationComponent)
      //new MainMenuItem(ManagementComponent),
      //new MainMenuItem(ConciliationComponent),
      //new MainMenuItem(AuditComponent)
    ];
  }
}
