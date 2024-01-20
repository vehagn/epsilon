<script setup lang="ts">
import {User} from "#components"

let userId = ref(null)

const {data: user} = useLazyFetch(() => `/api/users/${userId.value || -1}`, {
  immediate: false,
})

</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <v-form>
          <v-text-field v-model="userId"></v-text-field>
        </v-form>
      </v-col>
      <v-col>
        <p v-if="user">
          <User :user="user"/>
        </p>
        <p v-else>User not found</p>
      </v-col>
    </v-row>
  </v-container>
</template>
