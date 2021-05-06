var modal = document.getElementById("modal-container");
var btn= document.getElementById("modal-button");

var span = document.getElementsByClassName("close-modal")[0];

btn.onclick = () => {modal.style.display="block";
    btn.style.opacity=0.1;
}
span.onclick = () => {modal.style.display="none";
btn.style.opacity=1;}

window.onclick = (event) => {
  if(event.target==modal){
    modal.style.display = "none";
    btn.style.opacity=1;
  }
}