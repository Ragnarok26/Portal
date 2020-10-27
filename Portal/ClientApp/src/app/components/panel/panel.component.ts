import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  @Input() items: any[];

  products: any[];

  cols: any[];

  constructor() { }

  ngOnInit() {

    this.cols = [
      { field: 'idFile', header: 'idFile' },
      { field: 'nombreReceptor', header: 'nombreReceptor' },
      { field: 'fileName', header: 'fileName' }
    ];


  }
}
