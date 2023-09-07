import { applyGraphQL, gql, GQLError } from "https://deno.land/x/oak_graphql/mod.ts"
import { Router } from 'https://deno.land/x/oak/mod.ts'


const types = gql`
	type User {
	  firstName: String
	  lastName: String
	}
	
	input UserInput {
	  firstName: String
	  lastName: String
	}
	
	type ResolveType {
	  done: Boolean
	}
	
	type Query {
	  getUser(id: String): User 
	}
	
	type Mutation {
	  setUser(input: UserInput!): ResolveType!
	}
`

const resolvers = {
	Query: {
		getUser: ( parent: any, { id }: any, context: any, info: any ) => {
			return {
				firstName: 'wooseok',
				lastName: 'lee'
			}
		}
	},
	Mutation: {
		setUser: ( parent: any, { input: { firstName, lastName } }: any, context: any, info: any ) => {
			console.log( 'input:', firstName, lastName )
			return {
				done: true
			}
		}
	}
}

const GraphQLService = await applyGraphQL<Router>( {
	Router,
	typeDefs: types,
	resolvers
} )

export default GraphQLService