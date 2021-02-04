// global
import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import { wrapper } from "../src/redux/createStore";

import App from "next/app";
// material-ui
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles, useTheme, Theme, createStyles, ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

// redux
import AuthActions from "../src/redux/auth/actions";
import { store, InitStore } from "../src/redux/createStore";

// other
import theme from "../src/theme";

const useStyles = makeStyles((theme) => createStyles({}));

const MyApp = (props) => {
	const classes = useStyles();

	const appTheme = createMuiTheme(theme);
	const { Component, pageProps } = props;

	return (
		<React.Fragment>
			<Head>
				<title>Quiz App</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<ThemeProvider theme={appTheme}>
				<Provider store={store}>
					<CssBaseline />
					<Component {...pageProps} />
				</Provider>
			</ThemeProvider>
		</React.Fragment>
	);
};
MyApp.getInitialProps = async (appContext) => {
	const appProps = await App.getInitialProps(appContext);
	return { ...appProps };
};

MyApp.getStaticProps = async (params) => {
	return {
		props: {},
	};
};

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	pageProps: PropTypes.object.isRequired,
};

export default wrapper.withRedux(MyApp);
