var name1 = "gowtham";
var name2 = "here";
console.log(name1 + name2);


// 11. Write a JavaScript function to convert an amount into coins.Sample function : amountTocoins(46, [25, 10, 5, 2, 1])Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.// Output : 25, 10, 10, 1

function amountToCoins(amount, coins) {

if (amount === 0) {
  return [];
} 
else{
  if (amount >= coins[0]) {
    total = (amount - coins[0]);
    return [coins[0]].concat( amountToCoins(total,coins));
  }
  else{
    coins.shift();
    return amountToCoins(amount, coins);
  }
 }
} 
console.log(amountToCoins(46, [25, 10, 5, 2,1]));



// 12.Write a JavaScript program to get integers in the range (x, y) using recursion.Example : range(2, 9)
// Expected Output : [3, 4, 5, 6, 7, 8]

let range = function(startNum, endNum) 
{
  if (endNum - startNum === 2) 
  {
    return [startNum + 1];
  } 
  else 
  {
    var list = range(startNum, endNum - 1);
    list.push(endNum - 1);
    return list;
  }
};
console.log(range(2,9));



// 13. Write a JavaScript function to truncate a string if it is longer than the specified
// number of characters. Truncated strings will end with a translatable ellipsis
// sequence (&quot;...&quot;) (by default) or specified characters.
// Test Data :
// console.log(text_truncate(&#39;We are doing JS string exercises.&#39;))
// console.log(text_truncate(&#39;We are doing JS string exercises.&#39;,19))
// console.log(text_truncate(&#39;We are doing JS string exercises.&#39;,15,&#39;!!&#39;))
// &quot;We are doing JS string exercises.&quot;
// &quot;We are doing JS ...&quot;
// &quot;We are doing !!&quot;


let textTruncate = function(str, length, ending) {
    if (length == null) {
      length = 100;
    }
    if (ending == null) {
      ending = '...';
    }
    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    } else {
      return str;
    }
  };
console.log(textTruncate('We are doing JS string exercises.'))
console.log(textTruncate('We are doing JS string exercises.',19))
console.log(textTruncate('We are doing JS string exercises.',15,'!!'))




// 14. Write a JavaScript for loop that iterates from 0 to 15.For each iteration, it checks if the current number is odd or even, and displays a message on the screen.
// Sample Output :
// &quot;0 is even&quot;
// &quot;1 is odd&quot;
// &quot;2 is even&quot;
// ----------
// ----------


for (var x=0; x<=15; x++) {
  if (x === 0) {
    console.log(x +  " is even");
  }
  else if (x % 2 === 0) {
    console.log(x + " is even");   
  }
  else {
    console.log(x + " is odd");
  }
}



// 15. Write a JavaScript conditional statement to find the largest of five numbers.Display an alert box to show the results.Sample numbers : -5, -2, -6, 0, -1 Output : 0


const numbers = [-5, -2, -6, 0, -1];
let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}

alert('The largest number is: ' + largest);



// 17. Write a JavaScript program to check whether a given number exists in the range 40..10000. For example 40 presents in 40 and 4000.

function test_digit(x, y, n) {    
  if (n < 40 || n > 10000){
    return false;
  }
  else{
    if (n >= x && n <= y){
      return true;
    }
    else{
      return false;
    }
  }
}
console.log(test_digit(40, 4000, 45));  
console.log(test_digit(80, 320, 79));  
console.log(test_digit(89, 4000, 30));



// 18. Write a JavaScript program to compute the exponent of a number. Note : The exponent of a number says how many times the base number is used as a factor.
// 8 2 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.


var exponent = function(a, n) {
  if (n === 0) {
    return 1;
  }
  else {
    return a * exponent(a, n-1);
  }
};

console.log(exponent(8, 2));



// 19.Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively.Sample array : [1,2,3,4,5] Expected Output : 2,4


function SecondGreatestLowest(myArr){
  myArr.sort(function(x,y){
    return x-y;
  });
  var myNum = [myArr[0]];
  var result = [];
  
  for(var j=1; j < myArr.length; j++)
  {
    if(myArr[j-1] !== myArr[j])
    {
      myNum.push(myArr[j]);
    }
  }
    result.push(myNum[1],myNum[myNum.length-2]);
  return result.join(',');
  }

console.log(SecondGreatestLowest([1,2,3,4,5]));




// 20. Write a JavaScript program that accepts a string as input and swaps the case of each character. For example if you input &#39;The Quick Brown Fox&#39; the output should be &#39;tHE qUICK bROWN fOX&#39;.


function swapCase(inputString) {
  let result = '';

  for (let i = 0; i < inputString.length; i++) {
    const char = inputString.charAt(i);
    if (char === char.toUpperCase()) {
      result += char.toLowerCase();
    } else {
      result += char.toUpperCase();
    }
  }

  return result;
}

const input = 'Gowtham Is a Full Stack Developer';
const swappedString = swapCase(input);
console.log(swappedString);
