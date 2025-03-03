import App from "../App";
import Header from "../../components/Header";
import CardProjects from "../../components/UI/CardProjects";
import Imagem from "../../assets/imgs/bg.png"
import Imagem2 from "../../assets/imgs/icon.jpg"

function About() {
  return (
    <App>
      <Header />
      <div className="mainPage h-full w-full flex ">
        <div className="flex flex-col gap-2 py-4">
          <h2>Projetos:</h2>
          <div className="flex gap-4">
            <CardProjects 
              title="PokeNative"
              description="Projeto para utilizar a api de pokemon, pokeapi, fazendo projeto prátioc usando react native"
              image={Imagem}
            />
            <CardProjects 
              title="PokeNative"
              description="Projeto para utilizar a api de pokemon, pokeapi, fazendo projeto prátioc usando react native"
              image={Imagem}
            />
            <CardProjects 
              title="PokeNative"
              description="Projeto para utilizar a api de pokemon, pokeapi, fazendo projeto prátioc usando react native"
              image={Imagem2}
            />
          </div>
        </div>        
      </div>
    </App>
  );
}

export default About;
