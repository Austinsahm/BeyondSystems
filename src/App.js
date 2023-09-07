import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div id="hero">
          <Hero />
        </div>
        <div id="services" style={{ paddingTop: "80px" }}>
          <Services />
        </div>
        {/* <div id="testimonial" style={{ paddingTop: "80px" }}>
          <Testimonial />
        </div> */}
        {/* <Switch>
          <Route path="/" exact component={Hero} />
          <Route path="/services" component={Services} />
          <Route path="/services" component={Testimonial} />
          
          <Services />
          <Testimonial />
        </Switch> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
