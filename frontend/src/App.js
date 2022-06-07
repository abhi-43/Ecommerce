
import './App.css';
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer"
import { useEffect, useState } from "react";
import {BrowserRouter as Router, Route } from "react-router-dom";
import WebFont from "webfontloader";
import Home from "./components/Home/Home"




function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);


  return (
   <Router>
      <Header />
      <Route exact path="/" component={Home} />
      <Footer />
   </Router>
      
    
  );
}

export default App;
