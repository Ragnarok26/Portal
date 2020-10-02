using Data.User.Interface;
using Entity.Common;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;

namespace Data.User
{
    /// <summary>
    /// 
    /// </summary>
    public class User : IUser
    {

        public void Dispose()
        {
        }
        public IEnumerable<Entity.User.User> GetAllUser()
        {
            IEnumerable<Entity.User.User> users = new List<Entity.User.User>();
            return users;
        }
        public IEnumerable<Entity.User.User> AddUser()
        {
            IEnumerable<Entity.User.User> users = new List<Entity.User.User>();
            return users;
        }
        public int? ResetPass(IEnumerable<Entity.User.User> user)
        {
            int? rowsAffected = null;

            SqlParameterCollection outputParameters = null;
            StoredProceduresConfiguration UpdateUserSpConfig = Settings.Instance.DataConfiguration.StoredProcedures["UpdateUser"];
            string ConnectionString = Settings.Instance.DataConfiguration.ConnectionString;

            //using (Connection connection = new Connection(ConnectionString))
            //{
            //    List<SqlParameter> parameters = new List<SqlParameter>
            //    {
            //        new SqlParameter
            //        {
            //            SqlDbType = SqlDbType.Int,
            //            Direction = ParameterDirection.Input,
            //            ParameterName = "@IdUSer",
            //            Value = user.idUser
            //        },
            //        new SqlParameter
            //        {
            //            DbType = DbType.Int32,
            //            Direction = ParameterDirection.Output,
            //            ParameterName = "@rowsAffected"
            //        }
            //    };
            //    connection.ExecuteStoredProcedure<int>($"{UpdateUserSpConfig.StoredProcedureName}", parameters, out outputParameters);
            //    if (outputParameters != null)
            //    {
            //        if (outputParameters.IndexOf("@rowsAffected") > -1)
            //        {
            //            rowsAffected = (int)outputParameters["@rowsAffected"].Value;
            //        }
            //    }
            //}
            return rowsAffected;

        }
        public IEnumerable<Entity.User.Rol> GetAllRoles()
        {
            IEnumerable<Entity.User.Rol> users = new List<Entity.User.Rol>();
            return users;
        }

    }
}
