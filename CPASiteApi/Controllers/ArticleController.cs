using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using CPASiteApi.Models;
using System.Linq;

namespace CPASiteApi.Controllers
{
    [Route("api/[controller]")]
    public class ArticleController : Controller
    {
        private readonly ArticleContext _context;
        public ArticleController(ArticleContext context)
        {
            _context = context;
        
            if(_context.ArticleList.Count() == 0)
            {
                // add initial article to test
                _context.ArticleList.Add(new Article {Id = 0, Title = "Test", Body = "Article text is here", Date = "Jan 18 2018", Source = "Source Here"});
                _context.SaveChanges();
            }
        }

        [HttpGet]
        public IEnumerable<Article> GetAll() {
            return _context.ArticleList.ToList();
        }

        [HttpGet("{id}", Name = "GetArticle")]
        public IActionResult GetById(long id)
        {
            var item = _context.ArticleList.FirstOrDefault(t => t.Id == id);
            if (item == null)
            {
                return NotFound();
            }
            return new ObjectResult(item);
        }
        [HttpPost]
        public IActionResult Create([FromBody] Article article)
        {
            if (article == null)
            {
                return BadRequest();
            }
            var newId = _context.ArticleList.Last().Id + 1;
            article.Id = newId;
            _context.ArticleList.Add(article);
            _context.SaveChanges();

            return CreatedAtRoute("GetArticle", new {id = article.Id}, article);
        }
    }

    
}