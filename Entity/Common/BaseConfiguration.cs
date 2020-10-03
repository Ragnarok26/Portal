namespace Entity.Common
{
    /// <summary>
    /// 
    /// </summary>
    public class BaseConfiguration
    {
        /// <summary>
        /// 
        /// </summary>
        protected string cryptoKey;

        /// <summary>
        /// 
        /// </summary>
        protected string cryptoIv;

        /// <summary>
        /// 
        /// </summary>
        public AppEnvironment Environment { set; get; }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="inputDev"></param>
        /// <param name="inputQA"></param>
        /// <param name="inputProd"></param>
        /// <returns></returns>
        protected string ValidateEnvironment(string inputDev, string inputQA, string inputProd)
        {
            if (Environment == AppEnvironment.DEV)
            {
                return inputDev;
            }
            else if (Environment == AppEnvironment.QA)
            {
                return inputQA;
            }
            else if (Environment == AppEnvironment.PRODUCTION)
            {
                return inputProd;
            }
            else
            {
                return inputDev;
            }
        }
    }
}
