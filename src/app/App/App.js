import React from 'react';
/* import logo from '../../assets/logo.svg'; */
import './App.css';
import '../../assets/css/bcentral.css';
/* import '../../assets/css/main.css'; */
import '../../assets/css/responsive.css';
/* import '../../assets/js/bcentral.js'; */
/* import '../../assets/js/theme.js'; */
/* import '../../assets/js/bcentral.js'; */

function App() {

  return (
    <div className="App">
      <header>
        <div id="navportada" role="navigation" className="navbar navbar-default navbar-static-top">
          <div className="container">
            <div className="navbar-header">
              <button data-toggle="offcanvas" className="navbar-toggle" type="button">
                <span className="sr-only">Cambiar navegaci&oacute;n</span><span className="icon-bar"></span>
                <span className="icon-bar"></span><span className="icon-bar"></span>
              </button>
              <div id="brand">
                <div id="logo" className="transparent">
                  <a className="navbar-brand" href="/"><img src="https://repositoriodigital.bcentral.cl/xmlui/themes/Mirage2/images/logo.png" alt="Logo Institucional" className="logo" /></a>
                </div>
                <div id="title">
                  <div className="repositorio">Repositorio Digital</div>
                  <div className="banco">Banco Central de Chile</div>
                </div>
              </div>
              <div className="navbar-header pull-right visible-xs hidden-sm hidden-md hidden-lg">
                <ul className="nav nav-pills pull-left ">
                  <li>
                    <form method="get" action="/xmlui/login" /* style={{display: inline}} */>
                    <button className="navbar-toggle navbar-link"><b aria-hidden="true" className="visible-xs glyphicon glyphicon-user"></b></button>
                    </form>
                  </li>
                </ul>
              </div>
            </div>
            <div className="navbar-header pull-right hidden-xs" id="topbar">
              <ul id="menu-principal">
                <li><a href="https://repositoriodigital.bcentral.cl">Repositorio</a></li>
                <li><a href="https://www.bcentral.cl/web/banco-central/inicio">Banco Central</a></li>
                <li><a href="https://www.bcentral.cl/contacto">Contacto</a></li>
                {/* <li><a href="/?locale-attribute=en" title="Ver en inglés"><div className="flag en"></div></a></li>
                <li><a href="/?locale-attribute=es_ES" title="Ver en español"><div className="flag es_ES"></div></a></li> */}
              </ul>
              <button type="button" className="navbar-toggle visible-sm" data-toggle="offcanvas">
                <span className="sr-only">Cambiar navegaci&oacute;n</span><span className="icon-bar"></span>
                <span className="icon-bar"></span><span className="icon-bar"></span>
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {/* <!-- BANNER --> */}
      <div id="banner">
        <div id="slider" className="only-desktop">
          <div className="container">
            <div id="articulos">
              <div className="articulo destacado">
                <div className="imagen">
                  <a href="/xmlui/handle/20.500.12580/4084">
                  <div className="contenedor_imagen">
                    <div className="fondo_portada"></div>
                    <div className="portada">
                      <img src="https://repositoriodigital.bcentral.cl/xmlui/themes/Mirage2/images/portada/BancoCentraldeChile1964-1989.jpg" alt="Portada de artículo"/>
                    </div>
                  </div>
                  </a>
                </div>
                <div className="informacion">
                  <div className="titulo"><a href="https://repositoriodigital.bcentral.cl/xmlui/handle/20.500.12580/4084">Banco Central de Chile (1964-1989) Una Historia Institucional</a></div>
                  <div className="bajada">El Banco Central de Chile con el objetivo de dar a conocer su evolución histórica, desde su creación en 1925 hasta su consagración como ente autónomo en 1989, pone a disposición del público el segundo tomo <b><i>“Banco Central de Chile (1964-1989) Una Historia Institucional”</i></b>, que conjuntamente con el primer tomo publicado el año 2009, completan el recorrido histórico de los 64 primeros años del ente emisor. Ambas publicaciones del autor Camilo Carrasco, ex gerente general del Banco entre los años 1994 y 2005, son un valioso aporte para el estudio de la historia económica de Chile y para la comprensión de la importancia que ha tenido el Banco Central como institución a lo largo del tiempo.</div>
                  {/* <!--<div className="ver" onClick="GoTo('/xmlui/handle/20.500.12580/10')">Ver más</div>--> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* <!-- BUSCADOR --> */}
      <div className="trail-wrapper">
        <div className="container">
          <div id="buscador">
            <div className="form_container">
              <form method="post" className="" id="ds-search-form" action="https://repositoriodigital.bcentral.cl/xmlui/discover">
                <fieldset>
                  <div className="input-group">
                    <input placeholder="Buscar" type="text" className="ds-text-field form-control" id="searcher" name="query" />
                      <span className="input-group-btn">
                        <button title="Ir" className="ds-button-field btn btn-primary" id="btnsearcher">
                          <span aria-hidden="true" className="glyphicon glyphicon-search"></span>
                        </button>
                      </span>
                  </div>
                </fieldset>
              </form>
            </div>
            <div className="avanzada"><a href="/xmlui/discover">Búsqueda avanzada</a></div>
          </div>
        </div>
      </div>
      
      <div className="container">
        <div id="midblock">
          <div id="sidebar-left" className="home only-desktop">
            <div className="seccion home">
              <div className="titulo">Explorar</div>
              <ul className="listado">
                <li><a href="/xmlui/community-list">Colecciones</a></li>
                <li><a href="/xmlui/browse?type=author">Autores</a></li>
                <li><a href="/xmlui/browse?type=dateissued">Fecha de publicación</a></li>
                <li><a href="/xmlui/browse?type=subject">Temas</a></li>
                <li><a href="/xmlui/browse?type=title">Títulos</a></li>
                <li><a href="/xmlui/browse?type=typedoc">Tipos de Documento</a></li>
              </ul>
            </div>
            {/* <div className="seccion home">
              <div className="titulo">Estadísticas</div>
              <ul className="listado">
                <li><a href="/xmlui/browse?type=author&resetOffset=true">Autores más populares</a></li>
                <li><a href="/xmlui/search-statistics">Términos más buscados</a></li>
                <li><a href="/xmlui/statistics-home">Publicaciones más populares</a></li>
                <li><a href="#">Estadísticas del país</a></li>
              </ul>
            </div> */}
            <div className="seccion home">
              <div className="titulo">Actas Históricas</div>
              <ul className="listado">
                <li><a href="/xmlui/handle/20.500.12580/499">Actas 1925-1929</a></li>
                <li><a href="/xmlui/handle/20.500.12580/500">Actas 1930-1932</a></li>
                <li><a href="/xmlui/handle/20.500.12580/34">Actas 1933-1938</a></li>
                <li><a href="/xmlui/handle/20.500.12580/33">Actas 1939-1945</a></li>
              </ul>
            </div>
          </div>
          
          <div id="midcontent">
            <div id="colecciones">
              <div className="titulo_container">
                <div className="titulo_portada">Colecciones</div>
              </div>
              <div className="coleccion_container">
                <div className="coleccion banco" onClick={() => window.location='/xmlui/handle/20.500.12580/1'}>
                  <div className="imagen"></div>
                  <div className="nombre">Banco Central</div>
                  {/* <!--<div className="recursos">250+ recursos</div>--> */}
                </div>
                <div className="coleccion actas" onClick={() => window.location='/xmlui/handle/20.500.12580/10'}>
                  <div className="imagen"></div>
                  <div className="nombre">Actas Sesiones del Ex Directorio</div>
                  {/* <!--<div className="recursos">250+ recursos</div>--> */}
                </div>
                <div className="coleccion estadisticas" onClick={() => window.location='/xmlui/handle/20.500.12580/11'}>
                  <div className="imagen"></div>
                  <div className="nombre">Estadísticas</div>
                </div>
                <div className="coleccion investigacion" onClick={() => window.location='/xmlui/handle/20.500.12580/2'}>
                  <div className="imagen"></div>
                  <div className="nombre">Investigación económica</div>
                  {/* <!--<div className="recursos">250+ recursos</div>--> */}
                </div>
                <div className="coleccion libros" onClick={() => window.location='/xmlui/handle/20.500.12580/12'}>
                  <div className="imagen"></div>
                  <div className="nombre">Libros históricos</div>
                  {/* <!--<div className="recursos">250+ recursos</div>--> */}
                </div>
                <div className="coleccion actas_rpm" onClick={() => window.location='/xmlui/handle/20.500.12580/4514'}>
                  <div className="imagen"></div>
                  <div className="nombre">Actas de las Reuniones de Política Monetaria</div>
                </div>
              </div>
            </div>
            <div id="recientes">
              <div className="titulo_container">
                <div className="titulo_portada">Documentos recientes</div>
              </div>
              <div className="documento_container">
                <div className="documento" onClick={() => window.location='/xmlui/handle/20.500.12580/4084'}>
                  <div className="portada no-mobile">
                    <img alt="Thumbnail" className="libro" src="https://repositoriodigital.bcentral.cl/xmlui/bitstream/handle/20.500.12580/4084/Repositorio%20Digital%20Banco%20Central%20de%20Chile.jpg?sequence=14&isAllowed=y" />
                  </div>
                  <div className="informacion">
                    <div className="titulo">Banco Central de Chile 1925-1964; 1964-1989: una historia institucional</div>
                    <div className="metadata">BANCO CENTRAL DE CHILE, BANCOS CENTRALES, POLÍTICA MONETARIA, ECONOMÍA, CONDICIONES ECONÓMICAS</div>
                    <div className="descripcion">La historia monetaria de Chile en el siglo XX es reconocidamente interesante y ha sido objeto de numerosos estudios. Con todo, el principal ente emisor de dinero no disponía de una historia institucional que pudiese contribuir con nuevos elementos para explicar algunos de los fenómenos monetarios y cambiarios que han sucedido durante varias décadas...</div>
                  </div>
                </div>
                <div className="documento" onClick={() => window.location='https://repositoriodigital.bcentral.cl/xmlui/handle/20.500.12580/4040'}>
                  <div className="portada no-mobile">
                    <img alt="Thumbnail" className="" src="https://repositoriodigital.bcentral.cl/xmlui/bitstream/handle/20.500.12580/4040/BCCh-rec-v22n3dic2019p132-153.pdf.jpg?sequence=5&isAllowed=y" />
                  </div>
                  <div className="informacion">
                    <div className="titulo">Nonlinear effects of the chilean fiscal policy</div>
                    <div className="metadata">POLÍTICA FISCAL, DESARROLLO ECONÓMICO, POLÍTICA MONETARIA</div>
                    <div className="descripcion">En Chile, la literatura empírica que ha estudiado los efectos de la política fiscal y los multiplicadores fiscales utilizando modelos lineales de vectores autorregresivos encuentra resultados dispares. El presente documento aporta un nuevo elemento a este debate estudiando si el estado en el que se encuentra la chilena, “bajo” o “normal”, altera la...</div>
                  </div>
                </div>
                <div className="documento" onClick={() => window.location='https://repositoriodigital.bcentral.cl/xmlui/handle/20.500.12580/3973'}>
                  <div className="portada no-mobile">
                    <img alt="Thumbnail" className="" src="https://repositoriodigital.bcentral.cl/xmlui/bitstream/handle/20.500.12580/3973/BCCh-nueva-familia-billetes.pdf.jpg?sequence=5&isAllowed=y" />
                  </div>
                  <div className="informacion">
                    <div className="titulo">Nueva familia de billetes para Chile</div>
                    <div className="metadata">ACUÑACIÓN, BILLETES DE BANCO</div>
                    <div className="descripcion">Presentación -- Introducción: algo de historia -- Los orígenes: La experiencia del polímero -- Del diseño a la impresión: La Comisión de Expertos -- El camino del diseño -- 'Originación' -- Fase de impresión -- Contratación de empresas impresoras -- El trabajo legal y logistico -- Qué hay en cada billete: Personajes -- Paisajes -- Animales -- Otros...</div>
                  </div>
                </div>
                <div className="documento" onClick={() => window.location='https://repositoriodigital.bcentral.cl/xmlui/handle/20.500.12580/3974'}>
                  <div className="portada no-mobile">
                    <img alt="Thumbnail" className="" src="https://repositoriodigital.bcentral.cl/xmlui/bitstream/handle/20.500.12580/3974/BCCh-pintura-chilena-coleccion-bcch.pdf.jpg?sequence=5&isAllowed=y" />
                  </div>
                  <div className="informacion">
                    <div className="titulo">Pintura chilena: colección Banco Central de Chile</div>
                    <div className="metadata">PINTURA CHILENA, COLECCIONES</div>
                    <div className="descripcion">Patrimonio artístico -- La colección -- Los ejes temáticos: Campo -- Ciudad -- Rostros y cuerpos -- Naturaleza muerta -- Mar -- Capital cultural e inversión social -- Obras -- Biografías -- Catálogo.</div>
                  </div>
                </div>
                <div className="documento" onClick={() => window.location='https://repositoriodigital.bcentral.cl/xmlui/handle/20.500.12580/3972'}>
                  <div className="portada no-mobile">
                    <img alt="Thumbnail" className="" src="https://repositoriodigital.bcentral.cl/xmlui/bitstream/handle/20.500.12580/3972/BCCh-emision-dinero-chile.pdf.jpg?sequence=5&isAllowed=y" />
                  </div>
                  <div className="informacion">
                    <div className="titulo">La emisión de dinero en Chile: colección de monedas y billetes del Banco Central de Chile</div>
                    <div className="metadata">DINERO, MONEDAS, POLÍTICA MONETARIA</div>
                    <div className="descripcion">Introducción -- El Sistema Monetario Bimetálico Colonial -- La Independencia y la Acuñación de Monedas Republicanas, 1810-1878 -- El Sistema Monetario Decimal y los Bancos de Emisión, 1851-1878 -- La Inconvertibilidad y el Apogeo del Billete Fiscal, 1878-1925 -- Fundación del Banco Central De Chile, 1925-1931 -- Emisión De Billetes Y Monedas...</div>
                  </div>
                </div>
              </div>
              <div className="button_container">
                <div className="ver" onClick={() => window.location='/xmlui/recent-submissions'}>Ver más</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="container">
          <div id="footer">
            <div className="left">
              <div className="logo"></div>
              <div className="terminos"><a href="https://repositoriodigital.bcentral.cl/terminos.html" title="Términos y condiciones">Términos y condiciones</a></div>
            </div>
            <div className="right">
              <div className="rrss">
                <a href="https://www.youtube.com/user/BancoCentralChile" target="_blank" rel="noopener noreferrer"><div className="youtube link"></div></a>
                <a href="https://www.flickr.com/photos/bancocentraldechile/" target="_blank" rel="noopener noreferrer"><div className="flickr link"></div></a>
                <a href="https://twitter.com/bcentralchile" target="_blank" rel="noopener noreferrer"><div className="twitter link"></div></a>
              </div>
              <div className="info">
                <div className="brand">Banco Central de Chile</div>
                <div className="direccion">Agustinas 1180, Santiago, Chile (+56 2) 2670 2000 
                  <a href="https://repositoriodigital.bcentral.cl/xmlui/login"><span aria-hidden="true" className="glyphicon glyphicon-log-in"></span></a>
                </div>
                <div id="opengeek">
                  <span className="theme-by">Implementado por</span>
                  <a href="https://opengeekservice.cl/" target="_blank" rel="noopener noreferrer" title="OpenGeek">
                    <img src="/xmlui/themes/Mirage2/images/opengeek-white.png" alt="OpenGeek" className="opengeek" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
