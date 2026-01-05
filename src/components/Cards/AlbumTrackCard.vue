<template>
  <div class="album-track-card">
    <div>
      <h3>{{ track.name }}</h3>
      <p>{{ artistsNames }}</p>
    </div>
    <p>{{ MStoHoursMinutesSeconds(track.duration_ms) }}</p>
  </div>
</template>

<script setup lang="ts">

import {ISpotifyTrack} from "@/spotifyDataTypeEnums";
import {computed} from "vue";

interface IAlbumTrackCardProps {
  track: ISpotifyTrack
}

const props = defineProps<IAlbumTrackCardProps>()

const artistsNames = computed(() => {
  return props.track.artists.map((artist) => artist.name).join(', ')
})

const MStoHoursMinutesSeconds = (ms: number) => {
  const hours = Math.floor(ms / 3600000)
  const minutes = Math.floor((ms % 3600000) / 60000)
  const seconds = ((ms % 60000) / 1000).toFixed(0)
  const showHours = hours ? `${hours}:` : ''
  const leadingZeroSeconds = (seconds < 10) ? '0' : ''
  return showHours + minutes + ':' + leadingZeroSeconds + seconds
}

// console.log(props.track)
</script>

<style scoped>
.album-track-card {
  width: 100%;
  outline: 1px solid white;
  height: 5rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  margin-bottom: 1rem;
}
</style>
