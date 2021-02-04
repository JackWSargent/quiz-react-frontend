import { useEffect } from "react";
import Router from "next/router";
import type { FC } from "react";
import React from "react";
import AuthActions from "../../redux/auth/actions";
import { connect } from "react-redux";
interface NavigationProps {
	role?: number;
	SignInUser?: () => null;
	user?: any;
}
const Navigation: FC<NavigationProps> = (props) => {
	const { role, SignInUser } = props;
	const adminPaths = ["/create_game"];
	useEffect(() => {
		// If you are not an admin on an admin only page
		if (role && role == 0 && adminPaths.includes(Router.pathname)) {
			Router.push("/");
		}
	}, []);
	return <div>{props.children}</div>;
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	// user: state.auth,
});

const mapDispatchToProps = () => ({
	SignInUser: AuthActions.SignInUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
