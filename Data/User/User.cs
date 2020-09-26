using System;
using System.Collections.Generic;
using System.Text;
using Data.User.Interface;

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
        public IEnumerable<User> GetAllUser()
        { }
        public IEnumerable<User> AddUser()
        { }
        public int? UpdateUser(IEnumerable<User> user)
        {
            int? rowsAffected = null;

            return rowsAffected;
        }
        public IEnumerable<Rol> GetAllRoles()
        {
        }

    }
}
