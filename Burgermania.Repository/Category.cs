using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Burgermania.Repository
{
    public class Category
    {
        public int Id { get; set; }
        public string Title { get; set; }
        [JsonIgnore]
        public List<Meal> Meals { get; set; }

    }
}
