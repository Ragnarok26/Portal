//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabMenuModule } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { BlockUIModule } from 'primeng/blockui';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TooltipModule } from 'primeng/tooltip';
import { MenuModule } from 'primeng/menu';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SidebarModule } from 'primeng/sidebar';
import { PanelModule } from 'primeng/panel';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';



//Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { ManagementComponent } from './components/management/management.component';
import { ConciliationComponent } from './components/conciliation/conciliation.component';
import { AuditComponent } from './components/audit/audit.component';
import { MenuService } from './services/menu/menu.service';
import { ConfirmationService } from 'primeng/api';
import { ResetPassComponent } from './components/reset-pass/reset-pass.component';
import { AuthenticationService } from './services/auth/authentication.service';
import { TopMenuComponent } from './components/menu/top-menu/top-menu.component';
import { SideMenuComponent } from './components/menu/side-menu/side-menu.component';
import { ChangePassComponent } from './components/change-pass/change-pass.component';

//Services
// import { getBaseUrl } from '../main';
import { MessageService } from 'primeng/api';
import { UserService } from './services/user/user.service';
import { ClientService } from './services/client/client.service';
import { MenuService } from './services/menu/menu.service';

//Directive
import { MainDirective } from './directives/main/main.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    ManagementComponent,
    ConciliationComponent,
    AuditComponent,
    ResetPassComponent,
    TopMenuComponent,
    SideMenuComponent,
    ChangePassComponent,

    MainDirective,
  ],
  imports: [
    BrowserModule.withServerTransition(
      {
        appId: 'ng-cli-universal'
      }
    ),
    HttpClientModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TabMenuModule,
    TableModule,
    ScrollPanelModule,
    MessagesModule,
    MessageModule,
    BlockUIModule,
    ProgressSpinnerModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    InputTextareaModule,
    TooltipModule,
    MenuModule,
    TieredMenuModule,
    PanelMenuModule,
    ReactiveFormsModule,
    SidebarModule,
    PanelModule,
    ConfirmDialogModule,
  ],
  providers: [
    MessageService,
    UserService,
    ClientService,
    MenuService,
    AuthenticationService,
    ConfirmationService,
    // {
    //   provide: 'BASE_URL',
    //   useFactory: getBaseUrl
    // }
    { provide: 'BASE_URL', useFactory: getBaseUrl },
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


export function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}

