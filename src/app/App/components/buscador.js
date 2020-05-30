import React from "react";

function Buscador() {
  return (
    <div id="buscador">
      <div className="form_container">
        <form
          method="post"
          className=""
          id="ds-search-form"
          action="https://repositoriodigital.bcentral.cl/xmlui/discover"
        >
          <fieldset>
            <div className="input-group">
              <input
                placeholder="Buscar"
                type="text"
                className="ds-text-field form-control"
                id="searcher"
                name="query"
              />
              <span className="input-group-btn">
                <button
                  title="Ir"
                  className="ds-button-field btn btn-primary"
                  id="btnsearcher"
                >
                  <span
                    aria-hidden="true"
                    className="glyphicon glyphicon-search"
                  ></span>
                </button>
              </span>
            </div>
          </fieldset>
        </form>
      </div>
      <div className="avanzada">
        <a href="/xmlui/discover">Búsqueda avanzada</a>
      </div>
    </div>
  );
}

export default Buscador;
