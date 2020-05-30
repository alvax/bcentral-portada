import React from "react";

function Collections() {
  return (
    <div id="colecciones">
      <div className="titulo_container">
        <div className="titulo_portada">Colecciones</div>
      </div>
      <div className="coleccion_container">
        <div
          className="coleccion banco"
          onClick={() => (window.location = "/xmlui/handle/20.500.12580/1")}
        >
          <div className="imagen"></div>
          <div className="nombre">Banco Central</div>
          {/* <!--<div className="recursos">250+ recursos</div>--> */}
        </div>
        <div
          className="coleccion actas"
          onClick={() => (window.location = "/xmlui/handle/20.500.12580/10")}
        >
          <div className="imagen"></div>
          <div className="nombre">Actas Sesiones del Ex Directorio</div>
          {/* <!--<div className="recursos">250+ recursos</div>--> */}
        </div>
        <div
          className="coleccion estadisticas"
          onClick={() => (window.location = "/xmlui/handle/20.500.12580/11")}
        >
          <div className="imagen"></div>
          <div className="nombre">Estadísticas</div>
        </div>
        <div
          className="coleccion investigacion"
          onClick={() => (window.location = "/xmlui/handle/20.500.12580/2")}
        >
          <div className="imagen"></div>
          <div className="nombre">Investigación económica</div>
          {/* <!--<div className="recursos">250+ recursos</div>--> */}
        </div>
        <div
          className="coleccion libros"
          onClick={() => (window.location = "/xmlui/handle/20.500.12580/12")}
        >
          <div className="imagen"></div>
          <div className="nombre">Libros históricos</div>
          {/* <!--<div className="recursos">250+ recursos</div>--> */}
        </div>
        <div
          className="coleccion actas_rpm"
          onClick={() => (window.location = "/xmlui/handle/20.500.12580/4514")}
        >
          <div className="imagen"></div>
          <div className="nombre">
            Actas de las Reuniones de Política Monetaria
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collections;
