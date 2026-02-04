
function add(a,b,c){
    return a+b+c;
}


Function.prototype.bind=function(thisArg,...args){
    const context=(thisArg==null || null==undefined)?globalThis:Object(thisArg);
    
    const fn=this;
    return function(...callbackArgs){
        const key=Symbol('key');
        context[key]=fn;
        try {
            
            return context[key](...args,...callbackArgs);
        }finally{
            delete context[key];
        }
    }
}

const fn=add.bind({a:10,b:4},1,2);
console.log(fn(1))