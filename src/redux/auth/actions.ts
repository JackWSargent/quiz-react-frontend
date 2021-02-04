// Redux
import {
	SIGN_IN_USER,
	SIGN_IN_USER_ERROR,
	SIGN_IN_USER_SUCCESS,
	SIGN_UP_USER,
	SIGN_UP_USER_ERROR,
	SIGN_UP_USER_SUCCESS,
} from "./types";
import { AuthActions } from "./types";
import { Dispatch } from "redux";
// import { AppState } from "../createStore";

// Global
import axios from "axios";
const SignInUser = (payload: any) => async (dispatch) => {
	console.log("reached sign in user");
	dispatch({
		type: SIGN_IN_USER,
	});
	const request = await axios.post("http://localhost:3000/users/sign_in", {
		body: {
			username: payload.username,
			password: payload.password,
		},
	});
	if (request?.data?.id) {
		return (dispatch: Dispatch<AuthActions>, getState: () => any) => {
			// Can replace any with AppState
			dispatch({
				type: SIGN_IN_USER_SUCCESS,
				user: request.data,
			});
		};
	}
	return (dispatch: Dispatch<AuthActions>, getState: () => any) => {
		dispatch({
			type: SIGN_IN_USER_ERROR,
			user: "Error",
		});
	};
};

const SignUpUser = (payload: any) => async (dispatch) => {
	console.log("reached sign up user");
	dispatch({
		type: SIGN_UP_USER,
	});
	const body = {
		username: payload.username,
		password: payload.password,
		passwordConfirmation: payload.passwordConfirmation,
	};
	const strBody = JSON.stringify(body);
	console.log("payload", payload);
	const strPayload = JSON.stringify(payload);
	const request = await axios.post(
		"http://localhost:3000/users/sign_up",
		body
		// headers: { Accept: "application/json" },
	);
	console.log(request);
	if (request?.data?.id) {
		return (dispatch: Dispatch<AuthActions>, getState: () => any) => {
			// Can replace any with AppState
			dispatch({
				type: SIGN_UP_USER_SUCCESS,
				user: request.data,
			});
		};
	}
	return (dispatch: Dispatch<AuthActions>, getState: () => any) => {
		dispatch({
			type: SIGN_UP_USER_ERROR,
			user: "Error",
		});
	};
};

export default {
	SignInUser,
	SignUpUser,
};
