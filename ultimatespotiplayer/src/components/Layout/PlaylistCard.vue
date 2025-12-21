<template>
  <BaseCard :title="playlist.name"
            :artists="[playlist.owner.display_name]"
            :image="playlistImage"/>
</template>

<script setup lang="ts">
import BaseCard from "@/components/Base/BaseCard.vue";
import {IPlaylistCardProps} from "@/components/Layout/enums";
import {ISpotifyImageType} from "@/enums";
import {computed} from "vue";

const props = defineProps<IPlaylistCardProps>()

const playlistImage = computed(() => {
  return props.playlist.images ? props.playlist.images[0] : {} as ISpotifyImageType
})

</script>

<style scoped>

</style>
