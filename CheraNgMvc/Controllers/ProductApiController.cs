using CheraNgMvc.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CheraNgMvc.Controllers
{
    public class ProductApiController : ApiController
    {
        public IHttpActionResult Get()
        {
            IHttpActionResult ret;
            PTCViewModel vm = new PTCViewModel();

            vm.Get();
            if (vm.Products.Count() > 0)
            {
                ret = Ok(vm.Products);
            }
            else if (vm.LastException != null)
            {
                ret = BadRequest(vm.Message);
            }
            else
            {
                ret = NotFound();
            }

            return ret;
        }
    }
}
