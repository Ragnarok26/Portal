using System;
using System.Collections.Generic;
using System.Text;
using System.Collections.Generic;

namespace Data.User.Interface
{
    public interface IUser
    {
        IEnumerable<User> GetAllUser();
        IEnumerable<User> AddUser();
        int? UpdateUser(IEnumerable<User> user);
        IEnumerable<Rol> GetAllRoles();


    }
}
