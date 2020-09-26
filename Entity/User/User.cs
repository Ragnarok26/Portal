using System;
using System.Collections.Generic;
using System.Text;

namespace Entity.User
{
    /// <summary>
    /// User class
    /// </summary>
    public class User
    {
        /// <summary>
        /// 
        /// </summary>
        public int idUser { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string name { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string lastName { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string email { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string password { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public bool isActive { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public bool isNew { get; set; }

        public Rol rol { get; set; }
    }
}
