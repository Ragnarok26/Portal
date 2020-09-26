import { Component } from '@angular/core';

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
