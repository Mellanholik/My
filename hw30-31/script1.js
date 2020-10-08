function renderTree(selector, height){
    if (height === undefined){
        height = 10
    }
    let tegArr = ['*']
    let elem3 = '*'
    for (let index = 1; index < height; index++) {
        tegArr[index] = tegArr[index - 1] + elem3
    }


    let divClassTree = document.body.getElementsByClassName(selector);
    divClassTree[0].innerHTML = '';
    for (let i = 0; i < tegArr.length; i++) {
        divClassTree[0].innerHTML += tegArr[i] + '<br>'
        
    }
    for (let index = 1; index < divClassTree.length; index++) {
        divClassTree[index].innerHTML = divClassTree[0].innerHTML
        
    }
}
renderTree ('tree')
