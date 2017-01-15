// Exercise 1
var name;
name = "Steve ONeil";
console.log(name);

// Exercise 2
var x = 1125;
var answer = x % 2;
console.log(answer);

// Exercise 3
var a = true;
var b = false;
var c = true;
console.log(a || b || c);

// Exercise 4
a = true;
b = false;
c = true;
console.log(a && b && c);

// Exercise 5
var answer1 = 10 - 3 * 5/4 + 202 % 3;
var answer2 = 10 - (3 * (5/4) + (202 % 3));
console.log(answer1,answer2)
// answers differ due to "+" operator sequence

// Exercise 6
var int2String = 12;
console.log(int2String.toString());
var string2Int = "113";
console.log(Number(string2Int));
var string2Float = "1.12356";
console.log(parseFloat(string2Float));
var string2Int2 = "Hello World";
var x = parseInt(string2Int2);
console.log(x); //NaN / Not-a-Number - String-to-Integer has no corresponding value
