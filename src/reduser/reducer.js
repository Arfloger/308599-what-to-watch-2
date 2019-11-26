export const getGenreList = (films) => {

  let genresList = new Set(films.map((it) => it[`genre`]));
  initialState.genres = initialState.genres.concat(Array.from(genresList)).slice(0, 10);

  return initialState.genres;
};

export const filteredFilms = (genre) => {
  if (genre === `All genres`) {
    return initialState.films.slice();
  }

  return initialState.films.slice().filter((it) => it.genre === genre);
};

const MIN_CARDS_ON_PAGE = 8;

export const initialState = {
  genre: `All genres`,
  genres: [`All genres`],
  films: [],
  cardsOnPage: MIN_CARDS_ON_PAGE,
  requireAuthorization: false,
};

const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  LOAD_FILMS: `LOAD_FILMS`,
  FILTERED_FILMS: `FILTERED_FILMS`,
  GET_GENRE_LIST: `GET_GENRE_LIST`,
  INCREASE_QUANTITY_FILMS: `INCREASE_QUANTITY_FILMS`,
  RESET_TO_MIN_FILMS: `RESET_TO_MIN_FILMS`,
  REQUIRE_AUTHORIZATION: `REQUIRE_AUTHORIZATION`,
  LOGIN_USER: `LOGIN_USER`,
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),

  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films,
  }),

  filteredFilms: (genre) => ({
    type: ActionType.FILTERED_FILMS,
    payload: filteredFilms(genre),
  }),

  getGenreList: (genres) => ({
    type: ActionType.GET_GENRE_LIST,
    payload: getGenreList(genres),
  }),

  increaseQuantityFilms: () => ({
    type: ActionType.INCREASE_QUANTITY_FILMS,
    payload: 20,
  }),

  resetToMinFilms: () => ({
    type: ActionType.RESET_TO_MIN_FILMS,
    payload: MIN_CARDS_ON_PAGE,
  }),

  requireAuthorization: (status) => ({
    type: ActionType.REQUIRE_AUTHORIZATION,
    payload: status,
  }),

  loginUser: (data) => ({
    type: ActionType.LOGIN_USER,
    payload: data
  }),

};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return Object.assign({}, state, {
        genre: action.payload,
      });
    case ActionType.LOAD_FILMS:
      return Object.assign({}, state, {
        films: action.payload,
      });
    case ActionType.GET_GENRE_LIST:
      return Object.assign({}, state, {
        genres: action.payload,
      });
    case ActionType.FILTERED_FILMS:
      return Object.assign({}, state, {
        films: action.payload,
      });
    case ActionType.INCREASE_QUANTITY_FILMS:
      return Object.assign({}, state, {
        cardsOnPage: state.cardsOnPage + action.payload,
      });
    case ActionType.RESET_TO_MIN_FILMS:
      return Object.assign({}, state, {
        cardsOnPage: action.payload,
      });
    case ActionType.REQUIRE_AUTHORIZATION:
      return Object.assign({}, state, {
        requireAuthorization: action.payload,
      });
    case ActionType.LOGIN_USER: return Object.assign({}, state, {
      id: action.payload.id,
      email: action.payload.email,
      name: action.payload.name,
      avatar: action.payload.avatar_url,
    });
  }

  return state;
};

export const Operation = {
  loadFilms: () => (dispatch, _getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        dispatch(ActionCreator.loadFilms(response.data));
        dispatch(ActionCreator.getGenreList(response.data));
        initialState.films = response.data;
      });
  },
  checkAuth: (login, password) => {
    return (dispatch, _getState, api) => {
      return api
        .post(`/login`, {
          email: login,
          password,
        })
        .then((res) => {
          if (res.status >= 200) {
            dispatch(ActionCreator.requireAuthorization(true));
            dispatch(ActionCreator.loginUser(res.data));
          }
        })
        .catch((error) => {
          throw new Error(error);
        });
    };
  }
};
