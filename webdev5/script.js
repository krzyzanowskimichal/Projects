const menu = document.querySelector(".navbar__navigation-bar");

document.querySelector('.btn-menu').addEventListener('click', function(){
    this.classList.toggle('active');
    this.classList.toggle('no-active');
    menu.classList.toggle(".mobile-menu")
    const test = document.querySelectorAll('.no-animation');
    test.forEach(function(){
        for(let i = 0; i < test.length; i++){
            test[i].classList.remove('no-animation');
        }
    })
})