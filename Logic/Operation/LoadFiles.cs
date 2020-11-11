using Logic.Interface;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
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
            using (var streamReader = new StreamReader(fileStream, Encoding.UTF8))
            {
                string line;
                while ((line = streamReader.ReadLine()) != null)
                {

                    //  _logger.LogInformation(line);
                }
            }
        }

        public void LoadXMLFiles(string fileStream)
        {
            throw new NotImplementedException();
        }
    }
}
