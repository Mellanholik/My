let sliderBlok = document.getElementsByClassName('slider')[0];
const timeoutValume = sliderBlok.dataset.timeout;
const modeValume = sliderBlok.dataset.mode;

let marginLeftValume = sliderBlok.offsetWidth
let marginLeftValume2 = marginLeftValume
if(modeValume == 'loop') {
    setInterval(() => {
        if (marginLeftValume2 == (marginLeftValume * document.getElementsByClassName('center-text').length)) {
            sliderBlok.style.marginLeft = `0px`
            marginLeftValume2 = 0
        }
        sliderBlok.style.marginLeft = `-${marginLeftValume2}px`
        marginLeftValume2 += marginLeftValume
        i++
    }, timeoutValume)
} else {
    let id = setInterval(() => {
        sliderBlok.style.marginLeft = `-${marginLeftValume2}px`
        marginLeftValume2 += marginLeftValume
        i++
        if (marginLeftValume2 == (marginLeftValume * document.getElementsByClassName('center-text').length)) {
            clearInterval(id)
        }
    }, timeoutValume)
}