// Задача 1
console.log('Задача 1');
alert('Задача 1.Создайте три переменные. Присвойте первой переменной числовое значение. Вторая переменная равна первой переменной, увеличенной в три раза. Третья переменная равна сумме двух первых. Выведите на экран все три. Результат в консоли.');
let a = 6,
b = a * 3,
c = a + b;
console.log('Первая переменная - ' + a + '\n' + 'Вторая переменная - ' + b + '\n' + 'Третья переменная - ' + c);


// Задача 2
alert('Задача 2. Создайте переменные firstName и lastName для хранения имени и фамилии, запишите в них значения из модального окна prompt. Выведите на экран приветствие Whats up John Doe.');
let firstName = prompt('What is your name? Maybe Alexey?', 'Alexey'),
lastName = prompt('What is your last name?', 'Dolya');
alert('What’s up ' + firstName + ' ' + lastName);


// Задача 3
alert('Задача 3. Создайте переменные x и y для хранения числа. Значения переменные получают из prompt. Рассчитайте произведение, частное, разность и сумму этих значений. Результат последовательно отобразите в модальном окне.');
let x = prompt ('Введите число для x:', '20'),
y = prompt ('Введите число для y:', '2');
alert(x + '*' + y + '= ' + x*y);
alert(x + '/' + y + '= ' + x/y);
alert(x + '-' + y + '= ' + (+x - +y));
alert(x + '+' + y + '= ' + (+x + +y));

// Задача 4
alert('Задача 4. Напишите в переменных формулу для расчета з/п за июль с учетом, что количество рабочий часов, количество рабочих дней в неделе и рейт за час – переменные значения и читаются из prompt.(Просчитывать какой это месяц, 30 или 31 день не нужно).');
let workingHours = prompt('Сколько часов в день вы работали?','6'),
workingDays = prompt('Сколько рабочих дней было в этом месяце?', '22'),
price = prompt('Сколько стоит 1 час твоей работы?', '30');
let salary = workingHours * price * workingDays;
alert('В этом месяце ты заработал: ' + salary + '$');


// Задача 5
alert('Задача 5. Напишите программу, которая без использования оператора сравнения определяет, является ли число, введенное пользователем, нечётным.');
let num  = prompt('Введи любое число:', '43');
if (num % 2 == 0) {
    alert('Ты ввел четное число: ' + num);
}
else {
    alert('Ты ввел НЕчетное число: ' + num);
}


// Задача 6
alert('Задача 6. Напишите программу, которая проверяет, является ли значение, введенное пользователем, числом.');
let data = prompt('Введи что-то:');

if(isNaN(data)) {
    alert('Ты ввел что-то, но точно не число: ' + data);
}
else {
    alert('Ты ввел число: ' + data);
}


// Задача 7
alert('Задача 7. Запишите в переменную случайное число (Math.random()), умножьте его на 100 и округлите. Получите второе число из окна prompt. Сравните и отобразите в модальном окне: первое число меньше второго или нет, а также оба значения.');
let autoVariable = Math.round(Math.random() * 100),
userVariable = prompt('Первое число уже сгенирировалось рандомно. Введи второе число:', '10');

autoVariable < userVariable ? alert('Твое число ' + userVariable + ' больше рандомного ' + autoVariable ) : alert('Твое число ' + userVariable + ' меньше рандомного ' + autoVariable )


// Задача 8
alert('Задача 8. Создайте переменную str и запишите в нее из prompt такое предложение «Мне нравится изучать Front-end». Также создайте еще одну переменную и запишите в нее из prompt то, что вам нравится изучать. С помощью методов строки определите существует ли то что вам нравится изучать в исходной строке str. Также возьмите подстроку «Мне нравится изучать » из исходной переменной str сохраните ее в переменной. Создайте еще одну переменную result куда запишите результирующую строку объединяющую «Мне нравится изучать » и то что вам нравится изучать. Отобразите результат в модальном окне.');
let str = 'Мне нравится изучать Front-end',
question = 'Мне нравится изучать',
strUser = prompt(question, 'Front-end'),
result = question + ' ' + strUser;

if(str.includes(strUser)) {
    alert('Изначальная строка содержит ваше значение. Результат конкатенации: ' + result);
}
else {
    alert('Изначальная строка НЕ содержит ваше значение. Результат конкатенации: ' + result);
}