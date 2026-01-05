<template>
  <div v-if="album.id">
    <div class="album-header">
      <img :src="albumImageSrc"
           :alt="albumImageAlt"
           class="album-cover"/>
      <div class="album-info">
        <h1 class="album-title">{{ album.name }}</h1>

        <div class="secondary-album-info">
          <p class="artist-names">{{ artistsNames }}</p>

          <hr/>

          <p>{{ album.total_tracks }} Songs</p>
          <div class="secondary-album-info-right">
            <p>{{ albumReleaseDate }}</p>
            <p v-if="false" class="release-date-precision">({{ album.release_date_precision }})</p>
          </div>

          <p v-if="false">{{ album.popularity }} Popularity</p>
        </div>
      </div>
    </div>
    <div class="album-content">
      <AlbumTrackCard v-for="track in album.tracks.items" :key="track.id" :track="track"/>
    </div>
    <div class="album-footer">
      <p v-for="copyright in album.copyrights"
         :key="copyright.text"
         class="copyright">{{ copyright.text }} ({{ copyright.type }})</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import {GetAlbum} from "@/components/api";
import {ISpotifyAlbum} from "@/spotifyDataTypeEnums";
import AlbumTrackCard from "@/components/Cards/AlbumTrackCard.vue";

const album = ref<ISpotifyAlbum>({} as ISpotifyAlbum)

const albumImageSrc = computed(() => {
  return album.value.images ? album.value.images[0].url : undefined
})
const albumImageAlt = `${album.value.name} Album Cover`

const artistsNames = computed(() => {
  return album.value.artists.map((artist) => artist.name).join(', ')
})

const albumReleaseDate = computed(() => {
  return new Date(album.value.release_date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})
})

const route = useRoute()

onMounted(() => {
  GetAlbum(route.params.albumId as string)
    .then((data: ISpotifyAlbum) => {
      Object.assign(album.value, data)
    })
})
</script>

<style scoped>
.album-header {
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 5rem;
  background-color: #131519;
  margin: -1.5rem -.5rem 0;
  padding: 3rem;

  .album-cover {
    height: 20rem;
    border-radius: 2.5%;
  }

  .album-info {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .album-title {
      font-size: 4.5rem;
      margin-bottom: .5rem;
    }

    .secondary-album-info {
      display: flex;
      gap: 3rem;
      justify-content: start;
      font-size: 1.5rem;

      hr {
        margin-left: 0;
        margin-right: 0;
      }

      .artist-names {
        padding-left: 4rem;
      }

      .secondary-album-info-right {
        display: flex;
        gap: 1rem;

        .release-date-precision {
          text-transform: capitalize;
        }
      }
    }
  }
}

.album-content {
  padding: 4rem 2rem;
}

.album-footer {
  color: #7a7a7a;

  .copyright {
    margin: .25rem;
  }
}
</style>
