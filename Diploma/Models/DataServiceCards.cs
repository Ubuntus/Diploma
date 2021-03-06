﻿using Newtonsoft.Json;
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

        private string pathToLogFile = HttpContext.Current.Server.MapPath("Data/logs.log");
        //path to reserve
        private string pathToReserveCardsFile = HttpContext.Current.Server.MapPath("Data/rst_cards.json");

        private void writeLogToFile(string stringWithLog)
        {
            var dateNow = DateTime.Now;
            File.AppendAllText(pathToLogFile, dateNow + stringWithLog);
        }
        //write cards to reserve storage
        public void writeCardsToReserveFile(string cards)
        {
            using (StreamWriter writer = new StreamWriter(pathToReserveCardsFile))
            {
                writer.Write(cards);
            }
        }

        public void writeCardsToFile(string cards)
        {
            using(StreamWriter writer = new StreamWriter(pathToFileWithCards))
            {
                writer.Write(cards);
            }
        }
        //read from reserve file with cards
        public List<Card> readCardsFromReserveFile()
        {
            var arrayCards = new List<Card>();
            using (StreamReader reader = new StreamReader(pathToReserveCardsFile))
            {
                var strCards = reader.ReadToEnd();
                arrayCards = JsonConvert.DeserializeObject<List<Card>>(strCards);
                return arrayCards;
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
            var listToLog = new List<Card>();
            listToLog.Add(card);
            list.Add(card);
            var json = JsonConvert.SerializeObject(list.ToArray());
            writeCardsToFile(json);

            var str = JsonConvert.SerializeObject(listToLog.ToArray());
           
            writeLogToFile(" added a new card " + str);
            //add to reserve
            var rst_list = readCardsFromReserveFile();
            rst_list.Add(card);
            var rst_json = JsonConvert.SerializeObject(rst_list.ToArray());
            writeCardsToReserveFile(rst_json);
        }

        public void DeleteCard(Card card)
        {
            var listToLog = new List<Card>();
            listToLog.Add(card);

            var arrayCards = readCardsFromFile();
            var currentCard = arrayCards.Where(p => p.Id == card.Id).SingleOrDefault();
            arrayCards.Remove(currentCard);
            var json = JsonConvert.SerializeObject(arrayCards.ToArray());
            writeCardsToFile(json);

            var str = JsonConvert.SerializeObject(listToLog.ToArray());
            
            writeLogToFile(" deleted card " + str);

        }
    }
}