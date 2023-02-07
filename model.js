
document.addEventListener('click', event => {
    if(event.target.matches('#iconMenu')) {
        event.target.nextElementSibling.nextElementSibling.classList.add('active')
    }else if(event.target.matches('#iconClose')) {
        event.target.parentElement.parentElement.classList.remove('active')
        return
    }
})