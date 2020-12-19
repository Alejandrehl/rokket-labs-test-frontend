import React, { useReducer } from "react";
import { useToasts } from "react-toast-notifications";
import MonstersContext from "./monsters.context";
import MonstersReducer from "./monsters.reducer";
import {
  CREATE_MONSTER,
  DELETE_MONSTER,
  GET_MONSTERS,
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

  const { addToast } = useToasts();

  const getMonsters = async () => {
    try {
      setLoding();
      const res = await api.get("/monsters");
      dispatch({ type: GET_MONSTERS, payload: res.data });
    } catch (error) {
      addToast("Error retrieving the monsters.", {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };

  const createMonster = async (data) => {
    try {
      setLoding();
      const res = await api.post("/monsters", data);
      dispatch({ type: CREATE_MONSTER, payload: res.data });
      addToast("¡Monster created with successfully!", {
        appearance: "success",
        autoDismiss: true,
      });
    } catch (error) {
      addToast("Error creating a monster. Check form fields.", {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };

  const deleteMonster = async (id) => {
    try {
      setLoding();
      const res = await api.delete(`/monsters/${id}`);
      dispatch({ type: DELETE_MONSTER, payload: res.data });
      addToast("¡Monster deleted with successfully!", {
        appearance: "success",
        autoDismiss: true,
      });
    } catch (error) {
      addToast("Error deleting a monster.", {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };

  const setLoding = () => dispatch({ type: SET_LOADING });

  return (
    <MonstersContext.Provider
      value={{ ...state, getMonsters, createMonster, deleteMonster }}
    >
      {children}
    </MonstersContext.Provider>
  );
};

export default MonstersState;
