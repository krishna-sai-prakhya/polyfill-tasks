const deepClone=(value,seen=new WeakMap())=>{

    if(typeof value!=='object' || value===null){
        return value;
    }

    if(seen.has(value)){
        return seen.get(value);
    }

    if(value instanceof Date){
        return new Date(value);
    }

    if(value instanceof RegExp ){
        return new RegExp(value);
    }

    const clone=Array.isArray(value)?[]:{};

    seen.set(value,clone);

    for(let key in value){

        if(value.hasOwnProperty(key)){
            clone[key]=deepClone(value[key],seen);
        }
    }
    return clone;
}
const object={a:20,b:{
    c:20
}}
const clonedObject=deepClone(object)

clonedObject['b'].c=10;
console.log(object)
console.log(clonedObject)