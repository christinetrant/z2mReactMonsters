import { CHANGE_SEARCH_FIELD, FETCH_ROBOTS_ERROR, FETCH_ROBOTS_PENDING, FETCH_ROBOTS_SUCCESS } from "./constants";

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
})

export const fetchRobots = () => (dispatch) => {
  dispatch({ type: FETCH_ROBOTS_PENDING });

  fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => dispatch({ type: FETCH_ROBOTS_SUCCESS, payload: users }))
			.catch((error) => dispatch({ type: FETCH_ROBOTS_ERROR, payload: error }));
}
