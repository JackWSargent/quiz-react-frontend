import { AppProps } from "next/app";
import { FC, ReactNode } from "react";

const App = ({ Component, pageProps }) => {
	return <Component {...pageProps} />;
};

export default App;
