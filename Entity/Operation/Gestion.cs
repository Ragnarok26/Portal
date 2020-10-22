using System;
using System.Collections.Generic;
using System.Text;

namespace Entity.Operation
{
    public class Gestion
    {
        public int IdFile { get; set; }
        public string Uuid { get; set; }
        public string RfcEmisor { get; set; }
        public string NombreEmisor { get; set; }
        public string RfcReceptor { get; set; }
        public string NombreReceptor { get; set; }
        public DateTime FechaCertificacionSat { get; set; }
        public float Monto { get; set; }
        public string EfectoComprobante { get; set; }
        public string Status { get; set; }
        public DateTime FechaCancelacion { get; set; }
        public string FileName { get; set; }
        public DateTime DateCreation { get; set; }
    }
}
