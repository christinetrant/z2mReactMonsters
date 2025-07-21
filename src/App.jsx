import React, { useEffect, useState } from "react";
import SearchBox from "./components/search-box/SearchBox";
import CardList from "./components/card-list/CardList";
import "./App.css";

const App = () => {
    const [monsters, setMonsters] = useState([]);
    const [searchString, setSearchString] = useState("");
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((users) =>setMonsters(users));
    }, []);

    const onSearchChange = (e) => {
        setSearchString(e.target.value.toLowerCase());
    };

    const filteredMonsters = monsters.filter((monster) => {
        return monster.name.toLowerCase().includes(searchString);
    });
    return (
        <div className="App">
            <h1 className="app-title">Monsters!</h1>
            <SearchBox onSearchChange={onSearchChange} placeholder="Search monsters..." />
            <CardList items={filteredMonsters} />
        </div>
    );
};

export default App;
