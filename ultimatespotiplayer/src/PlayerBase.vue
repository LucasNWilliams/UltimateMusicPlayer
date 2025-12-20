<template>
  <div v-if="spotifyUser.display_name">
    <PageHeader :spotify-user="spotifyUser"/>

    <div class="page-body">
      <h2>Total Followers: {{ spotifyUser.followers.total }}</h2>
      <ol>
        <li v-for="track in userPlaylists" :key="track.id">
          {{ track.name }}
        </li>
      </ol>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue'
import { GetSpotifyAuthorization } from "@/API/spotifyAuth";
import {ISpotifyPlaylistType, ISpotifyUserType, IUserAlbumType} from "@/enums";
import {GetUserData, GetUserPlaylists, GetUserAlbums} from "@/components/api";
import PageHeader from "@/components/PageHeader.vue";

const spotifyUser = ref<ISpotifyUserType>({})
const userPlaylists = ref<ISpotifyPlaylistType[]>([])

const getUserData = async () => {
  await GetUserData()
    .then((data) => {
      Object.assign(spotifyUser.value, data)
    })
}

const getUserPlaylists = async () => {
  await GetUserPlaylists()
    .then((data: ISpotifyPlaylistType[]) => {
      userPlaylists.value.length = 0
      userPlaylists.value.push(...data)
    })
}

const getUserAlbums = async () => {
  await GetUserAlbums()
    .then((data: IUserAlbumType[]) => {
      console.log(data)
    })
}

onMounted(async () => {
  await GetSpotifyAuthorization()
    .then(async () => {
      await getUserData()
      await getUserPlaylists()
      await getUserAlbums()
    })
})
</script>

<style scoped>
.page-body {
  scrollbar-width: none;
}
</style>
