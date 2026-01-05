<template>
  <p>test</p>
</template>

<script setup lang="ts">
import {onMounted} from "vue";
import {useRoute} from "vue-router";

const route = useRoute()

onMounted(() => {
  console.log(route.params.albumId)
})
</script>

<style scoped>

</style>
