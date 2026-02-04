
function add(...args){
    const [a,b]=args
    return a+b
}

Function.prototype.call=function(thisArg,...args){

    const context=thisArg?Object(thisArg):globalThis;

    const key=Symbol('key');

    context[key]=this;

    const result=context[key](...args);

    delete context[key];

    return result;
}

console.log(add.apply({a:10},[1,2]))