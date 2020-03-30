using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.SqlServer;
namespace Burgermania.Repository
{
    public class BurgermaniaContext : DbContext
    {
        public BurgermaniaContext(DbContextOptions<BurgermaniaContext> options) : base(options)
        {

        }
        public DbSet<Category> Category { get; set; }
        public DbSet<Component> Component { get; set; }
        public DbSet<Meal> Meal { get; set; }
        public DbSet<MealAddon> MealAddon { get; set; }
        public DbSet<MeatCategory> MeatCategory { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            // options.UseSqlServer("Server=.\\SQLEXPRESS;Database=Burgermania;Trusted_Connection=True;");

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<MeatCategory>()
                .HasMany(category => category.Meals)
                .WithOne(meal => meal.MeatCategory);

           modelBuilder.Entity<Category>()
              .HasMany(category => category.Meals)
              .WithOne(meal => meal.Category);
        }
    }

}
