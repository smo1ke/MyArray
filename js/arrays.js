"use strict";

// 0 Создать числовой массив и проинициализировать его (*случайными числами).
// Не использовать методы перебора массивов (forEach, filter, map, some, every)
const arr = [1, 2, 3, 0, 4, 5, 13, 22, 0, 32, 67, 65, 0, 10, 20, 100];
console.log(arr);
// 1 Удалить последний элемент из массива, добавить по элементу в начало и конец.
console.log("Удаление посднего числа из массива", arr.pop());
console.log("Удалено посднее чило (100)", arr);

arr.unshift(21);
console.log("Добавление числа в начало в массива", arr);

arr.push(40);
console.log("Добавление числа в конец в массива", arr);

// 2 Вывести размер массива.
console.log("Длина массива:", arr.length);

// 3 Вывести элементы с четными индексами.

for (let i = 0; i < arr.length; i++) {
  if (i % 2 === 0) {
    console.log("Элементы с четными индексами.>>", arr[i]);
  }
}

// 4 Вывести только четные элементы (четные числа делятся на 2 без остатка).
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    console.log("Четные числа", arr[i]);
  }
}
// 5 Вывести индексы нулевых элементов (элемент равен нулю).
const indexes = [];
let index = arr.indexOf(0);

while (index != -1) {
  indexes.push(index);
  index = arr.indexOf(0, index + 1);
}
console.log("Индексы нулевых элементов >>", indexes);
// 6 Подсчитать количество нулевых элементов.

let nullElement = 0;
for (let i = 0; i < arr.length; ++i) {
  if (arr[i] === 0) nullElement++;
}
console.log("Количество нулевых элементов >>", nullElement);

// Методы перебора массивов (forEach, filter, map, some, every).
// 7 Получить новый массив из заданного, который будет содержать только ненулевые числа (-1, 5, 0, 9, -10 => -1, 5, 9, -10).

const numberNew = [-1, 5, 0, 9, -10];

const notNull = function (item) {
  return item != 0;
};
const notNullNumbers = numberNew.filter(notNull);
console.log("Только ненулевые числа >>", notNullNumbers);

// 8 Получить новый массив их заданного, который будет содержать все элементы исходного, возведенные в квадрат (-1, 5, 0, 9, -10 => 1, 25, 0, 81, 100).

const squareNumbers = function (i) {
  return Math.pow(i, 2);
};

const newSquareNumbers = numberNew.map(squareNumbers);
console.log("Возведенные в квадрат >>", newSquareNumbers);

// 9 Проверить, являются ли все элементы массива четными числами (* или простыми числами).

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}

console.log("Проврека всех простых чисел >>", numberNew.every(isPrime));

// 10 Проверить, есть ли в массиве хоть один отрицательный элемент.
function isNegativeNumber(num) {
  if (num < 0) {
    return true;
  }
}

console.log(
  "Проверка есть ли хоть 1 отр. эл. >>",
  numberNew.some(isNegativeNumber)
);
// 11 Вывести элементы массива, возведенные в куб.

let cub = [];

for (let i = 0; i < numberNew.length; i++) {
  cub.push(Math.pow(numberNew[i], 3));
}
console.log("Возведение массивов в куб >>", cub);

// *12 Реализовать для MyArray
// - метод shift или unshift,
// - один из методов filter/map/some/every
