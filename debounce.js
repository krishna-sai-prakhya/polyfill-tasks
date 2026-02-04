
const debounce=(fn,delay,options={})=>{

    const {leading,trailing}=options;
    let lastThis=null;
    let lastArgs=null;
    let timer=null;
    let result;
    function invoke(){
        result=fn.apply(lastThis,lastArgs);
        lastArgs=lastThis=null;
    }
    return function(...args){
        lastThis=this;
        lastArgs=args;

        const shouldCallLeading=leading && !timer;

        clearTimeout(timer);

        timer=setTimeout(()=>{
            timer=null;
            if(trailing && lastArgs){
                invoke();
            }
        },delay);

        if(shouldCallLeading){
            invoke();
        }
        return result;
    }
}

// const debounce=(fn,delay,option={leading:true,trailing:true})=>{
//     let {leading,trailing}=option
//     let timer=null;
//     let lastArgs=null;
//     let lastThis=null;

//     function invoke(){
//         fn.apply(lastThis,lastArgs)
//         lastArgs=lastThis=null;

//     }
//     return function(...args){
//         lastArgs=args;
//         lastThis=this;

//         const shouldCallLeading=leading && !timer;

//         if(timer){
//             clearTimeout(timer);
//         }
       
//         timer=setTimeout(()=>{
//             timer=null;
//             if(trailing && lastArgs){
//                 invoke();
//             }
//         },delay);

//         if(shouldCallLeading){
//             invoke();
//         }
//     }
// }

function log(msg) {
  console.log(msg, Date.now());
}

const debounced = debounce(log, 2000, {
  leading: false,
  trailing: true
});

setTimeout(()=>{

    debounced("A")
},1000)

debounced("B")
debounced("C")


