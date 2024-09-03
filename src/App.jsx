import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Parallax from "./components/Parallax/Parallax";
import Services from "./components/Services/Services";
import Protfolio from "./components/Protfolio/Protfolio";
import Contact from "./components/Contact/Contact";

const App = () => {
  return <div>
    <section id='Homepage'>
        <NavBar/>
        <Hero/>
    </section>
    <section id='services'><Parallax type ='services'/></section>
    <section><Services/></section>
    <section id='protfolio'><Parallax type='protfolio'/></section>
    <Protfolio/> 
    <section id='contact'>
      <Contact/>
    </section>

     
    
    </div>;
};

export default App;
