// 1.Дан инпут и абзац. По потери фокуса в инпуте запишите значение инпута в конец текста абзаца.
// let input=document.querySelector('input')
// let elem=document.querySelector('.elem')
// input.addEventListener('blur',func);
// function func() {
//     elem.textContent +=input.value
// }

// 2.Дано несколько инпутов, абзац и кнопка. По нажатию на кнопку получите числа, стоящие в этих инпутах и запишите их сумму в абзац.
// let nums=document.querySelectorAll('.inp')
// let elem=document.querySelector('p')
// let button=document.querySelector('#button')
// button.addEventListener('click',func);
// function func() {
//     for (let num of nums)
//     elem.textContent= +elem.textContent+Number(num.value)
// }

// 3.Дан инпут. В него вводится число. По потери фокуса найдите сумму цифр этого числа.
// let num=document.querySelector('input');
// let result = document.querySelector('p');
// num.addEventListener('blur',func);
// function func() {
//     let sum = 0;
//     let str = String(num.value);
//     let arr = str.split('');
//     for (let i = 0; i < arr.length; i++) {
//       sum += +arr[i];
//     }
//     result.textContent = sum;
// }

// 4.Дан инпут. В него вводятся числа через запятую. По потери фокуса найдите среднее арифметическое этих чисел (сумма делить на количество).
// let input=document.querySelector('input');
// input.addEventListener('blur',func);
// function func () {
//     let sum = 0;
//     let str = input.value;
//     let arr = str.split(',');
//     for (let i = 0; i < arr.length; i++) {
//       sum += parseInt(arr[i]);
// }
// let arifm = sum / arr.length;
//     input.value = arifm;
// }

// 5.Даны 4 инпута. В первый инпут вводится ФИО через пробел. По потери фокуса запишите фамилию, имя и отчество в остальные 3 инпута.
// let input = document.querySelector('#fullname');
// let names = document.querySelectorAll('#name');
// input.addEventListener('blur', func);
// function func() {
// let arr = input.value.split(' ');
// for (let i = 0, j = 0; i < arr.length, j < names.length; i++, j++) {
// names[j].value = arr[i];
//     }
// }

// 6.Дан инпут. В него вводится ФИО через пробел. ФИО вводится с маленькой буквы. Сделайте так, чтобы по потери фокуса инпутом, введенные фамилия, имя и отчество автоматически стали записанными с большой буквы (в этом же инпуте).
// let input = document.querySelector('#name');
// input.addEventListener('blur', func1);
// input.addEventListener('blur', func2);
// function func1(str) {
//     let arr = str.split(' ');
//     for (let i = 0; i < arr.length; i++) {
//       arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
//     }
//     str = arr.join(' ');
//     return str;
//   }
// function func2() {
//     input.value = func1(input.value);
// }

// 7.Дан инпут. В него вводится текст. По потери фокуса узнайте количество слов в этом тексте.
// let input = document.querySelector('input');
// let elem = document.querySelector('p');
// input.addEventListener('blur', func);
// function func() {
//         let num = 0;
//         let arr = input.value.split(' ');
//         for (let i = 0; i < arr.length; i++) {
//           num++
//         }
//          elem.textContent= num;
// }

// 8.Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса в этом же инпуте поставьте эту дату в формате 2016-12-31.
// let data = document.querySelector('input')
// data.addEventListener('blur', func)
// function func() {
//     let strData = String(data.value)
//     let res = strData.split('.').reverse().join('-')
//     data.value = res;
// }

// 9.Дан инпут. В него вводится слово. По нажатию на кнопку проверьте то, что это слово читается с начала и с конца одинаково (например, мадам).
// let input=document.querySelector('input');
// let butt=document.querySelector('#button');
// butt.addEventListener('click',func);
// function func() {
//     let arr = input.value.split('');
//     let arr2 = input.value.split('').reverse();
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] == arr2[i]) {
//         res.textContent = 'ye';
//       }
//       else {
//         res.textContent = 'no';
//       }
//     }
// }

// 10.Дан инпут. В него вводится число. Проверьте по потери фокуса, что это число содержит внутри себя цифру 3.
// let input = document.querySelector('input');
// let elem = document.querySelector('p');
// input.addEventListener('blur',func);
// function func() {
//     let arr = input.value.split('');
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] == '3') {
//         return elem.textContent = 'yes';
//       }
//     }
//     return elem.textContent = 'no';
// }

// 11.Даны несколько абзацев и кнопка. По нажатию на кнопку запишите в конец каждого абзаца его порядковый номер.
// let elems = document.querySelectorAll('.elem');
// let btn = document.querySelector('input');
// btn.addEventListener('click', function() {
//     for (let i = 0; i < elems.length;) {
//         let elem = elems[i++];
//             elem.textContent =elem.textContent + i;
//     }
// })


// 12.Даны ссылки. Добавьте в конец каждой ссылки ее href в круглых скобках.
// let a = document.querySelectorAll('a')
// let button = document.querySelector('input')
// button.addEventListener ('click', func)
// function func() {
//     for (let i = 0; i < a.length; i++) {
//         a[i].innerHTML = a[i].innerHTML + '('+a[i].href+')'
//     }
// }

// 13.Даны ссылки. Если ссылка начинается с http://, то добавьте ей в конец стрелку → (делается так: &rarr;).
// let link = document.querySelectorAll('a')
// document.addEventListener ('DOMContentLoaded', func)
// function func() {
//     for (let i = 0; i < link.length; i++) {
//         if (link[i].href.indexOf('http://') === 0) {
//         link[i].innerHTML = link[i].innerHTML + '&rarr;';
//     }
//     }
// }

// 14.Даны несколько абзацев с числами. По нажатию на любой абзац запишите в него квадрат числа, которое в нем находится.
// let numbers=document.querySelectorAll('p');
// for (let nums of numbers) {
//     nums.addEventListener('click',func);
// }
// function func() {
//     this.textContent=Number(this.textContent)**2;
// }

// 15.Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса узнайте день недели (словом), который приходится на эту дату.
// let data = document.querySelector('input')
// data.addEventListener('blur', func)
// function func() {
//     let dayofWeek = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
//     let arr = data.value.split('.');
//     let [day, month, year] = arr;
//     let date = new Date(year, month-1, day);
//     let newDay = date.getDay();
//     data.value = dayofWeek[newDay]
// }

// 16.Дан инпут. Реализуйте кнопочки +1, -1, которые будут увеличивать или уменьшать на 1 значение инпута. Сделайте так, чтобы это значение не могло стать меньше нуля.
// let inp = document.querySelector('#inp');
// let plus = document.querySelector('#plus');
// let minus = document.querySelector('#minus');
// plus.addEventListener('click', add);
// minus.addEventListener('click', deletee);
// function add() {
//     inp.value = +inp.value + 1;
// };
// function deletee() {
//     if (inp.value > 0) {
//         inp.value = +inp.value - 1;
//     } else {
//         inp.value = 0;
//     }
// }

// 17.Дан инпут. Даны абзацы. Пусть в этот инпут записывается суммарное количество нажатий по этим абзацам.
// let elems = document.querySelectorAll('p');
// let inp = document.querySelector('input');
// for (let i = 0; i < elems.length; i++) {
//     elems[i].addEventListener('click', func)
// }
// let count = 0;
// function func() {
//     count++;
//     inp.value = count;
// }

// 18.На странице есть дивы. В них есть текст. Обойдите все дивы и обрежьте тот текст, который в них стоит так, чтобы он стал длиной 10 символов. И добавьте троеточие в конец обрезанного текста.
// let divs = document.querySelectorAll('div');
// let btn = document.querySelector('input');
// btn.addEventListener('click', func)
// function func() {
//     for (let text of divs) {
//         text.innerHTML = text.innerHTML.slice(0, 10) + '...'
//     }
// }

// 19.Дан инпут и кнопка. По нажатию на кнопку сгенерируйте случайную строку из 8-ми символов и запишите в инпут.
// let input = document.querySelector('input');
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', func)
//     function func() {
//         let str = '';
//         let texti = 'юююююююююююююююююююююююююююююллллллллляяяааааанн';
//         for (let i = 0; i < 8; i++) {
//           str += texti.charAt(Math.floor(Math.random() * texti.length));
//         }
//         input.value = str;
//       }
// //charAt(возвращает указанный символ из строки)

// 20.Дан инпут и кнопка. Пользователь вводит в инпут какую-то строку. По нажатию на кнопку перемешайте введенные символы случайным образом и запишите ее обратно в инпут.
// let input = document.querySelector('input');
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', func)
//     function func() {
//         let str = '';
//         for (let i = 0; i < input.value.length; i++) {
//           str += input.value.charAt(Math.floor(Math.random() * input.value.length));
//         }
//         input.value = str;
//       }

// 21.Дан инпут, кнопка и абзац. В инпут вводится температура в градусах Фаренгейта. По клику на кнопку выведите в абзац температуру в градусах Цельсия.
// let input = document.querySelector('input');
// let btn = document.querySelector('#btn');
// let elem=document.querySelector('p')
// btn.addEventListener('click', func)
//     function func() {
//         elem.textContent+=(input.value-32)*5/9;
//       }

// 22.Дан инпут, кнопка и абзац. В инпут вводится число. По нажатию на кнопку выведите в абзац факториал этого числа.
// let input = document.querySelector('input');
// let btn = document.querySelector('#btn');
// let elem=document.querySelector('p')
// btn.addEventListener('click', func)
//     function func() {
//         let res=1;
//         for (let i=1;i<=input.value;i++) {
//             res *=i
//         }
//         elem.textContent=res;
//       }

// 23.Даны 3 инпута, кнопка и абзац. В инпуты вводятся коэффициенты квадратного уравнения. По нажатию на кнопку найдите корни этого уравнения и выведите их в абзац.
// let a = document.querySelector('#a-input');
// let b = document.querySelector('#b-input');
// let c = document.querySelector('#c-input');
// let btn = document.querySelector('#btn');
// let elem=document.querySelector('p')
// btn.addEventListener('click', func)
//     function func() {
//         let d = b.value**2 - 4*a.value*c.value
//         if(d>0) {
//             let x1=(-(b.value)+Math.sqrt(d))/2*a.value;
//             let x2=(-(b.value)-Math.sqrt(d))/2*a.value;
            // elem.textContent=("корни уравнения: x1 = " + x1 + ", x2 = " + x2);
//         } else 
//         if (d==0) {
//             let x=(-(b.value)/(2*a.value));  
//             elem.textContent=("корень: x = " + x);
//         }
//         else {
//             elem.textContent='нет корней'
//         }
//       } 
    










 

    
















    


