export const SIGN_IN_USER: string = "SIGN_IN_USER";
export const SIGN_IN_USER_SUCCESS: string = "SIGN_IN_USER_SUCCESS";
export const SIGN_IN_USER_ERROR: string = "SIGN_IN_USER_ERROR";

export interface SignInUserAction {
	type: typeof SIGN_IN_USER;
	user: any;
}

export interface SignInUserSuccessAction {
	type: typeof SIGN_IN_USER_SUCCESS;
	user: any;
}

export interface SignInUserFailureAction {
	type: typeof SIGN_IN_USER_ERROR;
	user: any;
}

export type AuthActions = SignInUserAction | SignInUserSuccessAction | SignInUserFailureAction;
