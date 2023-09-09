import { ref, reactive } from 'vue'
import useField from './field.ts'

function useForm( init = {} ) {
	const form = reactive( {} )

	for ( const [key, value] of Object.entries( init ) ) {
		form[key] = useField( value )
	}

	return form
}

export default useForm