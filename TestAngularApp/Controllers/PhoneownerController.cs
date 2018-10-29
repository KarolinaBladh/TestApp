using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using TestAngularApp.Models;


namespace TestAngularApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PhoneownerController : ControllerBase
    {
        private readonly PhoneOwnersContext _context;

        public PhoneownerController(PhoneOwnersContext context)
        {
            _context = context;
        }

        // GET: api/<controller>
        [HttpGet]
        public ActionResult<List<PhoneOwner>> GetAll()
        {
            return _context.PhoneOwner.ToList();
        }
    }
}
