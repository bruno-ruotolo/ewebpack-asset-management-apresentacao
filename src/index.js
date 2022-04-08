import "./styles.css"
import Dados from "./dados.png"

const nome = prompt("Qual seu nome?");
const idade = prompt("Qual sua Idade?");

document.querySelector('body').innerHTML = `
  <h1>Seus Dados Pessoais</h1>
  <div class="dados">
    <p>Seu nome é: ${nome}</p>
    <p>Sua idade é: ${idade}</p>
  </div>
  <img src=${Dados} tab="Dados"/>
`