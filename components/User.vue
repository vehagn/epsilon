<script lang="ts" setup>
import type User from "~/types/user";

defineProps<{
  user?: User
}>()

const userNotFound: User = {
  cardId: -1,
  firstName: 'Not',
  lastName: 'Found',
  email: '',
  birthday: '',
  title: '',
  comments: [''],
  userGroup: '',
  isMember: false,
  creditRating: undefined
}
</script>

<template>
  <template v-if="user">
    <v-card>
      <v-card-title>{{ user.firstName }} {{ user.lastName }}</v-card-title>
      <v-card-text>
        <p>Card ID: {{ user.cardId }} </p>
        <p>Group: {{ user.userGroup }} </p>
        <p>Member
          <template v-if="user.isMember">Yes</template>
          <template v-else>No</template>
        </p>
        <p>E-mail: {{ user.email }} </p>
        <p>Title: {{ user.title }} </p>
        <p>Comments:
          <template v-for="comment in user.comments">{{ comment }}</template>
        </p>
        <p>Credit Rating:
          <template v-if="user.creditRating">{{ user.creditRating }}</template>
          <template v-else>N/A</template>
        </p>
      </v-card-text>
    </v-card>
  </template>
  <template v-else>
    <User :user="userNotFound"/>
  </template>
</template>

<style scoped>

</style>
