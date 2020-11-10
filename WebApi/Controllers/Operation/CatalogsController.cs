using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Entity.Response;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WebApi.Controllers.Common;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CatalogsController : BaseController
    {
        [AllowAnonymous]
        [HttpGet]
        public ActionResult<Response<object>> Get([FromHeader] IEnumerable<string> CatalogNames, [FromHeader] IEnumerable<int> CatalogIds)
        {
            Dictionary<string, int> CatalogKeys = new Dictionary<string, int>();
            for (int i = 0; i < CatalogNames.Count(); i++)
            {
                CatalogKeys.Add(CatalogNames.ElementAt(i), CatalogIds.ElementAt(i));
            }
            Response<object> response = new Response<object>();
            System.Data.DataSet dataSet = new System.Data.DataSet();
            Logic.Interface.ICatalogs catalogFilter = new Logic.Operation.Catalogs();
            try
            {
                response.Success = true;
                response.ResponseData = catalogFilter.GetCatalogs(CatalogKeys);
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
                response.ResponseData = new object();
                return StatusCode((int)HttpStatusCode.InternalServerError, response);
            }
            finally
            {
                response = null;
                catalogFilter = null;
                dataSet = null;
            }
        }
    }
}
