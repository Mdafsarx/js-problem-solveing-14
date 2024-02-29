const intervalId=setInterval(joke,2000)

function joke(){
    console.log('the quick brown fox jumps over the lazy dog')
}

//  10 second the function will be stop

setTimeout(()=>{
    clearInterval(intervalId)
},10000)