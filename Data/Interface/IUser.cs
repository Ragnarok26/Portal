using System;
using System.Collections.Generic;

namespace Data.User.Interface
{
    public interface IUser : IDisposable
    {
        IEnumerable<Entity.User.User> GetAllUser();
        IEnumerable<Entity.User.User> AddUser();
        int? ResetPass(Entity.User.User user);

        IEnumerable<Entity.User.User> Login(IEnumerable<Entity.User.User> user);
        IEnumerable<Entity.User.Rol> GetAllRoles();

        public int? Register(Entity.User.User user);

    }
}
