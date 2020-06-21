import React from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

function SideBar() {
  const { t } = useTranslation();

  function handleClick(lang) {
    i18next.changeLanguage(lang);
  }

  return (
    <div>
      <div className="seccion home">
        <button onClick={() => handleClick("en")}>English</button>
        <button onClick={() => handleClick("es")}>Español</button>

        <div className="titulo">{t("titulo.1")}</div>
        <ul className="listado">
          <li>
            <a href="/xmlui/community-list">Colecciones</a>
          </li>
          <li>
            <a href="/xmlui/browse?type=author">Autores</a>
          </li>
          <li>
            <a href="/xmlui/browse?type=dateissued">Fecha de publicación</a>
          </li>
          <li>
            <a href="/xmlui/browse?type=subject">Temas</a>
          </li>
          <li>
            <a href="/xmlui/browse?type=title">Títulos</a>
          </li>
          <li>
            <a href="/xmlui/browse?type=typedoc">Tipos de Documento</a>
          </li>
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
          <li>
            <a href="/xmlui/handle/20.500.12580/499">Actas 1925-1929</a>
          </li>
          <li>
            <a href="/xmlui/handle/20.500.12580/500">Actas 1930-1932</a>
          </li>
          <li>
            <a href="/xmlui/handle/20.500.12580/34">Actas 1933-1938</a>
          </li>
          <li>
            <a href="/xmlui/handle/20.500.12580/33">Actas 1939-1945</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
