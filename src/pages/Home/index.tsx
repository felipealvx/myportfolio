import App from "../App";
import Header from "../../components/Header";
import "./style.css";
import "../../assets/svgs/bg-header.svg" 

function Home() {
  return (
    <App>
      <Header />
      <div className="img w-full h-full">
      </div>
    </App>
  );
}

export default Home;
