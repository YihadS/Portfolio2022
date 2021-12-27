var marco = document.querySelector('.marco');
var marco_h1 = document.querySelector('.marco h1');
var marco_p = document.querySelector('.marco p');
var marco_a = document.querySelector('.marco a');
var icono = document.getElementById('icono');
var marco_img = document.querySelector('.marco img');


marco.onclick = function(){
marco_h1.style.pointerEvents = "none";
marco_h1.style.border="none";
marco.style.border="3px double white";
marco_p.style.display="block";
marco_a.style.display="block";
marco_img.style.display="inline-block";
marco.style.padding="20px";
marco_h1.style.padding="0";
icono.classList.remove('fa-hand-pointer-o');
icono.classList.add('fa-eye-slash');
};

if (icono.classList.contains('fa')){

icono.onclick = function(){
marco_h1.style.pointerEvents = "auto";
marco.style.border="none";
marco.style.padding="0";
marco_h1.style.padding="20px";
marco_h1.style.border="3px double";
marco_p.style.display="none";
marco_a.style.display="none";
marco_img.style.display="none";
icono.classList.remove('fa-eye-slash');
icono.classList.add('fa-hand-pointer-o');
};
}







