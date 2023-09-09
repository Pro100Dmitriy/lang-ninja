import { reactive, computed } from 'vue'
import useField from './field.ts'

function useForm( init = {} ) {
	const form = reactive( {} )
	const validKey = 'valid'

	for ( const [key, value] of Object.entries( init ) ) {
		form[key] = useField( value )
	}

	form[validKey] = computed( () => {
		return Object.keys( form )
			.filter( ( key: string ): boolean => key !== validKey )
			.reduce( ( acc: boolean, key: string ) => form[key].valid, true )
	} )

	return form
}

export default useForm