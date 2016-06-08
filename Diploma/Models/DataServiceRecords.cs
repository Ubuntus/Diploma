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

        private string pathToLogsFile = HttpContext.Current.Server.MapPath("Data/logs.log");
        //write logs method
        private void writeLogsToFile(string message)
        {
            var date = DateTime.Now;
            File.AppendAllText(pathToLogsFile, date + message);
        }

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
            var listForLog = new List<RecordToCard>();
            listForLog.Add(recordToCard);
            var message = JsonConvert.SerializeObject(listForLog.ToArray());
            writeLogsToFile(" added new record " + message);

            var list = readRecordsFromFile();
            list.Add(recordToCard);
            var json = JsonConvert.SerializeObject(list.ToArray());
            writeRecordsToFile(json);
        }

        public void EdirRecord(RecordToCard record)
        {
            var listForLogs = new List<RecordToCard>();
            listForLogs.Add(record);
            var message = JsonConvert.SerializeObject(listForLogs.ToArray());
            writeLogsToFile(" edited the record " + message);

            var arrayRecords = readRecordsFromFile();
            var currentRecord =  arrayRecords.Where(p => p.Id == record.Id).SingleOrDefault();
            arrayRecords.Remove(currentRecord);
            arrayRecords.Add(record);
            var json = JsonConvert.SerializeObject(arrayRecords.ToArray());
            writeRecordsToFile(json);
        }

        public void DeleteRecord(RecordToCard record)
        {
            var listForLogs = new List<RecordToCard>();
            listForLogs.Add(record);
            var message = JsonConvert.SerializeObject(listForLogs.ToArray());
            writeLogsToFile(" deleted record " + message);

            var arrayRecords = readRecordsFromFile();
            var currentRecord = arrayRecords.Where(p => p.Id == record.Id).SingleOrDefault();
            arrayRecords.Remove(currentRecord);
            var json = JsonConvert.SerializeObject(arrayRecords.ToArray());
            writeRecordsToFile(json);
        }

        public void DeleteAllRecordOfCard(Card card)
        {
            var arrayRecords = readRecordsFromFile();
            var newArrayRecord = arrayRecords.Where(p => p.CardId != card.Id).ToList();

            var newArrayForLogs = arrayRecords.Where(d => d.CardId == card.Id).ToList();
            var message = JsonConvert.SerializeObject(newArrayForLogs.ToArray());
            writeLogsToFile(" deletd records " + message);

            var json = JsonConvert.SerializeObject(newArrayRecord.ToArray());
            writeRecordsToFile(json);
        }


    }
}