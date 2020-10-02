using System;
using System.Collections.Generic;
using System.Text;

namespace Entity.Response
{
    public class Response<T>
    {
        /// <summary>
        /// 
        /// </summary>
        public bool Success { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string Message { get; set; }

        /// <summary>
        /// 
        /// </summary>
        //public System.Net.HttpStatusCode HttpStatusCode { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public T ResponseData { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public Response()
        {
            Success = false;
            Message = string.Empty;
            //HttpStatusCode = System.Net.HttpStatusCode.NotFound;
            ResponseData = default(T);
        }
    }
}