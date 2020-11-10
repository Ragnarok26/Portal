using System;
using System.Collections.Generic;
using System.Text;

namespace Logic.Interface
{
    public interface ICatalogs : IDisposable
    {
        object GetCatalogs(Dictionary<string, int> CatalogKeys);

    }
}

