import "./App.css";
import { Component } from "react";

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
              <input type="search" className="search-box" placeholder="Search monsters..." onChange={this.onSearchChange} />
                    {filteredMonsters.map((monster) => {
                        return <h1 key={monster.id}>{monster.name}</h1>;
                    })}
            </div>
        );
    }
}

export default App;