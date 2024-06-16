import React from "react";

import "./styles.css"

// Ja exporta direto
export class Article extends React.Component {
  render() {
    return(
      <article id="article">
        <img src={ this.props.articleImg } alt="" />
        <div className="article-infos">
          <h2>{this.props.title}</h2>
          <h3>{this.props.provider}</h3>
          <p>{this.props.description}
          </p>
        </div>
      </article>
    );
  }
}