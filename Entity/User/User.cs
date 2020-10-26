using Entity.Operation;
using System;
using System.Collections.Generic;
using System.Text;

namespace Entity.User
{
    /// <summary>
    /// User class include RFC by company and Rol
    /// </summary>
    public class User
    {
        /// <summary>
        /// 
        /// </summary>
        public int IdUser { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string Name { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string LastName { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string Email { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string Password { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public bool IsActive { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public bool IsNew { get; set; }

       

        public List<Rol> Rol { get; set; }
    }
}
