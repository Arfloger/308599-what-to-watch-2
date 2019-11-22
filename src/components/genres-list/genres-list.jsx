import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {ActionCreator} from '../../reduser/reducer';

import GenreItem from '../genre-item/genre-item.jsx';

export class GenresList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {genre, genres, onGenreTabClick} = this.props;

    return (
      <ul className="catalog__genres-list">
        {genres.map((it) => <GenreItem
          key={it}
          genreName={it}
          onClick={onGenreTabClick}
          activeTab={it === genre ? true : false}
        />)}
      </ul>
    );
  }
}

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  genre: state.genre,
  genres: state.genres,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreTabClick: (genre) => {
    dispatch(ActionCreator.changeGenre(genre));
    dispatch(ActionCreator.filteredFilms(genre));
  }
});

GenresList.propTypes = {
  genre: PropTypes.string,
  genres: PropTypes.array,
  onGenreTabClick: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
