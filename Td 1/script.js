function clicksurletitre(){
    const monElementParent=document.getElementById("gamegrid");
    const emoji=["😺","😸","😹","😻","😼","😽","🙀","😿","😾","🙈","🙉","🙊","🐵","🐶","🐺","🐱"];
    for(var i=0;i<16;i++){
        const monNouvelElement=document.createElement("div");
        monNouvelElement.innerHTML=emoji[i];
        monNouvelElement.classList.add('transparent');
        monNouvelElement.addEventListener("click",flipCard);
        monElementParent.appendChild(monNouvelElement);
    }
}
let firstCardFlip=null;
let secondCardFlip=null;
function flipCard(){
    if(firstCardFlip==null){
        firstCardFlip=this;

        console.log(firstCardFlip);
    }
    this.classList.remove('transparent');
}
clicksurletitre();