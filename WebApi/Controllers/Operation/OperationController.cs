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
    public class OperationController : BaseController
    {
        [AllowAnonymous]
        [HttpPost("Gestion")]
        public ActionResult<Response<IEnumerable<Entity.Operation.Gestion>>> Gestion([FromBody] IEnumerable<Entity.User.User> data)
        {
            Response<IEnumerable<Entity.Operation.Gestion>> response = new Response<IEnumerable<Entity.Operation.Gestion>>();
            Logic.Interface.Operation.IGestion gestionFilter = new Logic.Operation.Gestion();
            try
            {
                response.Success = true;
                response.ResponseData = gestionFilter.GetGestion(data);
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
                response.ResponseData = null;
                return StatusCode((int)HttpStatusCode.InternalServerError, response);
            }
            finally
            {
                response = null;
                gestionFilter = null;
            }
        }

    }
}
