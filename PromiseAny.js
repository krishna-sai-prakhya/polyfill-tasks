Promise.any=function(promises){
    let rejectCount=0;
    let rejectArray=[];
    return new Promise((resolve,reject)=>{
        if(promises.length===0){
            return reject(new AggregateError([], "All promises were rejected"))
        }
        for(let p of promises){
            p.then(resolve).catch((err)=>{
                rejectArray.push(err)
                rejectCount++;
                if(rejectCount===promises.length){
                    reject(new AggregateError(rejectArray,"Error"))
                }
            });
        }
    })
}


const promise1=new Promise((res,rej)=>{
    setTimeout(()=>{
        res(10);
    },1000)
})
const promise2=new Promise((res,rej)=>{
    setTimeout(()=>{
        res(5);
    },100)
})
const promise3=new Promise((res,rej)=>{
    setTimeout(()=>{
        rej(2);
    },20)
})

Promise.any([promise1,promise2,promise3]).then(console.log).catch(console.log)