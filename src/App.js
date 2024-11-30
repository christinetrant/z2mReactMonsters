import "./App.css";
import { Component } from "react";
import SearchBox from "./components/SearchBox";
import CardList from "./components/CardList";

class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchString: '',
        };
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((users) =>
                this.setState(
                    () => {
                        return { monsters: users };
                    },
                    () => {
                        // console.log(users);
                    }
                )
            );
    }

    onSearchChange = (e) => {
      console.log(e.target.value);
        this.setState(() => {
            return { searchString: e.target.value.toLowerCase() };
        });
    };

    render() {
      const {monsters, searchString} = this.state;
      const filteredMonsters = monsters.filter((monster) => {
        return monster.name.toLowerCase().includes(searchString);
      });
        return (
            <div className="App">
              <SearchBox onSearchChange={this.onSearchChange} placeholder="Search monsters..." />
              <CardList 
                items={filteredMonsters}
              />
            </div>
        );
    }
}

export default App;