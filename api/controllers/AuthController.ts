import { RouterContext } from '../deps.ts'

class AuthController {
	public login( ctx: RouterContext ) {
		ctx.response.body = JSON.stringify( ctx )
	}

	public register( ctx: RouterContext ) {

	}
}

const authController = new AuthController()

export default authController