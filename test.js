"use strict";
/* function indexOf(arr, item){
	var flag = true;
	for(var i = 0; i < arr.length; i++){
		if(arr[i] === item){
			flag = false;
			return i;
		}
		else if( (i === arr.length-1)&& flag){
			return -1;
		}
	}
}

console.log(indexOf([1,2,3,4,5], 7));
*/   //数组查找元素位置

/*function sum(arr){
	return arr.reduce(function (pre, cur, index, array){
		return pre-cur;
	});
}

console.log(sum([1,2,3,4,5]));
*/      //数组元素求和

/*
function remove(arr, item){
	var Arr = arr.slice(0);
	for(var i = 0; i< Arr.length;i++){
		if(Arr[i] === item){
			Arr.splice(i,1);
		}
	}
	return Arr;
}


console.log(remove([1,2,1,3,1,5], 2));
*/     //数组删除指定元素，返回新的数组的第一种方法
//
//第二种方法
/*function remove(arr, item){
	return arr.filter(function(element,index,array){
        if(element === item){
            return false;
        }
        else{
            return true;
        }
    });
}
*/

/*
function removewithoutCopy(arr, item){
	for(var i = 0; i< arr.length;i++){
		if(arr[i] === item){
			arr.splice(i,1);
			//因为数组长度变化了，所以要改变i的序号
			i--;
		}
	}
}


var arr1 = [1,1,2,3,1,5];
removewithoutCopy(arr1, 1);
console.log(arr1);
*/     //数组删除指定元素，不返回新的数组


/*
function append(arr, item){
	var Arr = arr.slice(0);
	Arr.splice(arr.length, 0, item);
	return Arr;
}


var arr1 = [1,2,3,4];
console.log(append(arr1, 5));
console.log(arr1);
*/     //数组末尾添加元素，返回一个新数组


/*
function truncate(arr){
	var Arr = arr.slice(0);
	Arr.splice(arr.length-1, 1);
	return Arr;
}

var arr1 = [1,2,3,4];
console.log(truncate(arr1));
console.log(arr1);
*/     //删除数组末尾元素，返回新数组

/*
function prepend(arr,item){
	var Arr = arr.slice(0);
	Arr.splice(0, 0, item);
	return Arr;
}

var arr1 = [1,2,3,4];
console.log(prepend(arr1, 5));
console.log(arr1);
*/     //数组头部添加元素，返回新数组

/*
function curtail(arr) {
	return arr.slice(1);
}
*/   //删除数组arr第一个元素，不要直接修改数组arr。


/*
//一种更为直接的方法，使用js内置的数组方法
function concat(arr1, arr2) {
	return arr1.concat(arr2);
}
 */
/*
function concat(arr1, arr2){
	var Arr = arr1.slice(0);
	for(var i = 0; i < arr2.length; i++){
		Arr.splice(arr1.length+i, 0, arr2[i]);
	}
	return Arr;
}

var	test1 = [1,2,3,4];
var	test2 = [5,6,7,8];
console.log(concat(test1, test2));
*/     //数组合并返回新的数组

/*
function insert(arr, item, index){
	var Arr = arr.slice(0);
	for(var i = 0; i < Arr.length-index; i++){
		Arr[Arr.length-i] = Arr[Arr.length-i-1];
	}
	Arr[index] = item;
	return Arr;
}

var arr1 = [1,2,3,4];
console.log(insert(arr1, 'z', 4));
*/      //任意位置插入新元素，返回一个新数组


/*
function count(arr, item){
	var temp = item;
	var time =0;
	arr.forEach(function(item, index, array){
		if(temp === item)
			time++;
	});
	return time;
}

console.log(count([1,'','',1,2,3],1));
*/    //统计元素出现次数

/*  通过正则表达式进行筛选匹配，不过因为正则表达式开销过大，不推荐用这种方法
function count(arr, item){
	var reg = new RegExp(""+item+"","gi");
	return arr.join("-").match(reg).length;
}
console.log(count([1,'','',1,1,3],1));
*/


/*
function duplicates(arr){
	var arr1 = [];
	arr.forEach(function(item){
		if((arr.indexOf(item) !== arr.lastIndexOf(item)) && arr1.indexOf(item) === -1)
			arr1.push(item);
	});
	return arr1;
}

console.log(duplicates([1,2,3,2,4,5,1]));
*/     //从数组中找出重复元素

/*
function square(arr){
	return arr.map(function(item){
		return item*item;
	});
}

console.log(square([1,2,3,4,5]));
*/    //数组元素数值平方


/*
function findAllOccurrence(arr, item){
	var temp = item;
	var arr1 = [];
	arr.forEach(function(item, index, array){
		if(item === temp){
			arr1.push(index);
		}
	});
	return arr1;
}

console.log(findAllOccurrence([1,2,3,2,5,6],2));
*/     //查找与指定数相同的元素位置


/*
function parse2Int(num){
	return parseInt(num, 10);
}

console.log(parse2Int('232sdss235da'));
*/   //数值转换，第二个参数指定换算进制，遇到非数值型字符停止转换

/*function createFunctions(){
	var result = new Array();
	for(var i=0;i<10;i++){
		result[i] = function(num){
			return function(){
				console.log(num);
				return num;
			};
		}(i);
	}
	return result;
}

console.log(createFunctions());
*/    //闭包的测试

/*
var fibonaci = [];
fibonaci[0] = 0;
fibonaci[1] = 1;
for(var i = 0; i < 20; i++){
	fibonaci[i+2] = fibonaci[i+1] + fibonaci[i];
}

for(i=0;i < fibonaci.length;i++){
	console.log(fibonaci[i]);
}*/   //菲波那切数列

/*
function fn(str){
	var temp = [];
	temp = str.replace(/([a-z])([A-Z])/g,"$1_$2").toLowerCase();
	return temp;
}

console.log(fn("HelloWorldThree"));
 //*/ //驼峰命名法转化为下划线分割命名法
 //
 //
 /*
 		var temp = "3.125+5*7";
 		var input_arrays = temp.split("");
		var stack1 = [];
		var stack2 = [];
		for(var i = 0; i < input_arrays.length; i++){
            if(1 <= +input_arrays[i] && +input_arrays[i] <= 9){
                stack1.unshift(+input_arrays[i]);
                console.log(stack1);
            }else{
                stack2.unshift(input_arrays[i]);
                console.log(stack2);
            }
        }
        for(var j = 0; j < stack1.length;j++){
            if(stack1.length !== 0){
                var one = stack1.pop();
                console.log(stack1);
            }else{
                break;
            }
            if(stack2.length !== 0){
                var operate = stack2.pop();
                console.log(stack1);
            }else{
                break;
            }
            if(stack1.length !== 0){
                var two = stack1.pop();
                console.log(stack1);
            }else{
                break;
            }
            switch(operate){
                case '-': stack1.unshift(one - two);
                    break;
                case '+': stack1.unshift(one + two);
                    break;
                case '*': stack1.unshift(one * two);
                    break;
            }
        }
        console.log(stack1[0]);        

//*/   //无视计算优先级的计算器

/*
var line = "100 100 40 99 99 99 40 100";
var result = [];
var tokens = line.split(' ');
       for (var i = 0; i < tokens.length; i++) {
           // 题目逻辑求和，边读取边计算
           var num = tokens[i];
           if(tokens.indexOf(num) !== tokens.lastIndexOf(num)){
               if(result.indexOf(num) === -1){
                   result.push(num);
               }
           }else{
               result.push(num);
           }
       }

       console.log(result.join(' '));
*/ //集合的确定性，互异性，无序性(数组去重)

/*
var one = "3";
var two =["0 50","1 20", "2 30"];
var n = 1,
    l = -1,
    result = 0;
while(n < 5){
	if(n === 1){
    	l = parseFloat(one);
    	n++;
    	
    }
     if(n < l+2 && n > 0){
     	var  a = parseFloat(two[n-2].split(' ')[0]);
     	console.log(a);
        var  b = parseFloat(two[n-2].split(' ')[1]/100);
        console.log(b);
        result += a*b;
        n++;
     }
}

console.log(result.toFixed(3));
*/  //数学期望四舍五入保留三位小数


/*

function functionFunction(str) {
	var temp = str;
    function f(str2){
        var result = [];
        result[0] = temp;
        result[1] = str2;
        return result.join(', ');;
    }
    return f;
}

console.log(functionFunction('Hello')('World'));
 */  //函数闭包的应用,多级传参，参数拼接


/*
function makeClosures(arr, fn) {
	var func_arr = [];
    for(var i = 0;i < arr.length;i++){
        func_arr[i] = function(num){
           return function(){
           	 return fn(arr[num])
           };
        }(i);
    };
    return func_arr;
}
var some = [1,2,3];
var square =  function(x){
	return x*x;
};
var funcs = makeClosures(some, square);
console.log(funcs[2]());
*/ // 闭包的使用，其中for循环中var声明的控制变量传入闭包中，会导致最后结果出错。
// 因为这里的var声明的变量作用于函数作用域内，并不是每次for循环.最后会导致传入的参数都是i的最后一个状态，
// 所以执行的时候访问不到对应数组的该参数，函数执行无效。必须在每一次循环的时候立即传入i的值。
// 
/*
function callIt(fn) {
    var str = [];
    for(var i = 1; i < arguments.length;i++){
        str[i-1] = arguments[i];
    }
    return fn.apply(this, str);
}

function add(a,b){
	return a+b;
} 

console.log(callIt(add,1,1));
*/  //使用apply调用函数

/*

function createModule(str1, str2) {
    var one = str1, two = str2;
	var wenhou = {
        greeting:str1,
        name:str2,
        sayIt:function(){
            return one + ', ' + two;
        }
    };
    return wenhou;
}

console.log(createModule("hello","jam").sayIt());
// */ //模块

/* 
function convertToBinary(num) {
    var num10 = (+num).toString(2);
    if(num < 256){
        var len = num10.length;
        var result = "00000000";
        var some =  result.slice(0,8-len);
        return some.concat(num10);
    }
    else{
        return num10;
    }
}

console.log(convertToBinary(257));
*/ //十进制数转二进制， 不满8位，补零

/*
function multiply(a, b) {
 var result = (+a)*(+b);
 return result.toFixed(b.length);
}
*/ 

/*
function iterate(obj) {
    var arr = [];
 for(var i in obj){
     if(obj.hasOwnProperty(i)){
         arr.push(i+": "+obj[i]);
     }
 }
    return arr;
}
*/  //遍历所有对象自身的属性，非原型链上的

/*
function captureThreeNumbers(str) {
     return (/\d{3}/i).test(str) ? str.match(/\d{3}/i)[0] : false;
}

console.log(captureThreeNumbers('9876543'));
*/ //匹配字符中最新的连续三个字符串.

/*
function matchesPattern(str) {
    return (/^\d{3}-\d{3}-\d{4}$/gi).test(str);
}
*/  //匹配xxx-xxx-xxxx这种格式

/*
function isUSD(str) {
    return (/^\$\d{1,3}(,\d{3})*(\.\d{2})?$/gi).test(str);
}

*/   //符合美元格式的字符串

/*
var id = null;
function count(start, end){
	if(start <= end){
        console.log(start);
        start++;
        id = setTimeout(function(){
            count(start,end);
        },100);
    }
	return {
        cancel:function(){
		clearTimeout(id);
	}
    }
}
*/      //打点计时器

/*
var first = "5 4";
var second = "6 3 5 7";

function maxGet(first, second){
	var line1 = first.split(" "),
		line2 = second.split(" "),
		minPrice;
	line2 = line2.sort(function(pre,cur,index,array){
			if(parseInt(pre) > parseInt(cur)){
				return 1;
			}
			else{
				return -1;
			}
	});
	minPrice = line2[0];
	console.log(line2);
	if(parseInt(line1[0]) >= parseInt(line1[1])){
		for(var i = 0; i < line2.length-1; i++){
			(function(j){
			if(parseInt(minPrice)*(line2.length-j) < parseInt(line2[j+1])*(line2.length-j-1)){
				minPrice = line2[j+1];
				console.log(minPrice);
			}else{
				console.log(minPrice);
			}
			}(i));
		}
	}
	else{
		minPrice = line2[line2.length - parseInt(line1[0])];
	}
	console.log(minPrice);
}

maxGet(first,second);

*/

/*
function bindThis(f,oTarget){
	return function(){
		return f.apply(oTarget,arguments);
	};
}

console.log(bindThis(function(a, b){return this.test + a + b;}, {test: 1})(2, 3));
*/  //闭包的使用

/* 剑指offer 二维数组中的查找
function Find(target, array)
{
    // write code here
    var i = array[0].length-1;
    var j = 0;
    for(;i >= 0; i--){
        if(array[j][i] === target){
            return true;
        }else if(array[j][i] > target){
            continue;
        }else if(array[j][i] < target){
             for(;j < array.length;j++){
                if(array[j][i] === target){
					return true;
                }else if(array[j][i] > target){
                    break;
                }else if(array[j][i] < target){
                	if(j === array.length-1){
                		return false;
                	}else{
                		continue;
                	}
                }
            }
            continue;
        }
    }
    return false;
}

var arr = [[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]];
var num = 16;

console.log(Find(num,arr));
*/


/*
function replaceSpace(str)
{
    // write code here
   return str.replace(/\s/gi,"%20");
}
*/ //替换掉字符里的空格

/*
function printListFromTailToHead(head)
{
    // write code here
    var current = head;
    if(current !== null){
     	  stack.push(current.val);
          if(current.next !== null){
              printListFromTailToHead(current.next);
          }
          return stack.reverse(); 
    }else{
        return [];
    }
}

function LinkedList(){
	var Node = function(element){
		this.element = element;
		this.next = null;
	}

	var length = 0;
	var head = null;

	this.append = function(element){
		var node = new Node(element);
		if(head === null){
			head = node;
		}else{
			current = head;
			while(current.next){
				current = current.next;
			}
			current.next = node;
		}
		length++;
	};
	this.insert = function(position, element){
		if(position >= 0 && position <= length){
			var node = new Node(element),
			    current = head,
			    previous,
			    index = 0;
			if(position === 0){
				node.next = current;
				head = node;
			}else{
				while(index++ < position){
					previous = current;
					current = current.next;
				}
				node.next = current;
				previous.next = node;
			}
			length++;
			return true;
		}else{
			return false;
		}
	};
	this.removeAt = function(position){
		if(position > -1 && position < length){
			var current = head,previous,index = 0 ;
			if(position === 0){
				head === current.next;
			}else{
				while(index++ < position){
					previous = current;
					current = current.next;
				}
				previous.next = current.next;
			}
			length--;
			return current.element;
		}else{
			return null;
		}
	};
	this.remove = function(element){
		var index = this.indexOf(element);
		return this.removeAt(index);
	};
	this.indexOf = function(element){
		var current = head,
			index = 0;
			while(current){
				if(element === current.element){
					return index;
				}
				index++;
				current = current.next;
			}
			return -1;

	};
	this.isEmpty = function(){
		if(head !== null){
			return false;
		}else{
			return true;
		}
	};
	this.size = function(){
		return length;
	};
	this.getHead = function(){
		return head;
	};
	this.toString = function(){
		var current = head,
		string = '';
		while(current){
			string += ',' + current.element;
			current = current.next;
		}
		return string.slice(1);
	};
}
console.log(printListFromTailToHead());
*/

/*
function printListFromTailToHead(head)
{
    // write code here
    var current = head;
    var stack = [];
    while(current){
        stack[stack.length] = current.val;
        current = current.next;
    }
    return (stack.reverse());
}
*/ //

/*
var temp = [], str,num = 0;
var arr = [12933,111111,59220,69433,59220,111111,0];
while( parseInt((str = read_line())) !== 0){

	if(temp.length === 0){
    	temp.push(str);
    }else if(temp.indexOf(str) === -1){
    	temp.push(str);
    }
}
print(temp.length);
*/

/*
function palindrome(str) {
  // Good luck!
  var arr = str.replace(/[\W\s\_]+/gi,"").toLowerCase();
  console.log(arr);
  for(var i = 0; i < Math.floor(arr.length/2); i++){
    if(arr[i] === arr[arr.length-1-i]){
    }else{
       return false; 
    }
  }
  return true;
}
console.log(palindrome("0_0 (: /-\ :) 0-0"));
*/ //去除空白符号和各种标点符号后，判断一个字符串是不是一个回文串

/*
function findLongestWord(str) {
  var temp = str.split(" ");
  console.log(temp[0].length);
  var max = (temp[0]).length;
  for(var i = 0;i < temp.length-1;i++){
    if((temp[i+1]).length > max){
      max = (temp[i+1]).length;
    }
  }
  return max;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
*/ //一串字符串中寻找最长的单词

/*
function titleCase(str) {
  var arr = str.toLowerCase().split(" ");
  arr = arr.map(function(current,index,array){
  	return current.replace(/^\w/,current[0].toUpperCase());
  });
  return arr.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
*/   //把句子中的每个单词首字母大写，别的小写

/*
function largestOfFour(arr) {
  // You can do this!
  arr = arr.map(function(item){
   return item.reduce(function(prev,cur,index,array){
     return Math.max(prev, cur);
   });
  });
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
*/  //返回由每个数字中最大值组成的数组

/*
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var len = target.length;
  if(str.substr(str.length-len) === target){
     return true; 
  }else{
    return false;
  }
}

confirmEnding("Bastian", "n");
*/    //判断一个单词是否以某个字符结尾

/*
function repeat(str, num) {
  // repeat after me
  if(num < 0){
    return "";
  }else{
  	var add = str;
   while(--num){
     str += add;
   }
    return str;
  }
}

console.log(repeat("abc", 3));
*/   //按给定数字，重复添加相同字符，如果为负数，就返回空字符串


