
import Banner from "./Component/Banner";
import Contact from "./Component/Contact";
import Header from "./Component/Header";
import Services from "./Component/Services";


function App() {
  return (
    <div>
      <Header />
      <Banner />
     
      <Services />
      <Contact />
      <footer className="my-b text-xl lg:text-2xl text-blue-900 text-center">&copy; 2024 Modern CPA. All rights reserved.</footer>
    </div>
  );
}

export default App;
