import React from "react";

import "./styles/App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";

import articleDash from './assets/images/artDashboardDesign.png';
import articleVibr from './assets/images/artVibrant.jpg';
import article36Da from './assets/images/art36days.png';
import articleLear from './assets/images/artLearnReactJS.png';
import { Counter } from "./components/Counter/Counter";

// Componente em classe é uma classe que herda a classe Component do React, e retorna HTML dentro do render.

class App extends React.Component {

  // Método responsável por renderizar o conteúdo HTML do nosso componente
  render() {
    return (
      //fragment: <> </>
      <> 
        <Navbar />

         <section id="articles">
          
        <Article 
        title="Designing Dashboards" 
        provider="NASA"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit 
        facilis molestias sed consequatur suscipit provident odio 
        eligendi fugiat. Omnis tempora at nemo, iste illum fugiat magnam. 
        Ratione facilis quos laudantium!"
        articleImg={articleDash}
        />

        <Article 
        title="Vibrant Portraits of 2020" 
        provider="Space News"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit 
        facilis molestias sed consequatur suscipit provident odio 
        eligendi fugiat. Omnis tempora at nemo, iste illum fugiat magnam. 
        Ratione facilis quos laudantium!"
        articleImg={articleVibr}
        />

        <Article 
        title="36 Days of Malayalam type" 
        provider="SpaceFlight Now"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit 
        facilis molestias sed consequatur suscipit provident odio 
        eligendi fugiat. Omnis tempora at nemo, iste illum fugiat magnam. 
        Ratione facilis quos laudantium!"
        articleImg={article36Da}
        />

        <Article 
        title="Learn ReactJS" 
        provider="CursoTech"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit 
        facilis molestias sed consequatur suscipit provident odio 
        eligendi fugiat. Omnis tempora at nemo, iste illum fugiat magnam. 
        Ratione facilis quos laudantium!"
        articleImg={articleLear}
        />
        </section>

        <Counter />
      </>
    );
  } 
}

export default App;
