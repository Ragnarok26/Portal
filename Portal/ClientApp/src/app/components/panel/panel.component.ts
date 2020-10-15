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

    console.log(this.items);
    //this.productService.getProductsSmall().then(data => this.products = data);

    this.cols = [
      { field: 'code', header: 'Code' },
      { field: 'name', header: 'Name' },
      { field: 'category', header: 'Category' },
      { field: 'quantity', header: 'Quantity' }
    ];


    //this.items = [
    //  { field: 'code', header: 'Code' },
    //  { field: 'name', header: 'Name' },
    //  { field: 'category', header: 'Category' },
    //  { field: 'quantity', header: 'Quantity' }
    //];
  }
}
