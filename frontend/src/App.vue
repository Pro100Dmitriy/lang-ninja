<script setup lang="ts">
import { ref } from 'vue'
import useForm from './use/form.ts'
import './assets/sass/styles.sass'

const likes = ref(0)

const required = ( val: string ) => !!val
const minLength = ( num: number ) => ( val: string ) => val.length >= num

const form = useForm( {
  email: {
    value: 'email@email.ru',
    validators: { required }
  },
  password: {
    value: 'pass',
    validators: { required, minLength: minLength( 8 ) }
  }
} )

function submit() {

}
</script>

<template>
  <div class="container">
    <form class="card" @submit.prevent="submit">
      <h1>
        Auth
      </h1>

      <div class="form-control">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="form.email.value">
      </div>

      <div class="form-control">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="form.password.value">
      </div>

      <button class="btn primary" type="submit">
        Submit
      </button>
    </form>
  </div>
</template>