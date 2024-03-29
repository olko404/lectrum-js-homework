/**
 * Задача 2.
 *
 * Напишите функцию calculate(), которая в качестве аргументов принимает неограниченное количество функций.
 *
 * При запуске calculate() последовательно запускает коллбек-функции из аргументов.
 * Каждая коллбек-функция из цепочки в качестве своего аргумента принимает то, что возвращает предыдущая коллбек-функция.
 * То есть возвращаемое значение каждой коллбек-функции из цепочки
 * становится доступным из параметра следующей коллбек-функции в цепочке.
 *
 * Первая коллбек-функция не принимает параметров.
 *
 * После выполнения всей цепочки, функция calculate() должна вернуть результат выполнения последней коллбек-функции.
 *
 * Генерировать ошибки если:
 * - Любой из аргументов функции calculate() не является функцией;
 * - Любая функция из аргументов не вернула значение.
 */

// Решение
const isValidType = fn => {
  const func = fn && {}.toString.call(fn) === "[object Function]";

  if (!func) {
    throw new Error(`${fn} is not a function`);
  }
  return func;
};

const calculate = (...functions) => {
  for (let i = 0; i < functions.length; i++) {
    if (isValidType(functions[i])) {
      return functions[i + 2](functions[i + 1](functions[i]()));
    }
  }
};

const result = calculate(
  () => {
    return 7;
  },
  prevResult => {
    return prevResult + 4;
  },
  prevResult => {
    return prevResult * 5;
  }
);

console.log(result); // 55

exports.calculate = calculate;
