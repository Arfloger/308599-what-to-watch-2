import {ActionCreator, reducer, initialState} from "./reducer";

describe(`ActionCreator works correctly`, () => {
  it(`ActionCreator cange genre`, () => {
    expect(ActionCreator.changeGenre(`Sitcom`))
            .toEqual({
              type: `CHANGE_GENRE`,
              payload: `Sitcom`,
            });
  });

  it(`ActionCreator get films`, () => {
    expect(ActionCreator.getFilms(`Sitcom`))
            .toEqual({
              type: `GET_FILMS`,
              payload: [{
                id: 2,
                name: `War of the worlds`,
                posterImage: `img/war-of-the-worlds.jpg`,
                previewImage: `img/war-of-the-worlds.jpg`,
                backgroundImage: `img/the-grand-budapest-hotel-bg.jpg`,
                videoLink: `https://some-link`,
                previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
                description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
                rating: 8.9,
                scoresCount: 240,
                director: `Wes Andreson`,
                starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
                runTime: 39,
                genre: `Sitcom`,
                released: 2019,
                isFavorite: true,
              }],
            });
  });
});

describe(`Reducers works correctly`, () => {
  it(`Reducer without additional parameters return initial state`, () => {
    expect(reducer(undefined, {}))
        .toEqual(initialState);
  });
});
