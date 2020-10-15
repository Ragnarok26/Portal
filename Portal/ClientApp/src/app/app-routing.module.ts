import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ResetPassComponent } from './components/reset-pass/reset-pass.component';
import { ChangePassComponent } from './components/change-pass/change-pass.component';
import { PanelComponent } from './components/panel/panel.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'reset',
    component: ResetPassComponent
  },
  {
    path: 'change',
    component: ChangePassComponent
  },
  {
    path: 'panel',
    component: PanelComponent
  },

  //{
  //  path: 'dashboard',
  //  component: DashboardComponent,
  //  children: [
  //    {
  //      path: 'user',
  //      component: UserComponent
  //    },
  //    {
  //      path: 'application',
  //      component: ApplicationComponent
  //    },
  //    {
  //      path: 'profile',
  //      component: ProfileComponent
  //    },
  //  ]
  //},
];
@NgModule(
  {
    imports: [
      RouterModule.forRoot(
        routes,
        {
          useHash: true
        }
      )
    ],
    exports: [
      RouterModule
    ]
  }
)
export class AppRoutingModule { }
