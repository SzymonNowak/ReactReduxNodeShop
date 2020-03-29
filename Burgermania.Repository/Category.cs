using System.Collections.Generic;

namespace Burgermania.Repository
{
    public class Category
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public List<Meal> Meals { get; set; }

    }
}
