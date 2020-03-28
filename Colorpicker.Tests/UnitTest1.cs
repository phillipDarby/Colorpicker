using Colorpicker.Core.Services;
using System;
using Xunit;

namespace Colorpicker.Tests
{
    public class UnitTest1
    {
        [Fact]
        public void Test1()
        {
            var sut = new ColorApiService();
            var res = sut.GetFromHex("ABCDEF");

            Assert.False(res.Name.ExactMatchName);
            Assert.Equal("Cornflower", res.Name.Value);
            
        }
        [Fact]
        public void Test2()
        {
            var sut = new ColorApiService();
            var res = sut.GetFromRgb("0,71,171");

            Assert.True(res.Name.ExactMatchName);
            Assert.Equal("Cobalt", res.Name.Value);

        }
        [Fact]
        public void Test3()
        {
            var sut = new ColorApiService();
            var res = sut.GetFromHsl("215,100%,34%");

            Assert.False(res.Name.ExactMatchName);
            Assert.Equal("Cobalt", res.Name.Value);

        }
        [Fact]
        public void Test4()
        {
            var sut = new ColorApiService();
            var res = sut.GetFromCmyk("100,58,0,33");

            Assert.False(res.Name.ExactMatchName);
            Assert.Equal("Cobalt", res.Name.Value);

        }
    }
}
