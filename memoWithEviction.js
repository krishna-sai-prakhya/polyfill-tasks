const memoize=(fn,options)=>{

    const cache=new Map();

    const {maxSize,timeToLive}=options;
    return function(...args){
        const key=JSON.stringify(args);
        const now=Date.now();
        if(cache.has(key)){
            const entry=cache.get(key);
            if((now - entry.time)<timeToLive){
                cache.delete(key);
                cache.set(key,entry);
                return entry.value;
            }
            else{
                cache.delete(key);
            }
        }

        const result=fn.apply(this,args);

        cache.set(key,{value:result,time:now});

        if(cache.size>maxSize){
            const itemToDelete=cache.keys().next().value;
            cache.delete(itemToDelete);
        }
        return result;
    }
}