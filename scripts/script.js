// Carne - 300 gr por pessoa   + de 6 horas - 550
// Cerveja - 1200 ml por Pessoa + 6 horas - 2000 ml
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500ml

// Crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

let duvida = document.getElementById("duvidas");

function duvidas() {

    duvida.innerHTML = `<p> <b>Base de cálculos: </b>  Carne - 300 gramas por pessoa caso seja superior a 6 horas - 550 gramas. </p>` + 
    `<p> Cerveja - 1200 ml por Pessoa caso seja superior a 6 horas - 2000 ml </p>` + 
    `<p> Refrigerante/água - 1000 ml por pessoa caso seja superior a 6 horas 1500ml </p>` + 
    `<p> Crianças valem por 0,5 pessoa.</p>` + 
    
    `<p><b>Sugestões?</b></p>` + `<p> <a class="email-text" href="mailto:phsr94@gmail.com">phsr94@gmail.com</a>
    </p>`+ 

    `<p> 
    <a class="whatsapp-info-text" href="https://api.whatsapp.com/send?phone=5562993360687">Whatsapp:
    <img class="logo-whatsapp" src="images/whatsapp-ico.png" alt="Whatsapp">
</a></p>`
    

}

function calcular() {
    console.log("Calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;


    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qdtTotalCerveja = cervejaPP(duracao) * adultos;
    let qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);


    resultado.innerHTML = `<p>${qdtTotalCarne / 1000} Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja / 355)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebidas / 2000)} Garrafas 2 Litro(s) de Bebidas</p>`


}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 550;
    } else {
        return 300;
    }
}

function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}
function bebidasPP(duracao) {
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}