require("dotenv").config();
const withImages = require("next-images");
const withCSS = require("@zeit/next-css");
const withFonts = require("next-fonts");
// const withTs = require('next-typescript'); note: dead??
const { createSecureHeaders } = require("next-secure-headers");
const withPlugins = require("next-compose-plugins");

module.exports = withPlugins(
	[
		[
			{
				// experimental: { granularChunks: true },
				env: {
					ENV_VARIABLE: process.env.ENV_VARIABLE,
				},
				mode: "development",
				headers: {
					async headers() {
						return [
							{
								source: "/(.*)",
								headers: createSecureHeaders({
									contentSecurityPolicy: {
										directives: {
											defaultSrc: ["'self'", "unsafe-inline"],
											imgSrc: ["'self'", "*"],
											styleSrc: ["'self'", "unsafe-inline"],
											scriptSrc: [
												"'self'",
												"unsafe-inline",
												"unsafe-eval",
												// 'https://www.googletagmanager.com',
												// 'https://js.stripe.com',
												// 'https://www.google-analytics.com',
												// 'https://fonts.googleapis.com',
												// 'http://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment.min.js',
												// 'http://ajax.googleapis.com/ajax/libs/webfont/1.5.18/webfont.js',
											],
										},
									},
									forceHTTPSRedirect: [true, { maxAge: 60 * 60 * 24 * 4, includeSubDomains: true }],
									referrerPolicy: "same-origin",
								}),
							},
						];
					},
				},
				exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
					return {
						// general routes
						"/": { page: "/" },
						"/_error": { page: "/_error" },
					};
				},
				webpack(config) {
					config.module.rules.push({
						test: /\.(png|jpe?g|gif|svg)$/i,
						loader: "file-loader",
						options: {
							outputPath: "images",
						},
					});
					config.module.rules.push({
						test: /\.js$/,
						include: [/node_modules/],
						loader: "babel-loader",
					});
					return config;
				},
			},
		],
		[
			withCSS,
			{
				/* plugin config here ... */
			},
		],
		[withFonts, {}],
		[withImages, {}],
	],
	{
		/* global config here ... */
	}
);
