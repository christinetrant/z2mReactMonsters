import React, { ChangeEvent, useEffect, useState } from "react";
import SearchBox from "./components/search-box/SearchBox";
import CardList from "./components/card-list/CardList";
import "./App.css";
import { getData } from "./utils/data.utils";

export type Monster = {
    id: string;
    name: string;
    email: string;
}

const App = () => {
    const [searchString, setSearchString] = useState("");
    const [monsters, setMonsters] = useState<Monster[]>([]);
    const [filteredMonsters, setFilteredMonsters] = useState(monsters);
    useEffect(() => {
        // fetch("https://jsonplaceholder.typicode.com/users")
        //     .then((response) => response.json())
        //     .then((users) =>setMonsters(users));

        const fetchUsers = async() => {
            const users = await getData<Monster[]>("https://jsonplaceholder.typicode.com/users")
            setMonsters(users)
        }
        fetchUsers();
    }, []);

    useEffect(() => {
        const newFilteredMonsters = monsters.filter((monster) => monster.name.toLowerCase().includes(searchString));
        setFilteredMonsters(newFilteredMonsters);
    }, [monsters, searchString])

    const onSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const searchFieldString = e.target.value.toLowerCase();
        setSearchString(searchFieldString);
    };

    // const filteredMonsters = monsters.filter((monster) => {
    //     return monster.name.toLowerCase().includes(searchString);
    // });
    return (
        <div className="App">
            <h1 className="app-title">Monsters!</h1>
            <SearchBox className="monsters-search-box" onChangeHandler={onSearchChange} placeholder="Search monsters..." />
            <CardList items={filteredMonsters} />
        </div>
    );
};

export default App;
