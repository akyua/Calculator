'use strict';

let arr = [4, 2, 4];
let result = 0;


const addtions = function(){
    for(let i = 0; i < arr.length; i++){
        result += arr[i];
    }
    console.log(result);
    result = 0;
}
addtions();  

const subtraction = function(){
    for(let i = 0; i < arr.length; i++){
        result = arr[i] - result;
    }
    console.log(result);
    result = 0;
}
subtraction();

const multiplication =  function(){
    result = 1;
    for(let i = 0; i < arr.length; i++){
        result *= arr[i];
    }
    console.log(result);
    result = 0;
}
multiplication();

const division = function(){
    result = 1;
    for(let i = 0; i < arr.length; i++){
        result = arr[i] / result;
        console.log(result)
    }
    console.log(result);
    result = 0;
}
division();