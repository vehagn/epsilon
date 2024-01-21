<script lang="ts" setup>
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
        <User :user="user"/>
      </v-col>
    </v-row>
  </v-container>
</template>
