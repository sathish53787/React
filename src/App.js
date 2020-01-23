import React from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";
import "./App.css";

 class App extends React.Component {
   render() {
     return(
       <div className = "App">
         <Header branding ="Contact Person" />
         <Contact name="kaleeswaran" email="hbhh@gmail.com" phone="9687867676" />
       </div>
     );
   }
 }
export default App;
