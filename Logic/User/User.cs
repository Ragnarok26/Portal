using Data.User.Interface;
using System;
using System.Collections.Generic;
using System.Text;

namespace Logic.User
{
    public class User : Interface.IUser
    {
        /// <summary>
        /// 
        /// </summary>
        public void Dispose()
        {
        }

        public IEnumerable<Entity.User.User> GetAllUser()
        {
            IEnumerable<Entity.User.User> users = new List<Entity.User.User>();
            using (IUser data = new Data.User.User())
            {
                users = data.GetAllUser();
            }
            return users;
        }
        public int? ResetPass(IEnumerable<Entity.User.User> user)
        {
            int? rowsAffected = null;
            using (IUser data = new Data.User.User())
            {
                rowsAffected = data.ResetPass(user);
            }
            return rowsAffected;
        }

    }
}