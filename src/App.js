//Dependencies
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

//Build functional component to load basic application. You will find routes in the NavBar
function App() {
  return (
    <>
      <NavBar />
      <Footer />
    </>
  );
}

//Export for use
export default App;
