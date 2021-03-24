var numero = document.getElementById('UserNumber')
var botao = document.getElementById('chutar')
var resposta = document.getElementById('resposta')
botao.addEventListener('click',chutar)
var escolhido = random(30)

function chutar(){    
    if(numero.value == escolhido){
        resposta.innerText = 'ACERTOU'
        escolhido = random(30)
    }else{
        if(numero.value > escolhido){
            resposta.innerText = 'MENOR'
        }else{
            resposta.innerText = 'MAIOR'
        }
    }
}

function random(numero){
    var random = Math.floor(Math.random() * numero)
    console.log(random)
    return random
}