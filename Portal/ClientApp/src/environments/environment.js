"use strict";
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = void 0;
exports.environment = {
    production: false,
    urlData: null,
    token: "",
    serviceEndpoint: "https://localhost:44364/api/",
    // serviceEndpoint: "http://74.208.178.79:4001/api/",
    localServices: {
        auth: "Auth",
    },
    labelsTableGestion: [{
            "uuid": "UUID CDFI",
            "rfcEmisor": "RFC Emisor",
            "rfcReceptor": "RFC Receptor",
            "nombreEmisor": "Nombre Emisor",
            "nombreReceptor": "Nombre Receptor",
            "fechaCertificacionSat": "Fecha Certificacion SAT",
            "monto": "Monto",
            "fechaCancelacion": "Fecha de Cancelación",
            "efectoComprobante": "Efecto Comprobante",
            "status": "Estatus"
        }],
    labelsFilters: [
        {
            "MainOption": "Selecciona una opción",
            "RFCEmisor": "RFC Emisor",
            "RFCReceptor": "RFC Receptor",
            "SerieCDFI": "Serie CDFI",
            "FolioCDFI": "Folio CDFI",
            "UUIDCDFI": "UUID CDFI",
            "PeriodoPago": "Periodo Pago",
            "CPRrelacionados": "CPR relacionados",
            "TipoPago": "Tipo de pago",
            "FormaPago": "Forma de pago",
            "EfectoCDFI": "Efecto CDFI",
            "RespuestaCDFI": "Respuesta CDFI",
            "Status": "Estatus",
            "VersionCDFI": "Versión CDFI",
        }
    ],
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
//# sourceMappingURL=environment.js.map