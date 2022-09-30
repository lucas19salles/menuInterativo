/* Escreva um programa em javascript que simule um menu interativo com 5 opções diferentes. O programa deverá iniciar mostrando as 5 opções disponíveis, as quatro primeiras não precisam de nenhuma funcionalidade específica, a última opção "Encerrar". Ao clicar em alguma das quatro primeiras opções uma mensagem deve ser exibida na tela indicado qual foi a opção escolhida e depois o programa deve exibir novamente o menu com as 5 opções. Isso deve continuar acontencendo até que o usuário escolha a opção "Encerrar". Ao escolhe-la uma mensagem dizendo que o sistema está sendo encerrado deve ser exibida na tela e então o programa é finalizado.
 */

let opcao = "5";

do {
  opcao = prompt(
    "Escolha uma opção? \n1- Doe R$50 \n2- Doe R$100 \n3- Doe R$150 \n4- Para doar qualquer valor \n5- Encerrar"
  );

  switch (opcao) {
    case "1":
      alert("Obrigado por doa R$50");
      break;

    case "2":
      alert("Obrigado por doa R$100");
      break;

    case "3":
      alert("Obrigado por doa R$150");
      break;

    case "4":
      let resultado = Number(prompt("Digite o valor que deseja doa? "));
      alert(`Obrigado por doa R$${resultado}`);
      break;

    default:
      alert(
        "Obrigado pela ligação, Estamos finalizando seu atendimento \n\n Encerrando"
      );
  }
} while (opcao !== "5");
