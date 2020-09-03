import React from "react";
import Landing from "./pages/Landing/Landing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Profile from "./pages/Profile/Profile"
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Landing} />
          <Route exact path="/profile" component={Profile} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
