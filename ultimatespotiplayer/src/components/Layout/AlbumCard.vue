<template>
  <BaseCard :title="album.album.name"
            :artists="albumArtists"
            :image="albumImage"/>
</template>

<script setup lang="ts">
import BaseCard from "@/components/Base/BaseCard.vue";
import {IAlbumCardProps} from "@/components/Layout/enums";
import {ISpotifyArtistType, ISpotifyImageType} from "@/enums";
import {computed} from "vue";

const props = defineProps<IAlbumCardProps>()

const albumImage = computed(() => {
  return props.album.album.images ? props.album.album.images[0] : {} as ISpotifyImageType
})

const albumArtists = computed(() => {
  const artistNames: string[] = []
  props.album.album.artists.forEach((artist: ISpotifyArtistType) => artistNames.push(artist.name))
  return artistNames
})

</script>

<style scoped>

</style>
