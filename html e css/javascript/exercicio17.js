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

    let dados = new FormData('formulario-01');

    let objeto = {};

    let notas = [];

    for(let key of dados.keys()){
        objeto[key] = dados.get(key);
       //adiciona item a um array
        notas.push(parseInt(dados.get(key)));
    }
    console.log(notas);

    console.log(objeto);

    let texto = aprovacao(notas)

    document.getElementById('resultado').innerHTML = texto;
});

/*
  *Formulario envio de dados para cálculo de media
*/ 
const formulario1 = document.getElementById('formualrio-01')

if(formulario1)
formulario1.addEventListener('submit',function( evento ) {
     
    evento.preventDefault();
    evento.stopPropagation();

    if(this.getAttribute('class').match(/erro/)){
        return false;
    }

    let dados = new FormData(this);

    let notas = [];

    for(let key of dados.keys()){

     let numero = dados.get(key).match(/\d*/) ? Number(dados.get(key)) : 0;// é um numero

        if(!isNaN(numero)){
            notas.push(numero);
        }

        // adicionar itens no array
        notas.push(parseInt(dados.get(key)));
    }

    console.log(notas);

    texto = aprocacao(notas);
    
    document.getElementById('resultado').innerHTML = texto;
})


function validaemael(elemento){
     
    elemento.addEventListener('focusout',function(event){

        event.preventDefault();

        const emailvalido = /^[a-z0-9]+@[a-z0-9]+\.[a-z]?$/i

      if(this.value.match(emailvalido)) {
        document.querySelectorAll('.mensagem').innerHTML = '';
        this.classList.remove('erro');
        this.parentNode.classList.remove('erro');
         }else {
            document.querySelector('.mensagem').innerHTML = 'Verifique os preenchimentos dos campos em vermelho ';
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
             return false
     }


    })
}

    function validauf(elemento){

        elemento.addEventListener('focusout',function(event){

            event.preventDefault();
             
            const unidadevalida =  /^[a-z]{2}$/


            if(this.value.match(unidadevalida)) {
              document.querySelectorAll('.mensagem').innerHTML = '';
              this.classList.remove('erro');
              this.parentNode.classList.remove('erro');
               }else {
                  document.querySelector('.mensagem').innerHTML = 'Verifique os preenchimentos dos campos em vermelho ';
                  this.classList.add('erro');
                  this.parentNode.classList.add('erro');
                   return false
           }
      

        })
    }


    function validacampo(elemento){
          
       elemento.addEventListener('focusout',function(event){

         event.preventDefault();

         if(this.value == ""){
            document.querySelector('.mensagem').innerHTML = 'Verifique os preenchimentos dos campos em vermelho ';
               this.classList.add('erro');
               this.parentNode.classList.add('erro');
                 return false;
            }else{
                document.querySelectorAll('.mensagem').innerHTML = '';
                this.classList.remove('erro');
                this.parentNode.classList.remove('erro');
     }
   });
}

function validacamponumerico(elemento){
          
    elemento.addEventListener('focusout',function(event){

      event.preventDefault();
      let numero = this.value.match(/^[\d]5-[\d]3/) ? this.value.replece(/-/,"") : this.value;

      if(numero != '' && numero.match(/[0-9]*/) && numero >= 0 && numero >= 10) {
        document.querySelectorAll('.mensagem').innerHTML = '';
        this.classList.remove('erro');
        this.parentNode.classList.remove('erro');
         }else {
            document.querySelector('.mensagem').innerHTML = 'Verifique os preenchimentos dos campos em vermelho ';
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
             return false
     }
    });
}

let camposobrigatorios = document.querySelectorAll('input.obrigatorio')
let camposnumericos = document.querySelectorAll('input.numero')
let camposemail = document.querySelectorAll('input.email')
let camposuf = document.querySelectorAll('input.uf')

for(let emfoco of camposobrigatorios){
     validacampo(emfoco)
}

for(let emfoco of camposnumericos){
    validacamponumerico(emfoco)
}

for(let emfoco of camposemail){
    validacamponumerico(emfoco)
}

for(let emfoco of camposuf){
    validacamponumerico(emfoco)
}