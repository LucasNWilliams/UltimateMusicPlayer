<template>
  <div class="page-header">
    <div class="page-header-left">
      <img src="@/assets/mediumLogo.png" alt="Medium Ultimate SpotiPlayer Logo" class="logo-medium"/>
    </div>
    <div class="page-header-right">
      <p>{{ spotifyUser.display_name }}</p>
      <img :src="spotifyUser.images ? spotifyUser.images[1].url : undefined" alt="User Profile Image" class="user-profile-image">
    </div>
  </div>
</template>

<script setup lang="ts">
import {IPageHeaderProps} from "@/enums";

const props = defineProps<IPageHeaderProps>()
console.log(props.spotifyUser.images)
</script>

<style scoped>
.page-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 2.5rem;
  margin: -.5rem -.5rem 1.5rem;
  height: 1.75rem;
  background-color: #3e3e3e;
  color: white;
  position: sticky;
  top: 0;


  .page-header-right {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;

    .logo-medium {
      width: 100px;
    }
  }
}

.logo-medium {
  width: 100px;
}

.user-profile-image {
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
}
</style>
