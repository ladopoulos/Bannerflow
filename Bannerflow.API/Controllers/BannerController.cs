using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Bannerflow.Core.Entities;
using Bannerflow.Core.Interfaces;
using Bannerflow.Infrastructure.Data.MongoDbRepository.DataModels;
using Microsoft.AspNetCore.Mvc;

namespace Bannerflow.API.Controllers
{
    [Route("api/[controller]")]
    public class BannerController : Controller
    {
        private IBannerService _service;

        public BannerController(IBannerService service)
        {
            _service = service;
        }

        // GET api/banner
        [HttpGet]
        public IEnumerable<Banner> AllBanners()
        {

            return _service.GetBanners();
        }

        // GET api/banner/5b8d32233d13355ab086110f
        [HttpGet("{id}", Name = "BannerById")]
        public IActionResult BannerById(string id)
        {
            var banner = _service.GetBanner(id);

            if (banner == null)
                return NotFound();

            return Ok(banner);
        }

        // POST api/banner
        [HttpPost]
        public IActionResult CreateBanner([FromBody]Banner banner)
        {
            try
            {
                if (banner == null)
                    return BadRequest("Banner is null");

                _service.CreateBanner(banner);
                return Ok();
            }
            catch (ArgumentException e)
            {
                return StatusCode(500, e.Message);
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal error");
            }
        }

        // PUT api/banner/5b8d32233d13355ab086110f
        [HttpPut]
        public IActionResult UpdateBanner([FromBody]Banner banner)
        {
            try
            {
                if (banner == null)
                    return BadRequest("Banner is null");
                
                _service.UpdateBanner(banner);

                return NoContent();
            }
            catch (ArgumentException e)
            {
                return StatusCode(500, e.Message);
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal error");
            }

        }

        // DELETE api/banner/5b8d32233d13355ab086110f
        [HttpDelete("{id}")]
        public IActionResult DeleteBanner(string id)
        {
            try
            {
                _service.DeleteBanner(id);
                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal error");
            }
        }

        // GET api/banner/5b8d32233d13355ab086110f/html
        [Produces("text/html")]
        [HttpGet("Html/{id}")] // Matches '/Banner/Html/{id}'
        public IActionResult Html(string id)
        {
            try
            {
                var banner = _service.GetBanner(id);

                if (banner == null)
                    return NotFound();

                _service.CreateBanner(banner);
                return Ok(banner.Html);
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal error");
            }
        }
    }
}
