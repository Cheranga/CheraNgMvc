using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

/*
 * TODO: Check these after exercise is completed
 * 
 * 1.   Check EF related logic
 * 2.   Http.ModelStateDictionary -> Mvc.ModelStateDictionary logic (why, if the postback is done by javascript why does it go through the mvc pipeline?)
 * 3.   Nested routes
 * 4.   Case "insensitive" path declrations in the angular router
 * 5.   How to debug typescript in VS2015
 * 
 * */

namespace CheraNgMvc.Controllers
{
    public class ProductController : Controller
    {
        public ActionResult Product()
        {
            return View();
        }
    }
}