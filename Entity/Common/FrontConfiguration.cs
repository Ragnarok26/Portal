using System.Collections.Generic;
using System.Globalization;
using System.Resources;
using System.Linq;

namespace Entity.Common
{
    /// <summary>
    /// 
    /// </summary>
    public class FrontConfiguration : BaseConfiguration
    {
        /// <summary>
        /// 
        /// </summary>
        public bool UseLocalApi { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string WebApiUrlLocal { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string WebApiUrlDev { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string WebApiUrlQA { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string WebApiUrlProduction { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string WebApiUrl
        {
            get
            {
                if (UseLocalApi)
                {
                    return Crypto.Decrypt(WebApiUrlLocal, cryptoKey, cryptoIv);
                }
                return ValidateEnvironment(WebApiUrlDev, WebApiUrlQA, WebApiUrlProduction);
            }
        }

        /// <summary>
        /// 
        /// </summary>
        public string AdfsClientIdDev { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string AdfsClientIdQA { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string AdfsClientIdProduction { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string AdfsClientId
        {
            get
            {
                return ValidateEnvironment(AdfsClientIdDev, AdfsClientIdQA, AdfsClientIdProduction);
            }
        }

        /// <summary>
        /// 
        /// </summary>
        public string AdfsLoginUrlDev { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string AdfsLoginUrlQA { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string AdfsLoginUrlProduction { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string AdfsLoginUrl
        {
            get
            {
                return ValidateEnvironment(AdfsLoginUrlDev, AdfsLoginUrlQA, AdfsLoginUrlProduction);
            }
        }

        /// <summary>
        /// 
        /// </summary>
        public string AdfsResourceDev { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string AdfsResourceQA { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string AdfsResourceProduction { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string AdfsResource
        {
            get
            {
                return ValidateEnvironment(AdfsResourceDev, AdfsResourceQA, AdfsResourceProduction);
            }
        }

        private string adfsResponseType;
        /// <summary>
        /// 
        /// </summary>
        public string AdfsResponseType
        {
            get
            {
                return Crypto.Decrypt(adfsResponseType, cryptoKey, cryptoIv);
            }
            set
            {
                adfsResponseType = value;
            }
        }

        /// <summary>
        /// 
        /// </summary>
        public Dictionary<string, string> Services { get; set; }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="resourceManager"></param>
        /// <param name="resourceCulture"></param>
        public void Configure(ResourceManager resourceManager, CultureInfo resourceCulture)
        {
            cryptoKey = resourceManager.GetString("CryptoKey", resourceCulture);

            cryptoIv = resourceManager.GetString("CryptoIv", resourceCulture);

            if (Services != null)
            {
                if (Services.Count > 0)
                {
                    Services = Services.ToDictionary(item => item.Key, item => Crypto.Decrypt(item.Value, cryptoKey, cryptoIv));
                }
            }
        }
    }
}
