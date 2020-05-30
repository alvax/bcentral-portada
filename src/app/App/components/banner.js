import React from "react";

function Banner() {
  return (
    <div id="articulos">
      <div className="articulo destacado">
        <div className="imagen">
          <a href="/xmlui/handle/20.500.12580/4084">
            <div className="contenedor_imagen">
              <div className="fondo_portada"></div>
              <div className="portada">
                <img
                  src="https://repositoriodigital.bcentral.cl/xmlui/themes/Mirage2/images/portada/BancoCentraldeChile1964-1989.jpg"
                  alt="Portada de artículo"
                />
              </div>
            </div>
          </a>
        </div>
        <div className="informacion">
          <div className="titulo">
            <a href="https://repositoriodigital.bcentral.cl/xmlui/handle/20.500.12580/4084">
              Banco Central de Chile (1964-1989) Una Historia Institucional
            </a>
          </div>
          <div className="bajada">
            El Banco Central de Chile con el objetivo de dar a conocer su
            evolución histórica, desde su creación en 1925 hasta su consagración
            como ente autónomo en 1989, pone a disposición del público el
            segundo tomo{" "}
            <b>
              <i>
                “Banco Central de Chile (1964-1989) Una Historia Institucional”
              </i>
            </b>
            , que conjuntamente con el primer tomo publicado el año 2009,
            completan el recorrido histórico de los 64 primeros años del ente
            emisor. Ambas publicaciones del autor Camilo Carrasco, ex gerente
            general del Banco entre los años 1994 y 2005, son un valioso aporte
            para el estudio de la historia económica de Chile y para la
            comprensión de la importancia que ha tenido el Banco Central como
            institución a lo largo del tiempo.
          </div>
          {/* <!--<div className="ver" onClick="GoTo('/xmlui/handle/20.500.12580/10')">Ver más</div>--> */}
        </div>
      </div>
    </div>
  );
}

export default Banner;
