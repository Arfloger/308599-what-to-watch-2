export const initialState = {
  requireAuthorization: true,
};

const ActionType = {
  REQUIRE_AUTHORIZATION: `REQUIRE_AUTHORIZATION`,
};

export const ActionCreator = {
  requireAuthorization: () => ({
    type: ActionType.REQUIRE_AUTHORIZATION,
    payload: true,
  })
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRE_AUTHORIZATION:
      return Object.assign({}, state, {
        requireAuthorization: action.payload,
      });
  }

  return state;
};
