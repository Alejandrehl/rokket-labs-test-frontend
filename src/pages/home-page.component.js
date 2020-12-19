import React, { useContext, useEffect } from "react";
import MonstersContext from "../context/monsters/monsters.context";

const HomePage = () => {
  const monstersContext = useContext(MonstersContext);
  const { getMonsters, loading, monsters } = monstersContext;

  useEffect(() => {
    getMonsters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>{loading ? "Cargando..." : "HomePage"}</h1>
    </div>
  );
};

export default HomePage;
