using Diploma.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Diploma.Controllers
{
    [RoutePrefix("api")]
    public class ChapterController : ApiController
    {
        [Route("getChapers")]
        [HttpGet]
        public List<Chapter>GetChapters()
        {
            return new DataServiceChapters().GetChapters();
        }

        [Route("addChapter")]
        [HttpPost]
        public void SaveChapter(Chapter chapter)
        {
            new DataServiceChapters().AddChapter(chapter);
        }
    }
}
