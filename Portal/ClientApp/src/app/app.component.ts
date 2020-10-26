import { Component } from '@angular/core';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {


  title = 'app';
  hasToken: boolean;

  ngOnInit() {
    this.hasToken = true;
  }
}
