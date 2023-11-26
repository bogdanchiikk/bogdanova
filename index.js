// +
// let elems = document.querySelectorAll('p');
// for (let i = 0; i < elems.length; i++) {
// 	elems[i].textContent += '!';
// }

// +
// let elems = document.querySelectorAll('p');
// for (let elem of elems) {
// 	elem.addEventListener('click', function() {
// 		this.textContent = Number(this.textContent) +1;
// 	});
// }

// +
// let button = document.querySelector('button');
// let elem  = document.querySelector('p');
// button.addEventListener('click', function() {
// 	elem.innerHTML = '<b>text</b>';
// });

// -
// let button = document.querySelector('button');
// let elems  = document.querySelector('p');
// button.addEventListener('click', function() {
// 	let sum = 0;
	
// 	for (let elem of elems) {
// 		sum += Number(elems.textContent);
// 	}
	
// 	console.log(sum);
// });

// +
// let elems = document.querySelectorAll('p');
// for (let elem of elems) {
// 	elem.addEventListener('click',func);
// 	function func() {
// 		this.textContent += '!';
// 	}
// }

// -
// let button = document.querySelector('button');
// let elems  = document.querySelectorAll('p');
// button.addEventListener('click', function() {
// 	for (let elem of elems) {
// 		elem.innerHTML = '<b>+elem.innerHTML+</b>';
// 	}
// });

// let elem=document.querySelector('#elem');
// let value=elem.getAttribute('value');
// console.log(value)


// let elem=document.querySelector('#elem');
// let value=elem.getAttribute('class');
// console.log(value);

// let elem=document.querySelector('#elem');
// console.log(elem.hasAttribute('class'))

// let elem=document.querySelector('#elem');
// elem.setAttribute('value', 'text')

// let elem=document.querySelector('#elem');
// elem.setAttribute('class', 'valid');

// let elem=document.querySelector('#elem');
// elem.removeAttribute('value')

// let elem=document.querySelector('#elem');
// console.log(elem.hasAttribute('value'))

// let elem = document.querySelector('#elem');
// elem.dataset.num = 123;
// console.log(elem.dataset.num); // выведет 1000

// let elem=document.querySelector('#elem');
// elem.addEventListener('click',func);
// function func() {
//     elem.textContent += elem.getAttribute('data-text')
// } 

// let div = document.querySelectorAll('div');
// for (let i=0; i< div.length; i++){
//     div[i].addEventListener('click', function () {
//         div[i].textContent =  div[i].textContent +  div[i].dataset.num
//     });
// }

// let btn1=document.querySelector('#btn1')
// let btn2=document.querySelector('#btn2')
// btn1.addEventListener('click',func1);
// btn2.addEventListener('click',func2);
// function func1() {
//     btn1.dataset.click=btn1.value++
// }
// function func2() {
//     console.log(btn1.dataset.click);
// }

// let elem=document.querySelector('#elem');
// elem.addEventListener('blur',func)
// function func() {
//     if (elem.dataset.length < elem.value.length) {
//     alert ('нет') 
// } else {
//     alert('да')
// }
// }

// let elem=document.querySelector('#elem');
// elem.addEventListener('blur',func)
// function func() {
//     if (elem.value.length < elem.dataset.min) {
//     alert ('нет')
//     } else if(elem.value.length > elem.dataset.max) {
//     alert ('нет') }
// }

// let elem=document.querySelector('div');
// elem.addEventListener('click',func);
// function func() {
//     elem.textContent=elem.textContent+elem.dataset.productPrice * elem.dataset.productAmount;
// }

// let div = document.querySelectorAll('#elem');
// for (let i=0; i<= div.length;){
// div[i++].setAttribute('data-num', i); }

// let elem=document.querySelector('#elem');
// let length = elem.classList.length;
// console.log(length);

// let elem=document.querySelector('#elem');
// let classNames = elem.classList;
// for (let className of classNames) {
// 	console.log(className);
// }

// let elem=document.querySelector('#elem');
// elem.classList.add('xxx');

// let elem=document.querySelector('#elem');
// elem.classList.remove('www');
// elem.classList.remove('zzz');

// let elem=document.querySelector('#elem');
// let contains = elem.classList.contains('ggg');
// console.log(contains);

// let elem=document.querySelector('#elem');
// elem.classList.toggle('www')

// let elem = document.querySelector('#elem');
// elem.style.color = 'red';

// let elem=document.querySelector('#elem');
// btn.addEventListener('click',func)
// function func() {
//     elem.style.width="150px";
//     elem.style.heigth="250px";
//     elem.style.border="1px solid pink";
// }

// let elem=document.querySelector('#elem');
// btn.addEventListener('click',func)
// function func() {
//     elem.style.fontSize="30px";
//     elem.style.backgroundColor="green";
//     elem.style.borderTop="1px solid pink";
// }

// let elems=document.querySelectorAll('ul li');
// btn.addEventListener('click',func)
// function func() {
//     for(let elem of elems){
//         elem.style.cssFloat ='left';

//     }
// }

// let elems = document.querySelectorAll('p');
// for (let elem of elems) {
// 	elem.addEventListener('click', function() {
// 		this.classList.add('colored'); // добавляем абзацу класс
// 	});
// }

// let elem1 = document.querySelector('p');
// let btn1=document.querySelector('#btn1')
// let btn2=document.querySelector('#btn2')
// let btn3=document.querySelector('#btn3')
// btn1.addEventListener('click',function() {
//     elem1.classList.add('line-through');
// })
// btn2.addEventListener('click',function() {
//     elem1.classList.add('bold');
// })
// btn3.addEventListener('click',function() {
//     elem1.classList.add('colored1');
// })

// let elem1 = document.querySelector('p');
// let btn1=document.querySelector('#btn1')
// let btn2=document.querySelector('#btn2')
// let btn3=document.querySelector('#btn3')
// btn1.addEventListener('click',function() {
//     elem1.classList.toggle('line-through');
// })
// btn2.addEventListener('click',function() {
//     elem1.classList.toggle('bold');
// })
// btn3.addEventListener('click',function() {
//     elem1.classList.toggle('colored1');
// })

// let button = document.querySelector('#button');
// let elem = document.querySelector('#elem');
// button.addEventListener('click', function() {
// 	elem.classList.toggle('active');
// });

// let parent = document.querySelector('#elem');
// let text = parent.firstElementChild.textContent;
// parent.firstElementChild.style.color='red';
// console.log(text);

// let parent = document.querySelector('#elem');
// let text = parent.lastElementChild.textContent;
// parent.lastElementChild.style.color='red';
// console.log(text);

// let parent = document.querySelector('#elem');
// for (let i=0;i<elem.children.length;i++) {
//     elem.children[i].textContent += '!'
// };

// let elem = document.querySelector('#elem');
// let id = elem.parentElement.id;
// console.log(id);

// let elem = document.querySelector('#elem');
// let id = elem.parentElement;
// id.style.border='2px solid red';
// console.log(id);

// let elem = document.querySelector('#child');
// let parent = elem.closest('.www');
// console.log(parent.id);

// let elem = document.querySelector('#elem');
// let parent = elem.closest('p');
// parent.style.color = 'pink'
// console.log(parent);

// let elem = document.querySelector('#elem');
// let parent = elem.closest('.www');
// console.log(parent);

// let elem = document.querySelector('#elem');
// let text = elem.previousElementSibling.textContent +'!';
// console.log(text);

// let elem = document.querySelector('#elem');
// let text = elem.nextElementSibling.textContent +'!';
// console.log(text);

// let elem = document.querySelector('#elem');
// let text = elem.nextElementSibling.nextElementSibling.textContent +'!';
// console.log(text);

// let elem=document.querySelector('#elem');
// let b = elem.previousElementSibling.textContent;
// elem.previousElementSibling.textContent=elem.nextElementSibling.textContent;
// elem.nextElementSibling.textContent=b;

// let elem = document.getElementById('elem');
// elem.value = '!!!';

// let elem = document.getElementById('elem');
// elem.textContent = 'юлька';

// let elems = document.getElementsByTagName('p');
// for (let elem of elems) {
// 	elem.innerHTML = '!!!';
// }

// let elems = document.getElementsByTagName('li');
// for (let i=0;i<elems.length;i++) {
// 	elems[i].style.color='red';
// }

// let elems = document.getElementsByClassName('www');
// for (let elem of elems) {
// 	elem.style.color = 'red';
// }

// let parent = document.querySelector('#parent');
// let elems = parent.querySelectorAll('.child');

// let parent = document.querySelector('#parent');
// let elems1=parent.querySelectorAll('.www');
// let elems2=parent.querySelectorAll('.ggg');
// for (let elem1 of elems1) 
// elem1.style.color='red';
// for (let elem2 of elems2)
// elem2.style.color='pink';

// console.log(elem.firstChild);
// console.log(elem.firstElementChild);

// console.log(elem.lastChild);
// console.log(elem.lastElementChild);

// console.log(elem.nextSibling);
// console.log(elem.nextElementSibling);

// console.log(elem.previousSibling);
// console.log(elem.previousElementSibling);

// for (let node of elem.childNodes) {
// 	console.log(node);
// }
//(по одному)
// console.log(elem.childNodes[0]);
// console.log(elem.childNodes[1]);
// console.log(elem.childNodes[2]);
// console.log(elem.childNodes[3]);
// console.log(elem.childNodes[4]);

// for (let node of elem.childNodes) {
// 	console.log(node.nodeName);
// }

// for (let node of elem.childNodes) {
//     if (node.nodeType != 8) {
//         console.log(node.nodeType);
//     }
// }

// for (let node of elem.childNodes) {
//     	console.log(node.textContent);
// }

// for (let node of elem.childNodes) {
//     if (node.nodeType != 1) {
//         console.log(node.textContent);
//     }
// }

// for (let node of elem.childNodes) {
//     if (node.nodeType != 8) {
//         console.log(node.textContent);
//     }
// }

// for (let node of elem.childNodes) {
//         console.log(node.textContent + node.nodeType);
//     }

// let texta=document.querySelector('#elem');
// let elem1=document.querySelector('#elem1');
// texta.addEventListener('blur',func);
// function func () {
//     elem1.textContent=texta.value;
// }

// let elem = document.querySelector('#elem');
// console.log(elem.disabled);
// elem.disabled = false;

// let elem = document.querySelector('#elem');
// let btn=document.querySelector('#btn');
// btn.addEventListener('click',func);
// function func() {
//     elem.disabled=true;
// }

// let elem = document.querySelector('#elem');
// let btn1=document.querySelector('#btn1');
// let btn2=document.querySelector('#btn2');
// btn1.addEventListener('click',func1);
// btn2.addEventListener('click',func2);
// function func1() {
//     elem.disabled=true;
// }
// function func2() {
//     elem.disabled=false;
// }

// let elem = document.querySelector('#elem');
// let btn1=document.querySelector('#btn1');
// btn1.addEventListener('click',func);
// function func() {
//     if (elem.disabled == true) {
//         alert('выкл')
//     } else {
//         alert('вкл')
//     }
// }

// let elem = document.querySelector('#elem');
// let btn1=document.querySelector('#btn1');
// let btn2=document.querySelector('#btn2');
// btn1.addEventListener('click',func1);
// btn2.addEventListener('click',func2);
// function func1 () {
//     elem.checked=true;
// }
// function func2 () {
//     elem.checked=false;
// }

// let elem = document.querySelector('#elem');
// let btn1=document.querySelector('#btn1');
// btn1.addEventListener('click',func1);
// function func1() {
//     if (elem.checked==true) {
//         alert('привет');
//     } else {
//         alert('bye');
//     }
// }

// let elem   = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', function() {
// 	if (elem.disabled) {
// 		elem.disabled = false;
// 	} else {
// 		elem.disabled = true;
// 	}
// });

// let elem   = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', function() {
// 	if (elem.disabled) {
// 		elem.disabled = false;
// 	} else {
// 		elem.disabled = true;
// 	}
// });

// let elem   = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', function() {
// 	if (elem.checked) {
// 		elem.checked = false;
// 	} else {
// 		elem.checked = true;
// 	}
// });

// let radios = document.querySelectorAll('input[type="radio"]');
// let button = document.querySelector('#button');
// let elem1=document.querySelector('#elem1');
// button.addEventListener('click', function() {
// 	for (let radio of radios) {
// 		if (radio.checked) {
// 			elem1.textContent=radio.value;
// 		}
// 	}
// });

// let elem = document.querySelector('#elem');
// elem.addEventListener('change', function() {
// 	console.log(this.value);
// });

// let elem = document.querySelector('#elem');
// let elem1 = document.querySelector('#elem1');
// elem.addEventListener('change', function() {
// 	elem1.textContent=this.value
// });

// let elem = document.querySelector('#elem');
// elem.addEventListener('change', func) 
// function func () {
//     if (elem.checked==false) {
//         alert ('yes')
//     } else {
//         alert('no')
//     }
// }

// let input=document.getElementById('elem');
// input.addEventListener('change',func);
// function func() {
//     if (input.value.length <5) {
//         input.style.border='2px solid green'
//     } else {
//         input.style.border='2px solid red'
//     }
// }

// let elem = document.querySelector('#elem');
// elem.addEventListener('input', function() {
// 	console.log(this.value);
// });

// let elem = document.querySelector('#elem');
// elem.addEventListener('input', function() {
// 	if (elem.value.length<=5) {
//         console.log(elem.value)
//     } else {
//         console.log('stop')
//     }
// });

// let elem=document.querySelector('#elem');
// let elem1=document.querySelector('#elem1');
// elem.addEventListener('input',func);
// function func() {
//     if (elem.value.length<=5) {
//         elem1.textContent='осталось' + (5-elem.value.length);
//         } else {
//             elem1.textContent='stop' +(elem.value.length)
//         }
// }

// let elem   = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', function() {
// 	elem.focus();
// });

// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// elem1.addEventListener('input',func1);
// elem2.addEventListener('input',func2);
// function func1() {
//     if (elem1.value.length==2) {
//         elem2.focus();
//     }
// }
// function func2() {
//     if (elem2.value.length==2) {
//         elem2.blur();
//     }
// }

// let textarea = document.querySelector('textarea');
// let div = document.querySelector('div');
// textarea.addEventListener('blur', function() {
// 	div.textContent = textarea.value;
// });

// let checkbox = document.querySelector('input[type="checkbox"]');
// let button = document.querySelector('button');
// let div = document.querySelector('div');
// button.addEventListener('click',function() {
//         if (checkbox.checked) {
//             div.textContent = '111';
//         } else {
//             div.textContent = '222';
//         } 
//     });

// let checkbox = document.querySelector('input[type="checkbox"]');
// let button = document.querySelector('button');
// button.addEventListener('click', function() {
// 	if (checkbox.checked) {
// 		console.log('+++');
// 	} else {
// 		console.log('---');
// 	}
// });

// let select = document.querySelector('#select');
// let elem1=document.querySelector('#elem1');
// let btn=document.querySelector('#btn')
// btn.addEventListener('click', function(){
// 	elem1.textContent = select.value;
// });

// let select = document.querySelector('#select');
// let elem=document.querySelector('#elem');
// select.addEventListener('change',func);
// function func() {
//     if (select.value % 4 == 0 && select.value % 100 != 0 || select.value  % 400 == 0) {
//         elem.textContent=select.value + "високосный";
//     } else {
//         elem.textContent=select.value + "нет";
//     }
// }

// select.addEventListener('change', function(){
// 	console.log(this.value);
// });

// select.addEventListener('change', function(){
// 	if (select.value== 6 || select.value== 7) {
//         console.log('вых')
//     } else {
//         console.log('не вых')
//     }
// });

// let select = document.querySelector('select');
// select.addEventListener('change', func)
// function func () {
//     let date = new Date();
//     select.value = date.getMonth() +1;
// };


// let select = document.querySelector('#select');
// let button = document.querySelector('#button');
// button.addEventListener('click', function() {
// 	select.value = 'one';
// });

// let select = document.querySelector('#select');
// console.log(select.selectedIndex); // выведет 1

// let select = document.querySelector('#select');
// select.selectedIndex = 2; // выберет 'три'

// let select = document.querySelector('#select');
// let inp=document.querySelector('input');
// inp.addEventListener('blur',func);
// function func() {
//     select.value=inp.value;
// }

// let select = document.querySelector('select');
// select.addEventListener('change', func)
// function func () {
//     let date = new Date();
//     select.selectedIndex = date.getDay() - 1;
// };


// let options = document.querySelectorAll('#select option');
// console.log(options);

// let select = document.querySelector('#select');
// for (let option of select) {
// 	console.log(option);
// }
// console.log(select[0]);(к одному)

// let select = document.querySelector('#select');
// for (let option of select) {
// 	option.textContent+= '-'+ option.value;
// }

// let option = select[0];
// console.log(option.text);
// console.log(option.value);
// console.log(option.selected);


// let select = document.querySelector('#select');
// for (let option of select) {
// 	if (option.selected=true) {
//         option.textContent+= '!';
//     } else {
//         option.textContent+= '?';
//     }
// }

// let select = document.querySelector('#select');
// let options=document.querySelectorAll('#option')
// select.addEventListener('change',function() {
//     for (let options of select) {
//         if (options.selected) {
//           options.textContent += '!';
//         } else {
//           options.textContent += '?';
//         }
//       }
// });

// let select = document.querySelector('#select');
// let btn=document.querySelector('#btn');
// btn.addEventListener('click',func);
// function func() {
//     select.selectedIndex = 2;
// }

// let select = document.querySelector('#select');
// select.selectedIndex = 2;
// console.log(select[select.selectedIndex]);

// let select = document.querySelector('#select');
// let btn=document.querySelector('#btn');
// let options=document.querySelectorAll('#option')
// btn.addEventListener('click',func);
// function func() {
//     elem.textContent=select[select.selectedIndex].textContent;
// }

// let select=document.querySelector('#select');
// let inp=document.querySelector('#inp');
// let options=document.querySelectorAll('#option')
// inp.addEventListener('click',func);
// function func() {
//     for (let options of select) {
//         options.textContent=select[select.selectedIndex].textContent + '!'
//     }
// }

// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function(event) {
//     console.log(event);
// });

// let eventObject = {
//     name: 'julia',
//     surname: 'bogdanova',
//     age: 18,
//   };
// console.log(eventObject);

// let elem = document.getElementById('elem');
// document.addEventListener('mousemove', function(event) {
// 	elem.innerHTML = event.clientX + ' : ' + event.clientY;
// });

// let elem = document.getElementById('elem');
// document.addEventListener('mousemove', function(event) {
// 	elem.innerHTML = event.pageX + ' : ' + event.pageY;
// });

// elem.addEventListener('click', function(event) {
// 	console.log(event.type); // выведет 'click'
// });

// let elem = document.querySelector('#elem');
// elem.addEventListener('click', func);
// elem.addEventListener('dblclick', func);
// function func(event) {
// 	if (event.type === "click") {
//         elem.style.backgroundColor = "green";
//       } else if (event.type === "dblclick") {
//         elem.style.backgroundColor = "yellow";
// }
// }

// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function(event) {
// 	// console.log(event.target); // выведет наш абзац
// 	console.log(this); // выведет наш див
// });

// let elem = document.getElementById('elem');
// elem.addEventListener('click', function(event) {
//     if (event.target.tagName === 'LI') {
//         event.target.textContent += '!';
//       } else if (event.target.tagName === 'UL') {
//         console.log('нажала на ul');
//       }
// });

// let elem = document.querySelector('input');
// elem.addEventListener('keypress', function(event) {
// 	console.log(event.key);
// });
// elem.addEventListener('keypress', function(event) {
// 	console.log(event.code);
// });

// let inp=document.getElementById('input');
// let elem=document.querySelector('#elem');
// inp.addEventListener('keypress', func);
// function func(event) {
//     if (event.key==='Enter') {
//         elem.textContent=inp.value;
//         inp.value=' ';
//     }
// }

// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function(event) {
// 	if (event.ctrlKey) {
// 		console.log('нажат Ctrl');
// 	}
// 	if (event.altKey) {
// 		console.log('нажат Alt');
// 	}
// 	if (event.shiftKey) {
// 		console.log('нажат Shift');
// 	}
// });

// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function(event) {
// 	if (event.ctrlKey) {
// 		console.log('нажат Ctrl');
// 	}
// 	if (event.altKey) {
// 		elem.style.backgroundColor = "red";
// 	}
// 	if (event.shiftKey) {
// 		console.log('нажат Shift');
// 	}
// });

// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function(event) {
// 	if (event.ctrlKey) {
// 		event.target.textContent += '1';
// 	}
// 	if (event.shiftKey) {
// 		event.target.textContent += '2';
// 	}
// });

// let links = document.querySelectorAll('a');
// for (let link of links) {
//     link.addEventListener('click', function(event) {
//       event.preventDefault();
//       this.innerHTML +='(' +this.href+ ')';
//     });
// };

// let elem=document.querySelector('#elem');
// let inp1=document.querySelector('#inp1');
// let inp2=document.querySelector('#inp2');
// let link = document.querySelector('a');
//     link.addEventListener('click', function(event) {
//         event.preventDefault();
//       elem.textContent +=Number(inp1.value)+Number(inp2.value);
// });

// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');
// elem1.addEventListener('click', function() {
// 	alert('зеленый');
// });
// elem2.addEventListener('click', function() {
// 	alert('голубой');
// });
// elem3.addEventListener('click', function() {
// 	alert('красный');
// });

// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');
// elem1.addEventListener('click', function() {
// 	alert('зеленый');
// });
// elem2.addEventListener('focus', function() {
// 	alert('голубой');
// });
// elem3.addEventListener('click', function() {
// 	alert('красный');
// });

// let div = document.querySelector('div');
// div.addEventListener('click', function() {
// 	console.log('click');
// });

// let div = document.querySelector('div');
// div.addEventListener('click', function() {
// 	console.log('this');
// });

// let div = document.querySelector('div');
// div.addEventListener('click', function(event) {
// 	console.log(event.target); // или див, или абзац
// });

// let div = document.querySelector('div');
// div.addEventListener('click', function(event) {
// 	if (event.target.tagName === 'DIV') {
// 		console.log('клик именно по диву');
// 	}
// 	if (event.target.tagName === 'P') {
// 		console.log('клик именно по абзацу');
// 	}
// });

// let div = document.querySelector('div');
// div.addEventListener('click', function(event) {
// 	if (event.target.matches('div')) {
// 		console.log('клик именно по диву');
// 	}
// 	if (event.target.matches('p')) {
// 		console.log('клик именно по абзацу');
// 	}
// });

// let div = document.querySelector('div');
// div.addEventListener('click', function(event) {
// 	if (event.target.tagName === 'DIV') {
// 	     console.log('клик именно по диву');
// 	}
// 	if (event.target.tagName === 'UL') {
// 		console.log('клик именно по ul');
// 	}
//     if (event.target.tagName === 'LI') {
//         event.target.textContent += '!';
// 		(// console.log('клик именно по абзацу');)
// 	}
// });

// elem1.addEventListener('click', function() {
// 	console.log('зеленый');
// });
// elem2.addEventListener('click', function(event) {
// 	console.log('голубой');
// 	event.stopPropagation(); // остановим всплытие
// });
// elem3.addEventListener('click', function() {
// 	console.log('красный');
// });

// elem1.addEventListener('click', function() {
// 	console.log('зеленый');
// });
// elem2.addEventListener('click', function(event) {
// 	console.log('голубой - первый обработчик');
// 	event.stopPropagation(); // остановим всплытие
// });
// elem2.addEventListener('click', function() {
// 	console.log('голубой - второй обработчик'); // все равно сработает 
// });
// elem3.addEventListener('click', function() {
// 	console.log('красный');
// });

// elem1.addEventListener('click', function() {
// 	console.log('зеленый');
// });
// elem2.addEventListener('click', function(event) {
// 	console.log('голубой - первый обработчик');
// 	event.stopImmediatePropagation();     // остановим всплытие
// });
// elem2.addEventListener('click', function() {
// 	console.log('голубой - второй обработчик'); // уже не 
// 		сработает 
// });
// elem3.addEventListener('click', function() {
// 	console.log('красный');
// });

// let parent = document.querySelector('#parent');
// let button = document.querySelector('button');
// let block  = document.querySelector('#block');
// button.addEventListener('click', function() {
// 	block.classList.add('active');
//     event.stopImmediatePropagation();
// });
// parent.addEventListener('click', function() {
// 	block.classList.remove('active');
// });

// elem1.addEventListener('click', function() {
// 	console.log('зеленый - погружение');
// }, true);
// elem1.addEventListener('click', function() {
// 	console.log('зеленый - всплытие');
// }, false);

// elem2.addEventListener('click', function() {
// 	console.log('голубой - погружение');
// }, true);
// elem2.addEventListener('click', function() {
// 	console.log('голубой - всплытие');
// }, false);

// elem3.addEventListener('click', function() {
// 	console.log('красный - погружение');
// }, true);
// elem3.addEventListener('click', function() {
// 	console.log('красный- всплытие');
// }, false);

// let button = document.querySelector('button');
// let list = document.querySelector('ul');
// let items = list.querySelectorAll('li');

//1 способ
// for (let item of items) {
// 	item.addEventListener('click', function() {
// 		this.textContent = this.textContent + '!';
// 	});
// }
//клик на новую добавленную li не будет приводить к добавлению восклицательного знака в конец. Дело в том, что мы добавляем обработчик клика только на те li, которые существовали изначально, но не на новые.
// button.addEventListener('click', function() {
// 	let item = document.createElement('li');
// 	item.textContent = 'item';
// 	list.appendChild(item);
// });

// button.addEventListener('click', function() {
// 	let item = document.createElement('li');
// 	item.textContent = 'item';
// 	item.addEventListener('click', function() { // обработчик клика
// 		this.textContent = this.textContent + '!';
// 	});
// 	list.appendChild(item);
// });

//2 способ(избежали дублирования кода функции-обработчика)
// for (let item of items) {
// 	item.addEventListener('click', handler);
// }
// function handler() {
// 	this.textContent = this.textContent + '!';
// }
// button.addEventListener('click', function() {
// 	let item = document.createElement('li');
// 	item.textContent = 'item';
// 	item.addEventListener('click', handler);
// 	list.appendChild(item);
// });

// let list = document.querySelector('ul');
// list.addEventListener('click', function(event) {
// 	let li = event.target.closest('li');
// 	if (li) {
// 		li.textContent = li.textContent + '!';
// 	}
// });

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', func);
// function func() {
// 	console.log(this.value); // по потери фокуса выведет 'text'
// }

// let elem1 = document.querySelector('#elem1');
// elem1.addEventListener('blur', func);
// let elem2 = document.querySelector('#elem2');
// elem2.addEventListener('blur', func);
// function func() {
// 	console.log(this.value); // выведет или 'text1', или 'text2'
// }

// function parent() {
// 	let str = 'abcde';
// 	function child() {
// 		console.log(str); // выведет 'abcde'
// 	}
// 	child(); // вызываем внутреннюю функцию
// }
// parent(); // вызываем внешнюю функцию

// "use strict";
// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', parent);
// function parent() {
// 	console.log(this); // выведет ссылку на наш инпут
// 	function child() {
// 		console.log(this); // выведет undefined
// 	}
// 	child();
// }

// "use strict";
// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', parent);
// function parent() {
// 	console.log(this.value); // что выведет? text
// 	function child() {
// 		console.log(this.value); // что выведет?
// 	}
// 	child();
// }

// "use strict";
// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', parent);
// function parent() {
// 	console.log(this.value); // выведет 'text'
// 	let self = this; // запишем this в любую переменную, например, в self
// 	function child() {
// 		console.log(self.value); // выведет 'text'
// 	}
// 	child();
// }

// "use strict";
// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', func);
// function func() {
// 	let num=this;
//     function square() {
//         console.log(num.value * num.value)
//     }
//     square()
// }

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', parent);
// function parent() {
// 	square(this); // передаем параметром this
// 	function square(param) {
// 		console.log(param.value*param.value); // выводим value инпута
// 	}
// }

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', parent);
// function parent() {
// 	let square = () => {
// 		console.log(this.value*this.value); // выведет 'text'
// 	}
// 	square();
// }

// let elem = document.querySelector('#elem');
// function func() {
// 	console.log(this.value); // выведет value инпута
// }
// func.call(elem);

// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');
// function func() {
// 	console.log(this.value);
// }
// func.call(elem1);
// func.call(elem2);
// func.call(elem3);

// let elem = document.querySelector('#elem');
// function func(surname, name) {
// 	console.log(this.value + ', ' + name + ' ' + surname);
// }
// func.call(elem,'Smit','John'); // тут должно вывести 'hello, John Smit'

// let elem = document.querySelector('#elem');
// function func(surname, name) {
// 	console.log(this.value + ', ' + surname + ' ' + name);
// }
// func.apply(elem,['John','Smit']); // тут должно вывести 'hello, John Smit'

// let elem = document.getElementById('elem');
// function func(param1, param2) {
// 	console.log(this.value + param1 + param2);
// }
// func = func.bind(elem);
// func('1', '2'); // выведет 'text12'

// let elem = document.getElementById('elem');
// function func(name, surname) {
// 	console.log(this.value + ', ' + name + ' ' + surname);
// }
// func=func.bind(elem);
// func('John', 'Smit'); // тут должно вывести 'hello, John Smit'
// func('Eric', 'Luis'); // тут должно вывести 'hello, Eric Luis'

// setInterval(timer, 3000);
// function timer() {
// 	console.log('юлька');
// }

// setInterval (function() {
//     console.log('юльчик');
// } , 1000);

// let i=0;
// setInterval (function() {
//     i++
//     console.log(i)
// },1000);

// let i = 0;
// setInterval(() => console.log(++i), 1000);

// let i = 100;
// setInterval(() => console.log(i--), 1000);

// let timerId = setInterval(function() {
// 	console.log('!')
// }, 1000);
// alert(timerId); // выведет номер таймера

// let i = 0;
// let timerId = setInterval(function() {
// 	console.log(++i);
// 	if (i >= 10) {
// 		clearInterval(timerId);
// 	}
// }, 1000);

// let i = 10;
// let timerId = setInterval(function() {
// 	console.log(--i);
// 	if (i <= 0) {
// 		clearInterval(timerId);
// 	}
// }, 1000);

// let start = document.querySelector('#start');
// start.addEventListener('click', function() {
// 	let i = 100;
// 	setInterval(function() {
// 		console.log(i--);
// 	}, 1000);
// });

// let start = document.querySelector('#start');
// start.addEventListener('click', func)
// function func() {
// 	let i = 0;
// 	setInterval(function() {
// 		console.log(++i);
// 	}, 1000);
// 	this.removeEventListener('click', func); // отвязываем обработчик
// };

// let start = document.querySelector('#start');
// start.addEventListener('click', func);
// function func() {
// 	let i = 100;
// 	setInterval(function() {
// 		console.log(i--);
// 	}, 1000);
//     this.removeEventListener('click',func);
// };

// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');
// let timerId; // сделаем переменную глобальной
// start.addEventListener('click', function() {
// 	timerId = setInterval(function() {
// 		console.log('!')
// 	}, 1000);
// });
// // Останавливаем таймер:
// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// });

// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');    
// let timerId;
// start.addEventListener('click', function(){
//     let i = 100;
//     timerId = setInterval(function(){
//         console.log(i--);
//         if (i < 0) {
//             clearInterval(timerId);
//         }   
//     }, 1000)
// });
// stop.addEventListener('click', function() {
//     clearInterval(timerId);
// });

// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');
// let timerId;
// start.addEventListener('click', function() {
// 	timerId = setInterval(function() {
// 		let date = new Date;
// 		console.log(date.getMinutes() + ' ' + date.getSeconds());
// 	}, 1000);
// });
// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// });

// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');
// let timerId;
// start.addEventListener('click', function() {
// 	timerId = setInterval(function() {
// 		let date = new Date;
// 		console.log(date.getMinutes() + ' ' + date.getSeconds());
// 	}, 1000);
// });
// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// });

// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');
// let timerId;
// start.addEventListener('click', function() {
// 	timerId = setInterval(function() {
// 		let date = new Date;
// 		console.log(date.getMinutes() + ' ' + date.getSeconds());
// 	}, 1000);
// });
// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// });

// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');
// let timerId;
// start.addEventListener('click', function() {
// 	timerId = setInterval(function() {
// 		let date = new Date;
// 		console.log(date.getMinutes() + ' ' + date.getSeconds());
// 	}, 1000);
// });
// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// });

// let elem = document.querySelector('#elem');
// setInterval(function() {
// 	elem.value = Number(elem.value) + 1;
// }, 1000);

// let elem = document.querySelector('input');
// let timerId = setInterval(function() {
//     elem.value = Number(elem.value) - 1;
//     if (elem.value <= 0) {
//         clearInterval(timerId)
//     }
// }, 1000);

// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function() {
// 	setInterval(function() {
// 		console.log('!!!'); // что-нибудь выводим в консоль
// 	}, 1000);
// });

// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function() {
// 	let self = this;
// 	setInterval(function() {
// 		console.log(self.value);
// 	}, 1000);
// });

// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function() {
//     let self=this;
// 	setInterval(function() {
// 		self.value = Number(elem.value) + 1;
// 	}, 1000);
// });

// 1.
// let button = document.querySelector('input');
// let elem = document.querySelector('#elem')
// button.addEventListener('click', function() {
// 	setInterval(function() {
// 		elem.textContent = Number(elem.textContent) + 1;
// 	}, 1000);
// });

// 2.
// let button = document.querySelector('input');
// let elem = document.querySelector('#elem');
// let timerId;
// button.addEventListener('click', function() {
// 	timerId=setInterval(function() {
// 		elem.textContent = Number(elem.textContent) - 1;
//         if (elem.textContent <=0) {
//             clearInterval(timerId)
//         }
// 	}, 1000);
// });

// 3.
// let inp = document.querySelector('input');
// inp.addEventListener('input', function() {
//     setInterval(function() {
//         inp.value = inp.value*inp.value;
//     }, 1000)
// });

// 4.
// let inp = document.querySelector('input');
// let elem=document.querySelector('#elem');
// let IntervalId;
// inp.addEventListener('blur', func);
// function func() {
//     elem.textContent = inp.value;
//     IntervalId = setInterval(timer, 1000);
// }
// function timer() {
//     elem.textContent--;
//     if (elem.textContent == 0) {
//         clearInterval(IntervalId);
//     }
// }

// 5.
// let inp = document.querySelector('input');
// let elem=document.querySelector('#elem');
// let btn=document.querySelector('#btn');
// let IntervalId;
// btn.addEventListener('click', func);
// function func() {
//     elem.textContent = inp.value;
//     IntervalId = setInterval(timer, 1000);
// }
// function timer() {
//     elem.textContent--;
//     if (elem.textContent == 0) {
//         clearInterval(IntervalId);
//     }
// }

// 6.
// let elem=document.querySelector('#elem');
// let btn1=document.querySelector('#btn1');
// let btn2=document.querySelector('#btn2');
// let timerId;
// btn1.addEventListener('click', function(){
//     timerId = setInterval(function(){
//         elem.textContent++;   
//     }, 1000)
// });
// btn2.addEventListener('click', function() {
//     clearInterval(timerId);
// });

// 7.
// let elem=document.querySelector('#elem');
// elem.style.color='red';
// setInterval(function(){
//  if(elem.style.color == "red"){
//     elem.style.color="green";
//  } else {
//     elem.style.color="red";
//  }
// },1000);

// 8.
// let elem=document.querySelector('#elem');
// setInterval (function() {
//     let date = new Date;
//     let hour = addZero(date.getHours());
//     let min = addZero(date.getMinutes());
//     let sec = addZero(date.getSeconds());  
//     elem.textContent = hour + ':' + min + ':' + sec;
// }, 1000);
// function addZero(num) {
//     if (num >= 0 && num <= 9) {
//         return '0' + num;
//     } else {
//         return num;
//     }
// }

// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function() {
// 	setTimeout(function() {
// 		alert('!');
// 	}, 3000);
// });

// let elem=document.querySelector('#elem');
// window.onload=function() {
// 	setTimeout(function() {
// 		elem.textContent='юлька';
// 	}, 10000);
// };

// let i = 0;
// function timer() {
// 	setTimeout(function() {
// 		console.log(++i);	
// 		timer(); // вызовем сами себя
// 	}, 1000);
// }
// timer();

// let i = 0;
// function timer() {
// 	setTimeout(function() {
// 		console.log(++i);
// 		if (i < 10) { // запускаем, только если счетчик меньше 10
// 			timer();
// 		}
// 	}, 1000);
// }
// timer();

// let i = 0;
// function timer() {
//     setTimeout(function() {
//         console.log(i);  
//         i++;     
//         timer(); // вызовем сами себя
//     }, 1000);
// }
// timer();

// let parent = document.querySelector('#parent');
// let p = document.createElement('p');
// p.textContent = '!';
// parent.appendChild(p);

// let parent = document.querySelector('#elem');
// let li = document.createElement('li');
// li.textContent = 'item';
// parent.appendChild(li);

// let parent = document.querySelector('#elem');
// let button= document.querySelector('#button');
// let li = document.createElement('li');
// button.addEventListener('click',func);
// function func() {
//     li.textContent = 'item';
//     parent.appendChild(li);
// }

// let parent = document.querySelector('#parent');
// let p = document.createElement('p');
// p.textContent = '!';
// p.addEventListener('click', function() {
// 	console.log(this.textContent); // по клику выведем текст абзаца
// });
// parent.appendChild(p);

// let parent = document.querySelector('#elem');
// let li = document.createElement('li');
// button.addEventListener('click',func);
// function func() {
//     li.textContent = 'item';
//     parent.appendChild(li);
// }
// parent.addEventListener('click', function(event) {
//     if (event.target.tagName === 'LI') {
//       event.target.textContent += '!';
//     }
// });

// let parent = document.querySelector('#parent');
// for (let i = 1; i <= 9; i++) {
// 	let p = document.createElement('p');
// 	p.textContent = '!';
// 	parent.appendChild(p);
// }

// let elem= document.querySelector('#elem')
// for (let i = 1; i <= 10; i++) {
// 	let li = document.createElement('li');
// 	li.textContent = 'юльчик' + i;
// 	elem.appendChild(li);
// }

// let parent = document.querySelector('#parent');
// for (let i = 1; i <= 9; i++) {
// 	let p = document.createElement('p');
// 	p.textContent = '!';
// 	// Навешиваем обработчик клика:
// 	p.addEventListener('click', function() {
// 		console.log(this.textContent);
// 	});
// 	parent.appendChild(p);
// }

// let parent = document.querySelector('#parent');
// let elem= document.querySelector('#elem');
// for (let i = 1; i <= 5; i++) {
// 	let inp = document.createElement('input');
//     inp.value += ' ';
// 	// // Навешиваем обработчик клика:
// 	inp.addEventListener('blur', function() {
// 		elem.textContent=inp.value;
// 	});
// 	parent.appendChild(inp);
// }

// let elems = document.querySelectorAll('p');
// for (let elem of elems) {
// 	elem.addEventListener('click', function() {
// 		elem.remove();
// 	});
// }

// let elems = document.querySelectorAll('li');
// for (let elem of elems) {
// 	elem.addEventListener('click', function() {
// 		elem.remove();
// 	});
// }

// let parent = document.querySelector('#parent');
// let button = document.querySelector('#button');
// button.addEventListener('click',func);
// function func() {
//     parent.lastElementChild.remove();
// }

// let parent = document.querySelector('#parent');
// let p = document.createElement('p');
// p.textContent = '!';
// parent.append(p);

// let parent = document.querySelector('#parent');
// let p1 = document.createElement('p');
// p1.textContent = 'a';
// let p2 = document.createElement('p');
// p2.textContent = 'b';
// parent.append(p1, p2);

// let parent = document.querySelector('#parent');
// parent.append('!');

// let parent = document.querySelector('#parent');
// for (let i = 1; i <= 9; i++) {
// 	let li = document.createElement('li');
// 	li.textContent = i;
// 	parent.append(li);
// }

// let parent = document.querySelector('#table');
// for (let i = 1; i <= 3; i++) {
// 	let tr = document.createElement('tr'); // создаем tr-ку
// 	// Заполняем tr-ку td-шками:
// 	for (let j = 1; j <= 3; j++) {
// 		let td = document.createElement('td'); // создаем td-шку
// 		td.textContent = j; // пишем в нее текст	
// 		tr.append(td); // добавляем созданную td-шку в конец tr-ки
// 	}
// 	table.append(tr); // добавляем созданную tr-ку в конец таблицы
// }

// let parent = document.querySelector('#elem');
// let li1 = document.createElement('li');
// let li2 = document.createElement('li');
// li1.textContent = 'start';
// li2.textContent = 'stop';
// parent.prepend(li1);
// parent.append(li2);

// let parent = document.querySelector('#parent');
// let elem = document.querySelector('#elem');
// let li = document.createElement('li');
// li.textContent = 'new';
// parent.insertBefore(li,elem);

// let parent = document.querySelector('#parent');
// let elem = document.querySelector('#elem');
// let li = document.createElement('li');
// li.textContent = 'new';
// parent.insertBefore(li,elem);
// li.addEventListener('click',func);
// function func() {
//     li.textContent += '!';
// }

// let p = document.createElement('p');
// p.textContent = '!';
// let target = document.querySelector('#target');
// target.insertAdjacentElement('beforeBegin', p);

// let p = document.createElement('p');
// p.textContent = '!!!';
// let elem = document.querySelector('#elem');
// elem.insertAdjacentElement('beforeBegin', p);

// let p = document.createElement('p');
// p.textContent = '!!!';
// let elem = document.querySelector('#elem');
// elem.insertAdjacentElement('afterEnd', p);

// let p = document.createElement('p');
// p.textContent = '!!!';
// let elem = document.querySelector('#elem');
// elem.insertAdjacentElement('afterBegin', p);

// let p = document.createElement('p');
// p.textContent = '!!!';
// let elem = document.querySelector('#elem');
// elem.insertAdjacentElement('beforeEnd', p);

// let elem = document.querySelector('#elem');
// elem.insertAdjacentHTML('beforeBegin', '<div class="www"><p>text</p><p>text</p><input></div>');

// let parent = document.querySelector('#parent');
// let elem = parent.querySelector('.elem');
// let clone = elem.cloneNode(true);
// parent.appendChild(clone);

// let parent=document.querySelector('div');
// let inp=document.querySelector('#inp');
// let btn=document.querySelector('#btn');
// btn.addEventListener('click',func);
// function func() {
//     let clone=inp.cloneNode(true);
//     parent.appendChild(clone);
// }


// let elem = document.querySelector('#elem');
// console.log(elem.matches('div.www'));

// let elem = document.querySelector('#elem');
// console.log(elem.matches('p'));

// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let contains = elem1.contains(elem2);
// console.log(contains);

//464.
// let parent = document.querySelector('#parent');
// let arr = [1, 2, 3, 4, 5];
// for (let elem of arr) {
// 	let p = document.createElement('p');
// 	p.textContent = elem;
//     p.addEventListener('click',func);
//     function func() {
//         p.textContent ++;
//     }
// 	parent.appendChild(p);
// }

//465.1.
// let parent = document.querySelector('#elem');
// let arr = [1, 2, 3, 4, 5];
// for (let i=0;i<arr.length;i++) {
// 	let li = document.createElement('li');
// 	li.textContent = arr[i];
// 	parent.appendChild(li);
// };

//465.2.
// let parent = document.querySelector('#elem');
// let arr = ['ю', 'а', 'н', 'м', 'к'];
// for (let i=0;i<arr.length;i++) {
// 	let li = document.createElement('li');
//     li.textContent = arr[i];
//     li.addEventListener('click',func);
//     function func() {
// 	console.log(li.textContent);
//     }
//     parent.appendChild(li);
// };

//465.3
// let parent = document.querySelector('#elem');
// let arr = ['ю', 'а', 'н', 'м', 'к'];
// for (let i=0;i<arr.length;i++) {
// 	let li = document.createElement('li');
//     li.textContent = arr[i];
//     li.addEventListener('click',func);
//     function func() {
// 	li.textContent +='!';
//     }
//     parent.appendChild(li);
// };

//465.4.
// let parent = document.querySelector('#elem');
// let arr = ['ю', 'а', 'н', 'м', 'к'];
// for (let i=0;i<arr.length;i++) {
// 	let li = document.createElement('li');
//     li.textContent = arr[i];
//     li.addEventListener('click',func);
//     function func() {
// 	li.textContent +='!';
//     li.removeEventListener('click',func);
//     }
//     parent.appendChild(li);
// };

//466.1.
// let table = document.querySelector('#table');
// for (let i = 0; i < 5; i++) {
// 	let tr = document.createElement('tr');
// 	for (let i = 0; i < 5; i++) {
// 		let td = document.createElement('td');
//         td.textContent='юлька'
// 		tr.appendChild(td);
// 	}
// 	table.appendChild(tr);
// }

//466.2.,466.3.
// let table = document.querySelector('#table');
// for (let i = 0; i < 10; i++) {
// 	let tr = document.createElement('tr');
// 	for (let i = 0; i < 5; i++) {
// 		let td = document.createElement('td');
//         td.textContent='юлька'
// 		tr.appendChild(td);
// 	}
// 	table.appendChild(tr);
// }

//466.4.
// let table = document.querySelector('#table');
// let width = document.querySelector('#width');
// let heigth = document.querySelector('#heigth');
// heigth.addEventListener('blur', function(){
//     for (let i = 0; i < width.value; i++) {
// 	let tr = document.createElement('tr');
// 	for (let i = 0; i < heigth.value; i++) {
// 		let td = document.createElement('td');
//         td.textContent+="юлька"
// 		tr.appendChild(td);
// 	}
// 	table.appendChild(tr);
// }
// })

// let table = document.querySelector('#table');
// let k = 1; // начальное значение счетчика
// for (let i = 0; i < 3; i++) {
// 	let tr = document.createElement('tr');
// 	for (let i = 0; i < 3; i++) {
// 		let td = document.createElement('td');	
// 		td.textContent = k; // записываем счетчик в ячейку
// 		k++; // увеличиваем счетчик	
// 		tr.appendChild(td);
// 	}
// 	table.appendChild(tr);
// }

//467.1.
// let table = document.querySelector('#table');
// let k = 1; // начальное значение счетчика
// for (let i = 0; i < 5; i++) {
// 	let tr = document.createElement('tr');
// 	for (let i = 0; i < 5; i++) {
// 		let td = document.createElement('td');
//             td.textContent = k;
//             k+=1;	
// 		tr.appendChild(td);
// 	}
// 	table.appendChild(tr);
// }

//467.2.
// let table = document.querySelector('#table');
// let k = 2; // начальное значение счетчика
// for (let i = 0; i < 5; i++) {
// 	let tr = document.createElement('tr');
// 	for (let i = 0; i < 5; i++) {
// 		let td = document.createElement('td');
//             td.textContent = k;
//             k+=2;	
// 		tr.appendChild(td);
// 	}
// 	table.appendChild(tr);
// }

//468.1.
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
// let table = document.querySelector('#table');
// for (let subArr of arr) {
// 	let tr = document.createElement('tr');
// 	for (let elem of subArr) {
// 		let td = document.createElement('td');
// 		td.textContent = elem;
// 		tr.appendChild(td);
// 	}
// 	table.appendChild(tr);
// }

//468.2.
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
// let table = document.querySelector('#table');
// for (let subArr of arr) {
// 	let tr = document.createElement('tr');
// 	for (let elem of subArr) {
// 		let td = document.createElement('td');
// 		td.textContent = elem**2;
// 		tr.appendChild(td);
// 	}
// 	table.appendChild(tr);
// }

// let users = [
// 	{
// 		name: 'name1',
// 		surname: 'surname1',
// 		patronymic: 'patronymic1'
// 	},
// 	{
// 		name: 'name2',
// 		surname: 'surname2',
// 		patronymic: 'patronymic2'
// 	},
// 	{
// 		name: 'name3',
// 		surname: 'surname3',
// 		patronymic: 'patronymic3'
// 	},
// ];
// let table = document.getElementById('table');
// for (let user of users) {
// 	let tr = document.createElement('tr');
// 	let td1 = document.createElement('td');
// 	td1.textContent = user.name;
// 	tr.appendChild(td1);
// 	let td2 = document.createElement('td');
// 	td2.textContent = user.surname;
// 	tr.appendChild(td2);
// 	let td3 = document.createElement('td');
// 	td3.textContent = user.patronymic;
// 	tr.appendChild(td3);
// 	table.appendChild(tr);
// }

//469.1.
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// let table=document.getElementById('table');
// for (let user of employees) {
// 	let tr = document.createElement('tr');
// 	let td1 = document.createElement('td');
// 	td1.textContent = user.name;
// 	tr.appendChild(td1);
// 	let td2 = document.createElement('td');
// 	td2.textContent = user.age;
// 	tr.appendChild(td2);
// 	let td3 = document.createElement('td');
// 	td3.textContent = user.salary;
// 	tr.appendChild(td3);
// 	table.appendChild(tr);
// };

//469.2.
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// let table=document.getElementById('table');
// for (let user of employees) {
// 	let tr = document.createElement('tr');
// 	let td1 = document.createElement('td');
// 	td1.textContent = user.name;
// 	tr.appendChild(td1);
// 	let td2 = document.createElement('td');
//     td2.textContent =user.age;
//     td2.addEventListener("click", func);
//     function func() {
//         td2.textContent = user.age+=1;
//     }
//     tr.appendChild(td2);
// 	let td3 = document.createElement('td');
// 	td3.textContent = user.salary;
// 	tr.appendChild(td3);
// 	table.appendChild(tr);
// };

//469.3.
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// let table=document.getElementById('table');
// for (let user of employees) {
// 	let tr = document.createElement('tr');
// 	let td1 = document.createElement('td');
// 	td1.textContent = user.name;
// 	tr.appendChild(td1);
// 	let td2 = document.createElement('td');
// 	td2.textContent = user.age;
// 	tr.appendChild(td2);
// 	let td3 = document.createElement('td');
// 	td3.textContent = user.salary;
//     td3.addEventListener('click',func);
//     function func() {
//         td3.textContent = user.salary+= user.salary*0.1;
//     }
// 	tr.appendChild(td3);
// 	table.appendChild(tr);
// };

//470.1.
// let table = document.querySelector('#table');
// let button = document.querySelector('#button');
// button.addEventListener('click',func);
// function func() {
// let tr = document.createElement('tr');
// for (let i = 1; i <= 3; i++) {
// 	let td = document.createElement('td');
// 	tr.appendChild(td);
// }
// table.appendChild(tr);
// }

//470.2.
// let table = document.querySelector('#table');
// let button = document.querySelector('#button');
// let k=1;
// let tr = document.createElement('tr');
// button.addEventListener("click", function(){
//         for (let i = 1; i < k; i++) {
//             let td = document.createElement('td');
//             tr.appendChild(td);
//         }
//         table.appendChild(tr);
//         let trs = document.querySelectorAll('#table tr');
//         for (let tr of trs) {
//         let td = document.createElement('td');
//         tr.appendChild(td);
// }
//     })

// let table = document.querySelector('#table');
//     let tds = document.querySelectorAll('#table td');
//     for (let td of tds) {
//         td.textContent = '!';
// }

//471.
// let table = document.querySelector('#table');
// let button = document.querySelector('#button');
// button.addEventListener('click',func);
// function func() {
//     let tds = document.querySelectorAll('#table td');

//     for (let td of tds) {
//         td.textContent = td.textContent*2;
//     }
// }

// let parent = document.querySelector('#parent');
// for (let i = 1; i <= 9; i++) {
// 	let p = document.createElement('p');
// 	p.textContent = i;
// 	p.addEventListener('click', function() {
// 		this.remove();
// 	});
// 	parent.appendChild(p);
// }

//472.
// let parent = document.getElementById("parent");
// let button = document.querySelector('#button');
// button.addEventListener('click',func);
// function func() {
//   let li = document.createElement("li");
//   li.textContent = 'новый элемент';
//   parent.appendChild(li);
//   li.addEventListener("click", () => {
//     li.remove();
//   });
// }
// parent.addEventListener("click", (event) => {
//   if (event.target.tagName === "LI") {
//     parent.removeChild(event.target);
//   }
// })

//473.
// let elem   = document.querySelector('#elem');
// let remove = document.querySelector('#remove');
// remove.addEventListener('click', function() {
// 	elem.remove();
//     event.preventDefault();
// });

// let elems = document.querySelectorAll('#parent p');
// for (let elem of elems) {
// 	let remove = document.createElement('a');
// 	remove.href = '';
// 	remove.textContent = 'remove';
// 	elem.appendChild(remove);
//     remove.addEventListener('click', function(event) {
// 	elem.remove();
// 	event.preventDefault();
// 	});
// }

//474.1.
// let elems = document.querySelectorAll('#parent li');
// for (let elem of elems) {
// 	let remove = document.createElement('a');
// 	remove.href = '';
// 	remove.textContent = 'remove';
// 	elem.appendChild(remove);
//     remove.addEventListener('click', function(event) {
// 	elem.remove();
// 	event.preventDefault();
// 	});
// }

//474.2
// let elems = document.querySelectorAll('#table tr');
// for (let elem of elems) {
//     let remove = document.createElement('a');
//     remove.href = '';
//     remove.textContent = 'delete';
//     remove.addEventListener('click', (e) => {
//         e.preventDefault()
//         elem.remove()
//     })
//     let td = document.createElement('td');
//     td.appendChild(remove)
//     elem.appendChild(td);
// }

// let elem = document.querySelector('#elem');
// let input = document.querySelector('#input');
// input.value = elem.textContent;
// input.addEventListener('blur', function() {
// 	elem.textContent = this.value;
// });

//475.1.
// let elem = document.querySelector('#elem');
// let input = document.querySelector('#input');
// input.value = elem.textContent;
// input.addEventListener('input', function() {
// 	elem.textContent = this.value;
// });

//475.2.
// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function() {
// 	let input = document.createElement('input');
// 	input.value = elem.textContent;
//     input.addEventListener('input',func);
//     function func() {
//         elem.textContent=input.value;
//     }
// 	input.addEventListener('blur', function() {
// 		this.remove(); // удалим инпут
// 	});
// 	elem.parentElement.appendChild(input);
// });

//476.
// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function func() {
// 	let input = document.createElement('input');
// 	input.value = elem.textContent;
// 	elem.textContent = '';
// 	elem.appendChild(input);	
// 	input.addEventListener('blur', function() {
// 		elem.textContent = this.value;
// 		elem.addEventListener('click', func); // повесим событие обратно
// 	});
// 	elem.removeEventListener('click', func); // отвяжем событие
// });

// let elems = document.querySelectorAll('p');
// for (let elem of elems) {
// 	elem.addEventListener('click', function func() {
// 		let input = document.createElement('input');
// 		input.value = elem.textContent;
// 		elem.textContent = '';
// 		elem.appendChild(input);
// 		input.addEventListener('blur', function() {
// 			elem.textContent = input.value;
// 			elem.addEventListener('click', func);
// 		});
// 		elem.removeEventListener('click', func);
// 	});
// }

//477.1.
// let elems = document.querySelectorAll('#parent li');
// for (let elem of elems) {
// 	elem.addEventListener('click', function func() {
// 		let input = document.createElement('input');
// 		input.value = elem.textContent;
// 		elem.textContent = '';
// 		elem.appendChild(input);
// 		input.addEventListener('blur', () => {
// 			elem.textContent = input.value;
// 			elem.addEventListener('click', func);
// 		});
// 		elem.removeEventListener('click', func);
// 	});
// }

//477.2.
// let elems = document.querySelectorAll('table tr td');
// for (let elem of elems) {
//     elem.addEventListener('click',func);
//     function func() {
//         let input = document.createElement('input');
//         input.value=elem.textContent;
//         elem.textContent = '';
// 		elem.appendChild(input);
//         input.addEventListener('blur', () => {
//         elem.textContent = input.value;
//         elem.addEventListener('click', func);
//         });
//         elem.removeEventListener('click', func);
//     }
// }

//478.1.
// let elems= document.querySelectorAll('#parent p');
// let elemssp= document.querySelectorAll('#parent span');
// for (let p of elems) {
//     let remove = document.createElement('a');
//     remove.href = '';
//     remove.textContent = 'remove';
//     p.appendChild(remove);
//     remove.addEventListener('click', (event) => {
//         event.preventDefault();
//         p.remove();
//     })
// }
// for (let elem of elemssp) {
//     elem.addEventListener('click',function func() {
//     let input = document.createElement('input');
//     input.value=elem.textContent;
//     elem.textContent='';
//     elem.appendChild(input);
//     input.addEventListener('blur',function() {
//         elem.textContent=input.value;
//         elem.addEventListener('click',func);
//     });
//     elem.removeEventListener('click',func);
//     });
// }

//478.2.
// let elems = document.querySelectorAll('#parent p');
// for (let elem of elems) {
//     let span = document.createElement('span');
//     span.textContent=elem.textContent;
//     elem.textContent='';
//     elem.appendChild(span);
//     let remove = document.createElement('a');
//     remove.href='';
//     remove.textContent='remove';
//     elem.appendChild(remove);
//     remove.addEventListener('click',function(event) {
//         elem.remove();
//         event.preventDefault(); 
// });
// span.addEventListener('click',function func() {
//     let input= document.createElement('input');
//     input.value=span.textContent;
//     span.textContent='';
//     span.appendChild(input);
//     input.addEventListener('blur',function () {
//         span.textContent=input.value;
//         span.addEventListener('click',func);
//     })
//     span.removeEventListener('click',func)
// });
// }

//479.1.
// let elems = document.querySelectorAll('p');
// for (let elem of elems) {
//     let span = document.createElement('span');
//     span.textContent=elem.textContent;
//     elem.textContent='';
//     elem.appendChild(span);
//     let remove= document.createElement('a');
//     remove.href='';
//     remove.textContent='remove';
//     elem.appendChild(remove);
//     remove.addEventListener('click', function (event) {
//         span.className='text';
//         event.preventDefault();
//     })
// }

//479.2.
// let elems = document.querySelectorAll('p');
// for (let elem of elems) {
//     let span = document.createElement('span');
//     span.textContent=elem.textContent;
//     elem.textContent='';
//     elem.appendChild(span);
//     let remove= document.createElement('a');
//     remove.href='';
//     remove.textContent='remove';
//     elem.appendChild(remove);
//     remove.addEventListener('click', function (event) {
//         remove.remove();
//         span.className='text';
//         event.preventDefault();
//     })
// }

//479.3.
// let table = document.querySelector('#table');
// let trs= document.querySelectorAll('#table tr');
// for (let tr of trs) {
//     let td=document.createElement('td');
//     let remove = document.createElement('a');
//     remove.href='';
//     remove.textContent='remove';
//     tr.append(td);
//     td.appendChild(remove);
//     remove.addEventListener('click', function (event) {
//         tr.classList='textt';
//         event.preventDefault();
//     })
// }

//479.4.
// let table = document.querySelector('#table');
// let trs= document.querySelectorAll('#table tr');
// for (let tr of trs) {
//     let td=document.createElement('td');
//     let remove = document.createElement('a');
//     remove.href='';
//     remove.textContent='remove';
//     tr.append(td);
//     td.appendChild(remove);
//     remove.addEventListener('click', function (event) {
//         tr.classList.toggle('textt');
//         event.preventDefault();
//     })
// }

// let elem = document.querySelector('#elem');
// let show = document.querySelector('#show');
// let hide = document.querySelector('#hide');
// hide.addEventListener('click', function() {
// 	elem.classList.add('hidden');
// });

// show.addEventListener('click', function() {
// 	elem.classList.remove('hidden');
// });

//480.
// let elem = document.querySelector('#elem');
// let show = document.querySelector('#show');
// show.addEventListener('click', function() {
// 	elem.classList.toggle('hidden');
// });

//481.1.
// let buttons = document.querySelectorAll('button');
// for (let button of buttons) {
// 	button.addEventListener('click', function() {
// 		let elem = document.querySelector('#' + this.dataset.elem);
// 		elem.classList.toggle('hidden');
// 	});
// }

//481.2.
// let buttons = document.querySelectorAll('button');
// let elems   = document.querySelectorAll('p');
// for (let i = 0; i < buttons.length; i++) {
// 	buttons[i].addEventListener('click', function() {
// 		elems[i].classList.toggle('hidden');
// 	});
// }

//481.3.
// let buttons = document.querySelectorAll('button');
// for (let button of buttons) {
// 	button.addEventListener('click', function() {
// 		this.previousElementSibling.classList.toggle('hidden');
// 	});
// }

// let table= document.querySelector('#table');
// let tds = document.querySelectorAll('#table td');
// for (let td of tds) {
// 	td.addEventListener('click', function() {
// 		this.classList.add('active');
// 	});
// }

//482.1.
// let li = document.querySelectorAll('ul li');
// for (let list of li) {
//     list.addEventListener('click', function() {
//         this.classList.add('active');
//     })
// }

//482.2.
// let li = document.querySelectorAll('ul li');
// for (let list of li) {
//     list.addEventListener('click', function() {
//         this.classList.toggle('active');
//     })
// }

//483.1.
// let tds = document.querySelectorAll('#table td');
// let table = document.querySelector('#table');
// let color = 'color1';
// for (let td of tds) {
// 	td.addEventListener('click', function() {
// 		if (color == 'color1') {
// 			color = 'color2'
// 		} else {
// 			color = 'color1'
// 		}		
// 		this.classList.add(color);
// 	});
// }

//483.2.
// let tds = document.querySelectorAll('#table td');
// let table = document.querySelector('#table');
// let i = 0;
// let colors = ['color1', 'color2', 'color3'];
// for (let td of tds) {
// 	td.addEventListener('click', function() {
// 		this.classList.add(colors[i]);	
// 		i++;
// 		if (i == colors.length) {
// 			i = 0;
// 		}
// 	});
// }

//484.1.
// let arr = [1,2,3,4,5];
// let ul = document.querySelector('ul');
// for (let i=0; i< arr.length;i++) {
//     let li = document.createElement('li');
//     li.textContent= arr[i];
//     ul.appendChild(li);
// }

//484.2.
// let arr = [1,2,3,4,5];
// let ul = document.querySelector('ul');
// for (let i=0; i< arr.length;i++) {
//     let li = document.createElement('li');
//     li.textContent= arr[i];
//     ul.appendChild(li);
//     li.addEventListener('click', function func() {
//         let input = document.createElement('input');
//         input.value=li.textContent;
//         li.textContent='';
//         li.appendChild(input);
//         input.addEventListener('change',function () {
//             li.textContent=input.value;
//             li.addEventListener('click',func);
//         });
//         li.removeEventListener('click',func);
//     })
// }

//484.3.
// let arr = [1,2,3,4,5];
// let ul = document.querySelector('ul');
// for (let i=0; i< arr.length;i++) {
//     let li = document.createElement('li');
//     li.textContent= arr[i];
//     ul.appendChild(li);
//     li.addEventListener('click', function func() {
//         let input = document.createElement('input');
//         input.value=li.textContent;
//         li.textContent='';
//         li.appendChild(input);
//         input.addEventListener('change',function () {
//             li.textContent=input.value;
//             li.addEventListener('click',func);
//         });
//         li.removeEventListener('click',func);
//     })
// }
// let input = document.querySelector('input');
// input.addEventListener('change',function func() {
//     let li= document.createElement('li');
//     li.textContent = input.value;
//     li.addEventListener('click',function func() {
//         let input = document.createElement('input');
//         input.value=li.textContent;
//         li.textContent='';
//         li.appendChild(input);
//         input.addEventListener('change',function func() {
//         li.textContent=input.value;
//         li.addEventListener('click',func);
//     });
//     li.removeEventListener('click',func);
// });
//     ul.appendChild(li);
// })

//484.4.
// let arr = [1,2,3,4,5];
// let ul = document.querySelector('ul');
// for (let i=0; i< arr.length;i++) {
//     let li = document.createElement('li');
//     li.textContent= arr[i];
//     ul.appendChild(li);
//     let span = document.createElement('span');
//     span.textContent = li.textContent;
//     li.textContent= '';
//     li.appendChild(span);
//     let remove = document.createElement('a');
//     remove.href = '';
//     remove.textContent='remove';
//     li.appendChild(remove);
//     remove.addEventListener('click',function (event) {
//         li.remove();
//         event.preventDefault();
//     })
//     span.addEventListener('click',function func() {
//         let input = document.createElement('input');
//         input.value = span.textContent;
//         span.textContent='';
//         span.appendChild(input);
//         input.addEventListener('change',function func() {
//             span.textContent = input.value;
//             span.addEventListener('click',func);
//         })
//         span.removeEventListener('click',func());
//     })
// }
// let input = document.querySelector('input');
// input.addEventListener('change',function func() {
//     let li = document.createElement('li');
//     li.textContent = input.value;
//     let span = document.createElement('span');
//     span.textContent = li.textContent;
//     li.textContent = '';
//     li.appendChild(span);
//     let remove = document.createElement('a');
//     remove.href = '';
//     remove.textContent='remove';
//     li.appendChild(remove);
//     remove.addEventListener('click',function (event) {
//         li.remove();
//         event.preventDefault();
//     });
//     span.addEventListener('click',function func() {
//         let input = document.createElement('input');
//         input.value=span.textContent;
//         span.textContent= '';
//         span.appendChild(input);
//         input.addEventListener('change',function func() {
//             span.textContent = input.value;
//             span.addEventListener('click',func);
//         })
//         span.removeEventListener('click',func);
//     })
//     ul.appendChild(li);
// })

//484.5.
// let arr = [1,2,3,4,5];
// let ul = document.querySelector('ul');
// for (let i=0; i< arr.length;i++) {
//     let li = document.createElement('li');
//     li.textContent= arr[i];
//     ul.appendChild(li);
//     let span = document.createElement('span');
//     span.textContent = li.textContent;
//     li.textContent= '';
//     li.appendChild(span);
//     let remove = document.createElement('a');
//     remove.href = '';
//     remove.textContent='remove';
//     li.appendChild(remove);
//     remove.addEventListener('click',function (event) {
//         span.className='text';
//         event.preventDefault();
//     })
//     span.addEventListener('click',function func() {
//         let input = document.createElement('input');
//         input.value = span.textContent;
//         span.textContent='';
//         span.appendChild(input);
//         input.addEventListener('change',function func() {
//             span.textContent = input.value;
//             span.addEventListener('click',func);
//         })
//         span.removeEventListener('click',func());
//     })
// }
// let input = document.querySelector('input');
// input.addEventListener('change',function func() {
//     let li = document.createElement('li');
//     li.textContent = input.value;
//     let span = document.createElement('span');
//     span.textContent = li.textContent;
//     li.textContent = '';
//     li.appendChild(span);
//     let remove = document.createElement('a');
//     remove.href = '';
//     remove.textContent='remove';
//     li.appendChild(remove);
//     remove.addEventListener('click',function (event) {
//         span.className='text';
//         event.preventDefault();
//     });
//     span.addEventListener('click',function func() {
//         let input = document.createElement('input');
//         input.value=span.textContent;
//         span.textContent= '';
//         span.appendChild(input);
//         input.addEventListener('change',function func() {
//             span.textContent = input.value;
//             span.addEventListener('click',func);
//         })
//         span.removeEventListener('click',func);
//     })
//     ul.appendChild(li);
// })

//484.6.
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// let table=document.getElementById('table');
// for (let user of employees) {
// 	let tr = document.createElement('tr');
// 	let td1 = document.createElement('td');
// 	td1.textContent = user.name;
// 	tr.appendChild(td1);
// 	let td2 = document.createElement('td');
// 	td2.textContent = user.age;
// 	tr.appendChild(td2);
// 	let td3 = document.createElement('td');
// 	td3.textContent = user.salary;
// 	tr.appendChild(td3);
//     table.appendChild(tr);
// }

//484.7.
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// let table=document.getElementById('table');
// for (let user of employees) {
// 	let tr = document.createElement('tr');
// 	let td1 = document.createElement('td');
// 	td1.textContent = user.name;
// 	tr.appendChild(td1);
// 	let td2 = document.createElement('td');
// 	td2.textContent = user.age;
// 	tr.appendChild(td2);
// 	let td3 = document.createElement('td');
// 	td3.textContent = user.salary;
// 	tr.appendChild(td3);
//     let tds = document.querySelectorAll('#table td');
// for (let td of tds) {
// 	td.addEventListener('click', function func() {
// 		let input = document.createElement('input');
//         td.textContent=input.value;
//         td.textContent='';
//         td.appendChild(input);
//         input.addEventListener('change',function func() {
//             td.textContent=input.value;
//             td.addEventListener('click',func);
//         })
//         td.removeEventListener('click',func);
// 	});
// }
// 	table.appendChild(tr);
// }

//484.8.
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// let table=document.getElementById('table');
// for (let user of employees) {
// 	let tr = document.createElement('tr');
// 	let td1 = document.createElement('td');
// 	td1.textContent = user.name;
// 	tr.appendChild(td1);
// 	let td2 = document.createElement('td');
// 	td2.textContent = user.age;
// 	tr.appendChild(td2);
// 	let td3 = document.createElement('td');
// 	td3.textContent = user.salary;
// 	tr.appendChild(td3);
//     let tds = document.querySelectorAll('#table td');
// for (let td of tds) {
// 	td.addEventListener('click', function func() {
// 		let input = document.createElement('input');
//         td.textContent=input.value;
//         td.textContent='';
//         td.appendChild(input);
//         input.addEventListener('change',function func() {
//             td.textContent=input.value;
//             td.addEventListener('click',func);
//         })
//         td.removeEventListener('click',func);
// 	});
// }
// 	table.appendChild(tr);
// }
// let elems = document.querySelectorAll('#table tr');
// for (let elem of elems) {
//     let remove = document.createElement('a');
//     remove.href = '';
//     remove.textContent = 'remove';
//     remove.addEventListener('click', (event) => {
//         event.preventDefault()
//         elem.remove()
//     })
//     let td = document.createElement('td');
//     td.appendChild(remove);
//     elem.appendChild(td);
// }

//484.9.
// let button = document.querySelector('#button')
// let inp1 = document.querySelector('#inp1');
// let inp2 = document.querySelector('#inp2');
// let inp3 = document.querySelector('#inp3');
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// let table = document.querySelector('#table');
// for (let user of employees) {
//     let tr=document.createElement('tr');
//     let td1=document.createElement('td');
//     td1.textContent=user.name;
//     tr.appendChild(td1);
//     let td2=document.createElement('td');
//     td2.textContent=user.age;
//     tr.appendChild(td2);
//     let td3=document.createElement('td');
//     td3.textContent=user.salary;
//     tr.appendChild(td3);
//     table.appendChild(tr);
// }
// let tds = document.querySelectorAll('#table td');
// for (let td of tds) {
//     td.addEventListener('click', function func() {
//         let input = document.createElement('input');
//         input.value=td.textContent;
//         td.textContent='';
//         td.appendChild(input);
//         input.addEventListener('change',function() {
//             td.textContent=input.value;
//             td.addEventListener('click',func);
//         })
//         td.removeEventListener('click',func);
//     })
// }
// button.addEventListener('click',function func() {
//     let tr = document.createElement('tr');
//     let newtd1 = document.createElement('td');
//     newtd1.textContent=inp1.value;
//     tr.appendChild(newtd1);
//     let newtd2 = document.createElement('td');
//     newtd2.textContent=inp2.value;
//     tr.appendChild(newtd2);
//     let newtd3 = document.createElement('td');
//     newtd3.textContent=inp3.value;
//     tr.appendChild(newtd3);
//     table.appendChild(tr);
//     newtd1.addEventListener('click',function func() {
//         let input = document.createElement('input');
//         input.value = newtd1.textContent;
//         newtd1.textContent='';
//         newtd1.appendChild(input);
//         input.addEventListener('change',function() {
//             newtd1=input.value;
//             newtd1.addEventListener('click',func);
//         })
//         newtd1.removeEventListener('click',func);
//     })
//     newtd2.addEventListener('click',function func() {
//         let input = document.createElement('input');
//         input.value = newtd2.textContent;
//         newtd2.textContent='';
//         newtd2.appendChild(input);
//         input.addEventListener('change',function() {
//             newtd2=input.value;
//             newtd2.addEventListener('click',func);
//         })
//         newtd2.removeEventListener('click',func);
//     })
//     newtd3.addEventListener('click',function func() {
//         let input = document.createElement('input');
//         input.value = newtd3.textContent;
//         newtd3.textContent='';
//         newtd3.appendChild(input);
//         input.addEventListener('change',function() {
//             newtd3=input.value;
//             newtd3.addEventListener('click',func);
//         })
//         newtd3.removeEventListener('click',func);
//     })
// })

//484.10.
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// let ul = document.querySelector('ul');
// for (let user of employees) {
//     let li = document.createElement('li');
//     for (let key in user) {
//         let span = document.createElement('span');
//         span.textContent = user[key] + ' ';
//         li.appendChild(span);
//     }
//     ul.appendChild(li);
// }

//484.11.
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// let ul = document.querySelector('ul');
// for (let user of employees) {
//     let li = document.createElement('li');
//     for (let key in user) {
//         let span = document.createElement('span');
//         span.textContent = user[key]+ ' ';
//         span.addEventListener('click',function func() {
//             let input = document.createElement('input');
//             input.value = span.textContent;
//             span.textContent = ' ';
//             span.appendChild(input);
//             input.addEventListener('change',function() {
//                 span.textContent=input.value;
//                 span.addEventListener('click',func);
//             })
//             span.removeEventListener('click',func);
//         })
//         li.appendChild(span);
//     }
//     ul.appendChild(li);
// }

//484.12.
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// let ul = document.querySelector('ul');
// for (let user of employees) {
//     let li = document.createElement('li');
//     for (let key in user) {
//         let span = document.createElement('span');
//         span.textContent = user[key]+ ' ';
//         span.addEventListener('click',function func() {
//             let input = document.createElement('input');
//             input.value = span.textContent;
//             span.textContent = ' ';
//             span.appendChild(input);
//             input.addEventListener('change',function() {
//                 span.textContent=input.value;
//                 span.addEventListener('click',func);
//             })
//             span.removeEventListener('click',func);
//         })
//         li.appendChild(span);
//     }
//     let remove = document.createElement('a');
//     remove.href='';
//     remove.textContent='remove';
//     li.appendChild(remove);
//     remove.addEventListener('click',function (event) {
//         li.remove();
//         event.preventDefault();
//     })
//     ul.appendChild(li);
// }

//484.13.
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// let ul = document.querySelector('ul');
// for (let user of employees) {
//     let li = document.createElement('li');
//     for (let key in user) {
//         let span = document.createElement('span');
//         span.textContent = user[key] + ' ';
//         span.addEventListener('click',function func() {
//         let input = document.createElement('input');
//         input.value = span.textContent;
//         span.textContent = ' ';
//         span.appendChild(input);
//         input.addEventListener('change',function() {
//             span.textContent=input.value;
//             span.addEventListener('click',func);
//         })
//         span.removeEventListener('click',func);
//         })
//     li.appendChild(span);
//     }
//     let remove = document.createElement('a');
//     remove.href='';
//     remove.textContent='remove';
//     li.appendChild(remove);
//     remove.addEventListener('click',function (event) {
//         li.remove();
//         event.preventDefault();
//     })
//     ul.appendChild(li);
// }
// let button = document.querySelector('#button');
// let inp1 = document.querySelector('#inp1');
// let inp2 = document.querySelector('#inp2');
// let inp3 = document.querySelector('#inp3');
// button.addEventListener('click',function func() {
//     let li = document.createElement('li');
//     let span1= document.createElement('span');
//     span1.textContent=inp1.value + ' ';
//     inp1.value= '';
//     li.appendChild(span1);
//     let span2= document.createElement('span');
//     span2.textContent=inp2.value + ' ';
//     inp2.value='';
//     li.appendChild(span2);
//     let span3= document.createElement('span');
//     span3.textContent=inp3.value + ' ';
//     inp3.value='';
//     li.appendChild(span3);
//     let remove = document.createElement('a');
//     remove.href='';
//     remove.textContent='remove';
//     li.appendChild(remove);
//     remove.addEventListener('click',function (event) {
//         li.remove();
//         event.preventDefault();
//     })
//     ul.appendChild(li);
//     span1.addEventListener('click',function func() {
//         let input = document.createElement('input');
//         input.value = span1.textContent;
//         span1.textContent='';
//         span1.appendChild(input);
//         input.addEventListener('change',function() {
//             span1.textContent=input.value + ' ';
//             span1.addEventListener('click',func);
//         })
//         span1.removeEventListener('click',func);
//     })
//     span2.addEventListener('click',function func() {
//         let input = document.createElement('input');
//         input.value = span2.textContent;
//         span2.textContent='';
//         span2.appendChild(input);
//         input.addEventListener('change',function() {
//             span2.textContent=input.value + ' ';
//             span2.addEventListener('click',func);
//         })
//         span2.removeEventListener('click',func);
//     })
//     span3.addEventListener('click',function func() {
//         let input = document.createElement('input');
//         input.value = span3.textContent;
//         span3.textContent='';
//         span3.appendChild(input);
//         input.addEventListener('change',function() {
//             span3.textContent=input.value + ' ';
//             span3.addEventListener('click',func);
//         })
//         span3.removeEventListener('click',func);
//     })
// })











// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];

// let ul = document.createElement("ul");
// for(let elem of employees){
//     let li = document.createElement("li");
//     for(let key in elem){
//         let span = document.createElement("span");
//         span.textContent = elem[key] + " "
//         func1(span)

//         li.appendChild(span)
//     }
//     func2(li)

//     ul.appendChild(li)
// }


// function func1(span){
//     span.addEventListener("click", function func(){
// 		let input = document.createElement("input")
// 		input.value = span.textContent;
// 		span.textContent = ""
// 		span.appendChild(input)
// 		input.addEventListener("blur", function(){
// 			span.textContent = input.value
// 			span.addEventListener('click', func); 
// 		})
// 		span.removeEventListener('click', func);
// 	})
// }

// function func2(li){
//     let a = document.createElement("a");
//     a.href = "";
//     a.textContent  = "remove"
//     li.appendChild(a)
//     a.addEventListener("click", function(event){
// 		li.remove();
// 		event.preventDefault()
// })
// }
// document.body.appendChild(ul)
// let input1 = document.createElement("input")
// let input2 = document.createElement("input")
// let input3 = document.createElement("input")
// let button = document.createElement("button")
// button.textContent = "добавить"
// document.body.appendChild(input1)
// document.body.appendChild(input2)
// document.body.appendChild(input3)
// document.body.appendChild(button)

// button.addEventListener("click", function(){
//     let li = document.createElement("li")
//     let span1 = document.createElement("span");
//     span1.textContent = input1.value + " "
//     input1.value = ""
//     func1(span1)
//     let span2 = document.createElement("span");
//     span2.textContent = input2.value + " "
//     input2.value = "";
//     func1(span2)
//     let span3 = document.createElement("span");
//     span3.textContent = input3.value + " "
//     input3.value = ""
//     func1(span3)
//     li.appendChild(span1)
//     li.appendChild(span2)
//     li.appendChild(span3)
//     func2(li)
//     ul.appendChild(li)
// })

    




































    


























































  




    

































 








