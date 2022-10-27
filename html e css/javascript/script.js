function calcularmedia(notas) {
    let soma = 0;
    for( c = 0; c < notas.length; c++) {
        soma += notas[c];
    }
    media = soma / notas.length;

    return media;
}

let mdia; //escopo global

function aprovacao (notas) {
    let media = calcularmedia( notas);//escopo da função

    let = condicao = media >= 8 ? "aprovado" : "reprocado"
    
    return 'media:' + media + 'resultado:' + condicao
}
function contagemRegressiva(numero){
    console.log(numero);
    
    let proximonumero = numero - 1;

    if(proximonumero > 8)
    contagemRegressiva(proximonumero);
}

document.addEventListener('submit',function(evento){

    evento.preventDefault()
    evento.stopPropagation()

    let formulario = document.getElementById('formulario-01');

    let dados = new FormData(formulario);

    let objeto = {};

    let notas = [];

    for(let key of dados.keys()){
        objeto[key] = dados.get(key);
       //adiciona item a um array
        notas.push(parseInt(dados.get(key)));
    }
    console.log(notas);

    console.log(objeto);

    document.getElementById('resultado').innerHTML = aprovacao(notas);
});