<script setup lang="ts">

let userId = ref(null)

const {data: user} = useLazyFetch(() => `/api/users/${userId.value || -1}`, {
  immediate: false,
})

</script>

<template>
  <div>
    <v-form>
      <v-text-field v-model="userId"></v-text-field>
    </v-form>
    <p>{{ userId }}</p>
    <p>{{ user }}</p>
  </div>
</template>
