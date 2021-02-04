import { createStore, applyMiddleware, compose } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// import createReducer from "./createReducer";
import { useDispatch as useReduxDispatch, useSelector as useReduxSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { ThunkAction } from "redux-thunk";
import type { Action } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import { combineReducers } from "redux";

// local redux
import { AuthReducer } from "./auth/reducer";

const CombinedReducers = () =>
	combineReducers({
		auth: AuthReducer,
	});

export const InitStore = (initialState = {}, options = {}) => {
	const reducer = CombinedReducers();

	const composeEnhancers = composeWithDevTools({
		trace: true,
		traceLimit: 25,
	});

	return createStore(
		reducer,
		//initialState,
		composeEnhancers(applyMiddleware(thunk))
		// composeWithDevTools(applyMiddleware(thunk))
	);
};

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export const useDispatch = () => useReduxDispatch<AppDispatch>();

export const store = InitStore();

export const wrapper = createWrapper<RootState>(InitStore);
