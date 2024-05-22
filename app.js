let box = 0
function kupetir(){
    box++
    if(box > 0){
        document.querySelector("h1").style.color = 'green'
    }
    document.querySelector("h1").innerHTML = box
}
function kamaytir(){
    box--
    if(box < 0){
        document.querySelector("h1").style.color = 'red'
    }
    document.querySelector("h1").innerHTML = box
}
function boshidan(){
    box = 0
        document.querySelector("h1").style.color = 'gold'
    
    document.querySelector("h1").innerHTML = box
}