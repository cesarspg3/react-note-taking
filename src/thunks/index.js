import * as actionCreators from '../actions/creators';
import axios from 'axios';

const api = 'https://reqres.in/api';

export const login = (email, password) => {
	return async (dispatch) => {
		try {
		dispatch(actionCreators.login());
		axios.post(`${api}/login`, {
			email,
			password
		})
			.then(function (response) {
				localStorage.setItem("saveMe", JSON.stringify(response.data.token))
				dispatch(actionCreators.loginSuccess(response.data.token));
			})
			.catch(function (error) {
				dispatch(actionCreators.loginError(error.response.data.error));
			});
		} catch (error) {
			dispatch(actionCreators.loginError("Error al iniciar sesión"));
		}
	};
};

export const getUsers = () => {
	return async (dispatch) => {
		try {
		dispatch(actionCreators.getUsers());
		axios.get(`${api}/users`)
			.then(function (response) {
				dispatch(actionCreators.getUsersSuccess(response.data.data));
			})
			.catch(function (error) {
				dispatch(actionCreators.getUsersError("Error al recuperar usuarios"));
			});
		} catch (error) {
			dispatch(actionCreators.getUsersError("Error al recuperar usuarios"));
		}
	};
};

export const updateUser = (id, callback) => {
	return async (dispatch) => {
		try {
		dispatch(actionCreators.getUsers());
		axios.put(`${api}/users/${id}`)
			.then(function (response) {
				alert(response.data.updatedAt)
				callback()
				// dispatch(actionCreators.updateSuccess(response.data.data));
			})
			.catch(function (error) {
				callback()
				// dispatch(actionCreators.updateError("Error al actualizar"));
			});
		} catch (error) {
			callback()
			// dispatch(actionCreators.updateError("Error al actualizar"));
		}
	};
};

export const deleteUser = (id, callback) => {
	return async (dispatch) => {
		try {
		dispatch(actionCreators.getUsers());
		axios.delete(`${api}/users/${id}`)
			.then(function (response) {
				alert(`status: ${response.status}`)
				callback()
				// dispatch(actionCreators.updateSuccess(response.data.data));
			})
			.catch(function (error) {
				callback()
				// dispatch(actionCreators.updateError("Error al actualizar"));
			});
		} catch (error) {
			callback()
			// dispatch(actionCreators.updateError("Error al actualizar"));
		}
	};
};
