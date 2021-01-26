import { Auth, SIGN_IN_USER_SUCCESS, SIGN_IN_USER_ERROR, SIGN_IN_USER } from "./types";

const AuthReducerDefaultState: any = {};

const AuthReducer = (state = AuthReducerDefaultState, action: CanvasActionTypes): Canvas => {
	switch (action.type) {
		case SIGN_IN_USER_SUCCESS:
			return { ...state, ...action.payload };
		case SIGN_IN_USER_ERROR:
			return { ...state, ...action.payload };
		case SIGN_IN_USER:
			return state;
		default:
			return state;
	}
};

export { AuthReducer };
