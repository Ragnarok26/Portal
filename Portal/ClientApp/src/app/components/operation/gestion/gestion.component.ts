import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { environment } from '../../../../environments/environment';
import { Catalog } from '../../../models/Catalog';
import { Gestion } from '../../../models/Gestion';
import { CatalogService } from '../../../services/catalog/catalog.service';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent implements OnInit {

  rfcReceptor: string;
  rfcEmisor: string;
  serie: string;

  labels: any[];
  representatives: any[];

  statuses: any[];

  loading: boolean = true;
  date2: Date;
  es: any;

  cities: any[];
  selectedCity1: any;
  catalogs: any;
  tipoPago: any[];
  formaPago: any[];

  @ViewChild('dt') table: Table;
  constructor(private catalogService: CatalogService, private messageService: MessageService) { }

  ngOnInit(): void {

    this.es = {
      firstDayOfWeek: 1,
      dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
      dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
      dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
      monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
      monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
      today: 'Hoy',
      clear: 'Borrar'
    }


    this.cities = [
      { name: 'Emitidos', option: '1' },
      { name: 'Recibidos', option: '2' },
      { name: 'Nómina', option: '3' }
    ];

    this.getCatalogs();

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

  FilterData() { }

  getCatalogs() {
    let data = [
      {
        Name: "CatalogNames",
        Value: ["tbl_WayToPaySAT", "tbl_PaymenMethodSAT"]
      },
      {
        Name: "CatalogIds",
        Value: ["1", "2"]
      }
    ];
    this.catalogService.get(data,
      (response: Models.Response<any>) => {
        if (response.success) {
          this.catalogs = response.responseData;
          this.tipoPago = this.catalogs.tbl_PaymenMethodSAT.map(
            (permissionStatus: any) => {
              return {
                id: permissionStatus.IdPaymenMethod,
                description: permissionStatus.Description
              };
            }
          );
          this.formaPago = this.catalogs.tbl_WayToPaySAT.map(
            (permissionType: any) => {
              return {
                id: permissionType.IdWayToPay,
                description: permissionType.Description
              };
            }
          );
          //this.permissionService.get(
          //  (resp: Models.Response<Gestion[]>) => {
          //    if (resp.success) {
          //      resp.responseData.forEach(
          //        (permission, index) => {
          //          permission.tipoPago = new Catalog();
          //          permission.tipoPago.id = permission.idTipoPago;
          //          permission.tipoPago.description = permission.tipoPagoDescription;
          //          permission.formaPago = new Catalog();
          //          permission.formaPago.id = permission.idFormaPago;
          //          permission.formaPago.description = permission.formaPagoDescripcion;
          //        }
          //      )
          //      this.permissions = resp.responseData;
          //    }
          //    else {
          //      this.messageService.add({ severity: 'error', summary: 'Error', detail: resp.message });
          //    }
          //    this.loading = false;
          //  },
          //  (error: any) => {
          //    this.messageService.add({ severity: 'error', summary: 'Error', detail: JSON.stringify(error, null, 4) });
          //    this.loading = false;
          //  }
          //);
        }
        else {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: response.message });
          this.loading = false;
        }
      },
      (error: any) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: JSON.stringify(error, null, 4) });
        this.loading = false;
      }
    );
  }

}
