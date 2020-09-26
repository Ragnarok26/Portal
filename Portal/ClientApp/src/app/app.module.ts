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
import { ReactiveFormsModule } from '@angular/forms';


//Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

//Services
// import { getBaseUrl } from '../main';
import { MessageService } from 'primeng/api';
import { LoginService } from './services/login/login.service';
import { ClientService } from './services/client/client.service';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { ManagementComponent } from './components/management/management.component';
import { ConciliationComponent } from './components/conciliation/conciliation.component';
import { AuditComponent } from './components/audit/audit.component';
import { MenuService } from './services/menu/menu.service';
import { ResetPassComponent } from './components/reset-pass/reset-pass.component';

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
  ],
  providers: [
    MessageService,
    LoginService,
    ClientService,
    MenuService,
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

