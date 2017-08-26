using CheraNgMvc.ViewModels;
using PTC;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CheraNgMvc.Controllers
{
    [RoutePrefix("api/ProductApi")]
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

        [HttpPost]
        [Route("Search")]
        public IHttpActionResult Search([FromBody]ProductSearch search)
        {
            IHttpActionResult ret;
            PTCViewModel vm = new PTCViewModel();

            vm.SearchEntity = search;
            vm.Search();
            if (vm.LastException != null)
            {
                ret = BadRequest(vm.Message);
            }
            else
            {
                ret = Ok(vm.Products);
            }

            return ret;
        }
    }
}
