<script lang="ts" setup>
import type Wallet from "~/types/wallet";

defineProps<{
  wallet?: Wallet
}>()
</script>

<template>
  <template v-if="wallet">
    <v-card>
      <v-card-title>Wallet</v-card-title>
      <v-card-text>
        Balance: {{ wallet.cashBalance }}
      </v-card-text>
    </v-card>
  </template>
</template>

<style scoped>

</style>
