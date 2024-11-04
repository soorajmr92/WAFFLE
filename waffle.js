function makeWaffle(){
    return new Promise((resolve,reject)=>{
        resolve("Waffle is ready")
        setTimeout(()=> {
      },2500);
    })
}
function geticecream(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let icecream = true;
            if(icecream){
                resolve("got icecream")
            }else{
                reject("no icecream")
            }
         },1500);
        })
 }
 function snack(){
    makeWaffle()
    .then(function(data){
        console.log(data);
        return geticecream()
    })
    .then(function(data){
        console.log(data);
        console.log("set up the table")
    })
    .catch(function(error){
        console.log(`${error} so make chocolate syrup`)
    })
 }
 snack()