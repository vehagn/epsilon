<script lang="ts" setup>
</script>

<template>
  <v-container fluid="">
    <v-row>
      <v-col class="d-flex justify-center mb-6">
        <NuxtLink to="/search">
          <v-btn color="primary" append-icon="mdi-account-search">
            Users
          </v-btn>
        </NuxtLink>
      </v-col>
      <v-col class="d-flex justify-center mb-6">
        <NuxtLink to="/beer">
          <v-btn color="primary" append-icon="mdi-beer">
            Beer
          </v-btn>
        </NuxtLink>
      </v-col>
    </v-row>
  </v-container>
</template>
