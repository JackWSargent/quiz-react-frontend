import { createStore, applyMiddleware, compose } from "redux";
// import { combineReducers } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { AppActions } from "./global/actions";
import { authReducer } from "./auth/reducer";

export const rootReducer = (state: any = {}, action) => {
	return {
		auth: authReducer(state.components, { ...action }),
	};
};

const composeEnhancers =
	((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
		(window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 })) ||
	compose;
export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>))
);
