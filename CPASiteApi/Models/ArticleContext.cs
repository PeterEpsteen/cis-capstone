using Microsoft.EntityFrameworkCore;

namespace CPASiteApi.Models
{
    public class ArticleContext : DbContext
    {
        public ArticleContext(DbContextOptions<ArticleContext> options)
        : base(options)
        {

        }
        public DbSet<Article> ArticleList {
            get; set;
        }
    }
}