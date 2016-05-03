var myApp = angular.module("myApp", ['dx', 'ngRoute']);
myApp.controller("defaultController", function ($scope, businessLogicOfMyApp) {
    //Саздаць Картку
    $scope.createNewCard = {
        text: "Создать",
        type: "success",
        icon: "card",
        onClick: function () {
            $scope.visibleCreateNewCardPopup = true;
         }
    };

    //першапачатковы запыт на сервер 
    businessLogicOfMyApp.getCardsFromServer().then(function (cards) {
        $scope.cardsArray = cards;
    });

    //Поп-ап вакно для дабаўлення карткі
    $scope.createNewCardPopup = {
        bindingOptions: {
            visible: "visibleCreateNewCardPopup"
        },
        closeOnOutsideClick: true
    };
    //Прозвішча Персоны
    $scope.firstnamePerson = {
        placeholder: "Введите Фамилию",
        showClearButton: true
    };
    //Імя Персоны
    var namesArray = ["Диаc", "Матвей", "Артём", "Янис", "Максим", "Дмитрий", "Тимофей", "Даниил", "Роман", "Арсений", "Егор", "Кирилл", "Марк", "Андрей", "Никита", "Иван", "Богдан", "Алексей", "Илья", "Ярослав", "Тимур", "Михаил", "Владислав", "Сергей", "Александр", "Глеб", "Демид", "Денис", "Руслан", "Аскар", "Павел", "Савелий", "Замир", "Константин", "Вадим", "Евгений", "Елисей", "Дамир", "Игорь", "Владимир", "Семён", "Алан", "Захар", "Марсель", "Георгий", "Вячеслав", "Антон", "Артур", "Давид", "Мадияр", "Олег", "Степан", "Родион", "Назар", "Станислав", "Николай", "Мирослав", "Валерий", "Марат", "Фёдор", "Савва", "Виктор", "Святослав", "Милан", "Добрыня", "Виталий", "Юрий", "Ленар", "Ростислав", "Радислав", "Яромир", "Арсен", "Ильяр", "Радик", "Анатолий", "Батыр", "Назым", "Всеволод", "Василий", "Адильхан", "Ринат", "Камиль", "Азамат", "Рафаэль", "Алихан", "Доброслав", "Пётр", "Бахыт", "Ваган", "Вольга", "Давлат", "Малик", "Тарас", "Валентин", "Ратибор", "Драгомир", "Олесь", "Мстислав", "Ждан", "Любомир", "Милана",
"София",
"Есения",
"Арина",
"Кира",
"Анастасия",
"Вероника",
"Алиса",
"Полина",
"Марьяна",
"Стася",
"Виктория",
"Дарья",
"Ксения",
"Алина",
"Екатерин",
"Ева",
"Валерия",
"Мария",
"Кристина",
"Елизавета",
"Юлия",
"Дарина",
"Анна",
"Алёна",
"Камила",
"Милена",
"Ульяна",
"Диана",
"Злата",
"Амелия",
"Ольга",
"Елена",
"Софья",
"Румия",
"Карина",
"Ирина",
"Аделия",
"Элина",
"Милослава",
"Ангелина",
"Маргарита",
"Татьяна",
"Диляра",
"Александр",
"Наталья",
"Радмила",
"Марина",
"Светлана",
"Афина",
"Лина",
"Милада",
"Эвелина",
"Олеся",
"Сати",
"Каролина",
"Амина",
"Малика",
"Яна",
"Евгения",
"Юлиана",
"Оксана",
"Джана",
"Мадина",
"Альбина",
"Индира",
"Людмила",
"Ярослава",
"Таисия",
"Гулия",
"Юлдуз",
"Марьям",
"Дарига",
"Лейла",
"Анжела",
"Медина",
"Анита",
"Куралай",
"Эльвира",
"Божена",
"Инна",
"Аврора",
"Гульназ",
"Алла",
"Асия",
"Диля",
"Лариса",
"Василиса",
"Рузана",
"Айжан",
"Тахмина",
"Аида",
"Манана",
"Динара",
"Далия",
"Саида",
"Алсу",
"Ануш",
"Гульнара",
"Салтанат"];
    $scope.secondnamePerson = {
        dataSource: namesArray,
        placeholder: "Введите Имя",
        showClearButton: true,
        
    };
    //Адрас Персоны
    $scope.addressPerson = {
        placeholder: "Введите Адрес",
        showClearButton: true
    };
    //сямейны статус
    var relationshipStatusArray = ["Женат","Замужем","Не Женат", "Не Замужем"];

    $scope.relationshipStatusPerson = {
        placeholder: "Выберите Семейное Положение",
        items: relationshipStatusArray,
    };
    //Універсітэт
    var universityPersonArray = ["БГУ", "БНТУ", "БГМУ", "БГЭУ",
        "БГУИР", "МГЛУ", "БГПУ", "БГТУ", "БГУФК", "БГАТУ", "БГУКИ", "АУПРБ", "МГВРК", "МГЭУ", "РИПО"];

    $scope.universityPerson = {
        placeholder: "Выберите Университет",
        items: universityPersonArray
    };

    //Жанчына ці мужчына
    var sexPersonArray = ["Мужской", "Женский"];

    $scope.sexPerson = {
        placeholder: "Выберите Пол",
        items: sexPersonArray
    };
    //ДАТА нАРОДЗІНАЎ
    $scope.personBirthdate = {       
           bindingOptions: {
               value: 'currentValue'
           }
        
    };

    //Лайн пошуку
    $scope.searchValue = "";
    $scope.searchInCards = {
        bindingOptions: {
            value: "searchValue"
        },
        placeholder: "Поиск",
        width: 300,
        mode: "search",
        valueChangeEvent: "keyup"
    };

    //Кнопка паказаць картку
    $scope.showButton = {
        icon: 'preferences',
        type: 'default',
        onClick: function (e) {
            console.log($scope.ppp);
        }
    };
    //Захаваць Новую Картку
    $scope.savePerson = {
        text: "Сохранить",
        type: "success",
        icon: "save",
        onClick: function () {
            businessLogicOfMyApp.getCardsFromServer().then(function (cards) {
                var cardsArray = cards;

                var personForSave = {
                    createdDate: businessLogicOfMyApp.getTimeNow(),
                    id: businessLogicOfMyApp.itemId(cardsArray),
                    fname: $scope.personFirstname,
                    sname: $scope.personSecondname,
                    address: $scope.personAddress,
                    relationshipStatus: $scope.personRelationshipStatus,
                    university: $scope.personUniversity,
                    sex: $scope.personSex,
                    birthDate: $scope.currentValue
                };
                //console.log(personForSave);
                businessLogicOfMyApp.sendCardToServer(personForSave);
                $scope.visibleCreateNewCardPopup = false;
               
            });           
        }
    };

    //Адмена Захавання новай карткі
    $scope.cancelFromSavePerson = {
        text: "Отмена",
        type: "default",
        icon: "remove",
        onClick: function () {
            $scope.visibleCreateNewCardPopup = false;
        }
    };

   
});

myApp.factory('businessLogicOfMyApp', function($http, $q) {
      return {
        //save new card to storage
        saveNewCard: function (card)
        {
            //storageOfCards.push(card);
        },
        //id
        itemId: function (cardsArray) {
            var idArray = [];
            if (cardsArray.length != 0)
            {
                for (var i in cardsArray)
                {
                    for (var j in cardsArray[i])
                    {
                        idArray = idArray.concat(cardsArray[i]['id']);
                    }
                }
                id = Math.max.apply(Math, idArray) + 1;
                return id;
            }
            else{
                id = 1;
                return id;
            }
            
        },
        //get cards from server
        getCardsFromServer: function () {
            var defferedObj = $q.defer();
            var myCards = [];

            $http({
                method: 'GET',
                url: '/api/getCards'
            }).then(function successCallback(response) {
                myCards = response.data;
                defferedObj.resolve(myCards);
            });
            return defferedObj.promise;
        },
          //send card to server
        sendCardToServer: function(card)
        {
            var req = {
                method: 'POST',
                url: '/api/addCard',
                data: card
            };

            $http(req).then(function successCallback() {
                console.log("a new card was saved successfully");
            });
        },

          //Get Time now
        getTimeNow: function () {
            return new Date();
        }
    };


});





