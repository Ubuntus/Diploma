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

        private string pathToReserveChapterFile = HttpContext.Current.Server.MapPath("Data/rst_chapter.json");
        //write logs method
        private void writeLogsToFile(string message)
        {
            var date = DateTime.Now;
            File.AppendAllText(pathToLogFile,date + message);
        }

        // write reserve
        public void writeChaptersToReserve(string chapters)
        {
            using (StreamWriter writer = new StreamWriter(pathToReserveChapterFile))
            {
                writer.Write(chapters);
            }
        }
        //write chapters
        public void writeChapersToFile(string chapters)
        {
            using (StreamWriter writer = new StreamWriter(pathToFileWithChapers))
            {
                writer.Write(chapters);
            }

        }
        //read reserve chapters
        public List<Chapter> readChaptersFromreserveFile()
        {
            var arrayChapters = new List<Chapter>();
            using (StreamReader reader = new StreamReader(pathToReserveChapterFile))
            {
                var strChapters = reader.ReadToEnd();
                arrayChapters = JsonConvert.DeserializeObject<List<Chapter>>(strChapters);
                return arrayChapters;
            }
        }
        //read chapters
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
            //log
            var listForLog = new List<Chapter>();
            listForLog.Add(chapter);
            var message = JsonConvert.SerializeObject(listForLog.ToArray());
            writeLogsToFile(" new chapter was created" + message);
            //add chapter
            var list = readChaptersFromFile();
            list.Add(chapter);
            var json = JsonConvert.SerializeObject(list.ToArray());
            writeChapersToFile(json);
            //add reserve chapter
            var rst_list = readChaptersFromreserveFile();
            rst_list.Add(chapter);
            var rst_json = JsonConvert.SerializeObject(rst_list.ToArray());
            writeChaptersToReserve(rst_json);
        }
    }
}