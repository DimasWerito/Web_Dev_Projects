function fibonacciGenerator(n) {
  let fibonacciSequence = [];

  // Перевірка для випадку, коли n дорівнює 0
  if (n === 0) {
    return fibonacciSequence;
  }

  // Додаємо перше число Фібоначчі - 0
  fibonacciSequence.push(0);

  // Якщо потрібно більше одного числа, додаємо друге число Фібоначчі - 1
  if (n > 1) {
    fibonacciSequence.push(1);
  }

  // Генеруємо решту чисел Фібоначчі
  for (let i = 2; i < n; i++) {
    let nextNumber = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
    fibonacciSequence.push(nextNumber);
  }

  // Повертаємо масив чисел Фібоначчі
  return fibonacciSequence;
}

console.log(fibonacciGenerator(20));
