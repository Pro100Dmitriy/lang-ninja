import { RouterContext } from '../deps.ts'
import User from '../models/User.ts'

class AuthController {
	public login( ctx: RouterContext ) {
		ctx.response.body = JSON.stringify( ctx )
	}

	public async register( ctx: RouterContext ) {
		const { value: { firstName, lastName, email, password } } = await ctx.request.body()
		// const user = await User.findOne( { email } )
	}
}

const authController = new AuthController()

export default authController