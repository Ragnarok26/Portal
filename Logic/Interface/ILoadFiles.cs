using System;
using System.Collections.Generic;
using System.Text;

namespace Logic.Interface
{
    public interface ILoadFiles
    {
        void LoadTXTFiles(string fileStream);
        void LoadXMLFiles(string fileStream);
        void LoadExcelFiles(string fileStream);
    }
}
