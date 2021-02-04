export const SIGN_IN_USER: string = "SIGN_IN_USER";
export const SIGN_IN_USER_SUCCESS: string = "SIGN_IN_USER_SUCCESS";
export const SIGN_IN_USER_ERROR: string = "SIGN_IN_USER_ERROR";

export const SIGN_UP_USER: string = "SIGN_UP_USER";
export const SIGN_UP_USER_SUCCESS: string = "SIGN_UP_USER_SUCCESS";
export const SIGN_UP_USER_ERROR: string = "SIGN_UP_USER_ERROR";
export interface SignInUserAction {
	type: typeof SIGN_IN_USER;
	user: any;
}

export interface SignInUserActionSuccess {
	type: typeof SIGN_IN_USER_SUCCESS;
	user: any;
}

export interface SignInUserActionFailure {
	type: typeof SIGN_IN_USER_ERROR;
	user: any;
}

export interface SignUpUserAction {
	type: typeof SIGN_UP_USER;
	user: any;
}

export interface SignUpUserActionSuccess {
	type: typeof SIGN_UP_USER_SUCCESS;
	user: any;
}

export interface SignUpUserActionFailure {
	type: typeof SIGN_UP_USER_ERROR;
	user: any;
}

export type AuthActions =
	| SignInUserAction
	| SignInUserActionSuccess
	| SignInUserActionFailure
	| SignUpUserAction
	| SignUpUserActionSuccess
	| SignUpUserActionFailure;
