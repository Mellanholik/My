const sliderObjeck = document.querySelector('.center-text1');
let marginJs = sliderObjeck.offsetWidth;
let timeoutValume = sliderObjeck.dataset.timeout;
const modeValume = sliderObjeck.dataset.mode;
let marginVolue = 0;
let a ;
function leftButton() {
    if(Math.abs(marginVolue) >= marginJs * (document.getElementsByClassName('center-text').length - 1)){
        return sliderObjeck.style.marginLeft = `${marginVolue}px`;
    } 
    sliderObjeck.style.marginLeft = `${marginVolue -= marginJs}px`;
}
function rightButton() {
    if(Math.abs(marginVolue) <= 0 ){
        return sliderObjeck.style.marginLeft = `${marginVolue}px`;
    } 
    sliderObjeck.style.marginLeft = `${marginVolue += marginJs}px`;
}
document.querySelector('.left-button').addEventListener('click', leftButton)
document.querySelector('.rigth-button').addEventListener('click', rightButton)
var i
    let autoSlide = setInterval(() => { 
    if(Math.abs(marginVolue) >= marginJs * (document.getElementsByClassName('center-text').length - 1)){
        sliderObjeck.style.marginLeft = `0px`
        marginVolue = 0
        
    } else {
        sliderObjeck.style.marginLeft = `${marginVolue -= marginJs}px`
    }
    if (modeValume != 'loop' &&  Math.abs(marginVolue) == marginJs * (document.getElementsByClassName('center-text').length - 1)) {
        clearInterval(autoSlide)
    }
    if (i == 1) {
        clearInterval(autoSlide)
    }
},timeoutValume)

function hoverOn() {
    timeoutValume = 9999999999999
}
function hoverOff() {
    timeoutValume = 4000
}
var i
sliderObjeck.addEventListener('mouseover', () => i = 1)
sliderObjeck.addEventListener('mouseout', () => i = 0)
document.querySelector('.left-button').addEventListener('mouseover', () => i = 1)
document.querySelector('.rigth-button').addEventListener('mouseout', () => i = 0)