import { gql } from "https://deno.land/x/oak_graphql/mod.ts"


export type TUser = {
	id: number
	firstName: string
	lastName: string
	email: string
	words: TWord[]
	dictionaries: TDictionary[]
}

export type TDictionary = {
	id: number
	title: string
	words: TWord[]
}

export type TWord = {
	id: number
	initial: string
	translate: string
}


const schema = gql`
	type User {
		id: ID
		firstName: String
		lastName: String
		email: String
		words: [Word]
		dictionaries: [Dictionary]
	}
	
	type Dictionary {
		id: ID
		title: String
		words: [Word]
	}
	
	type Word {
		id: ID
		initial: String
		translate: String
	}
	
	input UserInput {
		id: ID
		firstName: String!
		lastName: String!
		email: String!
		words: [WordInput]
		dictionaries: [DictionaryInput]
	}
	
	input DictionaryInput {
		id: ID
		title: String!
		words: [WordInput]
	}
	
	input WordInput {
		id: ID
		initial: String!
		translate: String!
	}
	
	type Query {
		getAllUsers: [User]
		getUser(id: ID): User
	}
	
	type Mutation {
		createUser(input: UserInput): User
	}
`

export default schema