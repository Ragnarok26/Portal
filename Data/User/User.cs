using Data.User.Interface;
using DBConnection.Data;
using Entity.Common;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;

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

            SqlParameterCollection outputParameters = null;

            StoredProceduresConfiguration AllUsersSpConfig = Settings.Instance.DataConfiguration.StoredProcedures["GetAllUsers"];
            string ConnectionString = Settings.Instance.DataConfiguration.ConnectionString;
            using (Connection connection = new Connection(ConnectionString))
            {
                users = connection.ExecuteStoredProcedure<Entity.User.User>(AllUsersSpConfig.StoredProcedureName, null, out outputParameters);
            }
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

            using (Connection connection = new Connection(ConnectionString))
            {
                List<SqlParameter> parameters = new List<SqlParameter>
                {
                    new SqlParameter
                    {
                        SqlDbType = SqlDbType.Int,
                        Direction = ParameterDirection.Input,
                        ParameterName = "@IdUSer",
                        Value = user.FirstOrDefault().IdUser
                    },
                    new SqlParameter
                    {
                        DbType = DbType.String,
                        Direction = ParameterDirection.Input,
                        ParameterName = "@email",
                        Value = user.FirstOrDefault().Email
                    },
                    new SqlParameter
                    {
                        DbType = DbType.String,
                        Direction = ParameterDirection.Input,
                        ParameterName = "@name",
                        Value = user.FirstOrDefault().Name
                    },
                    new SqlParameter
                    {
                        DbType = DbType.String,
                        Direction = ParameterDirection.Input,
                        ParameterName = "@lastName",
                        Value = user.FirstOrDefault().LastName
                    },
                    new SqlParameter
                    {
                        DbType = DbType.String,
                        Direction = ParameterDirection.Input,
                        ParameterName = "@password",
                        Value = user.FirstOrDefault().Password
                    },
                    new SqlParameter
                    {
                        DbType = DbType.Boolean,
                        Direction = ParameterDirection.Input,
                        ParameterName = "@isActive",
                        Value = user.FirstOrDefault().IsActive
                    },                   
                    new SqlParameter
                    {
                        DbType = DbType.Boolean,
                        Direction = ParameterDirection.Input,
                        ParameterName = "@isNew",
                        Value = user.FirstOrDefault().IsNew
                    },

                    new SqlParameter
                    {
                        DbType = DbType.Int32,
                        Direction = ParameterDirection.Output,
                        ParameterName = "@rowsAffected"
                    }

                };
                connection.ExecuteStoredProcedure<int>($"{UpdateUserSpConfig.StoredProcedureName}", parameters, out outputParameters);
                if (outputParameters != null)
                {
                    if (outputParameters.IndexOf("@rowsAffected") > -1)
                    {
                        rowsAffected = (int)outputParameters["@rowsAffected"].Value;
                    }
                }
            }
            return rowsAffected;

        }
        public IEnumerable<Entity.User.Rol> GetAllRoles()
        {
            IEnumerable<Entity.User.Rol> users = new List<Entity.User.Rol>();
            return users;
        }

        public IEnumerable<Entity.User.User> Login(IEnumerable<Entity.User.User> user)
        {
            IEnumerable<Entity.User.User> users = new List<Entity.User.User>();
            int? rowsAffected = null;
            SqlParameterCollection outputParameters = null;
            StoredProceduresConfiguration GetUserLoginSpConfig = Settings.Instance.DataConfiguration.StoredProcedures["GetUser"];
            string ConnectionString = Settings.Instance.DataConfiguration.ConnectionString;
            using (Connection connection = new Connection(ConnectionString))
            {
                List<SqlParameter> parameters = new List<SqlParameter>
                {
                    new SqlParameter
                    {
                        DbType = DbType.String,
                        Direction = ParameterDirection.Input,
                        ParameterName = "@email",
                        Value = user.FirstOrDefault().Email
                    },

                    new SqlParameter
                    {
                        DbType = DbType.String,
                        Direction = ParameterDirection.Input,
                        ParameterName = "@password",
                        Value = user.FirstOrDefault().Password
                    },
                    new SqlParameter
                    {
                        DbType = DbType.Int32,
                        Direction = ParameterDirection.Output,
                        ParameterName = "@rowsAffected"
                    }
                };
                var userJson = connection.ExecuteStoredProcedure(GetUserLoginSpConfig.StoredProcedureName, parameters);
                users = JsonConvert.DeserializeObject<List<Entity.User.User>>(userJson);
                
                if (outputParameters != null)
                {
                    if (outputParameters.IndexOf("@rowsAffected") > -1)
                    {
                        rowsAffected = (int)outputParameters["@rowsAffected"].Value;
                    }
                }
            }
            return users;
        }


    }
}
