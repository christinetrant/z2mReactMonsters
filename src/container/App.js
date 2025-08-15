import React, { useEffect, useState } from "react";
import SearchBox from "../components/search-box/SearchBox";
import CardList from "../components/card-list/CardList";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { setSearchField } from "../store/actions";

const App = ({store}) => {
    console.log("🚀 ~ App ~ store:", store);
    const dispatch = useDispatch();
    const [monsters, setMonsters] = useState([]);
    // const [searchString, setSearchString] = useState("");
    const searchString = useSelector(state => state.searchRobots.searchField);
    console.log("🚀 ~ App ~ searchString:", searchString);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((users) =>setMonsters(users));
    }, []);

    const onSearchChange = (e) => {
        // setSearchString(e.target.value.toLowerCase());
        dispatch(setSearchField(e.target.value.toLowerCase()));
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
