import { Application } from './deps.ts'
import router from './router.ts'
import GraphQLService from './db.ts'

const { PORT } = Deno.env.toObject()

const app = new Application()

app.use( router.routes() )
app.use( router.allowedMethods() )

app.use( async ( ctx, next ) => {
	await next()
	const rt = ctx.response.headers.get( 'X-Response-Time' )
	console.log( `${ ctx.request.method } ${ ctx.request.url } - ${ rt }` )
} )

app.use( async ( ctx, next ) => {
	const start = Date.now()
	await next()
	const ms = Date.now() - start
	ctx.response.headers.set( 'X-Response-Time', `${ ms }ms` )
} )

app.use( GraphQLService.routes(), GraphQLService.allowedMethods() )

app.addEventListener( 'listen', ( { hostname, port, secure } ) => {
	console.log( `Listening on ${ secure ? 'https://' : 'http://' }${ hostname || 'localhost' }:${ port }...` )
} )

await app.listen( { port: PORT } )