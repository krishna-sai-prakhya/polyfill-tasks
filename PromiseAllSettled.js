Promise.allSettled=function(promises){

    let finalResult=[];
    let resolvedCount=0;
    return new Promise((resolve,reject)=>{

        for(let i=0;i<promises.length;i++){

            Promise.resolve(promises[i]).then((ans)=>{

                finalResult[i]={status:'fulfilled',value:ans};

                console.log(i)

            })
            .catch((err)=>{
                finalResult[i]={status:'rejected',reason:err};
                console.log(i)
            })
            .finally(()=>{
                resolvedCount++;
                if(resolvedCount===promises.length){
                    resolve(finalResult)
                }
            })
        }
    })
    
}


Promise.allSettled([Promise.resolve(1),Promise.resolve(2),Promise.reject(3)]).then((arr)=>console.log(arr))

