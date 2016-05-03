using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace Diploma.Models
{
    public class DataServiceCards
    {
        private string pathToFileWithCards = HttpContext.Current.Server.MapPath("Data/card.json");

        public void writeCardsToFile(string cards)
        {
            using(StreamWriter writer = new StreamWriter(pathToFileWithCards))
            {
                writer.Write(cards);
            }
        }

        public  List<Card> readCardsFromFile()
        {
            var arrayCards = new List<Card>();
            using (StreamReader reader = new StreamReader(pathToFileWithCards))
            {
                var strCards = reader.ReadToEnd();
                arrayCards = JsonConvert.DeserializeObject<List<Card>>(strCards);
                return arrayCards;
            }
                
        }

        public List<Card>GetCards()
        {
            return readCardsFromFile();
        }

        public void AddCard(Card card)
        {
            var list = readCardsFromFile();
            list.Add(card);
            var json = JsonConvert.SerializeObject(list.ToArray());
            writeCardsToFile(json);
        }
    }
}