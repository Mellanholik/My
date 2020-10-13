const body = document.getElementsByTagName('body')[0];
const bodyColor = body.dataset.color.split(' ')
const bodyTimeout = body.dataset.timeout
const bodyType = body.dataset.type
let index = 0;
console.log(bodyColor)
let id
if (bodyType === 'loop') {
    id = setInterval(() => {
        body.style.backgroundColor = bodyColor[index]
        console.log(index)
        index ++
        if(index >= bodyColor.length ){
            index = 0
        }
    }, bodyTimeout)
} else {
    id = setInterval(() => {
        body.style.backgroundColor = bodyColor[index]
        console.log(index)
        index ++
        if(index >= bodyColor.length ){
            clearInterval(id)
        }
    }, bodyTimeout)
}
