import {
  SET_LOADING,
  GET_MONSTERS,
  CREATE_MONSTER,
  DELETE_MONSTER,
  SET_ERROR,
} from "../types";

const MonstersReducer = (state, action) => {
  switch (action.type) {
    case GET_MONSTERS:
      return {
        ...state,
        monsters: action.payload,
        loading: false,
      };
    case CREATE_MONSTER:
      return {
        ...state,
        monsters: [...state.monsters, action.payload],
        loading: false,
      };
    case DELETE_MONSTER:
      return {
        ...state,
        monsters: state.monsters.filter(
          (monster) => monster._id !== action.payload.id
        ),
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return;
  }
};

export default MonstersReducer;
