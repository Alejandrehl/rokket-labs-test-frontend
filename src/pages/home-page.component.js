import React, { useContext, useEffect } from "react";
import CardList from "../components/card-list/card-list.component";
import CreateMonsterForm from "../components/create-monster-form/create-monster-form.component";
import MonstersContext from "../context/monsters/monsters.context";

const HomePage = () => {
  const monstersContext = useContext(MonstersContext);
  const {
    getMonsters,
    monsters,
    deleteMonster,
    createMonster,
  } = monstersContext;

  useEffect(() => {
    getMonsters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <h1>Rokket Labs Frontend Test</h1>
      <CreateMonsterForm submitAction={createMonster} />
      <CardList monsters={monsters} deleteAction={deleteMonster} />
    </div>
  );
};

export default HomePage;
