﻿using CheraNgMvc.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CheraNgMvc.Controllers
{
    [RoutePrefix("api/CategoryApi")]
    public class CategoryApiController : ApiController
    {
        [HttpPost()]
        [Route("SearchCategories")]
        public IHttpActionResult GetSearchCategories()
        {
            IHttpActionResult ret;
            var vm = new PTCViewModel();

            vm.LoadSearchCategories();

            if (vm.SearchCategories.Count() > 0)
            {
                ret = Ok(vm.SearchCategories);
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
