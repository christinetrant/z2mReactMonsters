import "./App.css";
import { Component } from "react";

class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            filteredMonsters: [],
        };
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((users) =>
                this.setState(
                    () => {
                        return { monsters: users, filteredMonsters: users };
                    },
                    () => {
                        console.log(users);
                    }
                )
            );
    }
    filterMonsters = (e) => {
        let filteredMonsters = this.state.monsters.filter((monster) => {
            return monster.name.toLowerCase().includes(e.target.value.toLowerCase());
        });
        this.setState(() => {
            return { filteredMonsters: filteredMonsters };
        });
    };

    render() {
        return (
            <div className="App">
              <input type="search" className="search-box" placeholder="Search monsters..." onChange={(e) => {this.filterMonsters(e)}} />
                    {this.state.filteredMonsters.map((monster) => {
                        return <h1 key={monster.id}>{monster.name}</h1>;
                    })}
            </div>
        );
    }
}

export default App;