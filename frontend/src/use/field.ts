import { ref, reactive, watch } from 'vue'

const not = ( value: any ) => !value

function useField( field ) {
	const valid = ref( true )
	const value = ref( field.value )
	const touched = ref( false )
	const errors = reactive( {} )

	const reassign = ( value: string ) => {
		valid.value = true

		Object.keys( field.validators ?? {} ).map( name => {
			const isValid = field.validators[name]( value )
			errors[name] = not( isValid )

			if ( not( isValid ) )
				valid.value = false
		} )
	}

	watch( value, reassign )
	reassign( field.value )

	return {
		value,
		valid,
		errors,
		touched,
		blur: (): boolean => touched.value = true
	}
}

export default useField