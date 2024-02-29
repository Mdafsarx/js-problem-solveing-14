function Display(){

console.log(`the quick brown fox down over the lazy dog`)

}

setTimeout(Display,5000);


function greeting(name,time){

setTimeout(()=>{
    console.log('hello '+ name)
},time)


};

greeting('afsar',6000)