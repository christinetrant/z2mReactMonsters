import { useEffect } from "react";
import SearchBox from "../components/search-box/SearchBox";
import CardList from "../components/card-list/CardList";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { setSearchField, fetchRobots } from "../store/actions";

const App = () => {
	const dispatch = useDispatch();
	// const [monsters, setMonsters] = useState([]);
	const monsters = useSelector(state => state.fetchRobots.robots);
	// const [searchString, setSearchString] = useState("");
	const searchString = useSelector((state) => state.searchRobots.searchField);

	useEffect(() => {
		// fetch("https://jsonplaceholder.typicode.com/users")
		// 	.then((response) => response.json())
		// 	.then((users) => setMonsters(users));
		dispatch(fetchRobots());
	}, [dispatch]);

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
