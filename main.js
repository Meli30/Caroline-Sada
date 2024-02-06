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

/*validación del formulario*/
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      console.log(form);
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')

      }, false)
    })
  })()


 
