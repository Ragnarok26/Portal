using System;
using System.Collections.Generic;
using System.Globalization;
using System.Resources;
using System.Text;

namespace Entity.Common
{ 
    public class Settings
    {
        /// <summary>
        /// 
        /// </summary>
        public static Settings Instance { set; get; }

        /// <summary>
        /// 
        /// </summary>
        public string Env { get; set; }

        private AppEnvironment environment;
        /// <summary>
        /// 
        /// </summary>
        public AppEnvironment Environment
        {
            get
            {
                Enum.TryParse(Env.ToUpper(), out environment);
                return environment;
            }
        }

       
        /// <summary>
        /// 
        /// </summary>
        public DataConfiguration DataConfiguration { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public FrontConfiguration FrontConfiguration { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public void Configure(ResourceManager resourceManager, CultureInfo resourceCulture)
        {
            if (DataConfiguration != null)
            {
                DataConfiguration.Environment = Environment;
                DataConfiguration.Configure(resourceManager, resourceCulture);
            }
            if (FrontConfiguration != null)
            {
                FrontConfiguration.Environment = Environment;
                FrontConfiguration.Configure(resourceManager, resourceCulture);
            }
            
            Instance = this;
        }
    }
}
