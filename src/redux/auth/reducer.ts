import {
	SIGN_IN_USER_SUCCESS,
	SIGN_IN_USER_ERROR,
	SIGN_IN_USER,
	SIGN_UP_USER_SUCCESS,
	SIGN_UP_USER_ERROR,
	SIGN_UP_USER,
	AuthActions,
} from "./types";

const AuthReducerDefaultState: any = {
	user: { username: "Jack" },
};

const AuthReducer = (state = AuthReducerDefaultState, action: AuthActions): any => {
	switch (action.type) {
		case SIGN_IN_USER:
			return state;
		case SIGN_IN_USER_SUCCESS:
			return { ...state, ...action.user };
		case SIGN_IN_USER_ERROR:
			return { ...state, user: null };
		case SIGN_UP_USER:
			return state;
		case SIGN_UP_USER_SUCCESS:
			return { ...state, ...action.user };
		case SIGN_UP_USER_ERROR:
			return { ...state, user: null };
		default:
			return state;
	}
};

export { AuthReducer };
