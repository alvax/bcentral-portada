import React from "react";

function Recientes() {
  return (
    <div>
      <div className="titulo_container">
        <div className="titulo_portada">Documentos recientes</div>
      </div>
      <div className="documento_container">
        <div
          className="documento"
          onClick={() => (window.location = "/xmlui/handle/20.500.12580/4084")}
        >
          <div className="portada no-mobile">
            <img
              alt="Thumbnail"
              className="libro"
              src="https://repositoriodigital.bcentral.cl/xmlui/bitstream/handle/20.500.12580/4084/Repositorio%20Digital%20Banco%20Central%20de%20Chile.jpg?sequence=14&isAllowed=y"
            />
          </div>
          <div className="informacion">
            <div className="titulo">
              Banco Central de Chile 1925-1964; 1964-1989: una historia
              institucional
            </div>
            <div className="metadata">
              BANCO CENTRAL DE CHILE, BANCOS CENTRALES, POLÍTICA MONETARIA,
              ECONOMÍA, CONDICIONES ECONÓMICAS
            </div>
            <div className="descripcion">
              La historia monetaria de Chile en el siglo XX es reconocidamente
              interesante y ha sido objeto de numerosos estudios. Con todo, el
              principal ente emisor de dinero no disponía de una historia
              institucional que pudiese contribuir con nuevos elementos para
              explicar algunos de los fenómenos monetarios y cambiarios que han
              sucedido durante varias décadas...
            </div>
          </div>
        </div>
        <div
          className="documento"
          onClick={() =>
            (window.location =
              "https://repositoriodigital.bcentral.cl/xmlui/handle/20.500.12580/4040")
          }
        >
          <div className="portada no-mobile">
            <img
              alt="Thumbnail"
              className=""
              src="https://repositoriodigital.bcentral.cl/xmlui/bitstream/handle/20.500.12580/4040/BCCh-rec-v22n3dic2019p132-153.pdf.jpg?sequence=5&isAllowed=y"
            />
          </div>
          <div className="informacion">
            <div className="titulo">
              Nonlinear effects of the chilean fiscal policy
            </div>
            <div className="metadata">
              POLÍTICA FISCAL, DESARROLLO ECONÓMICO, POLÍTICA MONETARIA
            </div>
            <div className="descripcion">
              En Chile, la literatura empírica que ha estudiado los efectos de
              la política fiscal y los multiplicadores fiscales utilizando
              modelos lineales de vectores autorregresivos encuentra resultados
              dispares. El presente documento aporta un nuevo elemento a este
              debate estudiando si el estado en el que se encuentra la chilena,
              “bajo” o “normal”, altera la...
            </div>
          </div>
        </div>
        <div
          className="documento"
          onClick={() =>
            (window.location =
              "https://repositoriodigital.bcentral.cl/xmlui/handle/20.500.12580/3973")
          }
        >
          <div className="portada no-mobile">
            <img
              alt="Thumbnail"
              className=""
              src="https://repositoriodigital.bcentral.cl/xmlui/bitstream/handle/20.500.12580/3973/BCCh-nueva-familia-billetes.pdf.jpg?sequence=5&isAllowed=y"
            />
          </div>
          <div className="informacion">
            <div className="titulo">Nueva familia de billetes para Chile</div>
            <div className="metadata">ACUÑACIÓN, BILLETES DE BANCO</div>
            <div className="descripcion">
              Presentación -- Introducción: algo de historia -- Los orígenes: La
              experiencia del polímero -- Del diseño a la impresión: La Comisión
              de Expertos -- El camino del diseño -- 'Originación' -- Fase de
              impresión -- Contratación de empresas impresoras -- El trabajo
              legal y logistico -- Qué hay en cada billete: Personajes --
              Paisajes -- Animales -- Otros...
            </div>
          </div>
        </div>
        <div
          className="documento"
          onClick={() =>
            (window.location =
              "https://repositoriodigital.bcentral.cl/xmlui/handle/20.500.12580/3974")
          }
        >
          <div className="portada no-mobile">
            <img
              alt="Thumbnail"
              className=""
              src="https://repositoriodigital.bcentral.cl/xmlui/bitstream/handle/20.500.12580/3974/BCCh-pintura-chilena-coleccion-bcch.pdf.jpg?sequence=5&isAllowed=y"
            />
          </div>
          <div className="informacion">
            <div className="titulo">
              Pintura chilena: colección Banco Central de Chile
            </div>
            <div className="metadata">PINTURA CHILENA, COLECCIONES</div>
            <div className="descripcion">
              Patrimonio artístico -- La colección -- Los ejes temáticos: Campo
              -- Ciudad -- Rostros y cuerpos -- Naturaleza muerta -- Mar --
              Capital cultural e inversión social -- Obras -- Biografías --
              Catálogo.
            </div>
          </div>
        </div>
        <div
          className="documento"
          onClick={() =>
            (window.location =
              "https://repositoriodigital.bcentral.cl/xmlui/handle/20.500.12580/3972")
          }
        >
          <div className="portada no-mobile">
            <img
              alt="Thumbnail"
              className=""
              src="https://repositoriodigital.bcentral.cl/xmlui/bitstream/handle/20.500.12580/3972/BCCh-emision-dinero-chile.pdf.jpg?sequence=5&isAllowed=y"
            />
          </div>
          <div className="informacion">
            <div className="titulo">
              La emisión de dinero en Chile: colección de monedas y billetes del
              Banco Central de Chile
            </div>
            <div className="metadata">DINERO, MONEDAS, POLÍTICA MONETARIA</div>
            <div className="descripcion">
              Introducción -- El Sistema Monetario Bimetálico Colonial -- La
              Independencia y la Acuñación de Monedas Republicanas, 1810-1878 --
              El Sistema Monetario Decimal y los Bancos de Emisión, 1851-1878 --
              La Inconvertibilidad y el Apogeo del Billete Fiscal, 1878-1925 --
              Fundación del Banco Central De Chile, 1925-1931 -- Emisión De
              Billetes Y Monedas...
            </div>
          </div>
        </div>
      </div>
      <div className="button_container">
        <div
          className="ver"
          onClick={() => (window.location = "/xmlui/recent-submissions")}
        >
          Ver más
        </div>
      </div>
    </div>
  );
}
export default Recientes;
