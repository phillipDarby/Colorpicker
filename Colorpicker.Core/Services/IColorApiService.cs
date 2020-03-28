using Colorpicker.Core.Entities;
using System.Threading.Tasks;

namespace Colorpicker.Core.Services
{
    public interface IColorApiService
    {
        Result GetFromHex(string hex);
        Result GetFromRgb(string rgb);
        Result GetFromHsl(string hsl);
        Result GetFromCmyk(string cmyk);
    }
}