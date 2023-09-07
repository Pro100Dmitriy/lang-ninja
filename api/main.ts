import 'https://deno.land/std@0.201.0/dotenv/load.ts'
import { Application, Router } from 'https://deno.land/x/oak/mod.ts'
import GraphQLService from './db.ts'

const { PORT } = Deno.env.toObject()

const app = new Application()
const router = new Router()

router.get( '/', ( { response }: { response: any } ) => {
	response.body = 'Hello  sdfsdf'
} )

app.use( router.routes() )

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

console.log( `App has been started on port ${ PORT }...` )
await app.listen( {
	port: PORT
} )