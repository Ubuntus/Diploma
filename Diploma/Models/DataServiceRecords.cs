using Diploma.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace Diploma.Models
{
    public class DataServiceRecords
    {
        private string pathToFileWithRecords = HttpContext.Current.Server.MapPath("Data/record.json");

        public void writeRecordsToFile(string records)
        {
            using (StreamWriter writer = new StreamWriter(pathToFileWithRecords))
            {
                writer.Write(records);
            }
        }

        public List<RecordToCard> readRecordsFromFile()
        {
            var arrayRecords = new List<RecordToCard>();
            using (StreamReader reader = new StreamReader(pathToFileWithRecords))
            {
                var strRecords = reader.ReadToEnd();
                arrayRecords = JsonConvert.DeserializeObject<List<RecordToCard>>(strRecords);
                return arrayRecords;
            }
        }

        public List<RecordToCard>GetRecords()
        {
            return readRecordsFromFile();
        }

        public void AddRecord(RecordToCard recordToCard)
        {
            var list = readRecordsFromFile();
            list.Add(recordToCard);
            var json = JsonConvert.SerializeObject(list.ToArray());
            writeRecordsToFile(json);
        }



    }
}