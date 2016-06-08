using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace Diploma.Models
{
    public class DataServiceChapters
    {
        private string pathToFileWithChapers = HttpContext.Current.Server.MapPath("Data/chapter.json");

        private string pathToLogFile = HttpContext.Current.Server.MapPath("Data/logs.log");
        //write logs method
        private void writeLogsToFile(string message)
        {
            var date = DateTime.Now;
            File.AppendAllText(pathToLogFile,date + message);
        }

        public void writeChapersToFile(string chapters)
        {
            using (StreamWriter writer = new StreamWriter(pathToFileWithChapers))
            {
                writer.Write(chapters);
            }
        }

        public List<Chapter> readChaptersFromFile()
        {
            var arrayChapters = new List<Chapter>();
            using (StreamReader reader = new StreamReader(pathToFileWithChapers))
            {
                var strChapters = reader.ReadToEnd();
                arrayChapters = JsonConvert.DeserializeObject<List<Chapter>>(strChapters);
                return arrayChapters;
            }
        }

        public List<Chapter>GetChapters()
        {
            return readChaptersFromFile();
        }

        public void AddChapter(Chapter chapter)
        {
            var listForLog = new List<Chapter>();
            listForLog.Add(chapter);
            var message = JsonConvert.SerializeObject(listForLog.ToArray());
            writeLogsToFile(" new chapter was created" + message);

            var list = readChaptersFromFile();
            list.Add(chapter);
            var json = JsonConvert.SerializeObject(list.ToArray());
            writeChapersToFile(json);
        }
    }
}