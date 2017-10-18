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
			return num
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
*/   //链表

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

/*
function chunk(arr, size) {
  // Break it up.
  var temp =[], flag = 0;
  for(var i = 0; i < Math.ceil(arr.length/size); i++){
    temp[i] = arr.slice(flag,size+flag);
    flag += size;
  }
  return temp;
}

chunk(["a", "b", "c", "d"], 2);
*/   //猴子吃香蕉，分段问题，固定长度分割几份


/*
function slasher(arr, howMany) {
  // it doesn't always pay to be first
  if(howMany >= arr.length){
    return [];
  }else{
    return arr.slice(howMany);
  }
}

slasher([1, 2, 3], 2);
*/   // 返回一个数组被截断n个元素之后的剩余元素.


/*
function mutation(arr) {
  var first = arr[0].toLowerCase(),
      second = arr[1].toLowerCase(),
      result = true;
  for(var i = 0;i < second.length;i++){
    result = ((first.indexOf(second[i]) > -1) ? true : false) && result;
  }
  return result;
}""

mutation(["hello", "hey"]);
*/   //蛤蟆吃队友，也就是前者是否包含后者所有元素问题

/*
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(function(cur,index,array){
    if(cur === false|| cur === null){
      return false;
    }
    if(cur === ""||cur === undefined){
      return false;
    }
    if(!(typeof cur === "string")){
      if(isNaN(cur)||cur === 0){
      return false;
    }  
    }
    
    return true;
  });
}

bouncer([7, "ate", "", false, 9]);
*/   //删除数组中所有的假值，例如null,false,0,"",undefined,NaN.

/*
function des(str){
	var num = +str;
	return num.toString(2);
}

console.log(des(""));
*/    //十进制数转二进制数,简单方法

/*
function destroyer(arr) {
  // Remove all the values
  var i = 1,
      other = [];
  for(;i < arguments.length;i++){
    other[i] = arguments[i];
  }
  return arr.filter(function(item,index,array){
    if(other.indexOf(item) === -1){
      return true;
    }else{
      delete false;
    }
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
*/    //实现一个摧毁(destroyer)函数，第一个参数是待摧毁的数组，其余的参数是待摧毁的值

/*
function where(arr, num) {
  // Find my place in this sorted array.
  var temp = arr.splice(0);
  temp.push(num);
  temp.sort(function(value1,value2){
  	if(value1 < value2){
  		return -1;
  	}else if(value1 > value2){
  		return 1;
  	}else{
  		return 0;
   	}
  });
  return temp.indexOf(num);
}

console.log(where([3, 10, 5], 3));
*/   //删除数组中的指定元素

/*
function rot13(str) { // LBH QVQ VG!
	var result = [];
  for(var i =0; i < str.length;i++){
  	var cur = str.charCodeAt(i);
  	console.log(str[i]);
  	if(cur >= 65 && cur <= 90){
  		if(cur+13 > 90){
  			result.push(String.fromCharCode(cur+13-90+64));
  		}else{
  			result.push(String.fromCharCode(cur+13));
  		}
  	}else{
  		result.push(String.fromCharCode(cur));
  	}
  }
  return result.join("");
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));
*/ //从字符串中分理出单个字符

/*
function commonParentNode(oNode1, oNode2) {
    if(oNode1.contains(oNode2)){
        return oNode1;
    }else if(oNode2.contains(oNode1)){
        return oNode2;
    }else{
        var node = oNode1.parentNode;
        do{
            if(node.contains(oNode2)){
                return node;
            }else{
              node = node.parentNode;
            }
        }while(node !== null)
    }
}
*/ //给出两个节点，求最近的公共父节点，可以包含自身

/*
function fibonacci(n) {
    if(n == 1){
        return 1;
    }
    if(n == 0){
        return 0;
    }
    return fibonacci(n-1)+fibonacci(n-2);
}
*/ //斐波那契数列

/*
function strLength(s, bUnicode255For1) {
    var len = s.length;
    if(bUnicode255For1){
        return len;
    }else{
        for(var i in s){
            if(s.charCodeAt(i) > 255){
                len++;
            }
        }
    }
    return len;
}
*/ //获取字符串长度，第二个参数为true,表示所有字符长度按1算，否则Unicode编码大于255就按2算

/*
function rgb2hex(sRGB) {
    if(/^rgb\([0-9]+\,\s*[0-9]+\,\s*[0-9]+\)$/i.test(sRGB)){
        return sRGB.replace(/^rgb\(([0-9]+)\,\s*([0-9]+)\,\s*([0-9]+)\)$/i, function($0,$1,$2,$3){
            var R = (+$1) < 16 ?'0'+(+$1).toString(16).slice(-2):(+$1).toString(16).slice(-2),
                G = (+$2) < 16 ?'0'+(+$2).toString(16).slice(-2):(+$2).toString(16).slice(-2),
                B = (+$3) < 16 ?'0'+(+$3).toString(16).slice(-2):(+$3).toString(16).slice(-2);
            return '#'+R+G+B;
        });
    }else{
        return sRGB;
    }
}

console.log(rgb2hex('rgb(15,255, 255)'));
*/   //颜色字符串转换，把输入为rgb(*,*,*)转换为#ffffff形式，1. rgb 中每个 , 后面的空格数量不固定
     //2. 十六进制表达式使用六位小写字母
     //3. 如果输入不符合 rgb 格式，返回原始输入

/*
function cssStyle2DomStyle(sName) {
	var arr = sName.split("-");
    for(var i in arr){
    	if(arr[0] === ""){
    		if(i >= 2){
	            var temp = arr[i].split("");
	            var Bighead = temp.shift();
	            temp.unshift(Bighead.toLocaleUpperCase());
	            arr[i] = temp.join("");
        	}
    	}else{
    		if(i >= 1){
	            var temp = arr[i].split("");
	            var Bighead = temp.shift();
	            temp.unshift(Bighead.toLocaleUpperCase());
	            arr[i] = temp.join("");
        	}
    	}
    }
    return arr.join("");
}

console.log(cssStyle2DomStyle('-webkit-border-image'));
*/ //驼峰命名

/*
function count(str) {
	var object = {};
    for(var i in str){
        if(/^\s/.test(str[i])){
            continue;
        }else{
            if(object[str[i]] === undefined){
                object[str[i]] = 1;
            }else{
                object[str[i]] += 1;
            }
        }
    }
    return object;
}

console.log(count('hello world'));
*/  //统计字符串的单词频率，用键值对的形式输出.

/*
var input = parseInt('13'),
    str = "",
    sum = input;

function product1(num){
    return (num-1)/2;
}

function product2(num){
    return (num-2)/2;
}

function judge(){
    if(sum % 2 === 0){
        sum = product2(sum);
        str += '2';
    }else{
        sum = product1(sum);
        str += '1';
    }
}

while(sum !== 0){
    judge();
}

str = str.split('').reverse().join('');
console.log(str);
*/   //

/*
var input = "aaabbaaaaa".split(''),
    average = 0,
    l = 0,
    time = 1,
    segment = 1,
    littleNum = 0,
    result = [];

for(; l < input.length-1;l++){
    if(input[l] !== input[l+1]){
        average += time;
        segment += 1;
        time = 1; 
        if(l == input.length-2){
          average += time;
        }
    }else{
        time += 1;
        if(l == input.length-2){
          average += time;
        }
    }
}

result = (''+average/segment).split('.');
if(result[1] !== undefined){
    result[1] = result[1].slice(0,2);
}else{
    result[1] = "00";
}

console.log(result[0],result[1]);
*/

// var reg1 = /[a-z]/g,
//     reg2 = /[A-Z]/g,
//     reg3 = /[0-9]/g,
//     reg4 = /[^a-zA-Z0-9]/g,
//     reg5 = /^[0-9]/g;
// var i = 1,
//     a = ["4","aabbccdd","ABCde0","ABCedf012345","0988763333333"];

// //登录密码检查。数字开头不合法，只含有数字大小写字母，长度不小于8，至少包含两种数据
// var length = parseInt(read_line()),
//     firstJudge = 0,
//     secondJudge = 0,
//     thirdJudge = 0,
//     sum = 0;
                     
// while(length>0){
//     var _password  = read_line();
    
//     thirdJudge = reg3.test(_password)?1:0;
//     secondJudge = reg2.test(_password)?1:0;
//     firstJudge = reg1.test(_password)?1:0;
    

//     sum = firstJudge + secondJudge + thirdJudge;
//     if(reg5.test(_password)){
//       print("NO");
//     }else{
//         if(_password.length >= 8){
//           if(!reg4.test(_password)){
//               if(sum >= 2){
//                     print("YES");
//                 }else{
//                   print("NO");
//                 }
//             }else{
//               print("NO");
//             }
//         }else{
//           print("NO");
//         }
//     }
//     length--;
// }

// //测试用函数，为了模拟笔试环境的输入输出，不属于正式内容
// function read_line(){
//   if(i <= 5){
//     i++;
//     return a[i-2];
//   }
// }
// function print(s){
//   console.log(s);
// }

//回文数组
// var length = parseInt("8"),
//     arr = "51 23 52 97 97 76 23 51".split(" "),
//     flag = [];

// function judge(){
//     var count = 0;
//     var length2 = Math.floor(length/2);
//     for(;count < length2;count++){
//         if(count === (length2)-1){
//             if(arr[count] === arr[length-count-1]){
//                 return true;
//             }else{
//                 return false;
//             }
//         }
//         if(arr[count] === arr[length-count-1]){
//             continue;
//         }else{
//             flag.push(count); //记录不匹配的位置
//             return false;
//         }
//     }
// }


// function fix(){
//     var count = flag.pop();
//     var length2 = Math.floor(length/2);
//     var result = arr.reduce(function(pre,last){return (+pre)+(+last);});
//     if(judge()){
//         console.log(result);
//     }else{
//         for(;count < length2;count++){
//             if(arr[count] === arr[length-count-1]){
//               continue;
//           }else{
//               flag.push(count); //记录不匹配的位置
//           }
//         }
//     }
//     if(flag.length === 1){
//         result += +arr[flag[0]];
//         result += +arr[length-flag[0]-1];
//         console.log(result);
//     }
// }

// fix();
// 

// function fun(x) {
//   var temp = [1],
//         flag = true,
//         i = 0,
//         floor = 1;
//     while(flag){
//         var _length = temp.length;
//         if(x === 1){
//             break;
//         }
//         if(_length === 1){
//             temp.push(1);
//             floor++;
//           continue;
//         }else{
//             var newArr = [];
//             newArr.push(1);
//             for(i = 0;i < _length-1;i++){
//               newArr.push(temp[i]+temp[i+1]);
//             }
//             newArr.push(1);
//             floor++;
//             if(newArr.indexOf(x) !== -1){
//               break;
//             }else{
//                 temp = newArr.slice(0);
                
//               continue;
//             }
//         }
//     }
//     return floor;
// }

// var res; 
  
// var _x = parseInt("3");

// res = fun(_x);
// console.log(res);
// 
// function fun(str) {
//   var result;
//     var temp = str.split(""),
//         __length = str.length;
//     for(var j = 0;j < __length;j++){
//         for(var i = 0;i < __length+1;i++){
//             temp.splice(i,0,temp[j]);
//             if(judge(temp)){
//                 return true;
//               }else{
//                 temp.splice(i,1);
//                 continue;
//               }
//         }
//         if(j === __length-1){
//           return false;
//         }
//     }
// }

// function judge(str){
//   var _length = str.length;
//     for(var i = 0; i < Math.floor(_length/2);i++){
//         if(i === Math.floor(_length/2)-1){
//           if(str[i] === str[_length-i-1]){
//             return true;
//           }else{
//               return false;
//             }
//         }
//       if(str[i] === str[_length-i-1]){
//           continue;
//         }else{
//           return false;
//         }
//     }
// }


// var res; 
  
// var _str = "bbaa";

// res = fun(_str);
// res = res ? 1 : 0;
// console.log(res);

// String.prototype.getSuffixList = function(suffix){
//     //TODO：编写代码逻辑 ，不使用正则
//     var arr = this.split(" "),
//         length = arr.length,
//         countArr = [],
//         lastLen = suffix.length,
//         result = "",
//         i = 0,
//         j = 0;
//     for( i = 0;i < length;i++){
//         var wordLen = arr[i].length,
//             countLen = countArr.length;
//         if(arr[i].indexOf(suffix) === (wordLen-lastLen)){
//             if(countLen === 0){
//                 countArr.push({word:arr[i],num:1});
//             }else{
//                 for( j = 0;j < countLen;j++){
                    
//                     if(j === countLen-1 && countArr[j].word !== arr[i]){
//                         countArr.push({word:arr[i],num:1});
//                     }else{
//                       if(countArr[j].word === arr[i]){
//                       }else{
//                           countArr[j].num += 1;
//                       }
//                     }
//                 }
//             }
//         }
//     }
    
//     for( j = 0;j < countArr.length;j++){
//         if(j === countArr.length-1){
//             result += countArr[j].word + "=" + countArr[j].num;
//         }else{
//             result += countArr[j].word + "=" + countArr[j].num +",";
//         }
//     }
    
    
//     //输出结果
//     return result;//字符串
// };

// console.log("a beaful swftgul ful gul beaful the wful".getSuffixList("ful"));
//
// var count = 0,
//     firstline = "2 4".split(" "),
//     diedYear = parseInt("5"),
//     thridline = parseInt("10");

// function sheep(){
//   this.life = 0;
//     this.live = true;
//     this.birth = function(){
//       for(let k = 0;k < firstline.length;k++){
//           if(this.life === parseInt(firstline[k])){
//               return new sheep();
//             }
//         }
//         return null;
//     };
// }

// var sheepArr = [];
// sheepArr.push(new sheep());

// for(let j = 1; j <= thridline;j++){
//   var length = sheepArr.length;
//     for(let i = 0;i < length;i++){
//         sheepArr[i].life += 1;

//         if((sheepArr[i].birth()) !== null){
//           sheepArr.push(sheepArr[i].birth());
//         }
//       if(sheepArr[i].life === diedYear){
//           sheepArr[i].live = false;
//         }
//     }
// }

// for(let i = 0;i < length;i++){
//   if(sheepArr[i].live === true){
//       count++;
//     }
// }

// console.log(count);
// 
// var time = parseInt("5"),
//     stringArr = [],
//     str = ["ykit-config-yo","mykit","fekit","ykit-config-fekit","ykit"];
// while(time>0){
//   stringArr.push(str[5-time]);
//     time--;
// }

// var key = "ykit",
//     reg = new RegExp("^"+key+"","i"),
//     temp1 = [],
//     temp2 = [],
//     temp3 = [];

// for(let i = 0;i < stringArr.length;i++){
//   if(stringArr[i].indexOf(key) !== -1){
//       if(stringArr[i] === key){
//           temp1.push(stringArr[i]);
//         }else if(reg.test(stringArr[i])){
//           temp2.push(stringArr[i]);
//         }else{
//           temp3.push(stringArr[i]);
//         }
//     }
// }

// temp2.sort(function(pre,last){
//   var len = pre.length>last.length?lats.length:pre.length;
//   for(let i = 0;i < len;i++){
//     if(pre[i] === last[i]){
//       continue;
//     }else if(pre[i] > last[i]){
//       return true;
//     }else{
//       return false;
//     }
//   }
// });

// temp3.sort(function(pre,last){
//   var len = pre.length>last.length?lats.length:pre.length;
//   for(let i = 0;i < len;i++){
//     if(pre[i] === last[i]){
//       continue;
//     }else if(pre[i] > last[i]){
//       return true;
//     }else{
//       return false;
//     }
//   }
// });
// var result = temp1.concat(temp2);
// result = result.concat(temp3);

// for(let j = 0;j < result.length;j++){
//   console.log(result[j]);
// }

// var result = "4 12".split(" "),
//     arr = "5 5 5 5".split(" "),
//     time = 0;

// arr = arr.sort(function(pre, last){
//   return pre > last;
// });
// result[1] = parseInt(result[1]);
// for(var i = 0;i < parseInt(result[0]);i++){

//   if(result[1] > parseInt(arr[i])){
//       result[1] = result[1]-parseInt(arr[i]);
//       time += parseInt(arr[i]);
//     }else{
//       if(result[1]>0){
//         time += parseInt(arr[i]);
//       }
//       console.log(time);
//       break;
//     }
  
// }
// 
// var count = parseInt("5"),
//     diffArr = "1 2 3 4 4".split(" "),
//     ask = parseInt("5"),
//     arr = ["1 2","1 3","2 4","2 5","4 4"];

// function judge(s){
//   var start = parseInt(s[0])-1,
//         end = parseInt(s[1])-1,
//         result_ = 0;
//     if(end - start < 2){
//       return 0;
//     }else{
//       for(var j = 0;j < end-start-1;j++){
//           (function(j){if(parseInt(diffArr[start+j])<=parseInt(diffArr[start+1+j])){
//               if(parseInt(diffArr[start+1+j])<=parseInt(diffArr[start+2+j])){
//                   result_ += 1;
//                 }
//             }
//         })(j);
//       }
//     }
//     return result_;
// }
// for(var i = 0;i < ask;i++){
//     (function(i){var temp = arr[i].split(" ");
//     var result = judge(temp);
//     console.log(result);
//   })(i);
// }
// 
// function Fibonacci(n)
// {
//     // write code here
//     var arr = [1,1],
//         temp = 0;
//     if(n===0){
//         return 0;
//     }
//     if(n===1){
//         return 1;
//     }else{
//         for(let i = 2;i < n;i++){
//           temp = arr[0]+arr[1];
//           arr[0] = arr[1];
//           arr[1] = temp;
//       }
//         return arr[1];
//     }
// }

// console.log(Fibonacci(3));
// 
// var search = "47 4 4".split(" ");
// var temp = [],
//     result = [],
//     j = 0,
//     s = ["2 3 4 5","13 14 26 27","34 35 47 58","105 116 128 129"];
// while(j < search[1]){
//     temp.push(s[j].split(" "));
//     j++;
// }
// console.log(temp);

// for(let i = 0;i < temp.length;i++){
//     if(parseInt(temp[i][0]) > parseInt(search[0])){
//         result.push(i-1);
//         if(temp[i-1].indexOf(search[0]) !== -1){
//             result.push(temp[i-1].indexOf(search[0]));
//             break;
//         }else{
//             break;
//         }
//     }
// }

// console.log(result.join(" "));
// var temp = "12 12 23 12 64 89 64 32 45 23".split(" ");
// var result = [];

// for(let i = 0;i < temp.length;i++){
//     if(i === 0){
//         result.push([temp[0],1]);
//     }else {
//         for(let j = 0;j < result.length;j++){
//             if(result[j][0] === temp[i]){
//                 result[j][1] += 1;
//                 break;
//             }else if(j === result.length-1 && result[j][0] !== temp[i]){
//                 result.push([temp[i],1]);
//                 break;
//             }
//         }
//     }
// }

// console.log(result.sort(function(pre,last){return pre[1] < last[1];}));
//
//找出两个数字的二进制位不用的个数
// var num = "22 10".split(" ");
// var firstNum = parseInt(num[0]),
//     secondNum = parseInt(num[1]);
// var count = 0;
// while(firstNum > 0 || secondNum > 0){
//     if((firstNum%2) !== (secondNum%2)){
//         count++;
//         firstNum = firstNum >> 1;
//         secondNum = secondNum >> 1;
//         console.log(firstNum,secondNum);
//     }else{
//         firstNum = firstNum >> 1;
//         secondNum = secondNum >> 1;
//         console.log(firstNum,secondNum);
//     }
// }
// console.log(count);
// 
// 矩阵的顺时针输出
// function turn(arr){
//     var r = arr.length;
//     var c = arr[0].length;
//     var temp = [];
//     for(let i = 0;i < c;i++){
//         var temp_c = [];
//         for(let j = 0;j < r;j++){
//             temp_c.push(arr[j][i]);
//         }
//         temp.push(temp_c);
//     }
//     return temp.reverse();
// }
// function printMatrix(matrix)
// {
//     // write code here
//     var result = [];
//     while(matrix.length !== 0){
//         var tempArr = matrix.shift();
//         for(let i = 0;i < tempArr.length;i++){
//             result.push(tempArr[i]);
//         }
//         if(matrix.length === 0){
//           break;
//         }
//         matrix = turn(matrix);
//     }
//     return result;
// }

// console.log(printMatrix([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]));

// var input = "Baidu translation is Baidu's online translation service, relying on Internet data resources and Natural Language Processing technology advantages, is committed to helping users to cross the language gap, convenient access to information and services";
// var i = 0;
// while(input.length-i > 25){
//   var output = input.slice(i,25+i);
//   console.log(output);
//   i += 25;
// }
// console.log(input.slice(i));
// 等宽输出