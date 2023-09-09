class User {
	public id: string
	public firstName: string
	public lastName: string
	public email: string
	public password: string

	constructor( {
		 id = '',
		 firstName = '',
		 lastName = '',
		 email = '',
		 password = ''
	} ) {
		this.id = id
		this.firstName = firstName
		this.lastName = lastName
		this.email = email
		this.password = password
	}

	public static async findOne( params: object ): Promise<void> {

	}
}

export default User