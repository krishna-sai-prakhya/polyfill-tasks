Promise.race=function(promises){

    return new Promise((res,rej)=>{

        for(let p of promises){
            p.then(res).catch(rej)
        }
    })
}


const promise1=new Promise((res,rej)=>{
    setTimeout(()=>{
        res(10);
    },10000)
})
const promise2=new Promise((res,rej)=>{
    setTimeout(()=>{
        res(5);
    },1000)
})
const promise3=new Promise((res,rej)=>{
    setTimeout(()=>{
        rej(2);
    },20)
})

Promise.race([promise1,promise2,promise3]).then((answer)=>console.log(answer)).catch((err)=>console.log(err))