using System.Collections.Generic;
using System.Globalization;
using System.Resources;

namespace Entity.Common
{
    /// <summary>
    /// 
    /// </summary>
    public class DataConfiguration : BaseConfiguration
    {
        /// <summary>
        /// 
        /// </summary>
        public string ConnectionStringDev { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string ConnectionStringQA { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string ConnectionStringProduction { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string ConnectionString
        {
            get
            {
                return ValidateEnvironment(ConnectionStringDev, ConnectionStringQA, ConnectionStringProduction);
            }
        }

        /// <summary>
        /// 
        /// </summary>
        public Dictionary<string, StoredProceduresConfiguration> StoredProcedures { get; set; }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="resourceManager"></param>
        /// <param name="resourceCulture"></param>
        public void Configure(ResourceManager resourceManager, CultureInfo resourceCulture)
        {
            cryptoKey = resourceManager.GetString("CryptoKey", resourceCulture);

            cryptoIv = resourceManager.GetString("CryptoIv", resourceCulture);
        }
    }
}
