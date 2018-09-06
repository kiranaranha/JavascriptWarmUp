function isOldEnoughToVote(age) {
    return age >= 18;
}

function isOldEnoughToDrinkAndDrive(age) {
    return false;
}

function getProperty(obj, key) {
    if(obj){
        return obj[key];
    } else{
        return null;
    }
}

function addProperty(obj, key) {
    obj[key] = true;
    return obj;
}

function removeProperty(obj, key) {
    delete obj[key];
    return obj;
}

function isEven(num) {
    return (num % 2) == 0;
}

function isOdd(num) {
    return (num % 2) !== 0;
}

function addToFront(arr, element) {
    arr.unshift(element);
    return arr;
}

function addToBack(arr, element) {
    arr.push(element);
    return arr;
}

function joinArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

function getAllWords(str) {
    if(str == ""){
        return [];
    }else{
        return str.split(" ");
    }
}

function extend(obj1, obj2) {
    for(var key in obj2){
        if(!(key in obj1)){
            obj1[key] = obj2[key];
        }
    }
    return obj1;
}

function removeStringValues(obj) {
    for(var prop in obj){
        if(typeof obj[prop] == "string"){
            delete obj[prop];
        }
    }
    return obj;
}

function getIndexOf(char, str) {
    for(var i = 0; i <= str.length; i++){
        if(str[i] == char){
            return i;
        }
    }
    return -1;
}

function keep(array, keeper) {
    var keep = [];
    for(var i = 0; i <= array.length; i++){
        if(array[i] == keeper){
            keep.push(keeper);
        }
    }
    return keep;
}

function getLargestElementAtProperty(obj, key) {
    if(typeof obj.key[0] !== "number"){
        var highestNum = obj.key[0];
    }
    for(var i = 0; i <= obj.key.length; i++){
        if(obj.key[i] > highestNum){
            highestNum = obj.key[i];
        }
    }
    return highestNum;
}

function getLargestElementAtProperty(obj, key) {
    if(obj.key!== undefined){
        var highestNum = obj.key[0];
        for(var i = 0; i <= obj.key.length; i++){
            if(obj.key[i] > highestNum){
                highestNum = obj.key[i];
            }
        }
        if(typeof highestNum == "number"){
            return highestNum;
        }
    }
}

function calculateBillTotal(preTaxAndTipAmount) {
    return preTaxAndTipAmount * 1.095 + preTaxAndTipAmount * .15;
}

function sumDigits(num) {
    var stringNum = num.toString();
    var x = 0;
    var sum = 0;
    if (num < 0) {
        sum -= Number(stringNum[1]);
        x += 2;
    }
    for (var i = x; i < stringNum.length; i++) {
        sum += Number(stringNum[i]);
    }
    return sum;
}

function listAllValues(obj) {
    var array = [];
    for(var key in obj){
        array.push(obj[key]);
    }
    return array;
}

function detectOutlierValue(string) {
    var numArr = string.split(' ');
    var even = [];
    var odd = [];
    numArr.forEach(function(num, index) {
        if (num % 2 === 0) {
            even.push(index);
        } else {
            odd.push(index);
        }
    });
    if (even.length === 1) {
        return even[0] + 1;
    } else if (odd.length === 1) {
        return odd[0] + 1;
    }
}

function search(array, value) {
    var mid = array.length / 2;
    while(array[mid] != value){
        if(value < array[mid]){
            mid = Math.floor(mid / 2);
        }else{
            mid = Math.floor(mid * (3/2));
        }
    }
    return mid;
}

function search(array, value) {
    var mid = array.length / 2;
    while(array[mid] != value){
        if(mid == 1 && array[1] != value){
            return null;
        }
        if(value < array[mid]){
            mid = Math.floor(mid / 2);
        }else{
            mid = Math.floor(mid * (3/2));
        }
        if(mid > array.length){
            return null;
        }
    }
    return mid;
}