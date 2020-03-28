using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Colorpicker.Core.Entities;
using Colorpicker.Core.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ColorPicker.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ColorApiController : ControllerBase
    {
        private readonly IColorApiService _colorApiService;

        public ColorApiController(IColorApiService colorApiService)
        {
            _colorApiService = colorApiService;
        }
        // GET: ColorApi
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: ColorApi/hex/aaabbb
        
        [HttpGet("Hex/{id}", Name = "Hex")]
        public IActionResult Hex(string id)
        {
            var res = _colorApiService.GetFromHex(id);
            
            
            return Ok(res);
        }
        // GET: ColorApi/rgb/0,71,171
        [HttpGet("Rgb/{rgb}", Name = "Rgb")]
        public IActionResult Rgb(string rgb)
        {
            var res = _colorApiService.GetFromRgb(rgb);


            return Ok(res);
        }
        // GET: ColorApi/hsl/215,100%,34%
        [HttpGet("Hsl/{hsl}", Name = "Hsl")]
        public IActionResult Hsl(string hsl)
        {
            var res = _colorApiService.GetFromHsl(hsl);


            return Ok(res);
        }
        // GET: ColorApi/cmyk/100,58,0,33
        [HttpGet("Cmyk/{cmyk}", Name = "Cmyk")]
        public IActionResult Cmyk(string cmyk)
        {
            var res = _colorApiService.GetFromCmyk(cmyk);


            return Ok(res);
        }


    }
}
