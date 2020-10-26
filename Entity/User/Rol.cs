using Entity.Operation;
using System;
using System.Collections.Generic;
using System.Text;

namespace Entity.User
{
    /// <summary>
    /// Rol class
    /// </summary>
    public class Rol
    {
        /// <summary>
        /// 
        /// </summary>
        public int IdRol { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string Description { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public bool IsActive { get; set; }

        public List<RFC> Rfc { get; set; }
    }
}
