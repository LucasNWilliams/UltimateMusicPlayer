<template>
<h1>Hello World</h1>
  <button @click="getToken">test</button>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { GetToken, redirectToSpotifyAuthorizeEndpoint } from "@/API/api.ts";

let accessToken: string | null = ''


const urlParams = new URLSearchParams(window.location.search);
const code = ref(urlParams.get('code'));

function getToken() {
  redirectToSpotifyAuthorizeEndpoint()
}

onMounted(() => {
  if (localStorage.getItem('token') !== 'undefined') {
    accessToken = localStorage.getItem('token')
  } else {
    GetToken(code)
  }
  accessToken = localStorage.getItem('token')
  console.log(accessToken)
})
</script>

<style scoped>

</style>
