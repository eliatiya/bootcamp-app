"use strict";

const dotenv = require( "dotenv" );
const createServer = require( "./server" ).createServer;

const init = async () => {
	dotenv.config();
	const config = {
		port: process.env.PORT || 8080,
		host: process.env.HOST || "34.90.47.117"
	};
	const server = await createServer( config );
	await server.start();
	console.log( "Server running on %s", server.info.uri );
};

process.on( "unhandledRejection", ( err ) => {
	console.log( err );
	process.exit( 1 );
} );

init();
