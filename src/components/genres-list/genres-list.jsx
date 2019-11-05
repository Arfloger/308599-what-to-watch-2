import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';

import GenreItem from '../genre-item/genre-item.jsx';

export class GenresList extends PureComponent {
  constructor(props) {
    super(props);
    this.genres = [`All genres`];
  }

  _getGenresList() {
    const {films} = this.props;
    const genres = new Set(films.map((it) => it.genre));
    this.genres = this.genres.concat(Array.from(genres)).slice(0, 10);
  }

  render() {
    const {genre} = this.props;
    this._getGenresList();
    return (
      <ul className="catalog__genres-list">
        {this.genres.map((it) => <GenreItem
          key={it}
          genreName={it}
          activeTab={it === genre ? true : false}
        />)}
      </ul>
    );
  }
}

GenresList.propTypes = {
  films: PropTypes.array,
  genre: PropTypes.string,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  genre: state.genre,
});

export default connect(mapStateToProps)(GenresList);
