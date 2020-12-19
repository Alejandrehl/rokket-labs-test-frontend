import React, { useReducer } from "react";
import MonstersContext from "./monsters.context";
import MonstersReducer from "./monsters.reducer";
import {
  CREATE_MONSTER,
  DELETE_MONSTER,
  GET_MONSTERS,
  SET_ERROR,
  SET_LOADING,
} from "../types";
import api from "../../utils/api";

const MonstersState = ({ children }) => {
  const initialState = {
    monsters: [],
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(MonstersReducer, initialState);

  const getMonsters = async () => {
    try {
      setLoding();
      const res = await api.get("/monsters");
      dispatch({ type: GET_MONSTERS, payload: res.data });
    } catch (error) {
      setError(error.message);
    }
  };

  const createMonster = async (data) => {
    try {
      setLoding();
      const res = await api.post("/monsters", data);
      dispatch({ type: CREATE_MONSTER, payload: res.data });
    } catch (error) {
      setError(error.message);
    }
  };

  const deleteMonster = async (id) => {
    try {
      setLoding();
      const res = await api.delete(`/monsters/${id}`);
      dispatch({ type: DELETE_MONSTER, payload: res.data });
    } catch (error) {
      setError(error.message);
    }
  };

  const setLoding = () => dispatch({ type: SET_LOADING });
  const setError = (msg) => dispatch({ type: SET_ERROR, payload: msg });

  return (
    <MonstersContext.Provider
      value={{ ...state, getMonsters, createMonster, deleteMonster }}
    >
      {children}
    </MonstersContext.Provider>
  );
};

export default MonstersState;
