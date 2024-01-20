<template>
  <v-app class="bg-grey-darken-4">
    <v-main>
      <v-container style="height: 100vh;">
        <v-layout full-height>
          <v-row align="center" justify="center">
            <v-container fluid>
                  <Welcome/>
            </v-container>
          </v-row>
          <v-row>
          </v-row>
        </v-layout>
      </v-container>
      <v-footer class="bg-teal-darken-4 text-center d-flex flex-column">
        <span>FOOTER</span>
      </v-footer>
    </v-main>
  </v-app>
</template>


<script setup lang="ts">
import Welcome from "~/components/Welcome.vue";
</script>
