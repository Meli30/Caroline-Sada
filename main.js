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