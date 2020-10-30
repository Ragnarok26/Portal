import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent implements OnInit {

  representatives: any[];

  statuses: any[];

  loading: boolean = true;

  @ViewChild('dt') table: Table;
  constructor() { }

  ngOnInit(): void {

    this.representatives = [
      { name: "Amy Elsner", image: 'amyelsner.png' },
      { name: "Anna Fali", image: 'annafali.png' },
      { name: "Asiya Javayant", image: 'asiyajavayant.png' },
      { name: "Bernardo Dominic", image: 'bernardodominic.png' },
      { name: "Elwin Sharvill", image: 'elwinsharvill.png' },
      { name: "Ioni Bowcher", image: 'ionibowcher.png' },
      { name: "Ivan Magalhaes", image: 'ivanmagalhaes.png' },
      { name: "Onyama Limba", image: 'onyamalimba.png' },
      { name: "Stephen Shaw", image: 'stephenshaw.png' },
      { name: "XuXue Feng", image: 'xuxuefeng.png' }
    ];

    this.statuses = [
      { label: 'Unqualified', value: 'unqualified' },
      { label: 'Qualified', value: 'qualified' },
      { label: 'New', value: 'new' },
      { label: 'Negotiation', value: 'negotiation' },
      { label: 'Renewal', value: 'renewal' },
      { label: 'Proposal', value: 'proposal' }
    ]
  }

  onActivityChange(event) {
    const value = event.target.value;
    if (value && value.trim().length) {
      const activity = parseInt(value);

      if (!isNaN(activity)) {
        this.table.filter(activity, 'activity', 'gte');
      }
    }
  }

  onDateSelect(value) {
    this.table.filter(this.formatDate(value), 'date', 'equals')
  }

  formatDate(date) {
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (month < 10) {
      month = '0' + month;
    }

    if (day < 10) {
      day = '0' + day;
    }

    return date.getFullYear() + '-' + month + '-' + day;
  }

  onRepresentativeChange(event) {
    this.table.filter(event.value, 'representative', 'in')
  }
}
