async function load (){
    try{
        data=await fetch("localhost");
    }
    catch{
        console.log("error");
    }
}