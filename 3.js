async function Api(){
    const response=await fetch('https://jsonplaceholder.typicode.com/users')
    const data=await response.json();
    console.log(data)
}
Api()