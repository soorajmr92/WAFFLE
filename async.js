makewaffle(getIcecream);

function makewaffle(callback){
    setTimeout(() => {
        console.log("set the table");
        console.log("waffle is ready")
        callback()
    }, 2500);
};

function getIcecream(){
    setTimeout(() => {
        let icecream=false;
        if(icecream){
            console.log("got the icecream")
        }else{
            console.log("did ot get icecream")
        }
    })

}
 async function snack(){
    try{
        await makeWaffle();
        await geticecream();
        console.log("set up the table")
    } catch (error) {
        console.log(`${error} so make chocolate syrup`)
    }
}
snack()
 