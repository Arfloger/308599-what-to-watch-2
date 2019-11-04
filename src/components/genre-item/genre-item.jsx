import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {ActionCreator} from '../../reducer.js';

export class GenreItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: `All genres`,
    };
  }


  render() {
    const {genreName, onGenreTabClick} = this.props;

    return (
      <li className={genreName === this.state.activeTab ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`}>
        <a
          href="#"
          className="catalog__genres-link"
          onClick={(evt) => {
            evt.preventDefault();
            onGenreTabClick(evt.target.textContent);

            this.setState({
              activeTab: evt.target.textContent,
            });
          }}
        >
          {genreName}
        </a>
      </li>
    );
  }

}

GenreItem.propTypes = {
  genreName: PropTypes.string,
  onGenreTabClick: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps,
    {
      genre: state.genre,
      films: state.films,
    });

const mapDispatchToProps = (dispatch) => ({
  onGenreTabClick: (genre) => {
    dispatch(ActionCreator.chengeGenre(genre));
    dispatch(ActionCreator.getFilms(genre));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(GenreItem);
