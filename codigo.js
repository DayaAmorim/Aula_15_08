/* 
FOR ([inicialiazacao]; [condicao1]; [expressao final]){
    declaração
} 

Tipos de variáveis:
VAR = GLOBAL
LET = LOCAL
CONST = CONSTANTE

let valor=""
for(let i=0;i<=10;i++){
valor += i+"<br>"
resposta.innerHTML = valor;
}

let n = 2;
  for(let i = 1; i <= 10; i++) {
      document.write(n + ' x ' + i + ' = ' + n * i + '<br>');
  }

*/



let valor ="";
let valor2 = parseInt(prompt("Digite o valor: "));
for (let i =1; i <=10; i++){
    valor += i + "X" + valor2 + "=" + i * valor2 + "<br>"
    resposta.innerHTML = valor;
}