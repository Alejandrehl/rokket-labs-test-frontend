import React, { useContext, useEffect, useState } from "react";
import CardList from "../components/card-list/card-list.component";
import SearchBox from "../components/search-box/search-box.component";
import Spinner from "../components/spinner/spinner.component";
import MonstersContext from "../context/monsters/monsters.context";

const HomePage = () => {
  const monstersContext = useContext(MonstersContext);
  const { getMonsters, loading, monsters } = monstersContext;

  const [searchField, setSearchField] = useState("");

  const onChangeSearch = (e) => setSearchField(e.target.value);

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  useEffect(() => {
    getMonsters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <h1>Rokket Labs Frontend Test</h1>
      <SearchBox
        searchField={searchField}
        onChangeSearch={onChangeSearch}
        placeholder={"Search monster"}
      />
      {loading ? <Spinner /> : <CardList monsters={filteredMonsters} />}
    </div>
  );
};

export default HomePage;
