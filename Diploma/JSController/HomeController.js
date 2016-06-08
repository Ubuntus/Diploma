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
    $scope.localArrayForDataGridFromClickToTreeviewElement = [];
    $scope.arrayForReport = [];

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
        })
        
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
                $location.path('/');
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
        "export":{
            enabled: true,
            fileName: "cards"
            
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
            //$scope.jdskla = businessLogicOfMyApp.getVardsRecordsByCardId($scope.itemIdFromShowButton, $scope.recordsArray);
            //$scope.localArray = $scope.chaptersArray.concat($scope.jdskla);
            //console.log($scope.localArray);
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
    $scope.jdskla = [];
    //Кнопка шоў дзеталі карткі
    var localCardId = 0;
    $scope.showCardDetails = {
        text: "",
        type: "default",
        icon: "preferences",
        onClick: function () {
            if ($scope.itemIdFromShowButton) {
                $location.path('/carddetail/' + $scope.itemIdFromShowButton);
            }
            else {
                alert("Пожалуйста, выберите карточку");
            }
        }
    };
    $scope.backToGeneralPage = {
        icon: "refresh",
        onClick: function () {

            businessLogicOfMyApp.getRecordsFromServer().then(function (records) {
                if (records != 0) {
                    $scope.recordsArray = records;
                }
            }).then(function () {
                $scope.jdskla = businessLogicOfMyApp.getVardsRecordsByCardId($routeParams.cardId, $scope.recordsArray);
                $scope.localArray = $scope.chaptersArray.concat($scope.jdskla);
            });

            updateArrays();
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
    $scope.title = "";
    $scope.treeviewOfChaptersWithData = {
        bindingOptions: {
            dataSource: 'localArray',
        },
        keyExpr: 'id',
        displayExpr: 'caption',
        parentIdExpr: 'parentId',
        dataStructure: 'plain',
        onItemClick: function (e) {
            $scope.parentOrChildren = businessLogicOfMyApp.childrenOrParentInTreeview(e.itemData.parentId);
            if ($scope.parentOrChildren == true) {
                //Parent
                 //console.log("Parent");
                // $location.path('/chapter/' + e.itemData.id);
                $scope.title = e.itemData.caption;
                $scope.localArrayForDataGridFromClickToTreeviewElement = businessLogicOfMyApp.getAllRecordOfChapterInTreeview($scope.localArray, e.itemData.id);


            }

            else if ($scope.parentOrChildren == false) {
                //Children
               // console.log("Children");
                // $location.path('/record/' + e.itemData.id);
                $scope.title = e.itemData.caption;
                $scope.localArrayForDataGridFromClickToTreeviewElement = businessLogicOfMyApp.getRecordOfChartById($scope.jdskla, e.itemData.id);
                //variables for edit or delete
                $scope.itemIdForEditOrDelete = e.itemData.id;
                $scope.itemParentIdForEditOrDelet = e.itemData.parentId;
                $scope.itemCardIdForEditOrDelete = e.itemData.cardId;
                $scope.itemDataCreatedForEditOrDelete = e.itemData.dateOfCreateRecord;
            }
        }
    };
    
    
    $scope.$watch("localArray", function (newVal, OldVal, $scope) {
        console.log("update");
        //updateArrays();
    }, true);
    //дадць новы запис у картку
    $scope.createNewrecordToCard = {
        text: "Добавить Запись",
        type: "success",
        icon: 'add',
        onClick: function () {
            //  $location.path('/createnewrecord/' + $scope.itemIdFromShowButton);
            $scope.addNewRecordToCardwindow = true;
//            console.log($scope.chaptersArray);
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
            updateArrays();
            $scope.addNewRecordToCardwindow = false;
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
    //data grid from treeview
    $scope.dataGridInTreeView = {
        bindingOptions: {
            dataSource: 'localArrayForDataGridFromClickToTreeviewElement'
        },
        columns: [
            {
                dataField: 'id',
                caption: '№',
                width: 30
            },
            {
                dataField: 'dateOfCreateRecord',
                caption: 'Дата Создания',
                dataType: 'date',
                width: 90
            },
            {
                dataField: 'description',
                caption: "Описание",
                
                
            }
        ]

    };

    //Show Edit Windows for treeview Item 
    $scope.showEditWindowForTreeviewItem = {
        text: "Редактировать",
        icon: "edit",
        type: 'default',
        onClick: function () {           
            if ($scope.parentOrChildren == true) {
                //Parent
                //console.log("Parent");
                alert("Извините, но Вы не можете редактировать этот элемент");
            }
            else if ($scope.parentOrChildren == false) {
               // console.log("Children");
                $scope.editItemFromTreeviewPopupWindow = true;
            }
        }
    };

    //show delete windows for treeview item
    $scope.showDeleteWidowForTreeviewItem = {
        text: "Удалить",
        icon: 'trash',
        type: 'danger',
        onClick: function () {
            if ($scope.parentOrChildren == true) {
                //Parent
                //console.log("Parent");
                alert("Извините, но Вы не можете удалить этот элемент");
            }
            else if ($scope.parentOrChildren == false) {
                // console.log("Children");
                $scope.deleteItemFromTreeviewPopupWindow = true;
            }
           
        }
    };

    //popup for edit item from treeview
    $scope.editItemFromTreeview = {
        closeOnOutsideClick: true,
        dragEnabled: true,
        title:'Редактировать Запись',
        bindingOptions: {
            visible: 'editItemFromTreeviewPopupWindow'
        }
    };
    //popup for delete item from treeview
    $scope.deleteItemFromTreeview = {
        closeOnOutsideClick: true,
        dragEnabled: true,
        title: 'Удалить Запись',
        height: 'auto',
        width: 'auto',
        bindingOptions: {
            visible: 'deleteItemFromTreeviewPopupWindow'
        }
    };

    //confirm edit item from treeview
    $scope.confirmEditItemFromTreeview = {
        text: 'Редактировать',
        type: 'success',
        icon: 'save',
        onClick: function () {
            var editRecordToCard = {
                id: $scope.itemIdForEditOrDelete,
                parentId: $scope.itemParentIdForEditOrDelet,
                cardId: $scope.itemCardIdForEditOrDelete,
                caption: $scope.recordCaptionEdit,
                description: $scope.recordDescriptionEdit,
                dateOfCreateRecord: $scope.itemDataCreatedForEditOrDelete
            };

            businessLogicOfMyApp.editItemFromTreeView(editRecordToCard);
  
        }
    };

    //cancel from edit item from treeview
    $scope.cancelFromEditItemFromTreeview = {
        text: 'Отмена',
        type: 'default',
        icon: 'close',
        onClick: function () {
            $scope.editItemFromTreeviewPopupWindow = false;
        }
    };

    ///////////////////////////////////////////////////////////////
    ///Cancel From Deleting Record From  Treview
    $scope.cancelFromDeleterecordFromTreeview = {
        text: "Отмена",
        type: "default",
        icon: 'close',
        onClick: function (e) {
            $scope.deleteItemFromTreeviewPopupWindow = false;
        }
    };

    //confirm delete elemtnt form treeview
    $scope.confirmDeleteRecordFromTreeview = {
        text: "Удалить",
        type: "danger",
        icon: "check",
        onClick: function (e) {
            var recordToDelete = {
                id: $scope.itemIdForEditOrDelete,
                parentId: $scope.itemParentIdForEditOrDelet,
                cardId: $scope.itemCardIdForEditOrDelete,
                caption: $scope.recordCaptionEdit,
                description: $scope.recordDescriptionEdit,
                dateOfCreateRecord: $scope.itemDataCreatedForEditOrDelete
            };

            businessLogicOfMyApp.deleteItemFromTreeviewFunc(recordToDelete);
            $scope.deleteItemFromTreeviewPopupWindow = false;
        }
    };
    /////
    //Delete Card Button
    $scope.deleteCard = {
        icon: 'remove',
        type: 'danger',
        onClick: function () {
            $scope.deleteCardFromStorageVisible = true;
        }
    };
    //popup window for delete card
    $scope.deleteCardPopupWindow = {
        closeOnOutsideClick: true,
        dragEnabled: true,
        title: 'Удалить карточку',
        height: 'auto',
        width: 'auto',
        bindingOptions: {
            visible: 'deleteCardFromStorageVisible'
        }
    };
    //cancel from confirm delete card
    $scope.cancelFromDeletingCardFromStorage = {
        text: "Отмена",
        type: 'default',
        icon: 'close',
        onClick: function (e) {
            $scope.deleteCardFromStorageVisible = false;
        }
    }

    //confirm deleting caerd from storage button
    $scope.confirmDeleteCardFromStorage = {
        text: "Удалить",
        type: 'danger',
        icon: 'remove',
        onClick: function (e) {
            businessLogicOfMyApp.deleteCardFromStorageFunc($scope.cardsArray, $routeParams.cardId);
            $scope.deleteCardFromStorageVisible = false;
            $location.path('/');
        }
    };
    //popup window for create report
    $scope.createReportPage = {
        closeOnOutsideClick: true,
        dragEnabled: true,
        title: 'Создать отчет',
        height: 'auto',
        width: 'auto',
        bindingOptions: {
            visible: 'createReportPopupWindow'
        }
    };
    $scope.createReportButton = {
        onClick: function () {
            $scope.createReportPopupWindow = true;
            //   $scope.arrayForReport = $scope.jdskla.concat($scope.chaptersArray);
           
        },
        icon :'doc'
    };

    //////
    $scope.refreshDataForReport = {
        onClick: function () {
            $scope.arrayForReport = businessLogicOfMyApp.findCaptionByIdToReportArray($scope.jdskla, $scope.chaptersArray);
        },
        icon: "refresh"
    };
    //datagrid of all record of card
    $scope.dataGridOfAllRecordsOfCardAtPopup = {
        bindingOptions: {
            dataSource: "arrayForReport"
        }, "export": {
            enabled: true,
            fileName: "cards"

        },
        height: 600,
        width: 600,
        paging: { pageSize: 6 },
        pager: {
            showPageSizeSelector: true,
            allowedPageSized: [3, 5, 8]
        },
        showBorders: true,
        showRowLines: true,
        columns: [
           {
               dataField: "id",
               caption: "№",
               width: 30
           },
           {
               dataField: 'dateOfCreateRecord',
               caption: "Дата создания"
           },
           {
               dataField: 'caption',
               caption: 'Цель'
           },
           {
               dataField: 'description',
               caption: 'Описание'
           },
           {
               dataField: 'cardId',
               caption: "Раздел"
           }
           ]

    };

   
    //update arrays for id 
    var updateArrays = function () {
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
            })

        });
    };

});

myApp.factory('businessLogicOfMyApp', function ($http, $q) {
    var cardIdFromShowButton = 0;
    var returnedArrayEmpty = [];
    return {
        //find caption by id for report
        findCaptionByIdToReportArray:  function(recordsArray, chaptersArray)
        {
            var arrayForReport = recordsArray;
            for (var i = 0; i < arrayForReport.length; i++)
            {
                for(var j =0; j<chaptersArray.length; j ++)
                {
                    if (arrayForReport[i].parentId == chaptersArray[j].id)
                    {
                        arrayForReport[i].parentId = chaptersArray[j].caption;
                    }
                }
            }
            return arrayForReport;
        },
        //delete card form storage func
        deleteCardFromStorageFunc: function(cardsArray,id){
            var card = [];
            for (var i in cardsArray) {
                if (cardsArray[i].id == id) {
                    card = cardsArray[i];
                    break;
                }
            }

            var req = {
                method: 'POST',
                url: '/api/deleteCard',
                data: card
            };

            var reqToDeketeAllREcordOfCard = {
                method: 'POST',
                url: '/api/deleteAllRecordsOfCard',
                data: card
            };
            $http(reqToDeketeAllREcordOfCard);

            $http(req);
            
        },
        //Edit item from treeview
        editItemFromTreeView: function(Item){
            var req = {
                method: 'POST',
                url: '/api/editRecord',
                data: Item
            };
            $http(req);
        },
        //Delete item from treeview
        deleteItemFromTreeviewFunc: function(item){
            var req = {
                method: 'POST',
                url: '/api/deleteRecord',
                data: item
            };
            $http(req);
        },
        //children or parent item in treeview
        childrenOrParentInTreeview: function(item)
        {
            if(item == null)
            {
                return true;
            }
            else {
                return false;
            }
        },
        //get record by cardId
        getVardsRecordsByCardId: function (id, recordsArray) {
            var cardsRecords = [];
            if (recordsArray.length != 0) {
                for (var i = 0; i < recordsArray.length; i++) {
                    if (recordsArray[i].cardId == id) {
                        cardsRecords.push(recordsArray[i]);
                    }
                }
            }
//            console.log(cardsRecords);
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
        },
        //get all record of chapter
        getAllRecordOfChapterInTreeview: function(recordsArray,chapterId)
        {
            var recordsOfChapter = [];
            if (recordsArray.length != 0) {
                for (var i = 0; i < recordsArray.length; i++) {
                    if (recordsArray[i].parentId == chapterId) {
                        recordsOfChapter.push(recordsArray[i]);
                    }
                }
            }

            return recordsOfChapter;

        },
        //get record
        getRecordOfChartById: function(recordsArray, recordId) {
            var recordArray = [];
            if (recordsArray.length != 0) {
                for (var i = 0; i < recordsArray.length; i++) {
                    if (recordsArray[i].id == recordId) {
                        recordArray.push(recordsArray[i]);
                        break;
                    }
                }
                return recordArray;
            }
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
    //.when('/chapter/:chapterId', {
    //    templateUrl: "Partials/Chapter.html"
    //})
    //.when('/record/:recordId', {
    //    templateUrl: "Partials/Record.html"
    //})
    //.when('/createnewchapter', {
    //    templateUrl: "Partials/CreateNewPartial.html",
    //    controller: "defaultController"
    //})
    ;

    $routeProvider.otherwise({ redirectTo: '/' });
}]);

