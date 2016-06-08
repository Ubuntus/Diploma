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
    public class RecordToCardController : ApiController
    {
        [Route("getRecords")]
        [HttpGet]
        public List<RecordToCard>GetRecords()
        {
            return new DataServiceRecords().GetRecords();
        }

        [Route("addRecord")]
        [HttpPost]
        public void SaveRecord(RecordToCard record)
        {
            new DataServiceRecords().AddRecord(record);
        }
        
        [Route("editRecord")]
        [HttpPost]
        public void EditRecord(RecordToCard record)
        {
            new DataServiceRecords().EdirRecord(record);
        }  
        [Route("deleteRecord")]
        [HttpPost]
        public void DeleteRecord(RecordToCard record)
        {
            new DataServiceRecords().DeleteRecord(record);
        }
        [Route("deleteAllRecordsOfCard")]
        [HttpPost]
        public void DeleteAllRecordsOfCard(Card card)
        {
            new DataServiceRecords().DeleteAllRecordOfCard(card);
        }

             
    }
}
