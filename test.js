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