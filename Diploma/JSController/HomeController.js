var myApp = angular.module("myApp", ['dx', 'ngRoute']);
myApp.controller("defaultController", function ($scope, businessLogicOfMyApp, $location, $routeParams) {
    //Саздаць Картку
    $scope.createNewCard = {
        text: "Создать",
        type: "success",
        icon: "card",
        onClick: function () {
            //$scope.visibleCreateNewCardPopup = true;
            $location.path('/createnewcard');

         }
    };
    //айлзі першапачатковы
    $scope.itemIdFromShowButton = 0;
    $scope.chaptersArray = [];
    $scope.cardsArray = [];
    $scope.concatArrayForItemId = [];
    $scope.recordsArray = [];
    $scope.allRecordsOfCardArray = [];
    $scope.localArray = [];
    

    //першапачатковы запыт на сервер 
    businessLogicOfMyApp.getCardsFromServer().then(function (cards) {
        if (cards.length != 0) {
            $scope.cardsArray = cards;
            
        }
        else {
            console.log("cardsArray is empty ");
        }
        
        
    }).then(function () {
        businessLogicOfMyApp.getChaptersFromServer().then(function (chapters) {
            if (chapters.length != 0) {
                $scope.chaptersArray = chapters;
                
            }
            else {
                console.log("ChaptersArray is empty");
            }
        }).then(function () {
            $scope.concatArrayForItemId = $scope.cardsArray.concat($scope.chaptersArray);
           
        
        }).then(function () {
            businessLogicOfMyApp.getRecordsFromServer().then(function (records) {
                if (records != 0) {
                    $scope.recordsArray = records;
                    $scope.concatArrayForItemId = $scope.concatArrayForItemId.concat($scope.recordsArray);
                }
            })
        })//.then(function(){
        //    if($scope.allRecordsOfCardArray.length != 0){
        //        $scope.localArray = $scope.chaptersArray.concat($scope.allRecordsOfCardArray);
        //    }
        //    else{
        //        $scope.localArray = $scope.chaptersArray;
        //    }
        //})

    });

    //Прозвішча Персоны
    $scope.firstnamePerson = {
        placeholder: "Введите Фамилию",
        showClearButton: true,
        width: 500
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
        width:500
        
    };
    //Імя па бацьку
    $scope.thirdnamePerson = {
        placeholder: "Введите Отчество",
        showClearButton: true,
        width: 500
    };
    //Адрас Персоны
    $scope.addressPerson = {
        placeholder: "Введите Адрес",
        showClearButton: true,
        width: 500
    };
    //сямейны статус
    var relationshipStatusArray = ["Женат","Замужем","Не Женат", "Не Замужем"];

    $scope.relationshipStatusPerson = {
        placeholder: "Выберите Семейное Положение",
        items: relationshipStatusArray,
        width: 500
    };
    //Універсітэт
    var universityPersonArray = ["БГУ", "БНТУ", "БГМУ", "БГЭУ",
        "БГУИР", "МГЛУ", "БГПУ", "БГТУ", "БГУФК", "БГАТУ", "БГУКИ", "АУПРБ", "МГВРК", "МГЭУ", "РИПО"];

    $scope.universityPerson = {
        placeholder: "Выберите Университет",
        items: universityPersonArray,
        width: 500
    };

    //Жанчына ці мужчына
    var sexPersonArray = ["Мужской", "Женский"];

    $scope.sexPerson = {
        placeholder: "Выберите Пол",
        items: sexPersonArray,
        width: 500
    };
    //ДАТА нАРОДЗІНАЎ
    $scope.personBirthdate = {       
           bindingOptions: {
               value: 'currentValue'
           },
           width: 500
    };

    //Лайн пошуку
    $scope.searchValue = "";
    $scope.searchInCards = {
        bindingOptions: {
            value: "searchValue"
        },
        placeholder: "Поиск",
        width: 'auto',
        mode: "search",
        valueChangeEvent: "keyup"
    };
      
    //Захаваць Новую Картку
    $scope.savePerson = {
        text: "Сохранить",
        type: "success",
        icon: "save",
        onClick: function () {
            

                var personForSave = {
                    createdDate: businessLogicOfMyApp.getTimeNow(),
                    id: businessLogicOfMyApp.itemId($scope.concatArrayForItemId),
                    fname: $scope.personFirstname,
                    sname: $scope.personSecondname,
                    thname: $scope.personThirdname,
                    address: $scope.personAddress,
                    relationshipStatus: $scope.personRelationshipStatus,
                    university: $scope.personUniversity,
                    sex: $scope.personSex,
                    birthDate: $scope.currentValue
                };
                //console.log(personForSave);
                businessLogicOfMyApp.sendCardToServer(personForSave);
                $scope.visibleCreateNewCardPopup = false;
        }
    };

    //Адмена Захавання новай карткі
    $scope.cancelFromSavePerson = {
        text: "Отмена",
        type: "default",
        icon: "remove",
        onClick: function () {
            $location.path('/');
        }
    };
    //Дата- грід з карткамі
    $scope.cardSelectedArray = [];
    $scope.cardsDataGrid = {
        bindingOptions: {
            dataSource: 'cardsArray | filter: searchValue'
        },
        selection: {
            mode: 'single'
        },
        showCheckBoxesMode: 'onLongTap',
        columns: [
            {
                dataField: "id",
                caption: "№",
                width: 30
            },
            {
                dataField: "fname",
                caption: "Имя"
            },
            {
                dataField: "sname",
                caption: "Фамилия"
            },
            {
                dataField: "thname",
                caption: "Отчество",
            },
            {
                dataField: "birthDate",
                caption: "Дата рождения",
                dataType: 'date'

            },
            {
                dataField: "address",
                caption: "Адрес"
            },

            {
                dataField: "university",
                caption: "ВУЗ"
            },
            {
                dataField: "sex",
                caption: "Пол"
            },


        ],
        paging: { pageSize: 8 },
        pager: {
            showPageSizeSelector: true,
            allowedPageSized: [3, 5, 8]
        },
        showBorders: true,
        showRowLines: true,
        onSelectionChanged: function (e) {
            $scope.itemIdFromShowButton = e.selectedRowsData[0].id;
            $scope.cardSelectedArray = e.selectedRowsData[0];
        },
    };
    
    //Дадаць Новы Раздзел
    $scope.createNewChaper = {
        text: "Раздел",
        type: "success",
        icon: "add",
        onClick: function () {
            $scope.createNewChapter = true;
        }
    };
    var jdskla = [];
    //Кнопка шоў дзеталі карткі
    var localCardId = 0;
    $scope.showCardDetails = {
        text: "",
        type: "default",
        icon: "preferences",
        onClick: function () {
            if ($scope.itemIdFromShowButton) {
                $location.path('/carddetail/' + $scope.itemIdFromShowButton);
                jdskla = businessLogicOfMyApp.getVardsRecordsByCardId($scope.itemIdFromShowButton, $scope.recordsArray);
                console.log($scope.itemIdFromShowButton)
                console.log(jdskla);
                
            }
            else {
                alert("Error!!!");
            }
        }
    };
    $scope.backToGeneralPage = {
        text: "Back",
        onClick: function () {
            jdskla = [];
            $location.path('/');
        }
    };
    //поп-ап дадаць новы чаптэр
    $scope.createNewChapter = {
        closeOnOutsideClick: true,
        dragEnabled: true,
        bindingOptions: {
            visible: "createNewChapter"
        }
    };

    //захаваць новы чаптэр
    $scope.saveNewChapter = {
        text: "Сохранить",
        icon: "add",
        type: "success",
        onClick: function () {
            var chapter = {
                id: businessLogicOfMyApp.itemId($scope.concatArrayForItemId),
                caption: $scope.valueNewChapter
            };

            businessLogicOfMyApp.sendChapterToServer(chapter);
            
        }
    };
    //адмена захавання новага чапрэра
    $scope.cancelFromSavingNewChaper = {
        text: "Отмена",
        icon: "remove",
        type: "default",
        onClick: function () {
            $scope.createNewChapter = false;
        }
    }

    //дрэва
    $scope.treeviewOfChaptersWithData = {
        bindingOptions: {
            dataSource: 'localArray',
        },
        keyExpr: 'id',
        displayExpr: 'caption',
        parentIdExpr: 'parentId',
        dataStructure: 'plain',
        onItemClick: function (e) {
           
        }
    };
    
    //аднавіць дрэва
    var updateTree = function () {
        $scope.localArray = $scope.chaptersArray.concat($scope.allRecordsOfCardArray);
    }

    //дадць новы запис у картку
    $scope.createNewrecordToCard = {
        text: "Добавить Запись",
        type: "success",
        icon: 'add',
        onClick: function () {
            //  $location.path('/createnewrecord/' + $scope.itemIdFromShowButton);
            $scope.addNewRecordToCardwindow = true;
            
        }
    };
    //дадць новы запіс у картку попап вакно
    $scope.addNewRecordToCard = {
        closeOnOutsideClick: true,
        title: "Добавить Новую Запись",
        bindingOptions: {
            visible: "addNewRecordToCardwindow"
        }
    };
    //Захаваць запіс для карткі
    $scope.saveRecord = {
        text: "Сохранить",
        type: "success",
        icon: 'add',
        onClick: function () {
            var recordToCard = {
                id: businessLogicOfMyApp.itemId($scope.concatArrayForItemId),
                dateOfCreateRecord: $scope.createRecordDate,
                caption: $scope.recordCaption,
                description: $scope.recordDescription,
                parentId: $scope.recordChapter.id,
                cardId: $routeParams.cardId
            };

            businessLogicOfMyApp.sendNewRecordToStorage(recordToCard);
        }
    };

    //дата захавання запісу
    $scope.dateForNewRecord = {
        bindingOptions: {
            value: 'createRecordDate'
        },
        width: 500
    };
    //сэлект бокс для запісу
    $scope.chapterOfRecord = {
        bindingOptions: {
            dataSource: 'chaptersArray'
        },
        displayExpr: "caption"
    };

});

myApp.factory('businessLogicOfMyApp', function ($http, $q) {
    var cardIdFromShowButton = 0;
    var returnedArrayEmpty = [];
    return {
        //get record by cardId
        getVardsRecordsByCardId: function (id, recordsArray) {
            var cardsRecords = [];
            if (recordsArray.length != 0) {
                for (var i = 0; i < recordsArray.length; i++) {
                    if (recordsArray[i].cardId === id) {
                        cardsRecords.push(recordsArray[i]);
                    }
                }
            }
            
         return cardsRecords;
          
           
        },
        //save new card to storage
        saveNewCard: function (card)
        {
            //storageOfCards.push(card);
        },
        //id
        itemId: function (concatArray) {
           var idArray = [];
            if(concatArray.length != 0)
            {
                for(var i in concatArray)
                {
                    idArray = idArray.concat(concatArray[i].id);
                }
                    
                id = Math.max.apply(Math, idArray) + 1;
               
                return id;
              
            }
            else
            {
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
          //get chapters from server
        getChaptersFromServer: function () {
            var defferedObj = $q.defer();
            var myChapters = [];

            $http({
                method: 'GET',
                url: '/api/getChapers'
            }).then(function successCallback(response) {
                myChapters = response.data;
                defferedObj.resolve(myChapters);
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
          //send chapter to server
        sendChapterToServer: function (chapter) {
            var req = {
                method: 'POST',
                url: '/api/addChapter',
                data: chapter
            };

            $http(req).then(function sucessCallback() {
                console.log("a new chapter was saved successfully");
            });
        },

          //Get Time now
        getTimeNow: function () {
            return new Date();
        },
         //save new record
        sendNewRecordToStorage: function(record)
        {
            var req = {
                method: 'POST',
                url: '/api/addRecord',
                data: record
            };

            $http(req).then(function successCallback() {
                console.log("a new card was saved successfully");
            });
        },
          //get records from server
        getRecordsFromServer: function () {
             var defferedObj = $q.defer();
            var myCards = [];

            $http({
                method: 'GET',
                url: '/api/getRecords'
            }).then(function successCallback(response) {
                myCards = response.data;
                defferedObj.resolve(myCards);
            });
            return defferedObj.promise;
        }
    };


});

myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: "Partials/HomePartial.html",
        controller: "defaultController"
    })
    .when('/createnewcard', {
        templateUrl: "Partials/CreateNewCard.html",
        controller: "defaultController"
    })
    .when('/carddetail/:cardId', {
        templateUrl: "Partials/CardDetails.html",
        controller: "defaultController"
    })
    .when('/createnewrecord/:cardId', {
        templateUrl: "Partials/CreateNewRecordToCard.html",
        controller: "defaultController"
    })
    //.when('/createnewchapter', {
    //    templateUrl: "Partials/CreateNewPartial.html",
    //    controller: "defaultController"
    //})
    ;

    $routeProvider.otherwise({ redirectTo: '/' });
}]);




