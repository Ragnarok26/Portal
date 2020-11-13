using Logic.Interface;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Text;

namespace Logic.Operation
{
    /// <summary>
    /// Read different file extensions
    /// </summary>
    public class LoadFiles : ILoadFiles
    {
        public void LoadExcelFiles(string fileStream)
        {
            throw new NotImplementedException();
        }

        public void LoadTXTFiles(string fileStream)
        {
            Entity.Operation.FileCDFI file = new Entity.Operation.FileCDFI();
            using (var streamReader = new StreamReader(fileStream, Encoding.UTF8))
            {
                //string[] lines = System.IO.File.ReadAllLines(fileStream);
                //lines = lines.Skip(1).ToArray();
                string line;

                while ((line = streamReader.ReadLine()) != null)
                {
                    if (!line.Contains("Uuid"))
                    {
                        string[] fields = line.Split('~');
                        file.Uuid = fields[0].ToString();
                        file.RfcEmisor = fields[1].ToString();
                        file.NombreEmisor = fields[2].ToString();
                        file.RfcReceptor = fields[3].ToString();
                        file.NombreReceptor = fields[4].ToString();
                        file.RfcPac = fields[5].ToString();
                        file.FechaEmision = Convert.ToDateTime(fields[6].ToString());
                        file.FechaCertificacionSat = Convert.ToDateTime(fields[7].ToString());
                        file.Monto = decimal.Parse(fields[8]);
                        file.EfectoComprobante = fields[9].ToString();
                        file.Estatus = fields[10].ToString();
                     //   file.FechaCancelacion = fields[11].ToString() != string.Empty ? Convert.ToDateTime(fields[11].ToString()) : null;

                        for (int i = 0; i < fields.Length; i++)
                        {
                            //    listBox1.Items.Add(fields[i]);
                        }

                        //  _logger.LogInformation(line);
                    }

                    //IEnumerable<Entity.Operation.Gestion> gestionData = new List<Entity.Operation.Gestion>();
                    //using (Data.Interface.ILoadFile data = new Data.Operation.LoadFile())
                    //{
                    //    //  gestionData = data.LoadFile(user);
                    //}
                }
                // return gestionData;
            }
        }

        public void LoadXMLFiles(string fileStream)
        {
            throw new NotImplementedException();
        }
    }
}
