
// console.log('Hello part 1');
// setTimeout(()=>console.log('Part 2'),5000);
// var third = () => {
//     console.log('Hello part 3');
// }
// third();

// count=0;
// setInterval(()=>{
//     timer.innerHTML=count;
//     count=count+5;
// },1000);
// document.getElementById('reset').addEventListener('click',()=>{count=0;});

fruit=prompt('Enter fruit');

// function watermelon(){
//     result.innerHTML='We are out of watermelon';
// }

// function other(){
//     result.innerHTML='Here is your fruit';
// }

// function checkFruit(fruit,call1,call2){
//     if (fruit=='watermelon'){
//         setTimeout(()=>{call1();},2000);
//     }
//     else{
//         setTimeout(()=>{call2();},1000);
//     }
// }
// checkFruit(fruit.toLowerCase(),watermelon,other);

function checkFruit(fruit){
    return new Promise((resolve,reject)=>{
        if (fruit=='watermelon'){
            setTimeout(()=>{
                resolve();
            },2000);
        }
        else{
            setTimeout(()=>{
                reject('Here is your fruit');
            },1000);
        }
    });
}

// checkFruit(fruit)
// .then(()=>(result.innerHTML=`We are out of watermelon`))
// .catch((vm)=>(result.innerHTML=vm));

// const details=[
//     {name:"Hari", role:"Developer"},
//     {name:"Manoj", role:"Analyst"},
//     {name:"Puja", role:"Manager"}
// ];

// result='';
// details.forEach(detail => {
//     result += `${detail.name} `
// });
// console.log(result);

async function start(){
    try{
        await checkFruit(fruit);
        result.innerHTML='We are out of watermelon'
    }
    catch(value){
        result.innerHTML=value;
    }
}
start();