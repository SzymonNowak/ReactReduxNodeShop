using System.Collections.Generic;

namespace Burgermania.Repository
{
    public class Meal
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Price { get; set; }
        public bool IsAvaible { get; set; }
        public Category Category { get; set; }
        public MeatCategory MeatCategory { get; set; }
        public string Photo { get; set; }
        //public List<Component> Composition { get; set; }

    }
}
