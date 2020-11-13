using Data.Interface;
using DBConnection.Data;
using Entity.Common;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;

namespace Data.Operation
{
    public class LoadFile : ILoadFile
    {
        public void Dispose()
        {
            throw new NotImplementedException();
        }

        IEnumerable<Entity.Operation.Gestion> ILoadFile.LoadFile(IEnumerable<Entity.User.User> user)
        {
            throw new NotImplementedException();
        }

        //public IEnumerable<Entity.Operation.FileCDFI> LoadFile(IEnumerable<Entity.User.User> user)
        //{
        //    IEnumerable<Entity.Operation.FileCDFI> users = new List<Entity.Operation.FileCDFI>();
        //    //int? rowsAffected = null;
        //    //SqlParameterCollection outputParameters = null;
        //    //StoredProceduresConfiguration GetUserLoginSpConfig = Settings.Instance.DataConfiguration.StoredProcedures["GetGestion"];
        //    //string ConnectionString = Settings.Instance.DataConfiguration.ConnectionString;
        //    //using (Connection connection = new Connection(ConnectionString))
        //    //{
        //    //    List<SqlParameter> parameters = new List<SqlParameter>
        //    //    {
        //    //        new SqlParameter
        //    //        {
        //    //            DbType = DbType.String,
        //    //            Direction = ParameterDirection.Input,
        //    //            ParameterName = "@idRol",
        //    //            Value = 1// user.FirstOrDefault().Rol.FirstOrDefault().IdRol
        //    //        },
        //    //         new SqlParameter
        //    //        {
        //    //            DbType = DbType.String,
        //    //            Direction = ParameterDirection.Input,
        //    //            ParameterName = "@idUser",
        //    //            Value =  user.FirstOrDefault().IdUser
        //    //        },


        //    //        new SqlParameter
        //    //        {
        //    //            DbType = DbType.Int32,
        //    //            Direction = ParameterDirection.Output,
        //    //            ParameterName = "@rowsAffected"
        //    //        }
        //    //    };
        //    //    users = connection.ExecuteStoredProcedure<Entity.Operation.Gestion>(GetUserLoginSpConfig.StoredProcedureName, parameters, out outputParameters);
        //    //    if (outputParameters != null)
        //    //    {
        //    //        if (outputParameters.IndexOf("@rowsAffected") > -1)
        //    //        {
        //    //            rowsAffected = (int)outputParameters["@rowsAffected"].Value;
        //    //        }
        //    //    }
        //    //}
        //    return users;
        //}

    }
}
