import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
import fotosprint from "../assets/FOTOSPRINT.png";
import cantidades from "../assets/Cantidades.png";
import presupuesto from "../assets/Presupuesto.png";
import resultado from "../assets/Resultados.png";
import deportivas from "../assets/NoticiasDeportivas.png";
import mundo from "../assets/NoticiasMundo.png";
import economia from "../assets/NoticiasEconomia.png";
import farandula from "../assets/NoticiasFarandula.png";
import fotoAlberto from "../assets/FotoActualizadaAlberto.png";
/* import incognito from "../assets/FotoPerfilIncognito.png"; */

const Home = () => {
  return (
    <div>
      <div className="banner">
        <img src={fotosprint} alt="A banner image" />
      </div>
      <main>
        <section>Servicios</section>
        {/* <!-- inicio sección de servicios --> */}
        <section id="services" className="services-section">
          {/*  <!-- <router-link to="/presupuesto"> --> */}
          <article className="services-info">
            <img className="services-info__imagen" src={cantidades} alt="" />
            <h2 className="services-info__title">Cuantificación de obra</h2>
            <p className="services-info__text">
              A través de esta aplicación, usted a través de un click podrá
              conocer las cantidades de obra iniciales de una instalación
              eléctrica tipo interés social de hasta 3 plantas, con una
              precisión del +/- 5%, lo cual se podra ajustar durante el
              desarrollo de la obra
            </p>

            <button className="btn btn-primary btn-block">
              Interes social=
            </button>
            <input
              type="text"
              value="Escriba cantidad de cuartos"
              name="nombredelacaja"
            />
          </article>

          <Link to="/calculadora" className="link">
            <article className="services-info">
              <img className="services-info__imagen" src={presupuesto} alt="" />
              <h2 className="services-info__title">Cálculo del presupuesto</h2>

              <p className="services-info__text">
                Con esta aplicación, usted a través de un sólo click podrá
                determinar los costos de materiales a utilizar de acuerdo a las
                cantidades de obra iniciales de una instalación eléctrica de una
                edicficación tipo interés social de hasta 3 plantas, con una
                precisión del +/- 5%, lo cual ajustando las cantidades finales o
                parciales, automáticamente se ajusta el presupuesto a lo largo
                del desarrollo de la obra.
              </p>
            </article>
          </Link>

          <Link to="/resultado" className="link">
            <article className="services-info">
              <img className="services-info__imagen" src={resultado} alt="" />
              <h2 className="services-info__title">Informe de Resultados</h2>

              <p className="services-info__text">
                Con esta aplicación, usted a través de un sólo click podrá
                Obtener un informe escrito en lenguaje de texto, que luego podrá
                reescriber en textos con el logotipo de su empresa u
                organización.
              </p>
            </article>
          </Link>
        </section>

        {/* <!-- fin sección de servicios --> */}

        <section id="news">Noticias</section>
        {/* <!-- inicio sección de noticias --> */}
        <section className="news-section">
          <article className="news-info">
            <div className="news-header">
              <img className="news-info__imagen" src={deportivas} alt="" />
              <h2 className="news-info__title">Noticias Deportivas</h2>
            </div>
            <p className="news-info__text">
              El argentino Paulo Dybala, el colombiano Juan Guillermo Cuadrado y
              el uruguayo Rodrigo Bentancur entraron este lunes en la lista del
              Juventus Turín para el estreno en la Liga de Campeones contra el
              …mas
            </p>
          </article>

          <article className="news-info">
            <div className="news-header">
              <img className="news-info__imagen" src={mundo} alt="" />
              <h2 className="news-info__title">Noticias del Mundo</h2>
            </div>
            <p className="news-info__text">
              El primer juicio vinculado al escándalo de los sobornos pagados
              por familias para asegurar el acceso de sus hijos a prestigiosas
              universidades de Estados Unidos arrancó este lunes, con dos padres
              sentados en ... más
            </p>
          </article>

          <article className="news-info">
            <div className="news-header">
              <img className="news-info__imagen" src={economia} alt="" />
              <h2 className="news-info__title">Noticias de Economía</h2>
            </div>
            <p className="news-info__text">
              Así será la primera tienda Ikea en Colombia Aunque no tiene
              presencia todavía en el país, la multinacional europea de muebles
              y decoración para el hogar Ikea goza de gran reconocimiento en
              Colombia. Por eso, en Bogotá ya se preparan para lo que será la
              primera tienda física de la marca sueca en el país … más
            </p>
          </article>

          <article className="news-info">
            <div className="news-header">
              <img className="news-info__imagen" src={farandula} alt="" />
              <h2 className="news-info__title">Noticias de Farándula</h2>
            </div>
            <p className="news-info__text">
              Ellos son los actores que le darán vida a la novela sobre Martín
              Elías Hoy a las 9 p.m. se estrena ‘El hijo del cacique’, una
              producción de ficción que cuenta la historia de Martín Elías, hijo
              del gran cantante vallenato Diomedes Díaz, desde sus … más
            </p>
          </article>
        </section>
        {/* <!-- fin sección de noticias --> */}

        <section id="team">Equipo</section>
        {/* <!-- inicio sección de equipo --> */}
        <section className="team-section">
          <article className="team-info">
            <img className="team-info__imagen" src={fotoAlberto} alt="" />
            <h2 className="team-info__title">Alberto Murillo Padilla</h2>
            <p className="team-info__text">
              - Scrum Owner - Ing. Electricista - Especialista en Pedagogía para
              el Desarrollo del Aprendizaje Autónomo - Magister en Gestión de la
              Tecnología Educativa
            </p>
          </article>

          {/* <article className="team-info">
            <img className="team-info__imagen" src={incognito} alt="" />
            <h2 className="team-info__title">Angela Lorena Trejos Ropero</h2>
            <p className="team-info__text">
              - Scrum Master - Abogada - XXXXXXXXXXXXXXXXXXXX -
              XXXXXXXXXXXXXXXXXXXXXX
            </p>
          </article>

          <article className="team-info">
            <img className="team-info__imagen" src={incognito} alt="" />
            <h2 className="team-info__title">Jorge Alandete</h2>
            <p className="team-info__text">
              - XXXXXXXXXXXXXXXXXXXXXXXXX - XXXXXXXXXXXXXXXXXXX -
              XXXXXXXXXXXXXXXXXXXXX
            </p>
          </article>

          <article className="team-info">
            <img className="team-info__imagen" src={incognito} alt="" />
            <h2 className="team-info__title">XXXXXXXXXXXXXX</h2>
            <p className="team-info__text">
              - XXXXXXXXXXXXXXXXXXXXXXXXX - XXXXXXXXXXXXXXX - XXXXXXXXXXXXX
            </p>
          </article> */}
        </section>
        {/* <!-- fin sección de equipo --> */}
      </main>
    </div>
  );
};

export default Home;
