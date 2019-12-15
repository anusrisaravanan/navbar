const navbarBtn = document.querySelector('.navbar__btn')

const navbarlinks = document.querySelector('.navbar__links')


navbarBtn.addEventListener('click',function () {
    let value = navbarlinks.classList.contains('navbar__collapase')

    if (value){
        navbarlinks.classList.remove('navbar__collapase')
        navbarBtn.classList.remove('change')
    }
    else{
        navbarlinks.classList.add('navbar__collapase')
        navbarBtn.classList.add('change')
    }
})