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