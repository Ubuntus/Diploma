using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Diploma.Models
{
    public class Card
    {
        [JsonProperty("id")]
        public int Id { get; set; }
        [JsonProperty("fname")]
        public string FName { get; set; }
        [JsonProperty("sname")]
        public string SName { get; set; }
        [JsonProperty("thname")]
        public string ThName { get; set; }
        [JsonProperty("address")]
        public string Address { get; set; }
        [JsonProperty("relationshipStatus")]
        public string RelationshipStatus { get; set; }
        [JsonProperty("university")]
        public string University { get; set; }
        [JsonProperty("sex")]
        public string Sex { get; set; }
        [JsonProperty("birthDate")]
        public string BirthDate { get; set; }
        [JsonProperty("createdDate")]
        public string CreatedDate { get; set; }

    }
}