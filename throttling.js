const throttle=(fn,delay,options={})=>{
    const {leading,trailing}=options;

    let lastCallTime=0;
    let lastThis=null;
    let timer=null;
    let lastArgs=null;
    let result;

    function invoke(time){
         lastCallTime=time;
         result=fn.apply(lastThis,lastArgs);
        lastThis=lastArgs=null;
    }

    return function(...args){
        const now=Date.now();
        lastThis=this;
        lastArgs=args;

        if(!lastCallTime && leading===false){
            lastCallTime=now;
        }

        const remaining=delay-(now-lastCallTime);

        if(remaining<=0){
            if(timer){
                clearTimeout(timer);
                timer=null;

            }
            invoke(now);
        }
        else if(trailing && !timer){
            timer=setTimeout(()=>{
                timer=null;
                invoke(Date.now());
            },remaining)
        }
        return result;
    }
}