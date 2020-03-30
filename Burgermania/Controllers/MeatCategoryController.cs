using Burgermania.Repository;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace Burgermania.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MeatCategoryController : ControllerBase
    {
        public MeatCategoryController(BurgermaniaContext context)
        {
            _context = context;
        }

        private readonly BurgermaniaContext _context;

        [HttpGet]
        public List<MeatCategory> Get()
        {
            return _context.MeatCategory.ToList();
        }

        [HttpGet("{id}")]

        public IActionResult GetFirstElement(int id)
        {

            var elementFromDataBase = _context.MeatCategory.FirstOrDefault(meatCategory => meatCategory.Id == id);
            if (elementFromDataBase == null)
            {
                return NotFound();
            }
            return Ok(elementFromDataBase);


        }

        [HttpPut("{id}")]
        public object Update(int id, MeatCategory meatCategoryToUpdate)
        {
            var elementFromDataBase = _context.MeatCategory.FirstOrDefault(meatCategory => meatCategory.Id == id);
            if (elementFromDataBase == null)
            {
                return NotFound();
            }
            if(meatCategoryToUpdate.Id != id)
            {
                return new { error = "zjebalo sie "};
            }
            elementFromDataBase.Title = meatCategoryToUpdate.Title;
            _context.SaveChanges();
            return new { passs = "zaktualizowanao" };
        }


        [HttpPost]
        public void AddMeatCategory(MeatCategory meatCategory)
        {
            _context.MeatCategory.Add(meatCategory);
            _context.SaveChanges();
        }
        [HttpDelete]
        public IActionResult RemoveMeatCategory(MeatCategory meatCategory) {
            var elementFromDataBase = _context.MeatCategory.FirstOrDefault(x => x.Id == meatCategory.Id);
            if (elementFromDataBase == null)
            {
                return NotFound();
            }
            _context.MeatCategory.Remove(elementFromDataBase);
            _context.SaveChanges();
            return Ok(elementFromDataBase);

        }


    }
}
