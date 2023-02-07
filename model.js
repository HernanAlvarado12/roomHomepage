/**
 * @type {Element}
 */
const currentImage = document.querySelector('header .header__nvbr')
let index = 0

document.addEventListener('click', event => {
    if(event.target.matches('#iconMenu')) {
        event.target.nextElementSibling.nextElementSibling.classList.add('active')
    }else if(event.target.matches('#iconClose')) {
        event.target.parentElement.parentElement.classList.remove('active')
    }else if(event.target.matches('.nvbr__move > figure:first-child, .nvbr__move > figure:first-child img')) {
        if(index == 0) {
            index = 2
            indexImage(index)
        }else {
            indexImage(-- index)
        }
    }else if(event.target.matches('.nvbr__move > figure:last-child, .nvbr__move > figure:last-child img')) {
        if(index == 2){
            index = 0
            indexImage(index)
        }else {
            indexImage(++ index)
        }
    }
})


const indexImage = (currentIndex) => {
    const list = ['first', 'second', 'third']
    const classList = list[currentIndex]
    list.filter(item => item !== classList)
        .forEach(item => currentImage.classList.remove(item))
    currentImage.classList.add(classList)
}