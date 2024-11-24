let numero = [];
let valor = "";
let clicouDezeroANove = false;
let display = document.getElementById("numero");
display.value = "";
let numero1 = "";
let numero2 = ""; 
let valor1 = 0;
let valor2 = 0;
let resultado = 0;
let clicouEmOperacao = false;
let operacao = "";

for(let i=0;i<10;i++){
    id = `${i}`;
    numero[i] = document.getElementById(id);
    
    numero[i].addEventListener("click", ()=> {
        valor = `${i}`;
        clicouDezeroANove = true;
        incrementaNumero();
    });
}

let dividir = document.getElementById("dividir").addEventListener("click",()=>{
    display.value = "";
    operacao = "/";
    clicouEmOperacao = true;
});
let multiplicar = document.getElementById("multiplicar").addEventListener("click",()=>{
    display.value = "";
    operacao = "*";
    clicouEmOperacao = true;
});
let somar = document.getElementById("somar").addEventListener("click",()=>{
    display.value = "";
    operacao = "+";
    clicouEmOperacao = true;
});
let diminuir = document.getElementById("diminuir").addEventListener("click",()=>{
    display.value = "";
    operacao = "-";
    clicouEmOperacao = true;
});
let igual = document.getElementById("igual").addEventListener("click",()=>{
    display.value = "";
    valor1 = Number(numero1.replace(",","."));
    valor2 = Number(numero2.replace(",","."));
    if(operacao === "/"){
        resultado = valor1/valor2;
    }else if(operacao === "*"){
        resultado = valor1*valor2;
    }else if(operacao === "+"){
        resultado = valor1+valor2;
    }else if(operacao === "-"){
        resultado = valor1-valor2;
    }
    display.value = numero1+" "+operacao+" "+numero2+" = "+resultado;
    resetaValores();
});


function incrementaNumero(){
    if(clicouDezeroANove && !clicouEmOperacao){
        numero1 = numero1+valor;
        display.value = numero1
        

    }else if(clicouDezeroANove && clicouEmOperacao){
        display.value ="";
        numero2 = numero2+valor;
        display.value =numero2;
    }

}

function resetaValores(){
    numero1 = "";
    numero2 = "";
    operacao ="";
    clicouDezeroANove = false;
    clicouEmOperacao = false;
}

