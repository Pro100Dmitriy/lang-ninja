<script setup lang="ts">
import { ref } from 'vue'
import useForm from '../use/form.ts'

const likes = ref(0)

const required = ( val: string ) => !!val
const minLength = ( num: number ) => ( val: string ) => val.length >= num

const form = useForm( {
  email: {
    value: '',
    validators: { required }
  },
  password: {
    value: '',
    validators: { required, minLength: minLength( 8 ) }
  }
} )

function submit() {
  console.log( 'Email:', form.email.value )
  console.log( 'Password:', form.password.value )
}
</script>

<template>
  <div class="container">
    <form class="card" @submit.prevent="submit">
      <h1>
        Auth
      </h1>

      <div class="form-control" :class="{ invalid: !form.email.valid && form.email.touched }">
        <label for="email">
          Email
        </label>

        <input
            type="email"
            id="email"
            v-model="form.email.value"
            @blur="form.email.blur"
        >

        <small
            v-if="form.email.errors.required && form.email.touched"
        >
          Email field is required
        </small>
      </div>

      <div class="form-control" :class="{ invalid: !form.password.valid && form.password.touched }">
        <label for="password">
          Password
        </label>

        <input
            type="password"
            id="password"
            v-model="form.password.value"
            @blur="form.password.blur"
        >

        <small v-if="form.password.errors.required && form.password.touched">
          Password field is required
        </small>

        <small v-else-if="form.password.errors.minLength && form.password.touched">
          Password length can't be less then 8. Now it is {{ form.password.value.length }}
        </small>
      </div>

      <button
          class="btn primary"
          type="submit"
          :disabled="!form.valid"
      >
        Submit
      </button>
    </form>
  </div>
</template>