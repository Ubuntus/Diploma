using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Diploma.Models
{
    public class Chapter
    {
        [JsonProperty("id")]
        public int Id { get; set; }
        [JsonProperty("caption")]
        public string Caption { get; set; }
    }
}