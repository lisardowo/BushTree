const Spotify = document.getElementById("Spotify", "spotify-svg");
const Github = document.getElementById("Github", "github-svg");
const Steam = document.getElementById("Steam");
const Instagram = document.getElementById("Instagram");
const Pinterest = document.getElementById("Pinterest");
const X = document.getElementById("X");

const numeroEntero = Math.floor(Math.random() * 2) + 1;
console.log(numeroEntero); // 1 o 2


if( numeroEntero % 2 === 0 ){
    const imagen = document.getElementById('pfp')
    imagen.src = './assets/pfp2.jpeg' 
}
else{
    const imagen = document.getElementById('pfp')
    imagen.src = './assets/pfp1.jpeg'
}
Spotify.addEventListener("click", function(){
    console.log("Spotify")
    window.location.href = 'https://open.spotify.com/user/31gbbsyu4n2zav23ulmiuh4ntztm?si=733c206b464f487d';
});
Github.addEventListener("click", function(){
    console.log("Github");
    window.location.href = 'https://github.com/lisardowo';
});
Steam.addEventListener("click", function(){
    console.log("Steam");
    window.location.href = 'https://steamcommunity.com/id/ughpenguin/';
});
Instagram.addEventListener("click", function(){
    console.log("Instagram");
    window.location.href = 'https://www.instagram.com/ugh.pp3nguin/';
});
Pinterest.addEventListener("click", function(){
    console.log("Pinterest");
    window.location.href = 'https://pin.it/CJbpJTi2b';
});
X.addEventListener("click", function(){
    console.log("X");
    alert("Womp womp, not ready yet")
    //window.location.href = ''; //#TODO - agregar X y airbuds a la lista de enlaces
});