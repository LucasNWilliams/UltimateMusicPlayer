<template>
  <ItemCard :title="album.album.name"
            :artists="albumArtists"
            :image="albumImage"
            :item-type="album.album.album_type">
  </ItemCard>
</template>

<script setup lang="ts">
import ItemCard from "@/components/Base/ItemCard.vue";
import {ISpotifyArtist, ISpotifyImage, IUserAlbum} from "@/spotifyDataTypeEnums";
import {computed} from "vue";

interface IAlbumCardProps {
  album: IUserAlbum
}

const props = defineProps<IAlbumCardProps>()

const albumImage = computed(() => {
  return props.album.album.images ? props.album.album.images[0] : {} as ISpotifyImage
})

const albumArtists = computed(() => {
  const artistNames: string[] = []
  props.album.album.artists.forEach((artist: ISpotifyArtist) => artistNames.push(artist.name))
  return artistNames
})

</script>

<style scoped>

</style>
