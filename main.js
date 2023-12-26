/*validacion del formulario*/
const nombre = document.getElementById("name")
const surname = document.getElementById("surname")
const email = document.getElementById("email")
const commment = document.getElementById("comment")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    if (nombre.ariaValueMax.length <8){
        warnings += `El nombre no es valido`
        
    }
})


/*boton de ir arriba*/
window.onscroll = function(){

if(document.documentElement.scrollTop > 100){
    document.querySelector('.scroll-top-container').classList.add('show');

} else {
    document.querySelector('.scroll-top-container')
    .classList.remove('show');
}
}

document.querySelector('.scroll-top-container').addEventListener('click', () =>{
window.scrollTo({
    top:0,
    behavior:'smooth'

});
});
