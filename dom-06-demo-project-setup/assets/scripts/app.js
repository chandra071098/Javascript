let modal=document.getElementById("add-modal");
let button=document.querySelector("header button");
let backdrop=document.getElementById("backdrop");
let cancelMovieButton=modal.querySelector(".btn--passive");

let toggleBackDrop=()=>{
    backdrop.classList.toggle("visible");
}

let toggleMovieModal=()=>{
    modal.classList.toggle("visible");
    toggleBackDrop();
}

let cancelAddMovie=()=>{
    toggleMovieModal();
}

button.addEventListener("click",toggleMovieModal);
backdrop.addEventListener("click",toggleMovieModal);
cancelMovieButton.addEventListener("click",cancelAddMovie);
