
import React from "react";
import Navbar from "./Components/NavBar/Navbar";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import{action,originals,comedy } from"./url"

function App() {
  return (
    <div >
      <Navbar/>
      <Banner/>
      <RowPost url={action} title="Action" isSmall/>
      
      <RowPost url={comedy} title="Comedy" isSmall/>
      <RowPost url={originals} title="Netflix Original"/>
      
    </div>
  );
}

export default App;
