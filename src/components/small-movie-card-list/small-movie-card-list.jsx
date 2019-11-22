import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {Operation} from '../../reduser/reducer';

import SmallMovieCard from '../small-movie-card/small-movie-card.jsx';

export class SmallMovieCardList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null,
    };

    this._movieHandler = this._movieHandler.bind(this);
  }

  componentDidMount() {
    this.props.loadFilms();
  }

  _movieHandler(movieData) {
    this.setState({
      activeCard: movieData,
    });
  }

  render() {
    const {films} = this.props;

    if (films) {
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
    } else {
      return <div>Loading...</div>;
    }
  }
}

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  films: state.films,
});

const mapDispatchToProps = (dispatch) => {
  return {
    loadFilms: () => dispatch(Operation.loadFilms())
  };
};

SmallMovieCardList.propTypes = {
  films: PropTypes.array.isRequired,
  loadFilms: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(SmallMovieCardList);
