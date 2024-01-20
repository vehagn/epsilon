<script setup lang="ts">
import type User from "~/types/user";

defineProps<{
  user: User
}>()</script>

<template>
  <v-container>
    <v-card>
      <v-card-title>{{ user.firstName }} {{ user.lastName }}</v-card-title>
      <v-card-text>
        User ID: {{ user.cardId }} <br/>
        Group: {{ user.userGroup }} <br/>
        Member <a v-if="user.isMember">Yes</a><a v-else>No</a><br/>
        E-mail: {{ user.email }} <br/>
        Title: {{ user.title }} <br/>
        Comments: <a v-for="comment in user.comments">{{ comment }}</a><br/>
        CreditRating <a v-if="user.creditRating">{{user.creditRating}}</a><a v-else>N/A</a>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style scoped>

</style>
