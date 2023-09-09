<script setup lang="ts">
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'

const router = useRouter()

onMounted( () => {
  const token = window.localStorage.getItem( 'token' )
  if ( !token ) {
    router.push( { name: 'Login' } )
  }
} )
</script>

<template>
  <div>
    Dashboard
  </div>
</template>

