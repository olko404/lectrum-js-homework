/**
 * Задача 3.
 *
 * Создайте функцию truncate(string, maxLength).
 * Функция проверяет длину строки string.
 * Если она превосходит maxLength – заменяет конец string на ... таким образом, чтобы её длина стала равна maxLength.
 * Результатом функции должна быть (при необходимости) усечённая строка.
 *
 * Условия:
 * - Функция принимает два параметра;
 * - Функция содержит валидацию входных параметров;
 * - Первый параметр должен обладать типом string;
 * - Второй параметр должен обладать типом number.
 */

// Решение
function truncate(str, maxLength) {
  if (isValidType(str, maxLength)) {
    if (str.length > maxLength) {
      return str.slice(0, maxLength - 3) + "...";
    }
    return str;
  }
}

function isValidType(a, b) {
  if (typeof a === "string" && typeof b === "number") {
    return true;
  } else {
    throw new Error("Invalid type of parametr");
  }
}

truncate("Вот, что мне хотелось бы сказать на эту тему:", 21); // 'Вот, что мне хотел...'

exports.truncate = truncate;
