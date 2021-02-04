// Global
import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import Navigation from "../../components/navigation";
// Redux
import { connect } from "react-redux";
// import { AppState, store } from "../../redux/createStore";
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";
import AuthActions from "../../redux/auth/actions";

// Material UI
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
	root: {
		maxWidth: 1200,
		align: "center",
		flexGrow: 1,
		width: "100%",
	},
});

interface HomeProps {}

const Home = (props) => {
	const [signUpOpen, setSignUpOpen] = useState(false);
	const [signInOpen, setSignInOpen] = useState(false);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirmation, setPasswordConfirmation] = useState("");
	const { user, auth, SignInUser, SignUpUser } = props;
	const classes = useStyles();

	const submitSignIn = async () => {
		const payload = {
			username: username,
			password: password,
		};
		await SignInUser(payload);
	};

	const submitSignUp = async () => {
		const payload = { username: username, password: password, passwordConfirmation: passwordConfirmation };
		console.log("payload", payload);
		await SignUpUser(payload);
	};

	return (
		<Navigation
		// role={user.role}
		>
			<Grid container className={classes.root} spacing={2}>
				<Grid item xs={12}>
					<Typography variant="h1">Games</Typography>
				</Grid>
				{auth.user ? (
					<>
						<Grid item xs={2} />
						<Grid item xs={4}>
							<Button
								onClick={() => {
									setSignUpOpen(!signUpOpen);
									setSignInOpen(false);
								}}>
								Sign Up
							</Button>
						</Grid>
						<Grid item xs={4}>
							<Button
								onClick={() => {
									setSignInOpen(!signInOpen);
									setSignUpOpen(false);
								}}>
								Sign In
							</Button>
						</Grid>
						<Grid item xs={2} />
					</>
				) : null}

				<Grid item xs={4}>
					{signUpOpen ? (
						<>
							<TextField
								label="Username"
								onChange={(e) => {
									setUsername(e.target.value);
								}}
								required
								fullWidth></TextField>

							<TextField
								label="Passsword"
								onChange={(e) => {
									setPassword(e.target.value);
								}}
								required
								type="password"
								fullWidth></TextField>

							<TextField
								label="PassswordConfirmation"
								onChange={(e) => {
									setPasswordConfirmation(e.target.value);
								}}
								required
								type="password"
								fullWidth></TextField>
							<Button
								onClick={() => {
									submitSignUp();
								}}>
								Sign Up
							</Button>
						</>
					) : null}
					{signInOpen ? (
						<>
							<TextField
								label="Username"
								onChange={(e) => {
									setUsername(e.target.value);
								}}
								required
								fullWidth></TextField>

							<TextField
								label="Passsword"
								onChange={(e) => {
									setPassword(e.target.value);
								}}
								required
								fullWidth></TextField>
							<Button onClick={submitSignIn}>Sign In</Button>
						</>
					) : null}
				</Grid>
			</Grid>
		</Navigation>
	);
};

interface LinkStateProps {
	auth: any;
}

const mapStateToProps = (state: any, ownProps: HomeProps): LinkStateProps => ({
	// components: state.components,
	// canvas: state.canvas,
	auth: state.auth,
});

interface LinkDispatchProps {
	// SetComponents: (components: Component[]) => void;
	// SetCanvas: (canvas: Canvas) => void;
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>, ownProps: HomeProps): LinkDispatchProps => ({
	// SetComponents: bindActionCreators(SetComponents, dispatch),
	// SetCanvas: bindActionCreators(SetCanvas, dispatch),
	SignInUser: AuthActions.SignInUser,
	SignUpUser: bindActionCreators(AuthActions.SignUpUser, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
