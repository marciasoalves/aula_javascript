

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>OBRIGADO POR CLICAR<b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://www.academiapme.com.br/");
    //window.location.href="https://www.academiapme.com.br/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}
function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

/*function soma(n1, n2){
    return n1 + n2;
}
*/
/*function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true 
    }else{
        validar =false
    }
    return validar;
}
var idade = prompt("Qual sua idade?")
console.log(validaIdade(idade));
*/


/*alert(soma(5, 10));*/



/*function setReplace (frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
 }
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/


/*var d = new Date();
alert(d.getMonth()+1);
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/

/*
var count;
for(count=0; count<=5; count++){
    alert(count);
};
*/

/*
var count = 0;
while (count <=5){
    console.log(count);
    alert(count);
    count++;
};
*/
/*
var idade = prompt("Qual a sua idade?");
if(idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/


//var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
//console.log(frutas);
//alert(frutas[1].nome);

/*
var fruta = {nome:"maçã", cor:"vermelho"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["maçã", "pêra", "laranja"];
//lista.push("uva");
//lista.pop("")
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));

//var nome= "Márcia Alves ";
//var n1= 3;
//var n2= 10;
//var frase= "Japão é o melhor time do mundo";
//alert(nome + "tem " + idade + "anos");
//alert (idade+idade2);
//console.log(nome);
//console.log(n1 *n2);
//console.log(frase.replace("Japão", "Brasil"))
//alert(frase.replace("Japão" , "Brasil"));
