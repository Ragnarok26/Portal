using System;
using System.Collections.Generic;
using System.Text;
using Entity.User;
namespace Logic.Interface
{
    public interface IUser : IDisposable
    {
        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        IEnumerable<Entity.User.User> GetAllUser();

        IEnumerable<Entity.User.User> Login(string email, string password);
        public int? Register(Entity.User.User user);

        public int? ResetPass(Entity.User.User user);

        public IEnumerable<Entity.User.User> Auth(IEnumerable<Entity.User.User> user);
    }
}