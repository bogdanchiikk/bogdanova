//1
// function func1() {
// 	return 3;
// }
// function func2() {
//     return 5;
// }
// console.log( func1() + func2() );

//2
// function sum(arr) {
// 	let res = 0;
// 	for (let elem of arr) {
// 		res += elem;		
// 	}
//     return res;
// }
// console.log(sum([1, 2, 3, 4, 5]));

//3
// let arr = [1, 2, 3, 4, 5];
// function func(arr) {
// 	let res = 0;
// 	for (let elem of arr) {
// 		res += elem;    
// 	}
// 	console.log(res);
// }
// func(arr)

//4
// function func1() {
// 	return 3;
// }
// function func2() {
// 	return 5;
// }
// console.log( func1() + func2() );

//5
// let res = sum([1, 2, 3, 4, 5]);
// console.log(res);
// function sum(arr) {
// 	let sum = 0;
// 	for (let elem of arr) {
// 		sum += elem;
// 	}
// 	return sum;
// }

//6
// let res = sum([1, 2, 3, 4, 5]);
// console.log(res);
// function sum(arr) {
// 	let sum = 0;
// 	for (let elem of arr) {
// 		sum += elem;
// 	}
//     return sum;
// }

//7
// function add(num) {
// 	if (num <= 9) {
// 		return console.log('0' + num);
// 	}
//     else {
//         return console.log(num); 
//     }
// }
// add(11)

//8
// let arr = [1, 2, 3, 4, 5];
// console.log(res);
// function sum(arr) {
// 	let res = 0;
// 	for (let elem of arr) {
// 		res += elem;
// 	}
// 	return res;
// }

//9
// let num = 12345;
// let res = getDigitsSum(num);
// console.log(res);
// function getDigitsSum(num) {
// 	let arr = String(num).split('');
// 	let sum = 0;	
// 	for (let elem of arr) {
// 		sum += +elem;
// 	}	
// 	return sum;
// }

//10
// console.log(isPrime(13)); // должен вывести true
// function isPrime(num) {
// 	for (let i = 2; i < num; i++) {
// 		if (num % i !== 0) {
// 			return true;
// 		} else {
// 			return false;
// 		}
// 	}
// }

//1 пр
// let arr = [1, 2, 3, 4, 5];
// function func(arr) {
// 	let res = 0;
// 	for (let elem of arr) {
// 		res += elem;    
// 	}
// 	console.log(res);
// }
// func(arr)

//2 пр
// function getDivisors(num) {
//     let arr = [];
//     for (let i = 1; i <= num; i++) {
//       let result = num % i;
//       if (result == 0) {
//         arr.push(i);
//       }
//     }
//     return arr;
//   }
//   console.log(getDivisors(24)); // [1, 2, 3, 4, 6, 8, 12, 24]

//3 пр
// function func(str) {
//     let arr=[];
//     for (let i=0;i<str.length;i++) {
//         arr.push(str[i]);
//     }
//     return arr
// }
// console.log(func('julia')); // ['j', 'u', 'l', 'i', 'a']

//4 пр
// function func(str) {
//     let arr=[];
//     for (let i=str.length-1;i>=0;i--) {
//         arr.push(str[i]);
//     }
//     return arr
// }
// console.log(func('julia')); // ['a', 'i', 'l', 'u', 'j']

//5 пр
// function big (str) {
//     let res=str.slice(0,1).toUpperCase()+str.slice(1);
//     return res
// }
// console.log(big('julia')); // Julia

//6 пр
// function big(str) {
//     let arr=str.split(' ');
//     let res=' ';
//     for (let i=0; i<arr.length; i++) {
//         res += arr[i][0].toUpperCase() + arr[i].slice(1) + ' ';
//     }
//     return res.trim();
// }
// console.log(big('julia bogdanova'));

//7 пр
// function func(num) {
//     let arr=[];
//     for (let i=1;i<=num;i++){
//         arr.push(i);
//     }
//     return arr
//     }
//     console.log(func(7)); // [1, 2, 3, 4, 5, 6, 7]

//8 пр
// let num = 12345;
// let res = getDigitsSum(num);
// console.log(res);
// function getDigitsSum(num) {
// 	let arr = String(num).split('');
// 	let sum = 0;	
// 	for (let elem of arr) {
// 		sum += +elem;
// 	}	
// 	return sum;
// } // 15

//9 пр
// function isYear (year) {
//     return year % 4 == 0;
//             }
//         let year = +prompt("Введи год:");
//         if(isYear(year)){
//                 console.log("Год " + year + " - високосный.");
//             } else {
//                 console.log("Год " + year + " - не високосный.");
//             }

//10 пр
// function sytki(num){
//     return num/60/60/24
// }
// console.log(sytki(172800)); // 2 суток

//11 пр
// function func(arr) {
//     let rand=Math.floor(Math.random() * (arr.length));
//     return arr[rand];
// }
// let arr= [1,2,3,4,5]
// console.log(func(arr));

//12 пр
// console.log(isPrime(13)); // должен вывести true
// function isPrime(num) {
// 	for (let i = 2; i < num; i++) {
// 		if (num % i !== 0) {
// 			return true;
// 		} else {
// 			return false;
// 		}
// 	}
// }




























