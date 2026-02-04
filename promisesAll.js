
Promise.all=function(promises){
    return new Promise((resolve,reject)=>{

        if(!Array.isArray(promises)){
            reject(new TypeError("Argument must be an array"));
        }
        const results=[];
        let resolvedCount=0;

        for(let i=0;i<promises.length;i++){

            Promise.resolve(promises[i]).then((ans)=>{
                results.push(ans);
                resolvedCount++;
                if(resolvedCount===promises.length){
                    resolve(results)
                }
            }).catch((err)=>{
                reject(err)
            })
        }
        if(promises.length===0){
            resolve([]);
        }
    })
}


Promise.all([Promise.resolve(1),Promise.resolve(2),Promise.reject(3)]).then((log)=>console.log(log)).catch((err)=>console.log(err))