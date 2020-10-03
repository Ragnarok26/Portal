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

        IEnumerable<Entity.User.User> Login(IEnumerable<Entity.User.User> user);

        public int? ResetPass(IEnumerable<Entity.User.User> user);
    }
}