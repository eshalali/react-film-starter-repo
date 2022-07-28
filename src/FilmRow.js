import React, { Component } from 'react';
import Poster from './Poster'
import Fav from './Fav';

class FilmRow extends Component {
  handleDetailsClick = (film) => {
    console.log('Fetching details for', this.props.film.title)
  }

    render () {
        return (
            <>
            <div className="film-row" onClick={this.handleDetailsClick}>
              <Poster 
                url={this.props.film.poster_path}
                title={this.props.film.title}
              />
          
              <div className="film-summary">
                <h1>{this.props.film.title}</h1>
                <p>{this.props.film.release_date.substring(0,4)}</p>
              </div>
            <Fav/>
            </div>
          </>
        )
    }
}

export default FilmRow