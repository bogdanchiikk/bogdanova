// 4.1.угадай ячейку
const gameTable = document.getElementById('game');
const cells = []; //клетки
const computerPicks = []; //выбор компьютера
for (let i = 0; i < 10; i++) {
    let tr = document.createElement('tr'); //ряды
    cells[i] = [];
for (let j = 0; j < 10; j++) {
    let td = document.createElement('td'); //ячейки
    tr.appendChild(td);
    cells[i][j] = td;
    td.addEventListener('click', () => checkCell(i, j));
    gameTable.appendChild(tr);
  }
}
for (let i = 0; i < 10; i++) {
    const randomRow = Math.floor(Math.random() * 10);
    const randomCol = Math.floor(Math.random() * 10);
    computerPicks.push({row: randomRow, col: randomCol});
}
function checkCell(row, col) {
    const clickedCell = cells[row][col];
for (let i = 0; i < computerPicks.length; i++) {
    if (computerPicks[i].row === row && computerPicks[i].col === col) {
      clickedCell.classList.add('clicked');
      clickedCell.textContent = 'в точку!';
      computerPicks.splice(i, 1);
    if (computerPicks.length === 0) {
        alert('ты выиграл!');
    }
    return;
    }
}
clickedCell.classList.add('clicked');
}

// 4.2.угадай ячейку
// const gameTable = document.getElementById('game');
// const cells = []; //клетки
// const computerPicks = []; //выбор компьютера
// let timer = 10; 
// const timerText = document.createElement('div');
// timerText.textContent = timer;
// document.body.insertBefore(timerText, gameTable);
// for (let i = 0; i < 10; i++) {
//     let tr = document.createElement('tr'); //ряды
//     cells[i] = [];
// for (let j = 0; j < 10; j++) {
//     let td = document.createElement('td'); //ячейки
//     tr.appendChild(td);
//     cells[i][j] = td;
//     td.addEventListener('click', () => checkCell(i, j));
//     gameTable.appendChild(tr);
//   }
// }
// for (let i = 0; i < 10; i++) {
//     const randomRow = Math.floor(Math.random() * 10);
//     const randomCol = Math.floor(Math.random() * 10);
//     computerPicks.push({row: randomRow, col: randomCol});
// }
// function checkCell(row, col) {
//     const clickedCell = cells[row][col];
// for (let i = 0; i < computerPicks.length; i++) {
//     if (computerPicks[i].row === row && computerPicks[i].col === col) {
//       clickedCell.classList.add('clicked');
//       clickedCell.textContent = 'в точку!';
//       computerPicks.splice(i, 1);
//     if (computerPicks.length === 0) {
//         alert('ты выиграл!');
//     }
//     return;
//     }
// }
// clickedCell.classList.add('clicked');
// }
// function updateTimer() {
//     timer--;
//     timerText.textContent = timer;
//     if (timer === 0) {
//         alert('время вышло :(');     
//     for (let i = 0; i < 10; i++) {
//         for (let j = 0; j < 10; j++) {
//         cells[i][j].removeEventListener('click', () => checkCell(i, j));
//         }
//     }
//     } else {
//         setTimeout(updateTimer, 1000); 
//     }
// }
// updateTimer(); 

//5.экранная клавиатура на JavaScript
// const keyboardLayout = [
//     ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
//     ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
//     ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';'],
//     ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'],
//     ['CapsLock', 'пробел', 'Enter']
// ]; //раскладка клавиатуры
// let input = document.getElementById('textInput');
// let keyboard = document.getElementById('keyboard');
//     function createKeyboard() {
//         keyboardLayout.forEach(row => {
//         let rowElement = document.createElement('div');
//             row.forEach(key => {
//                 let keyButton = document.createElement('button');
//                 keyButton.textContent = key;
//                 keyButton.onclick = () => handleKeyPress(key);
//                 rowElement.appendChild(keyButton);
//       });
// keyboard.appendChild(rowElement);
//     });
// }
// function handleKeyPress(key) {
//    switch (key) {
//        case 'CapsLock':
//        toggleCapsLock();
//        break;
//        case 'Enter':
//        input.value += '';
//        break;
//        case 'пробел':
//        input.value += ' ';
//        break;
//        default:
//        input.value += isCapsLockEnabled() ? key.toUpperCase() : key.toLowerCase(); //к значению input.value добавляется символ key, который переводится в верхний или нижний регистр в зависимости от значения capsLockEnabled. 
//     }
// }
// function toggleCapsLock() {
//     capsLockEnabled = !capsLockEnabled; //функция toggleCapsLock() просто меняет значение переменной capsLockEnabled на противоположное.
// }
// function isCapsLockEnabled() { //функция isCapsLockEnabled() возвращает текущее значение переменной capsLockEnabled.
//     return capsLockEnabled;
// }
// let capsLockEnabled = false;
// createKeyboard();

//6.линейный календарь на JavaScript
// let numbersList = document.getElementById('calendar');
// let monthYearElement = document.getElementById('month-now');
// let currentDate = new Date();
// let currentMonth = currentDate.getMonth();
// let currentYear = currentDate.getFullYear();
// function createCalendar() {
// let daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
// numbersList.textContent = '';
// monthYearElement.textContent = new Intl.DateTimeFormat('ru-RU', { month: 'long', year: 'numeric' }).format(new Date(currentYear, currentMonth)); //обеспечивает форматирование даты и времени с учетом языка
// for (let i = 1; i <= daysInMonth; i++) {
// let listItem = document.createElement('li');
// listItem.textContent = i;
// if (i === currentDate.getDate() && currentMonth === currentDate.getMonth() && currentYear === currentDate.getFullYear()) {
// listItem.classList.add('current-day');
// }
// numbersList.appendChild(listItem);
// }
// }
// createCalendar();
// document.getElementById('prev-month').addEventListener('click', function (event) {
// event.preventDefault();
// if (currentMonth === 0) {
// currentMonth = 11;
// currentYear--;
// } else {
// currentMonth--;
// }
// createCalendar();
// });
// document.getElementById('next-month').addEventListener('click', function (event) {
// event.preventDefault();
// if (currentMonth === 11) {
// currentMonth = 0;
// currentYear++;
// } else {
// currentMonth++;
// }
// createCalendar();
// });

//7.поиск тегов на JavaScript
// let taginfo = {
//     'a': '<a> предназначен для создания ссылок.',
//     'p': '<p> предназначен для разделения текста на абзацы.',
//     'img': '<img> используется для вставки изображений.',
//     'b': '<b> Создает жирный текст.',
//     'i': '<i> Создает наклонный текст.',
//     'ol': '<ol> Создает нумерованный список.',
//     'li': '<li> Определяет каждый элемент списка и присваивает номер.',
//   };
// let inp = document.querySelector('input');
// let info = document.getElementById('taginfo');
//     inp.addEventListener('keydown', (event) => { //срабатывает, когда клавиша была нажата
//     if (event.key === 'Enter') {
//       let tagName = inp.value.toLowerCase();
//       let description = taginfo[tagName];
//       if (description) {
//         info.textContent = description;
//       } else {
//         info.textContent = 'такого тега не существует.';
//       }
//     }
// });

//8.поиск исторических события на JavaScript
// const historicalEvents = [
//     { date: '2004-14-03', title: 'выборы Президента России.', description: 'Президентом РФ на второй срок избран Владимир Путин. ' },
//     { date: '2005-13-09', title: 'Нападение на Нальчик', description: 'вооружённое выступление боевиков 13—14 октября 2005 года в городе Нальчике под общим командованием Шамиля Басаева, выразилось главным образом в нападении на силовые структуры (отделения милиции, ФСБ, воинскую часть и др.), по замыслу боевиков должно было послужить взятию города под свой контроль с последующим его удержанием на протяжении некоторого времени.' },
//     { date: '2003-15-10', title: 'два террористических акта, произошедших 15 и 20 ноября 2003 года в центре Стамбула.', description: '15 ноября 2003 года с помощью заминированных автомобилей, которые вели смертники, были осуществлены взрывы возле двух синагог в Стамбуле. 25 человек были убиты и более 300 ранены. Исламисты объяснили свои действия тем, что в синагогах «работали израильские агенты».' },
//     { date: '2003-20-10', title: 'два террористических акта, произошедших 15 и 20 ноября 2003 года в центре Стамбула.', description: 'Через 5 дней, 20 ноября 2003 года в Стамбуле прогремели новые взрывы. Первый взрыв прогремел у здания стамбульской штаб-квартиры британского банка HSBC. Второй взрыв прогремел у здания британского консульства, в результате чего погиб британский консул Роджер Шорт. Третий взрыв произошёл около торгового центра Metro City, ещё два произошли в центре Стамбула (один из них — недалеко от здания израильского дипломатического представительства). Погибли 28 человек, 450 человек получили ранения.' },
//   ];
// let input = document.getElementById('input');
// let table = document.getElementById('table');
// input.addEventListener('keydown', (event) => {
//     if (event.key === 'Enter') {
//       let year = input.value;
//       displayEvents(year);
//     }
//   });
// function displayEvents(year) {
//     let events = filterEventsByYear(year);
//     createTable(events);
//   }
// function filterEventsByYear(year) {
//     return historicalEvents.filter(event => event.date.startsWith(year));
//   }
// function createTable(events) {
//     table.textContent = '';
//     if (events.length === 0) {
//       table.textContent = 'нет событий для выбранного года';
//     return;
//     }
//     events.forEach(event => {
//       const row = table.insertRow();
//       const dateCell = row.insertCell(0); //метод вставляет новый ячейку (<td>) в строку таблицы (<tr>) и возвращает ссылка на ячейку.
//       const titleCell = row.insertCell(1);
//       const descriptionCell = row.insertCell(2);
//       dateCell.textContent = event.date;
//       titleCell.textContent = event.title;
//       descriptionCell.textContent = event.description;
//     });
// }

//9.гороскоп на JavaScript без радиокнопок
// let horoscopes = {
//     today: {
//         Овен: "Гороскоп Овна на сегодня...",
//         Телец: "Гороскоп Тельца на сегодня...",
//         Близнецы: "Гороскоп Близнецов на сегодня...",
//         Рак: "Гороскоп Рака на сегодня...",
//         Лев: "Гороскоп Льва на сегодня...",
//         Дева: "Гороскоп Девы на сегодня...",
//         Весы: "Гороскоп Весов на сегодня...",
//         Скорпион: "Гороскоп Скорпиона на сегодня...",
//         Стрелец: "Гороскоп Стрельца на сегодня...",
//         Козерог: "Гороскоп Козерога на сегодня...",
//         Водолей: "Гороскоп Водолея на сегодня...",
//         Рыбы: "Гороскоп Рыб на сегодня..."
//     },
//     tomorrow: {
//         Овен: "Гороскоп Овна на завтра...",
//         Телец: "Гороскоп Тельца на завтра...",
//         Близнецы: "Гороскоп Близнецов на завтра...",
//         Рак: "Гороскоп Рака на завтра...",
//         Лев: "Гороскоп Льва на завтра...",
//         Дева: "Гороскоп Девы на завтра...",
//         Весы: "Гороскоп Весов на завтра...",
//         Скорпион: "Гороскоп Скорпиона на завтра...",
//         Стрелец: "Гороскоп Стрельца на завтра...",
//         Козерог: "Гороскоп Козерога на завтра...",
//         Водолей: "Гороскоп Водолея на завтра...",
//         Рыбы: "Гороскоп Рыб на завтра..."
//     },
//     afterTomorrow: {
//         Овен: "Гороскоп Овна на послезавтра...",
//         Телец: "Гороскоп Тельца на послезавтра...",
//         Близнецы: "Гороскоп Близнецов на послезавтра...",
//         Рак: "Гороскоп Рака на послезавтра...",
//         Лев: "Гороскоп Льва на послезавтра...",
//         Дева: "Гороскоп Девы на послезавтра...",
//         Весы: "Гороскоп Весов на послезавтра...",
//         Скорпион: "Гороскоп Скорпиона на послезавтра...",
//         Стрелец: "Гороскоп Стрельца на послезавтра...",
//         Козерог: "Гороскоп Козерога на послезавтра...",
//         Водолей: "Гороскоп Водолея на послезавтра...",
//         Рыбы: "Гороскоп Рыб на послезавтра..."
//     }
// };
// let birth = document.getElementById('birth');
// let choose = document.getElementById('days');
// let button = document.querySelector('button');
// let text = document.querySelector('p');
// button.addEventListener('click', () => {
//     let day;
//     let zodiac;
//     for (let option of choose) {
//         if(option.selected) {
//             day = option.value
//         }
//     }
//     let birthdate = birth.value;
//     if(birthdate) {
//         zodiac = getSign(new Date(birthdate))
//     }
//     let sign = horoscopes[day][zodiac];
//     text.textContent = sign;
// });
// function getSign(birth) {
//     let day = birth.getDate();
//     let month = birth.getMonth() + 1;
//      if ((day >= 21  &&  month == 3 ) || (day <=19  &&  month == 4)) {
//          return "Овен";
//      } else if ((day >= 20  && month == 4) || (day <= 20  && month == 5)) {
//          return "Телец";
//      } else if ((day >= 21  && month == 5) || (day <= 21  && month == 6)) {
//          return "Близнецы";
//      } else if ((day >= 22  && month == 6) || (day <= 22  && month == 7)) {
//          return "Рак";
//      } else if ((day >= 23  && month == 7) || (day <= 22  && month == 8)) {
//          return "Лев";
//      } else if ((day >= 23  && month == 8) || (day <= 22  && month == 9)) {
//          return "Дева";
//      } else if ((day >= 23  && month == 9) || (day <= 23  && month == 10)) {
//          return "Весы";
//      } else if ((day >= 24  && month == 10) || (day <= 21  && month == 11)) {
//          return "Скорпион";
//      } else if ((day >= 22  && month == 11) || (day <= 21  && month == 12)) {
//          return "Стрелец";
//      } else if ((day >= 22  && month == 12) || (day <= 20  && month == 1)) {
//          return "Козерог";
//      } else if ((day >= 21  && month == 1) || (day <=20  && month == 2)) {
//          return "Водолей";
//      } else {
//          return "Рыбы";
//      }
// } 

//10.сайт предсказаний на JavaScript
// let predictions = {
//     goods: ['у вас сегодня будет хороший день',
//             'сегодня вас ждет успех при изучении JavaScript',
//             'вы везунчик'
//         ],
//     bads: ['сегодня лучше не выходите из дома',
//           'сегодня лучше посмотреть сериал и ни с кем не общаться',
//           'сегодня вы можете потерять ценные вещи'
//         ]
// };
// let timer = document.querySelector('#timer');
// let text  = document.querySelector('#text');
// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');
// let length = predictions.goods.length + predictions.bads.length
// let random;
// let timerId;
// start.addEventListener('click', function() {
//     this.classList.remove('active');
//     stop.classList.add('active');
//     timerId = setInterval(function() {
//         timer.textContent = random = getRandomInt(0, length-1);
//     }, 1000);
// });
// stop.addEventListener('click', function() {
//     this.classList.remove('active');
//     clearInterval(timerId);
//     if (random > 2) {
//         text.textContent = predictions.bads[getRandomInt(0,2)];
//         text.classList.add('red')
//     }
//     else {
//         text.textContent = predictions.goods[random];
//         text.classList.add('green')
//     }
// });
// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

//11.автодополнение на JavaScript
// let countries = ['Belarus', 'Belgium', 'Bulgaria'];
// const inputElem = document.getElementById('elem');
// const listElem = document.getElementById('list');
// inputElem.addEventListener('input', handleInput);
// function handleInput() {
//     const inputValue = inputElem.value.toLowerCase();
//     const filteredCountries = countries.filter(country => country.toLowerCase().startsWith(inputValue));
//     createList(filteredCountries);
// }
// function createList(filteredCountries) {
//       listElem.innerHTML = '';
//       filteredCountries.forEach(country => {
//         const liElem = document.createElement('li');
//         liElem.textContent = country;
//         liElem.addEventListener('click', () => {
//           inputElem.value = country;
//           listElem.style.display = 'none';
//         });
//         listElem.appendChild(liElem);
//       });
//     if (filteredCountries.length > 0) {
//         listElem.style.display = 'block';
//     } else {
//         listElem.style.display = 'none';
//     }
// }
// document.addEventListener('click', (event) => {
//     if (!event.target.closest('#parent')) {
//         listElem.style.display = 'none';
//     }
// });

// 12.спойлер на JavaScript
// function toggleSpoiler(event, spoilerId) {
//     event.preventDefault();
//     const spoiler = document.getElementById(spoilerId);
//     spoiler.classList.toggle('active');
// }

// 13.вкладки на JavaScript
// получаем ссылки на элементы
// const menuLinks = document.querySelectorAll(".menu a");
// const tabs = document.querySelectorAll(".tabs .tab");
// // перебираем ссылки на меню
// menuLinks.forEach((link, index) => {
//   // добавляем обработчик события клика
//   link.addEventListener("click", (event) => {
//     event.preventDefault(); // отменяем действие по умолчанию
//     // удаляем класс "active" у всех ссылок и вкладок
//     menuLinks.forEach((link) => link.classList.remove("active"));
//     tabs.forEach((tab) => tab.classList.remove("active"));
//     // добавляем класс "active" текущей ссылке и вкладке
//     link.classList.add("active");
//     tabs[index].classList.add("active");
//   });
// });

//14.аккордеон на JavaScript
// const parent = document.getElementById("parent");
// const tabs = parent.getElementsByClassName("tab");
// for (let i = 0; i < tabs.length; i++) {
//     const tab = tabs[i];
//     tab.addEventListener("click", function() {
//         for (let j = 0; j < tabs.length; j++) {
//             tabs[j].classList.remove("active");
//         }
//         tab.classList.add("active");
//     });
// }

// 15-16.игра в города на JavaScript
// let field = document.querySelector('#field');
// let message = document.querySelector('#message');
// let cities = [];
// function checkCity(city) {
//   if (cities.length === 0) {
//     cities.push(city);
//     return true;
//   } else {
//     let lastCity = cities[cities.length - 1];
//     if (city[0].toLowerCase() === lastCity[lastCity.length - 1].toLowerCase() && !cities.includes(city)) {
//       cities.push(city);
//       return true;
//     } else {
//       return false;
//     }
//   }
// }
// field.addEventListener('keypress', function(e) {
//   if (e.key === 'Enter') {
//     let inputCity = field.value.trim();
//     if (inputCity === '') {
//       message.textContent = 'введите город';
//     } else {
//       if (checkCity(inputCity)) {
//         message.textContent = 'принят. следующий ход.';
//       } else {
//         message.textContent = 'этот город уже был или не подходит, попробуйте другой.';
//       }
//     }
//     field.value = '';
//   }
// });

// 17.игра в города против робота на JavaScript
// let field = document.querySelector('#field');
// let message = document.querySelector('#message');
// let cities = [];
// let currentPlayer = 1; 
// let allCities = [
//   'Москва', 'Анапа', 'Абакан', 'Новосибирск', 'Омск', 'Екатеринбург', 
//   'Санкт-Петербург', 'Краснодар', 'Казань', 'Сочи', 'Хабаровск', 
//   'Владивосток', 'Томск', 'Уфа', 'Иркутск', 'Ярославль', 'Тверь', 
//   'Волгоград', 'Ростов-на-Дону', 'Калининград', 'Астрахань', 'Саратов'
// ];
// field.addEventListener('keydown', handleKeyDown);
// function handleKeyDown(event) {
//   if (event.key === "Enter") {
//     event.preventDefault();
//     let cityName = field.value.trim();
//     if (isValidCity(cityName)) {
//       if (isValidMove(cityName)) {
//         cities.push(cityName);
//         displayMessage(`игрок ${currentPlayer}: "${cityName}" добавлен. следующий ход.`);
//         field.value = "";      
//         currentPlayer = (currentPlayer % 3) + 1;
//         makeMove();
//       } else {
//         displayMessage("неправильный ход. город должен начинаться с последней буквы предыдущего города.");
//       }
//     } else {
//       displayMessage("город должен начинаться с буквы.");
//     }
//   }
// }
// function isValidCity(city) {
//   return city.length > 0 && isNaN(city[0]);
// }
// function isValidMove(city) {
//   if (cities.length === 0) {
//     return true; 
//   }
//   let lastCity = cities[cities.length - 1];
//   let lastLetter = lastCity.slice(-1).toUpperCase();
//   if (lastCity.endsWith("ь")) {
//     lastLetter = lastCity[lastCity.length - 2].toUpperCase();
//   }
//   return city.toUpperCase().startsWith(lastLetter);
// }
// function makeMove() {
//   switch (currentPlayer) {
//     case 1:    
//       break;
//     case 2:    
//       break;
//     case 3:   
//       makeRobotMove();
//       break;
//   }
// }
// function makeRobotMove() {
//   let lastCity = cities[cities.length - 1];
//   let lastLetter = lastCity.slice(-1).toUpperCase();
//   if (lastCity.endsWith("ь")) {
//     lastLetter = lastCity[lastCity.length - 2].toUpperCase();
//   }
//   let availableCities = allCities.filter(city => !cities.includes(city) && city.toUpperCase().startsWith(lastLetter));
//   if (availableCities.length > 0) {
//     let robotCity = availableCities[Math.floor(Math.random() * availableCities.length)];
//     cities.push(robotCity);
//     displayMessage(`робот: "${robotCity}". следующий ход.`);
//     currentPlayer = 1; 
//   } else {
//     displayMessage("победа!");
//   }
// }
// function displayMessage(text) {
//   message.textContent = text;
// }

//18-23.чеклист на JavaScript
// let input = document.querySelector('#input');
// let list = document.querySelector('#list');
// input.addEventListener('keypress', function(event) {
// 	if (event.key == 'Enter') {
// 		let li = document.createElement('li');
// 		let task = document.createElement('span');
// 		task.classList.add('task');
// 		task.textContent = this.value;
// 		task.addEventListener('dblclick', function() {
// 			let text = this.textContent;
// 			this.textContent = '';		
// 			let edit = document.createElement('input');
// 			edit.value = text;
// 			this.appendChild(edit);	
// 			let self = this;
// 			edit.addEventListener('keypress', function(event) {
// 				if (event.key == 'Enter') {
// 					self.textContent = this.value;
// 				}
// 			});
// 		});
// 		li.appendChild(task);
// 		let remove = document.createElement('span');
// 		remove.textContent = 'удалить';
// 		remove.classList.add('remove');
// 		remove.addEventListener('click', function() {
// 			this.parentElement.remove();
// 		});
// 		li.appendChild(remove);
// 		let mark = document.createElement('span');
// 		mark.textContent = 'сделано';
// 		mark.classList.add('mark');
// 		mark.addEventListener('click', function() {
// 			this.parentElement.classList.add('done');
// 		});
// 		li.appendChild(mark);
// 		list.appendChild(li);	
// 		this.value = '';
// 	}
// });

// 24-29.калькулятор продуктов на JavaScript
// let name   = document.querySelector('#name');
// let price  = document.querySelector('#price');
// let amount = document.querySelector('#amount');
// let add    = document.querySelector('#add');
// let table  = document.querySelector('#table');
// let total  = document.querySelector('#total');
// function createCell(tr, value, name) {
//   let td = document.createElement('td');
//   td.textContent = value;
//   td.classList.add(name);
//   tr.appendChild(td);
//   return td;
// }
// function recountTotal() {
//   let costs = table.querySelectorAll('.cost');
//   let sum = 0;
//   if (costs.length > 0) {
//     costs.forEach(cost => {
//       sum += parseFloat(cost.textContent);
//     });
//   }
//   total.textContent = sum.toFixed(2);
// }
// function allowEdit(td) {
//   td.addEventListener('dblclick', function () {
//     let text = td.textContent;
//     td.textContent = '';
//     let input = document.createElement('input');
//     input.value = text;
//     input.focus();
//     td.appendChild(input);
//     input.addEventListener('keydown', function (event) {
//       if (event.key === 'Enter') {
//         td.textContent = this.value;
//         if (td.classList.contains('price') || td.classList.contains('amount')) {        
//           let row = td.parentElement;
//           let price = parseFloat(row.querySelector('.price').textContent);
//           let amount = parseFloat(row.querySelector('.amount').textContent);
//           let cost = price * amount;        
//           row.querySelector('.cost').textContent = cost;         
//           recountTotal();
//         }
//       }
//     });
//   });
// }
// add.addEventListener('click', function() {
//   let tr = document.createElement('tr');
//   let nameCell = createCell(tr, name.value, 'name');
//   let priceCell = createCell(tr, price.value, 'price');
//   let amountCell = createCell(tr, amount.value, 'amount');
//   createCell(tr, price.value * amount.value, 'cost');
//   let removeCell = createCell(tr, 'удалить', 'remove');
//   removeCell.addEventListener('click', function() {   
//     tr.remove();   
//     recountTotal();
//   });
//   table.appendChild(tr); 
//   allowEdit(nameCell);
//   allowEdit(priceCell);
//   allowEdit(amountCell);
//   recountTotal();
// });

//30.1.2.тест с вопросами и ответами в HTML коде на JavaScript
// let inputs = document.querySelectorAll('#test input');
// let checkButton = document.querySelector('#checkAnswers');
// inputs.forEach(input => {
//   input.addEventListener('keypress', function(event) {
//     if (event.key === 'Enter') {
//       checkAnswer(input);
//     }
//   });
// });
// checkButton.addEventListener('click', function() {
//   inputs.forEach(input => {
//     checkAnswer(input);
//   });
// });
// function checkAnswer(input) {
//   let userAnswer = input.value.trim();
//   let correctAnswer = input.getAttribute('data-right');
//   if (userAnswer === correctAnswer) {
//     input.classList.remove('wrong');
//     input.classList.add('right');
//   } else {
//     input.classList.remove('right');
//     input.classList.add('wrong');
//   }
// }

//31.тест с ответами в массиве на JavaScript
// let questions = ['вопрос 1?', 'вопрос 2?', 'вопрос 3?'];
//   let answers = ['ответ 1', 'ответ 2', 'ответ 3'];
//   let inputs = document.querySelectorAll('#test input');
//   let checkButton = document.querySelector('#button');
//   checkButton.addEventListener('click', function() {
//     inputs.forEach((input, index) => {
//       checkAnswer(input, answers[index]);
//     });
//   });
//   function checkAnswer(input, correctAnswer) {
//     let userAnswer = input.value.trim();
//     if (userAnswer === correctAnswer) {
//       input.classList.remove('wrong');
//       input.classList.add('right');
//     } else {
//       input.classList.remove('right');
//       input.classList.add('wrong');
//     }
//   }

//32.тест с вопросами и ответами в массиве на JavaScript
// let questions = ['вопрос 1?', 'вопрос 2?', 'вопрос 3?'];
// let answers = ['ответ 1', 'ответ 2', 'ответ 3'];
// let testContainer = document.querySelector('#test');
// let checkButton = document.querySelector('#button');
// // Создаем дивы с вопросами и инпутами
// questions.forEach((question, index) => {
//   let questionDiv = document.createElement('div');
//   questionDiv.innerHTML = `<p>${question}</p><input>`;
//   testContainer.appendChild(questionDiv);
// });
// checkButton.addEventListener('click', function() {
//   let inputs = document.querySelectorAll('#test input');
//   inputs.forEach((input, index) => {
//     checkAnswer(input, answers[index]);
//   });
// });
// function checkAnswer(input, correctAnswer) {
//   let userAnswer = input.value.trim();
//   if (userAnswer === correctAnswer) {
//     input.classList.remove('wrong');
//     input.classList.add('right');
//   } else {
//     input.classList.remove('right');
//     input.classList.add('wrong');
//   }
// }

// 33.1.тест с вопросами и ответами в объекте на JavaScript
// let questions = {
//     'Вопрос 1?': 'ответ 1',
//     'Вопрос 2?': 'ответ 2',
//     'Вопрос 3?': 'ответ 3',
//   };
//   let testContainer = document.querySelector('#test');
//   let checkButton = document.querySelector('#button');
//   for (let question in questions) {
//     let questionDiv = document.createElement('div');
//     questionDiv.innerHTML = `<p>${question}</p><input>`;
//     testContainer.appendChild(questionDiv);
//   }
//   checkButton.addEventListener('click', function() {
//     let inputs = document.querySelectorAll('#test input');
//     inputs.forEach((input, index) => {
//       checkAnswer(input, Object.values(questions)[index]);
//     });
//   });
//   function checkAnswer(input, correctAnswer) {
//     let userAnswer = input.value;
//     if (userAnswer === correctAnswer) {
//       input.classList.remove('wrong');
//       input.classList.add('right');
//     } else {
//       input.classList.remove('right');
//       input.classList.add('wrong');
//     }
//   }

// 33.2.тест с вопросами и ответами в объекте на JavaScript
  // let questions = [
  //   {
  //     text: 'вопрос 1?',
  //     right: 'ответ 1',
  //   },
  //   {
  //     text: 'вопрос 2?',
  //     right: 'ответ 2',
  //   },
  //   {
  //     text: 'вопрос 3?',
  //     right: 'ответ 3',
  //   },
  // ];
  // let testContainer = document.querySelector('#test');
  // let checkButton = document.querySelector('#button');
  // questions.forEach(question => {
  //   let questionDiv = document.createElement('div');
  //   questionDiv.innerHTML = `<p>${question.text}</p><input>`;
  //   testContainer.appendChild(questionDiv);
  // });
  // checkButton.addEventListener('click', function() {
  //   let inputs = document.querySelectorAll('#test input');
  //   inputs.forEach((input, index) => {
  //     checkAnswer(input, questions[index].right);
  //   });
  // });
  // function checkAnswer(input, correctAnswer) {
  //   let userAnswer = input.value;
  //   if (userAnswer === correctAnswer) {
  //     input.classList.remove('wrong');
  //     input.classList.add('right');
  //   } else {
  //     input.classList.remove('right');
  //     input.classList.add('wrong');
  //   }
  // }

// 34.1 тест с вариантами ответов в HTML коде на JavaScript
  // let testContainer = document.querySelector('#test');
  //   testContainer.addEventListener('change', function (event) {
  //     let selectedOption = event.target;
  //     checkAnswer(selectedOption);
  //   });
  //   function checkAnswer(selectedOption) {
  //     let isRight = selectedOption.hasAttribute('data-right');   
  //     if (isRight) {
  //       selectedOption.parentElement.classList.remove('wrong');
  //       selectedOption.parentElement.classList.add('right');
  //     } else {
  //       selectedOption.parentElement.classList.remove('right');
  //       selectedOption.parentElement.classList.add('wrong');
  //     }
  //   }

// 34.2 тест с вариантами ответов в HTML коде на JavaScript
// let testContainer = document.querySelector('#test');
// let checkButton = document.querySelector('#checkButton');
// testContainer.addEventListener('change', function (event) {
//   let selectedOption = event.target;
//   checkAnswer(selectedOption);
// });
// checkButton.addEventListener('click', function() {
//   let selectedOptions = document.querySelectorAll('input[type="radio"]:checked');
//   selectedOptions.forEach(selectedOption => {
//     checkAnswer(selectedOption);
//     function checkAnswer(selectedOption) {
//       let isRight = selectedOption.hasAttribute('data-right');    
//       if (isRight) {
//         selectedOption.parentElement.classList.remove('wrong');
//         selectedOption.parentElement.classList.add('right');
//       } else {
//         selectedOption.parentElement.classList.remove('right');
//         selectedOption.parentElement.classList.add('wrong');
//       }
//     }
//   });
// });

// 35.тест с вариантами ответов в массиве на JavaScript
// let testContainer = document.querySelector('#test');
// let checkButton = document.querySelector('#checkButton');
// let answers = [0, 1, 2];
// testContainer.addEventListener('change', function (event) {
//   let selectedOption = event.target;
//   checkAnswer(selectedOption);
// });
// checkButton.addEventListener('click', function() {
//   let selectedOptions = document.querySelectorAll('input[type="radio"]:checked');
//   selectedOptions.forEach(selectedOption => {
//     checkAnswer(selectedOption);
//     function checkAnswer(selectedOption) {
//       let selectedQuestionIndex = parseInt(selectedOption.getAttribute('data-index'));
//       let isRight = answers[selectedQuestionIndex] == selectedOption.parentElement.querySelectorAll('input[type="radio"]').length - 1;
//       if (isRight) {
//         selectedOption.parentElement.classList.remove('wrong');
//         selectedOption.parentElement.classList.add('right');
//       } else {
//         selectedOption.parentElement.classList.remove('right');
//         selectedOption.parentElement.classList.add('wrong');
//       }
//     }
//   });
// });

// 36.тест с вопросами и вариантами ответов в объекте на JavaScript
// let testContainer = document.querySelector('#test');
// let checkButton = document.querySelector('#checkButton');
// let questions = [
//   {
//     text: 'вопрос 1?',
//     right: 0,
//     variants: [
//       'вариант 1',
//       'вариант 2',
//       'вариант 3'
//     ]
//   },
//   {
//     text: 'вопрос 2?',
//     right: 1,
//     variants: [
//       'вариант 1',
//       'вариант 2',
//       'вариант 3'
//     ]
//   },
//   {
//     text: 'вопрос 3?',
//     right: 2,
//     variants: [
//       'вариант 1',
//       'вариант 2',
//       'вариант 3'
//     ]
//   },
// ];
// questions.forEach((question, index) => {
//   let questionDiv = document.createElement('div');
//   questionDiv.innerHTML = `<p>${question.text}</p>`;
//   question.variants.forEach((variant, variantIndex) => {
//     let label = document.createElement('label');
//     let input = document.createElement('input');
//     input.type = 'radio';
//     input.name = `question${index}`;
//     input.value = variantIndex;
//     label.appendChild(input);
//     label.appendChild(document.createTextNode(` ${variant}`));
//     questionDiv.appendChild(label);
//   });
//   testContainer.appendChild(questionDiv);
// });
// checkButton.addEventListener('click', checkAnswers);
// function checkAnswers() {
//   let questionDivs = document.querySelectorAll('#test div');
//   questionDivs.forEach((questionDiv, questionIndex) => {
//     let selectedOption = questionDiv.querySelector('input[type="radio"]:checked');
//     let isRight = parseInt(selectedOption.value) === questions[questionIndex].right;
//     highlightAnswer(questionDiv, isRight);
//   });
// }
// function highlightAnswer(questionDiv, isRight) {
//   questionDiv.classList.remove('right', 'wrong');
//   questionDiv.classList.add(isRight ? 'right' : 'wrong');
// }

// 41-46.игра крестики-нолики на JavaScript
// let cells = document.querySelectorAll('#field td');
// start(cells);
// function isVictory(cells) {
//     let combs = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6],
//     ];
//     for (let comb of combs) {
//         if (
//             cells[comb[0]].textContent == cells[comb[1]].textContent &&
//             cells[comb[1]].textContent == cells[comb[2]].textContent &&
//             cells[comb[0]].textContent != ''
//         ) {
//             return true; 
//         }
//     }
//     return false;
// }
// function start(cells) {
//     let i = 0;
//     for (let cell of cells) {
//         cell.addEventListener('click', function step() {
//             this.textContent = ['X', 'O'][i % 2];
//             this.removeEventListener('click', step);
//             let winner = isVictory(cells);
//             if (winner) {
//                 if (winner === 'X') {
//                     alert('Выиграл игрок X');
//                 } else {
//                     alert('Выиграл игрок O');
//                 }
//             } else if (i == 8) {
//                 alert('Ничья');
//             }
//             i++;
//         });
//     }
// }

// 47-51.игра смена цветов на JavaScript
// function getRandomElement(array) {
//     let randomIndex = Math.floor(Math.random() * array.length);
//     return array[randomIndex];
// }  
// let rows = 3;
// let cols = 3;
// let colors = ['pink', 'aqua', 'purple'];
//   let field = document.querySelector('#field');
//   for (let i = 0; i < rows; i++) {
//     let row = field.insertRow();
//     for (let j = 0; j < cols; j++) {
//       let cell = row.insertCell();
//       let randomColor = getRandomElement(colors);
//       cell.classList.add(randomColor);
//     }
// }  
//   function getNextElement(array, currentElement) {
//     let currentIndex = array.indexOf(currentElement);
//     let nextIndex = (currentIndex + 1) % array.length;
//     return array[nextIndex];
// }
// let cells = document.querySelectorAll('#field td');
//   cells.forEach(cell => {
//     cell.addEventListener('click', handleClick);
//   });
// function checkVictory(cells) {
//     let firstCellClass = cells[0].className;
//     for (let cell of cells) {
//       if (cell.className !== firstCellClass) {
//         return false; 
//       }
//     }
//     return true; 
// }
// let clickCount = 0; 
// let clickCountElement = document.createElement('div');
// clickCountElement.textContent = `количество ходов: ${clickCount}`;
// document.body.insertBefore(clickCountElement, field);
// function handleClick() {
//   let currentColor = this.className; 
//   let nextColor = getNextElement(colors, currentColor); 
//   this.classList.remove(currentColor); 
//   this.classList.add(nextColor); 
//   clickCount++; 
//   clickCountElement.textContent = `количество ходов: ${clickCount}`; 
//     if (checkVictory(cells)) {
//       alert(`ты красавик! количество ходов: ${clickCount}`);
//     }
// }
  
// 52-62.календарь на JavaScript
// let calendar = document.querySelector('#calendar');
// let body = calendar.querySelector('.body');
// let prev = calendar.querySelector('.prev');
// let next = calendar.querySelector('.next');
// let date = new Date();
// let year = date.getFullYear();
// let month = date.getMonth();
// let monthNames = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];
// draw(body, year, month);
// function draw(body, year, month) {
//     let arr = range(getLastDay(year, month));
//     let firstWeekDay = getFirstWeekDay(year, month);
//     let lastWeekDay = getLastWeekDay(year, month);
//     let nums = chunk(normalize(arr, firstWeekDay, 6 - lastWeekDay), 7);
//     createTable(body, nums);
//     updateInfo(month, year);
//     function updateInfo(month, year) {
//         let infoElement = document.querySelector('.info');
//         infoElement.textContent = `${monthNames[month]} ${year}`;
//     }
// }
// function createTable(parent, arr) {
//   parent.textContent = '';
//   let cells = [];
//   for (let sub of arr) {
//     let tr = document.createElement('tr');
//     for (let num of sub) {
//       let td = document.createElement('td');
//       td.textContent = num;
//       tr.appendChild(td);
//       cells.push(td);
//     }
//     parent.appendChild(tr);
//   }
//   return cells;
// }
// function normalize(arr, left, right) {
//   for (let i = 0; i < left; i++) {
//     arr.unshift('');//unshift() добавляет указанные элементы в начало массива и возвращает новую длину массива.
//   }
//   for (let i = 0; i < right; i++) {
//     arr.push('');
//   }
//   return arr;
// }
// function getFirstWeekDay(year, month) { //номер первого дня недели
//   let date = new Date(year, month, 1);
//   let num  = date.getDay();
//   if (num === 0) {
//     return 6;
//   } else {
//     return num - 1;
//   }
// }
// function getLastWeekDay(year, month) { //номер последнего дня недели
//   let date = new Date(year, month + 1, 0);
//   let num  = date.getDay();
//   return num === 0 ? 6 : num - 1;
// }
// function getLastDay(year, month) { //номер последнего дня месяца
//   let date = new Date(year, month + 1, 0);
//   return date.getDate();
// }
// function range(count) {
//   let arr = [];
//   for (let i = 1; i <= count; i++) {
//     arr.push(i);
//   }
//   return arr;
// }
// function chunk(arr, n) {
//   let result = [];
//   let count = Math.ceil(arr.length / n);
//   for (let i = 0; i < count; i++) {
//     let elems = arr.splice(0, n);
//     result.push(elems);
//   }
//   return result;
// }
// function getNextYear(currentYear, currentMonth) {
//   return currentMonth === 11 ? currentYear + 1 : currentYear;
// }
// function getNextMonth(currentMonth) {
//   return currentMonth === 11 ? 0 : currentMonth + 1;
// }
// function getPrevYear(currentYear, currentMonth) {
//   return currentMonth === 0 ? currentYear - 1 : currentYear;
// }
// function getPrevMonth(currentMonth) {
//   return currentMonth === 0 ? 11 : currentMonth - 1;
// }
// function updateInfo(month, year) {
//   let infoElement = document.querySelector('.info');
//   infoElement.textContent = `${monthNames[month]} ${year}`;
// }
// next.addEventListener('click', function () {
//   year = getNextYear(year, month);
//   month = getNextMonth(month);
//   draw(body, year, month);
// });
// prev.addEventListener('click', function () {
//   year = getPrevYear(year, month);
//   month = getPrevMonth(month);
//   draw(body, year, month);
// });
  

