import React, { useState } from "react";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {

  const getWidthScreen = () => {
    const { innerWidth: width } = window;   
    return width;
  }
  
  let [size, setSize] = useState(getWidthScreen());

  window.addEventListener('resize', function () {
    return setSize(getWidthScreen());
  })

  return (
    <>
      <GlobalStyles />
      <Header size={size}/>
      <Main size={size}/>
      <Footer />
    </>
  );
}

export default App;
