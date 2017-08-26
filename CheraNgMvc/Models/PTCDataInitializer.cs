using System;
using System.Collections.Generic;
using System.Data.Entity;

namespace PTC.Models
{
    internal class PTCDataInitializer : DropCreateDatabaseAlways<PTCData>
    {
        protected override void Seed(PTCData context)
        {
            InitData(context);
        }

        private void InitData(PTCData context)
        {   
            //
            // Add categories and products
            //
            context.Categories.AddRange(new[] 
            {
                new Category {
                    CategoryName = "Shoes",
                    Products = new List<Product>
                    {
                        new Product {IntroductionDate = DateTime.Now, ProductName = "Nike Mens Running", Price = 100, Url=@"www.nike.com" },
                        new Product {IntroductionDate = DateTime.Now, ProductName = "Nike Womens Running", Price = 100, Url=@"www.nike.com"  },

                        new Product {IntroductionDate = DateTime.Now, ProductName = "Rhino Mens Classic", Price = 250, Url=@"www.rhinoshoes.com"  }                        
                    }
                },
                new Category {
                    CategoryName = "Clothes",
                    Products = new List<Product>
                    {
                        new Product {IntroductionDate = DateTime.Now, ProductName = "Nike Mens Running", Price = 100, Url=@"www.nike.com"  },
                        new Product {IntroductionDate = DateTime.Now, ProductName = "Nike Womens Running", Price = 100, Url=@"www.nike.com"  },

                        new Product {IntroductionDate = DateTime.Now, ProductName = "Adidas Mens", Price = 75, Url=@"www.adidas.com"  },
                        new Product {IntroductionDate = DateTime.Now, ProductName = "Adidas Womens", Price = 100, Url=@"www.adidas.com"  }
                    }
                }
            });

            context.SaveChanges();
        }
    }
}