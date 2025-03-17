import Img1 from "../assets/imgs/projects/petPlanner.png";
import Img2 from "../assets/imgs/projects/qrCodeGen.png";
import Img3 from "../assets/imgs/projects/pokeNative.png";
import Img4 from "../assets/imgs/projects/drinkNative.png";
import Img5 from "../assets/imgs/projects/IJornadaEdf.png";

export const projects = [
  {
    id: 1,
    title: "PetPlanner",
    description: "O PetPlanner é um aplicativo desenvolvido para auxiliar tutores de pets no gerenciamento da saúde e bem-estar de seus bichinhos. Com ele, é possível registrar o período de vacinação dos pets e definir lembretes para auxiliar no cuidado",
    img: Img1,
    link: "https://github.com/felipealvx/petsAppSwift",
    stacks: ["SwiftUI", "Figma"]
  },
  {
    id: 2,
    title: "QR-CodeGen",
    description: "Gerador de QR code utilizando React Native com a biblioteca React-Native-QRCode-Svg, o app possibilita a criação de QR codes personalizados de textos ou links.",
    img: Img2,
    link: "https://github.com/felipealvx/qrCodeGen",
    stacks: ["React Native", "Javascript", "Expo"]
  },
  {
    id: 3,
    title: "PokeNative",
    description: "Pokedex usando ReactNative e a API PokeAPI para listar os pokemons e suas informações, com a possibilidade de pesquisar e ver detalhes de cada pokemon.",
    img: Img3,
    link: "https://github.com/felipealvx/nativePokedex",
    stacks: ["React Native", "Typescript"]
  },
  {
    id: 4,
    title: "DrinkNative",
    description: "Pesquise drinks e veja suas receitas, com a possibilidade de pesquisar por nome ou categoria, o app foi desenvolvido com React Native e a API TheCocktailDB.",
    img: Img4,
    link: "https://github.com/felipealvx/drinks-app-mobile",
    stacks: ["React Native", "Typescript"]
  },
  {
    id: 5,
    title: "I Jornada de Educação Física: Esporte e Saúde",
    description: "Site para o evento I Jornada de Educação Física: Esporte e Saúde da Universidade Regional do Cariri, desenvolvido com HTML, CSS e Javascript permite facilitar o acesso a informações do Evento.",
    img: Img5,
    link: "https://github.com/jornadaedf",
    stacks: ["HTML", "CSS", "Javascript"]
  }
]