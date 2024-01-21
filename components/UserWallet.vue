<script lang="ts" setup>
import type User from "~/types/user";
import type Wallet from "~/types/wallet";

defineProps<{
  user?: User
  wallet?: Wallet
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
const noWallet: Wallet = {
  cardId: -1,
  name: '',
  cashBalance: 0,
  totalSpent: 0,
}
</script>

<template>
  <template v-if="user && wallet">
    <v-card>
      <v-card-title>{{ user.firstName }} {{ user.lastName }}</v-card-title>
      <v-card-text>
        <p>Card ID: {{ user.cardId }} </p>
        <p>Balance: {{ wallet.cashBalance }} δ</p>
        <p>Total Spent: {{ wallet.totalSpent }} δ</p>
        <p>Credit Rating:
          <template v-if="user.creditRating">{{ user.creditRating }}</template>
          <template v-else>N/A</template>
        </p>
      </v-card-text>
    </v-card>
  </template>
  <template v-else>
    <UserWallet :user="userNotFound" :wallet="noWallet"/>
  </template>
</template>

<style scoped>

</style>
