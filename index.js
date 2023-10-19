const headerEl = document.querySelector('.header');

const secondContainerEl = document.querySelector('.second-container');

console.log(headerEl.offsetHeight);

console.log(secondContainerEl.offsetTop);

window.addEventListener('scroll', ()=> {
    if(
        window.scrollY > 
        secondContainerEl.offsetTop - headerEl.offsetHeight - 50
    ){
        headerEl.classList.add('active');
    }else{
        headerEl.classList.remove('active');
    }
})

