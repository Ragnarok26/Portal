using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Entity.Response;
using Microsoft.AspNetCore.Mvc;
using WebApi.Controllers.Common;
using Entity.User;
using Microsoft.AspNetCore.Authorization;
using Entity.Common;

namespace WebApi.Controllers.User
{
    /// <summary>
    /// 
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : BaseController
    {
        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        // GET: api/Management/User
        [AllowAnonymous]
        [HttpGet]
        public ActionResult<Response<List<Entity.User.User>>> Get()
        {
            Response<List<Entity.User.User>> response = new Response<List<Entity.User.User>>();

            Logic.Interface.IUser userFilter = new Logic.User.User();
            try
            {
                response.Success = true;
                response.ResponseData = (List<Entity.User.User>)userFilter.GetAllUser();
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
                response.ResponseData = new List<Entity.User.User>();
                return StatusCode((int)HttpStatusCode.InternalServerError, response);
            }
            finally
            {
                response = null;
                userFilter = null;
            }
        }

        [AllowAnonymous]
        [HttpPost("Login")]
        public ActionResult<Response<IEnumerable<Entity.User.User>>> Login([FromBody] IEnumerable<Entity.User.User> user)
        {
            Response<IEnumerable<Entity.User.User>> response = new Response<IEnumerable<Entity.User.User>>();
            Logic.Interface.IUser userFilter = new Logic.User.User();
            try
            {
                response.Success = true;
                response.ResponseData = userFilter.Login(user);
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
                userFilter = null;
            }
        }

        [HttpPut]
        public ActionResult<Response<int?>> changePassword([FromBody] IEnumerable<Entity.User.User> user)
        {
            Response<int?> response = new Response<int?>();
            Logic.Interface.IUser userFilter = new Logic.User.User();
            try
            {
                response.Success = true;
                response.ResponseData = userFilter.ResetPass(user);
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
                userFilter = null;
            }
        }
    }
}