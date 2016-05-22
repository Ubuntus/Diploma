using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Diploma.Models
{
    public class RecordToCard
    {
        [JsonProperty("id")]
        public int Id { get; set; }
        [JsonProperty("dateOfCreateRecord")]
        public string DateOfCreateRecord { get; set; }
        [JsonProperty("caption")]
        public string Caption { get; set; }
        [JsonProperty("description")]
        public string Description { get; set; }
        [JsonProperty("parentId")]
        public int ParentId { get; set; }
        [JsonProperty("cardId")]
        public int CardId { get; set; }
    }
}