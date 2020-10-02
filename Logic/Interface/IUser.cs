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

        public int? ResetPass(IEnumerable<Entity.User.User> user);
    }
}