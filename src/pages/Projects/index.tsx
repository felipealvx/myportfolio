import App from "../App";
import Header from "../../components/Header";
import CardProjects from "../../components/UI/CardProjects";

function About() {
  return (
    <App>
      <Header />
      <div className="mainPage h-full w-full flex ">
        <div className="flex flex-col gap-2 py-4">
          <h2>Projetos:</h2>
          <div>
            <CardProjects />
          </div>
        </div>        
      </div>
    </App>
  );
}

export default About;
