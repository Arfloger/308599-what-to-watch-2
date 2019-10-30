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
    const {films} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((it) =>
          <SmallMovieCard
            key={it.id}
            movie={it}
            onMovie={this._movieHandler}
          />)}
      </div>
    );
  }

}

SmallMovieCardList.propTypes = {
  films: PropTypes.array.isRequired,
};
