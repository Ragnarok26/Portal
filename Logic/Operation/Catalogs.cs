
using Logic.Interface;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;

namespace Logic.Operation
{
    public class Catalogs : ICatalogs
    {
        public void Dispose()
        {
        }

        public object GetCatalogs(Dictionary<string, int> CatalogKeys)
        {
            DataSet dataSet = new DataSet();
            using (Data.Interface.ICatalogs data = new Data.Operation.Catalogs())
            {
                dataSet = data.GetCatalogs(CatalogKeys.Values.ToList());
                if (dataSet != null)
                {
                    if (dataSet.Tables != null)
                    {
                        for (int i = 0; i < dataSet.Tables.Count; i++)
                        {
                            dataSet.Tables[i].TableName = CatalogKeys.Keys.ElementAt(i);
                        }
                    }
                }
            }
            return JsonConvert.DeserializeObject(JsonConvert.SerializeObject(dataSet, Formatting.Indented));
        }
    }
}

