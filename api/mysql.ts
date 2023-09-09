import { Client } from './deps.ts'

const mysql = await new Client().connect( {
	hostname: Deno.env.get( 'DB_HOST' ),
    port: Deno.env.get( 'DB_PORT' ),
	username: Deno.env.get( 'DB_USERNAME' ),
	password: Deno.env.get( 'DB_PASSWORD' ),
	db: Deno.env.get( 'DB_DATABASE' )
} )

export default mysql