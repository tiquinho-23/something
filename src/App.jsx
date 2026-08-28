import Hero from "./components/hero";
import Villain from "./components/villain";
import "./components/hero.css";
function Saudacao(props) {
  return (
    <h2>Olá, {props.nome}! Seja bem-vindo à aula.</h2>
  );
}

function Botao(){
  return(
    <a href="https://www.youtube.com/watch?v=uyPXinsv5DM&list=RDuyPXinsv5DM&start_radio=1" target="blank_">Clique aqui</a>
  );
}
function App() {
  return (
    <div>
      <h1>Mýñá prým3ìR4 Àwla dÌ Rêàquítchy</h1>
      <Saudacao nome="Brendon" />
      <Saudacao nome="Gabriel" />
      <Saudacao nome="Miguel" />
      <Saudacao nome="Daniel" />
      <Saudacao nome="Enrico" />
      <Saudacao nome="Davi" />
      <Botao/>
      <Hero/>
      <Villain/>
    </div>
    
  );
}
export default App;