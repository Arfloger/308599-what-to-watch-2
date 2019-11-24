import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import SmallMovieCard from '../small-movie-card/small-movie-card.jsx';

export default class SmallMovieCardList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null,
    };

    this._movieHandler = this._movieHandler.bind(this);
  }

  _movieHandler(movieData) {
    this.setState({
      activeCard: movieData,
    });
  }

  render() {
    const {movies, quantityCard} = this.props;

    if (movies) {
      return (
        <div className="catalog__movies-list">
          {movies.map((it) =>
            <SmallMovieCard
              key={it.id}
              movie={it}
              onMovie={this._movieHandler}
            />).slice(0, quantityCard)}
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

SmallMovieCardList.propTypes = {
  movies: PropTypes.array,
  quantityCard: PropTypes.number,
};
