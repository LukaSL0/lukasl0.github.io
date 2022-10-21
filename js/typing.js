const texto = document.getElementById('typing');

let nome = 'Luka';
let i = 0;

function escrever(){
    if (i < nome.length){
        texto.innerHTML += nome.charAt(i);
        i++;
        setTimeout(escrever, 250);
    }
}

window.addEventListener('load', escrever);