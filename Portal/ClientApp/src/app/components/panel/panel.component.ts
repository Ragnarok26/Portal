import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  @Input() items: any[];
  @Input() cols: any[];

  products: any[];


  constructor() { }

  ngOnInit() {



  }
}