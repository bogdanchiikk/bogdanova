// #2
// let elem = document.querySelector('#elem');
// let but = document.querySelector('#but');
// but.addEventListener('click', function(){
//     elem.style.width = '400px';
//     elem.style.height = '300px';
//     console.log(elem.style.width);
//     console.log(elem.style.height);
// })

// #2.1
// let elem = document.querySelector('#elem');
// let but = document.querySelector('#but');
// but.addEventListener('click', function(){
//     let width = elem.style.width;
//     console.log(parseInt(width))
// })

// #2.2
// let elem = document.querySelector('#elem');
// let but = document.querySelector('#but');
// but.addEventListener('click', function(){
//     let fontSize = elem.style.fontSize;
//     console.log(parseFloat(fontSize))
// })

// #3.4
// let elem = document.querySelector('#elem');
// let but = document.querySelector('#but');
// but.addEventListener('click', function(){
//     let widthPx = elem.style.width;
//     let widthNm = parseInt(widthPx);
//     elem.style.width = (widthNm + 50) + 'px';
//     let heightPx = elem.style.height;
//     let heightNm = parseInt(heightPx);
//     elem.style.height = (heightNm + 50) + 'px';
// })

// #3.5
// let elem = document.querySelector('#elem');
// let but = document.querySelector('#but');
// but.addEventListener('click', function(){
//     let widthPx = elem.style.width;
//     let widthNm = parseInt(widthPx) * 1.1;
//     elem.style.width = widthNm + 'px';
//     let heightPx = elem.style.height;
//     let heightNm = parseInt(heightPx) * 1.1;
//     elem.style.height = heightNm + 'px';
// })

// #4.1
// let elem = document.querySelector('#elem');
// let but = document.querySelector('#but');
// but.addEventListener('click', function(){
//     console.log(elem.style.borderWidth);
//     console.log(elem.style.borderStyle);
//     console.log(elem.style.borderColor);
//     console.log(elem.style.border);
// })

// #5.1 Дан див и две кнопки. По клику на первую кнопку спрячьте див, а по клику на вторую - покажите.
// let elem = document.querySelector('#elem');
// let but1 = document.querySelector('#but1');
// let but2 = document.querySelector('#but2');
// but1.addEventListener('click', function(){
//     elem.style.display = 'none';
// })
// but2.addEventListener('click', function(){
//     elem.style.display = '';
// })

// #5.2 Дан див и две кнопки. По клику на первую кнопку покрасьте цвет дива в красный цвет, а по клику на вторую - верните исходный цвет.
// let elem = document.querySelector('#elem');
// let but1 = document.querySelector('#but1');
// let but2 = document.querySelector('#but2');
// but1.addEventListener('click', function(){
//     elem.style.borderColor = 'red';
// })
// but2.addEventListener('click', function(){
//     elem.style.borderColor = '';
// })

// #6.1 Перепишите код через изученное свойство:
// elem.style.width  = '100px';
// elem.style.height = '100px';
// elem.style.margin = '10px auto';
// elem.style.color  = 'red';
// elem.style.cssText = `
// 	width: 100px;
// 	height: 100px;
// 	margin: 10px auto;
//     color: red;
// `;

// #8.1 Для элемента заданы следующие стили: По клику на кнопку выведите ширину и высоту элемента.
// let elem = document.querySelector('#elem');
// let but = document.querySelector('#but');
// but.addEventListener('click', function(){
//     let elemStyle = getComputedStyle(elem);
//     console.log(elemStyle.width);
//     console.log(elemStyle.height);
// })

// #8.2 Для элемента заданы следующие стили: По клику на кнопку увеличьте ширину и высоту элемента в два раза.
// let elem = document.querySelector('#elem');
// let but = document.querySelector('#but');
// but.addEventListener('click', function(){
//     let elemStyle = getComputedStyle(elem);
//     let widthPx = elemStyle.width;
//     let widthNm = parseInt(widthPx) * 2;
//     elemStyle.width = widthNm + 'px';
//     let heightPx = elemStyle.height;
//     let heightNm = parseInt(heightPx) * 2;
//     elemStyle.height = heightNm + 'px';
// })

// #9.1 Для элемента заданы следующие стили: По клику на кнопку выведите размер шрифта элемента.
// let elem = document.querySelector('#elem');
// let but = document.querySelector('#but');
// but.addEventListener('click', function(){
//     let elemStyle = getComputedStyle(elem);
//     console.log(elemStyle.fontSize)
// })

// #10.1
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');

// let numbers1 = elem1.innerText.split(', ').map(Number);
// let numbers2 = elem2.innerText.split(', ').map(Number);
// if (numbers1.some(num => num % 2 === 0)){
//     elem1.classList.add('even');
// }else{
//     elem1.classList.add('odd');
// }
// if (numbers2.some(num => num % 2 === 0)){
//     elem2.classList.add('even');
// }else{
//     elem2.classList.add('odd');;
// }


// #11.1
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');

// ??????

// #12.1
// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', function(){
//     let length = elem.value.length;
//     if (length < 9){
//         elem.classList.add('success');
//     }else{
//         elem.classList.add('warrning');
//     }
// })

// #13.1
// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', function(){
//     let length = elem.value.length;
//     if (length < 10){
//         elem.dataset.type = 'success';
//     }else if(length >= 10 && length <= 20){
//         elem.dataset.type = 'warning'; 
//     }else{
//         elem.dataset.type = 'error';
//     }
// })

// #45
// let elems = document.querySelectorAll('p');
// console.log(elems[0]);
// console.log(elems[1]);
// console.log(elems[2]);
// console.log(elems.length);
// for (let elem of elems) {
// 	console.log(elem);
// }

// #46
// let elems = document.querySelectorAll('p');
// console.log(elems.slice(1, 3));

// #47
// let test = [
// 	[1, 2, 3],
// 	{a: 1, b: 2, c: 3},
// 	[3, 4, 5],
// 	{x: 1, y: 2, z: 3},
// ];

// for (let element of test) {
//     let isArray = Array.isArray(element);
//     console.log(isArray);
// }

// #48.1
// let elems = document.querySelectorAll('p');
// let arr = [];

// for (let elem of elems) {
//  arr.push(elem);
//  console.log(arr);
// }

// let arr = [...elems];

// let arr = Array.from(elems);

// #48.2
// let elems = document.querySelectorAll('p');
// let slicedElems = Array.from(elems).slice(1, -1);
// console.log(slicedElems);

// #49.1
// let parent = document.querySelector('#parent');
// let nodes = parent.childNodes;
// console.log(nodes);


// #49.2
// let parent = document.querySelector('#parent');
// let elems = parent.children;
// console.log(elems);

// #49.3
// let elems = document.getElementsByClassName('www');
// console.log(elems);

// #50.1
// let parent = document.querySelector('div');
// let elems1 = document.getElementsByTagName('p'); // HTMLCollection
// let elems2 = document.querySelectorAll('p');     // NodeList
// let elems = parent.children;
// let p = document.createElement('p');
// parent.append(p);console.log(elems1); // 4 абзаца - с новым
// console.log(elems2); // 3 начальных абзаца

// #50.2
// let parent = document.querySelector('div');
// let elems1 = document.getElementsByTagName('p'); 
// let elems2 = document.querySelectorAll('p');     
// let nodes = parent.childNodes;
// let p = document.createElement('p');
// parent.append(p);
// console.log(elems1); 
// console.log(elems2); 

// #51
// let sym1 = Symbol();
// let sym2 = Symbol();

// console.log(sym1, sym2);

// #52
// let sym1 = Symbol('текстовое описание');
// let sym2 = Symbol('текстовое описание');
// console.log(sym1, sym2);

// #53.1
// let obj = {a: 1, b: 2, c: 3};
// let sym = Symbol();
// obj[sym] = 'text';
// console.log(obj);
// console.log(obj[sym]);

// #54
// let obj = {a: 1, b: 2, c: 3};
// let sym = Symbol();
// obj[sym] = 'text';
// for (let key in obj) {
// 	console.log(obj[key]); // 1, 2, 3
// };
// console.log(obj);

// #55
// let obj = {a: 1, b: 2, c: 3};
// let sym = Symbol();
// obj[sym] = function() {
//     let date =  new Date();
//     console.log(date);
// };
// let func = obj[sym];
// func();

// #56
// let arr = [1, 2, 3];
// let sym = Symbol();
// arr[sym] = function() {
//  let sum = 0;
 
//  for (let key in this) {
//   sum += this[key];
//  }
 
//  return sum;
// };
// let sum = arr[sym]();
// console.log(sum);

// #58
// let sym1 = Symbol.for('test1');
// let sym2 = Symbol.for('test2');
// let key1 = Symbol.keyFor(sym1);
// let key2 = Symbol.keyFor(sym2);
// console.log(key1, key2);


// #59.1
// let map = new Map();
// let func = map[Symbol.iterator];
// console.log(func);

// #59.2
// let set = new Set([1, 2, 3]);
// let func = set[Symbol.iterator];
// console.log(func);

// #61
// let arr = [1, 2, 3];
// let func = arr[Symbol.iterator];
// console.log(func);

// #62
// let map = new Map([
//     ['key1', 'value1'],
//     ['key2', 'value2'],
//     ['key3', 'value3']
// ]);
// let iter = map[Symbol.iterator]();
// console.log( iter.next() ); 
// console.log( iter.next() ); 
// console.log( iter.next() );

// #63
// function *func() {
//     yield 5;
//     yield 4;
//     yield 3;
//     yield 2;
//     yield 1;
//     }
// let iter = func();
// console.log(iter.next()); 
// console.log(iter.next()); 
// console.log(iter.next()); 
// console.log(iter.next());
// console.log(iter.next());
    

//61 
// let arr = [1, 2, 3]; 
// let func = arr[Symbol.iterator]; 
// console.log(func); 
 
//62 
// let map = new Map([ 
//         ['key1', 'value1'], 
//         ['key2', 'value2'], 
//         ['key3', 'value3'] 
// ]); 
// let iter = map[Symbol.iterator](); 
// console.log( iter.next() );  
// console.log( iter.next() );  
// console.log( iter.next() ); 
 
//63 
// function *func() { 
//  yield 1; 
//  yield 2; 
//  yield 3; 
//     yield 4; 
//     yield 5; 
// } 
// let iter = func(); 
// console.log(iter.next());  
// console.log(iter.next());  
// console.log(iter.next());  
// console.log(iter.next()); 
// console.log(iter.next()); 
 
//64 
//1 
// function *func() { 
//  for (let i = 10; i >= 0; i--) { 
//   yield i; 
//  } 
// } 
// let iter = func(); 
// console.log(iter.next());  
// console.log(iter.next());  
// console.log(iter.next());  
// console.log(iter.next()); 
// console.log(iter.next());  
// console.log(iter.next());  
// console.log(iter.next());  
// console.log(iter.next()); 
// console.log(iter.next());  
// console.log(iter.next());  
// console.log(iter.next());  
 
//2 
// function *func(num) { 
//     while (num >= 0) { 
//       yield num; 
//       num--; 
//     } 
// } 
// let iter = func(5); 
// console.log(iter.next());  
// console.log(iter.next());  
// console.log(iter.next());  
// console.log(iter.next()); 
// console.log(iter.next());  
// console.log(iter.next()); 
// console.log(iter.next());  
 
//3 
// function *func(num) { 
//     while (num >= 1) { 
//       yield num; 
//       num= num/2; 
//     } 
// } 
// let iter = func(5); 
// console.log(iter.next());  
// console.log(iter.next());  
// console.log(iter.next());  
// console.log(iter.next()); 
 
//4 
// function *func() { 
//     let power = 1; 
//     while (true) { 
//       yield power; 
//       power *= 2; 
//     } 
//     } 
// let iter = func(); 
// console.log(iter.next());  
// console.log(iter.next());  
// console.log(iter.next());  
// console.log(iter.next()); 
 
//5 
// function *func() { 
//     let a = 0, b = 1; 
//     while (true) { 
//       yield a; 
//       [a, b] = [b, a + b]; 
//     } 
//   } 
// let iter = func(); 
// console.log(iter.next());  
// console.log(iter.next());  
// console.log(iter.next());  
// console.log(iter.next()); 
 
//65 
// function* func() { 
//     for (let i = 1; i <= 3; i++) { 
//       yield i; 
//     } 
//   } 
   
//   let elems1 = func(); 
//   for (let elem of elems1) { 
//     console.log(elem); // 1, 2, 3 
//   } 
//   let elems2 = func(); 
//   for (let elem of elems2) { 
//     console.log(elem); // 1, 2, 3 
//   } 
 
//66 
// function* func(obj) { 
//     for (let key in obj) { 
//       yield [key, obj[key]]; 
//     } 
//   } 
//   let iter = func({ a: 1, b: 2, c: 3 }); 
//   for (let elem of iter) { 
//     console.log(elem);  
//   } 
 
//67-68 
// let obj = { a: 1, b: 2, c: 3 }; 
// obj[Symbol.iterator] = function* () { 
//   for (let key in this) { 
//     if (this.hasOwnProperty(key)) { 
//       yield { key, val: this[key] }; 
//     } 
//   } 
// }; 
// for (let elem of obj) { 
//   console.log(elem); 
// } 
 
//69 
//1 
// let arr = [1, 2, 3]; 
// let arrIter = arr.values(); 
// for (let elem of arrIter) { 
//   console.log(elem);  
// } 
 
//2 
// let set = new Set([1, 2, 3]); 
// let setIter = set.values(); 
// for (let elem of setIter) { 
//   console.log(elem);  
// } 
 
//70 
//1 
// let map = new Map(); 
// map.set('a', 1); 
// map.set('b', 2); 
// map.set('c', 3); 
// let mapIter = map.keys(); 
// for (let key of mapIter) { 
//   console.log(key);  
// } 
 
//2 
// let set = new Set([1, 2, 3]); 
// let setIter = set.keys(); 
// for (let key of setIter) { 
//   console.log(key);  
// } 
 
//71 
//1 
// let map = new Map(); 
// map.set('a', 1); 
// map.set('b', 2); 
// map.set('c', 3); 
// let mapIter = map.entries(); 
// for (let entry of mapIter) { 
//   console.log(entry);  
// } 
 
// //2 
// let set = new Set([1, 2, 3]); 
// let setIter = set.entries(); 
// for (let entry of setIter) { 
//   console.log(entry);  
// } 
 
//3
// let nodeList = document.querySelectorAll('p'); 
// let nodeListIter = nodeList.entries(); 
// for (let entry of nodeListIter) { 
//   console.log(entry);  
// } 


//73 
// let obj = { 
//     a: 1, 
//     b: 2, 
//     c: 3, 
//     [Symbol.iterator]: function* () { 
//       for (let key in this) { 
//         yield this[key]; 
//       } 
//     } 
//   }; 
//   let arr = [...obj]; 
//   console.log(arr);  
   
//74 
// let str = '12345'; 
// let sum = 0; 
// for (let num of str) { 
//   sum += parseInt(num); 
// } 
// console.log(sum);  
 
//75 
// let num = 123456; 
// let sum = [...String(num)].reduce((acc, digit) => acc + Number(digit), 0); 
// console.log(sum);  
 
//76 
// let table = document.getElementById('myTable');
// let cells = table.querySelectorAll('td');
// for (let [num, cell] of cells.entries()) {
//   cell.textContent += (num + 1);
// }
 
//77 
// let inputs = document.querySelectorAll('input'); 
// for (let [key, { id, value }] of inputs.entries()) { 
//   console.log(key, id, value); 
// }











