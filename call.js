function add(a,b){
  
    return this.a+this.b;
}

Function.prototype.call=function(thisArg,...args){
    const context=(thisArg==null)?globalThis:Object(thisArg);
    const temp=Symbol('temp');
    context[temp]=this;
    
    const result=context[temp](...args);

    delete context[temp];
    return result;
}


console.log(add.call({a:10,b:20},20,10));