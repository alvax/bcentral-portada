import React from "react";

function myFunction() {
  var x = document.getElementById("sidebar-left");
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function Header() {
  return (
    <div
      id="navportada"
      role="navigation"
      className="navbar navbar-default navbar-static-top"
    >
      <div className="container">
        <div className="navbar-header">
          <button
            data-toggle="home"
            className="navbar-toggle"
            type="button"
            onClick={myFunction}
          >
            <span className="sr-only">Cambiar navegaci&oacute;n</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <div id="brand">
            <div id="logo" className="transparent">
              <a className="navbar-brand" href="/">
                <img
                  src="https://repositoriodigital.bcentral.cl/xmlui/themes/Mirage2/images/logo.png"
                  alt="Logo Institucional"
                  className="logo"
                />
              </a>
            </div>
            <div id="title">
              <div className="repositorio">Repositorio Digital</div>
              <div className="banco">Banco Central de Chile</div>
            </div>
          </div>
        </div>
        <div className="navbar-header pull-right hidden-xs" id="topbar">
          {/* <ul id="languageSelection" class="nav navbar-nav pull-left">
            <li><a href="/?locale-attribute=es_ES" title="Ver en español (España)"><div className="flag es_ES"></div></a></li>
            <li><a href="/?locale-attribute=en" title="See on english"><div className="flag en"></div></a></li>
          </ul> */}
          <ul id="menu-principal">
            <li><a href="https://repositoriodigital.bcentral.cl">Repositorio</a></li>
            <li><a href="https://www.bcentral.cl/web/banco-central/inicio">Banco Central</a></li>
            <li><a href="https://www.bcentral.cl/contacto">Contacto</a></li>
            {/* <li><a href="/?locale-attribute=en" title="Ver en inglés"><div className="flag en"></div></a></li>
                <li><a href="/?locale-attribute=es_ES" title="Ver en español"><div className="flag es_ES"></div></a></li> */}
          </ul>
          <button
            type="button"
            className="navbar-toggle visible-sm"
            data-toggle="offcanvas"
          >
            <span className="sr-only">Cambiar navegaci&oacute;n</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Header;
