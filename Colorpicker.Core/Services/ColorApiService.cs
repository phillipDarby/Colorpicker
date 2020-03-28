using Colorpicker.Core.Entities;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace Colorpicker.Core.Services
{
    public class ColorApiService : IColorApiService
    {
        private readonly HttpClient _client = new HttpClient();

        public Result GetFromHex(string hex)
        {
            var uri = new Uri($"http://www.thecolorapi.com/id?hex={hex}");
            using (var _client = new HttpClient())
            {

                var result = _client.GetAsync(uri).Result;

                if (result.IsSuccessStatusCode)
                {
                    var responseContent = result.Content;
                    string responseString = responseContent.ReadAsStringAsync().Result;
                    JToken token = JObject.Parse(responseString);

                    var res = new Result()
                    {
                        RequestValue = hex,
                        Image = new Image() { Bare = token.SelectToken("image").SelectToken("bare").ToString(), Named = token.SelectToken("image").SelectToken("named").ToString() },
                        Name = new Name()
                        {
                            Value = token.SelectToken("name").SelectToken("value").ToString(),
                            ClosestNamedHex = token.SelectToken("name").SelectToken("closest_named_hex").ToString(),
                            ExactMatchName = Convert.ToBoolean(token.SelectToken("name").SelectToken("exact_match_name").ToString()),
                            Distance = Convert.ToInt32(token.SelectToken("name").SelectToken("distance").ToString())
                        }
                    };

                    return res;

                }
                return new Result();
            }







        }

        public Result GetFromRgb(string rgb)
        {
            var uri = new Uri($"http://www.thecolorapi.com/id?rgb={rgb}");
            using (var _client = new HttpClient())
            {

                var result = _client.GetAsync(uri).Result;

                if (result.IsSuccessStatusCode)
                {
                    var responseContent = result.Content;
                    string responseString = responseContent.ReadAsStringAsync().Result;
                    JToken token = JObject.Parse(responseString);

                    var res = new Result()
                    {
                        RequestValue = rgb,
                        Image = new Image() { Bare = token.SelectToken("image").SelectToken("bare").ToString(), Named = token.SelectToken("image").SelectToken("named").ToString() },
                        Name = new Name()
                        {
                            Value = token.SelectToken("name").SelectToken("value").ToString(),
                            ClosestNamedHex = token.SelectToken("name").SelectToken("closest_named_hex").ToString(),
                            ExactMatchName = Convert.ToBoolean(token.SelectToken("name").SelectToken("exact_match_name").ToString()),
                            Distance = Convert.ToInt32(token.SelectToken("name").SelectToken("distance").ToString())
                        }
                    };

                    return res;

                }
                return new Result();
            }
        }
        public Result GetFromHsl(string hsl)
        {
            var uri = new Uri($"http://www.thecolorapi.com/id?hsl={hsl}");
            using (var _client = new HttpClient())
            {

                var result = _client.GetAsync(uri).Result;

                if (result.IsSuccessStatusCode)
                {
                    var responseContent = result.Content;
                    string responseString = responseContent.ReadAsStringAsync().Result;
                    JToken token = JObject.Parse(responseString);

                    var res = new Result()
                    {
                        RequestValue = hsl,
                        Image = new Image() { Bare = token.SelectToken("image").SelectToken("bare").ToString(), Named = token.SelectToken("image").SelectToken("named").ToString() },
                        Name = new Name()
                        {
                            Value = token.SelectToken("name").SelectToken("value").ToString(),
                            ClosestNamedHex = token.SelectToken("name").SelectToken("closest_named_hex").ToString(),
                            ExactMatchName = Convert.ToBoolean(token.SelectToken("name").SelectToken("exact_match_name").ToString()),
                            Distance = Convert.ToInt32(token.SelectToken("name").SelectToken("distance").ToString())
                        }
                    };

                    return res;

                }
                return new Result();
            }
        }
        public Result GetFromCmyk(string cmyk)
        {
            var uri = new Uri($"http://www.thecolorapi.com/id?cmyk={cmyk}");
            using (var _client = new HttpClient())
            {

                var result = _client.GetAsync(uri).Result;

                if (result.IsSuccessStatusCode)
                {
                    var responseContent = result.Content;
                    string responseString = responseContent.ReadAsStringAsync().Result;
                    JToken token = JObject.Parse(responseString);

                    var res = new Result()
                    {
                        RequestValue = cmyk,
                        Image = new Image() { Bare = token.SelectToken("image").SelectToken("bare").ToString(), Named = token.SelectToken("image").SelectToken("named").ToString() },
                        Name = new Name()
                        {
                            Value = token.SelectToken("name").SelectToken("value").ToString(),
                            ClosestNamedHex = token.SelectToken("name").SelectToken("closest_named_hex").ToString(),
                            ExactMatchName = Convert.ToBoolean(token.SelectToken("name").SelectToken("exact_match_name").ToString()),
                            Distance = Convert.ToInt32(token.SelectToken("name").SelectToken("distance").ToString())
                        }
                    };

                    return res;

                }
                return new Result();
            }
        }
    }
}
