<template>
  <BaseItemCard :title="playlist.name"
            :artists="[playlist.owner.display_name]"
            :image="playlistImage"
            :item-type="playlistItemType"/>
</template>

<script setup lang="ts">
import BaseItemCard from "@/components/Base/BaseItemCard.vue";
import {IPlaylistCardProps} from "@/components/Layout/enums";
import {ISpotifyImageType} from "@/enums";
import {computed} from "vue";

const props = defineProps<IPlaylistCardProps>()
const playlistItemType = 'Playlist'

const playlistImage = computed(() => {
  return props.playlist.images ? props.playlist.images[0] : {} as ISpotifyImageType
})

</script>

<style scoped>

</style>
