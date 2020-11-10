using Data.Interface;
using DBConnection.Data;
using Entity.Common;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Text;

namespace Data.Operation
{
    public class Catalogs : ICatalogs
    {

        public void Dispose()
        {
        }

        public DataSet GetCatalogs(IEnumerable<int> CatalogIds)
        {
            DataSet dataSet = new DataSet();
            SqlParameterCollection outputParameters = null;
            StoredProceduresConfiguration AllCatalogsSpConfig = Settings.Instance.DataConfiguration.StoredProcedures["GetCatalogs"];
            string ConnectionString = Settings.Instance.DataConfiguration.ConnectionString;
            DataTable dataTable = new DataTable();
            DataColumn column = dataTable.Columns.Add("Id_Catalog");
            column.AllowDBNull = false;
            column.DataType = typeof(int);
            column = dataTable.Columns.Add("Id");
            column.AllowDBNull = true;
            column.DataType = typeof(int);
            column = dataTable.Columns.Add("Description");
            column.AllowDBNull = true;
            column.DataType = typeof(string);
            foreach (int catalogId in CatalogIds)
            {
                dataTable.Rows.Add(new object[] { catalogId, DBNull.Value, DBNull.Value });
            }
            using (Connection connection = new Connection(ConnectionString))
            {
                List<SqlParameter> parameters = new List<SqlParameter>
                {
                    new SqlParameter
                    {
                        SqlDbType = SqlDbType.Structured,
                        Direction = ParameterDirection.Input,
                        ParameterName = "@CatalogTypeList",
                        Value = dataTable,
                        TypeName = "CatalogTableType"
                    }
                };
                dataSet = connection.ExecuteStoredProcedure(AllCatalogsSpConfig.StoredProcedureName, parameters, out outputParameters);
            }
            return dataSet;
        }
    }
}
