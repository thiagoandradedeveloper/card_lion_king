/*background: #1E90FF;
background: #8B6914;*/

window.onload = ()=>{
    let bodyDocument = document.body;
    let posicao = 1;
    setInterval(()=>{
        
        posicao++;

        if(posicao > 3) posicao = 1;

        if(posicao == 1){
            bodyDocument.style.background = '#1E90FF';
        }
        if(posicao == 2){
            bodyDocument.style.background = '#8B6914';
        }
        if(posicao == 3){
            bodyDocument.style.background = '#006400';
        }

    },5000)
}