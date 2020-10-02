using System;
using System.Collections.Generic;

namespace Data.User.Interface
{
    public interface IUser : IDisposable
    {
        IEnumerable<Entity.User.User> GetAllUser();
        IEnumerable<Entity.User.User> AddUser();
        int? ResetPass(IEnumerable<Entity.User.User> user);
        IEnumerable<Entity.User.Rol> GetAllRoles();
    }
}
