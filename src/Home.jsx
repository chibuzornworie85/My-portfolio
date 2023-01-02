import Intro from "./Component/Body/Intro";
import Skills from "./Component/Body/Skills";
import Navigation from "./Component/Navigation/Navigation"
import More from "./Component/Body/More";
import Contact from "./Component/Body/Contact"
import Project from './Component/Body/Project'
import Service from "./Component/Body/Service";

function  Home () {

  return (
    <div className="App" id="all" >
     <Navigation />
     <Intro />
     <More />
     <Service />
     <Skills />
     <Project />
     <Contact />
    </div>
  );
}

export default Home;