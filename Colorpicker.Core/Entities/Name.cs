namespace Colorpicker.Core.Entities
{
    public class Name
    {
        public string Value { get; set; }
        public string ClosestNamedHex { get; set; }
        public bool ExactMatchName { get; set; }
        public int Distance { get; set; }

    }
}