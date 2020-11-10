import { Catalog } from "./Catalog";

export class Gestion {
  public idFile: number;
  public uuid: string;
  public rfcEmisor: string;
  public nombreEmisor: string;
  public rfcReceptor: string;
  public nombreReceptor: string;
  public fechaCertificacionSat: Date;
  public monto: number;
  public efectoComprobante: string;
  public status: string;
  public fechaCancelacion: Date;
  public fileName: string;
  public dateCreation: Date;
  public idTipoPago: number;
  public tipoPagoDescription: string;
  public idFormaPago: number;
  public formaPagoDescripcion: string;

  public tipoPago: Catalog;
  public formaPago: Catalog;
}
