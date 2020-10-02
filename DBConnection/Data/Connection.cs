using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Reflection;

namespace DBConnection.Data
{
    /// <summary>
    /// 
    /// </summary>
    public class Connection : IDisposable
    {
        /// <summary>
        /// 
        /// </summary>
        private SqlConnection Client { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public Connection(string connectionString)
        {
            Client = new SqlConnection(connectionString);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="spName"></param>
        /// <param name="parameters"></param>
        /// <param name="outputParameters"></param>
        /// <returns></returns>
        public IEnumerable<T> ExecuteStoredProcedure<T>(string spName, List<SqlParameter> parameters, out SqlParameterCollection outputParameters)
        {
            outputParameters = null;
            List<T> result = new List<T>();
            using (SqlCommand command = new SqlCommand(spName, Client))
            {
                command.CommandType = CommandType.StoredProcedure;
                if (parameters != null)
                {
                    foreach (SqlParameter parameter in parameters)
                    {
                        command.Parameters.Add(parameter);
                    }
                }
                Client.Open();
                using (var reader = command.ExecuteReader(CommandBehavior.CloseConnection))
                {
                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            object instance = Activator.CreateInstance(typeof(T));
                            foreach (DataRow row in reader.GetSchemaTable().Rows)
                            {
                                FillObjectWithProperty(ref instance,
                                        row.ItemArray[0].ToString(), reader[row.ItemArray[0].ToString()]);
                            }
                            result.Add((T)Convert.ChangeType(instance, typeof(T)));
                        }
                    }
                }
                outputParameters = command.Parameters;
                if (outputParameters != null)
                {
                    List<SqlParameter> parametersToRemove = new List<SqlParameter>();
                    foreach (SqlParameter parameter in outputParameters)
                    {
                        if (parameter.Direction == ParameterDirection.Input)
                        {
                            parametersToRemove.Add(parameter);
                        }
                    }
                    foreach (SqlParameter parameter in parametersToRemove)
                    {
                        outputParameters.Remove(parameter);
                    }
                }
            }
            if (Client.State != ConnectionState.Closed)
            {
                Client.Close();
            }
            return result;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="spName"></param>
        /// <param name="parameters"></param>
        /// <param name="outputParameters"></param>
        /// <returns></returns>
        public DataSet ExecuteStoredProcedure(string spName, List<SqlParameter> parameters, out SqlParameterCollection outputParameters)
        {
            outputParameters = null;
            DataSet result = new DataSet();
            using (SqlCommand command = new SqlCommand(spName, Client))
            {
                command.CommandType = CommandType.StoredProcedure;
                if (parameters != null)
                {
                    foreach (SqlParameter parameter in parameters)
                    {
                        command.Parameters.Add(parameter);
                    }
                }
                Client.Open();
                using (SqlDataAdapter dataAdapter = new SqlDataAdapter())
                {
                    dataAdapter.SelectCommand = command;
                    dataAdapter.Fill(result);
                }
                outputParameters = command.Parameters;
                if (outputParameters != null)
                {
                    List<SqlParameter> parametersToRemove = new List<SqlParameter>();
                    foreach (SqlParameter parameter in outputParameters)
                    {
                        if (parameter.Direction == ParameterDirection.Input)
                        {
                            parametersToRemove.Add(parameter);
                        }
                    }
                    foreach (SqlParameter parameter in parametersToRemove)
                    {
                        outputParameters.Remove(parameter);
                    }
                }
            }
            if (Client.State != ConnectionState.Closed)
            {
                Client.Close();
            }
            return result;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="objectTo"></param>
        /// <param name="propertyName"></param>
        /// <param name="propertyValue"></param>
        private void FillObjectWithProperty(ref object objectTo, string propertyName, object propertyValue)
        {
            Type type = objectTo.GetType();
            PropertyInfo property = type.GetProperty(propertyName);
            if (property != null)
            {
                if (propertyValue.GetType() == typeof(DBNull))
                {
                    if (Nullable.GetUnderlyingType(property.GetType()) != null)
                    {
                        property.SetValue(objectTo, null);
                    }
                }
                if (property.PropertyType.IsEnum)
                {
                    property.SetValue(objectTo, Enum.Parse(property.PropertyType, propertyValue.ToString()));
                }
                else
                {
                    property.SetValue(objectTo, propertyValue);
                }
            }
        }

        /// <summary>
        /// Dispose method
        /// </summary>
        public void Dispose()
        {
        }
    }
}
