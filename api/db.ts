import { applyGraphQL, Router } from "./deps.ts"
import mysql from './mysql.ts'
import schema, { TUser, TWord, TDictionary } from './schema.ts'

const users: TUser[] = [
	{
		id: 1,
		firstName: 'String',
		lastName: 'String',
		email: 'test@gmail.com',
		words: [],
		dictionaries: []
	}
]
const dictionaries: TDictionary[] = []
const words: TWord[] = []

const resolvers = {
	Query: {
		getAllUsers: () => {
			return users
		},
		getUser: ( parent: any, { id }: any, context: any, info: any ): TUser => {
			console.log( id )
			return users.find( ( user: TUser ) => user.id === Number( id ) )
		}
	},
	Mutation: {
		createUser: ( parent: any, data: any, context: any, info: any ) => {
			const id = Date.now()
			const user = { id,
				...data.input
			}

			users.push( user )

			return user
		}
	}
}

const GraphQLService = await applyGraphQL<Router>( {
	Router,
	typeDefs: schema,
	resolvers
} )

export default GraphQLService