import * as actionCreators from '../actions/creators';
import axios from 'axios';

const api = 'https://jsonplaceholder.typicode.com';

export const getUsers = () => {
	return async (dispatch) => {
		try {
		dispatch(actionCreators.getUsers());
		axios.get(`${api}/users`)
			.then(function (response) {
				dispatch(actionCreators.getUsersSuccess(response.data));
			})
			.catch(function (error) {
				dispatch(actionCreators.getUsersError("Error al recuperar usuarios"));
			});
		} catch (error) {
			dispatch(actionCreators.getUsersError("Error al recuperar usuarios"));
		}
	};
};

export const getUser = (id) => {
	return async (dispatch) => {
		try {
		dispatch(actionCreators.getUser());
		axios.get(`${api}/users/${id}`)
			.then(function (response) {
				dispatch(actionCreators.getUserSuccess(response.data));
			})
			.catch(function (error) {
				dispatch(actionCreators.getUserError("Error al recuperar usuarios"));
			});
		} catch (error) {
			dispatch(actionCreators.getUserError("Error al recuperar usuarios"));
		}
	};
};
