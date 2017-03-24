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
	temp = str.replace(/([A-Z])([a-z]+)([A-Z])/g,"$1$2_$3").toLowerCase();
	return temp;
}

console.log(fn("HelloWorld"));
 */ //驼峰命名法转化为下划线分割命名法

