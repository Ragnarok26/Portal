using System;
using System.Collections.Generic;
using System.Text;

namespace Entity.Operation
{
    /// <summary>
    /// File load in Worker
    /// </summary>
    public class FileCDFI
    {
        public string Uuid { get; set; }
        public string RfcEmisor { get; set; }
        public string NombreEmisor { get; set; }
        public string RfcReceptor { get; set; }
        public string NombreReceptor { get; set; }
        public string RfcPac { get; set; }
        public DateTime FechaEmision { get; set; }
        public DateTime FechaCertificacionSat { get; set; }
        public decimal Monto { get; set; }
        public string EfectoComprobante { get; set; }
        public string Estatus { get; set; }
        public DateTime? FechaCancelacion { get; set; }
    }
}
