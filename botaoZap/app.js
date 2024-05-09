function atualizarResultado(resultado) {
    document.querySelector('.span').textContent = resultado;
  }
  
 
  
  var numero1 = parseInt(prompt("Digite o primeiro número:"));
  var operacao = prompt("Digite a operação (+, -, *, /):");
  var numero2 = parseInt(prompt("Digite o segundo número:"));
  
  
  var resultado;
  switch (operacao) {
    case "+":
      resultado = numero1 + numero2;
      break;
    case "-":
      resultado = numero1 - numero2;
      break;
    case "*":
      resultado = numero1 * numero2;
      break;
    case "/":
      resultado = numero1 / numero2;
      break;
    default:
      resultado = "Operação inválida";
  }
  
 
  atualizarResultado(resultado);
  