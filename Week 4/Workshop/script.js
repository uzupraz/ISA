function upLoad(){
    var sr_value=document.getElementById('search_value').value;
    fetch(`http://www.omdbapi.com/?t=${sr_value}&apikey=a6ffcc7a`)
    .then((data)=>data.json())
    .then((data)=>display(data))
    .catch(()=>error());
}

function display(data){
    console.log(data);
    if (data.Title==null){
        error();
    }
    else{
        title.innerHTML=data.Title;
        makeyear.innerHTML='Released: '+data.Released;
        director.innerHTML='Director: '+data.Director;
        poster.innerHTML=`<img src="${data.Poster}">`;
        plot.innerHTML=data.Plot;
        imdbrating.classList.remove('hide');
        let circularProgress = document.querySelector(".circular-progress"),
            progressValue = document.querySelector(".progress-value");
        let progressStartValue = 0.0,    
            progressEndValue = data.imdbRating*10,    
            speed = 15;
            
        let progress = setInterval(() => {
            progressStartValue++;
            progressValue.textContent = `${progressStartValue/10}`
            circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`
            if(progressStartValue == progressEndValue){
                clearInterval(progress);
            }    
        }, speed);
    }
}

function error(){
    alert("An error occured. Couldn't find the movie. Please reload");
}

search_value.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("upload").click();
    }
  });
document.getElementById('upload').addEventListener('click',()=>{upLoad();});
fetch(`http://www.omdbapi.com/?t=Avatar&apikey=a6ffcc7a`)
    .then((data)=>data.json())
    .then((data)=>display(data))
    .catch(()=>error());



