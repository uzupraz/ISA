function compute()
{
    let d = parseFloat(new Date().getFullYear());
    let p = parseFloat(document.getElementById("principal").value);
    let t = parseFloat(document.getElementById('time').value);
    let r = parseFloat(document.getElementById('rate').value);
    let s=(p*t*r)/100;
    let y=d+t;
    console.log(y)
    document.getElementById('p').innerHTML = p;
    document.getElementById('t').innerHTML = t;
    document.getElementById('r').innerHTML = r;
    document.getElementById('result').innerHTML = s;
    document.getElementById('amt').innerHTML = s+p;
    document.getElementById('date').innerHTML= y;
    document.getElementById('results').classList.toggle('hide');
    document.getElementById('overlay').classList.toggle('hide');
}
function updateRate()
{
    rateval=document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML=rateval+"%";
}
function checkPrincipal()
{
    p=document.getElementById("principal").value;
    if (p<0){
        window.alert("Enter a positive value");
        document.getElementById("principal").value="";
        document.getElementById("principal").focus();
    }
}
function hide()
{
    document.getElementById('results').classList.toggle('hide');
    document.getElementById('overlay').classList.toggle('hide');
}
