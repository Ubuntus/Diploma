using Diploma.Models;
using System.Collections.Generic;
using System.Web.Http;

namespace Diploma.Controllers
{
    [RoutePrefix("api")]
    public class HomeController : ApiController
    {
        [Route("getCards")]
        [HttpGet]
        public List<Card> GetCards()
        {
            return new DataServiceCards().GetCards();
        }

        [Route("addCard")]
        [HttpPost]
        public void SaveCard(Card card)
        {
            new DataServiceCards().AddCard(card);
        }

        [Route("deleteCard")]
        [HttpPost]
        public void DeleteCard(Card card)
        {
            new DataServiceCards().DeleteCard(card);
        }
        
        
    }
}
