import React from "react";
/* import logo from '../../assets/logo.svg'; */
import "./App.css";
import "../../assets/css/bcentral.css";
/* import '../../assets/css/main.css'; */
import "../../assets/css/responsive.css";
/* import '../../assets/js/bcentral.js'; */
/* import '../../assets/js/theme.js'; */
/* import '../../assets/js/bcentral.js'; */
import SideBar from "./components/sidebar";
import Footer from "./components/footer";
import Header from "./components/header";
import Recientes from "./components/recientes";
import Buscador from "./components/buscador";
import Banner from "./components/banner";
import Collections from "./components/collections";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>

      {/* <!-- BANNER --> */}
      <div id="banner">
        <div id="slider" className="only-desktop">
          <div className="container"></div>
          <Banner />
        </div>
      </div>

      {/* <!-- BUSCADOR --> */}
      <div className="trail-wrapper">
        <div className="container">
          <Buscador />
        </div>
      </div>

      {/* SIDEBAR */}
      <div className="container">
        <div id="midblock">
          <div id="sidebar-left" className="home only-desktop">
            <SideBar />
          </div>

          {/* COLLECTIONS */}
          <div id="midcontent">
            <Collections />

            {/* RECIENTES */}
            <div id="recientes">
              <Recientes />
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        <div className="container">
          <Footer />
        </div>
      </footer>
    </div>
  );
}

export default App;
