import { CHANGE_SEARCH_FIELD, FETCH_ROBOTS_ERROR, FETCH_ROBOTS_PENDING, FETCH_ROBOTS_SUCCESS } from "./constants";

const initialStateSearch = {
	searchField: "",
};

const initialStateRobots = {
	robots: [],
	isPending: false,
	error: null
};

export const searchRobots = (state = initialStateSearch, action = {}) => {
	switch (action.type) {
		case CHANGE_SEARCH_FIELD:
			// return Object.assign({}, state, { searchField: action.payload });
			return { ...state, searchField: action.payload };
		default:
			return state;
	}
};

export const fetchRobots = (state = initialStateRobots, action = {}) => {
	switch (action.type) {
		case FETCH_ROBOTS_PENDING:
			return { ...state, isPending: true };
		case FETCH_ROBOTS_SUCCESS:
			return { ...state, isPending: false, robots: action.payload };
		case FETCH_ROBOTS_ERROR:
			return { ...state, isPending: false, error: action.payload };
		default:
			return state;
	}
};
