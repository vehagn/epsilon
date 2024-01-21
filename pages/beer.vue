<script lang="ts" setup>
import {UserWallet} from "#components";

let err = ref()

let userId = ref(null)
const {data: user} = useLazyFetch(() => `/api/users/${userId.value || -1}`, {
  immediate: false,
})

let {refresh: refreshWallet, data: wallet} = useLazyFetch(() => `/api/users/${userId.value || -1}/wallet`, {
  immediate: false,
})

let depositValue = ref(null)

async function deposit() {
  const response = await useFetch(() => `/api/users/${userId.value || -1}/wallet/deposit`, {
    method: 'POST',
    immediate: true,
    params: {
      value: depositValue.value
    }
  })

  await refreshWallet()

  err.value = response?.error?.value
}

let spendValue = ref(null)

async function spend() {
  const response = await useFetch(() => `/api/users/${userId.value || -1}/wallet/spend`, {
    method: 'POST',
    immediate: true,
    params: {
      value: spendValue.value
    }
  })

  await refreshWallet()

  err.value = response?.error?.value
}

</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <v-form>
          <v-text-field v-model="userId"></v-text-field>
        </v-form>
        <p>{{ err }}</p>
      </v-col>
      <v-col>
        <UserWallet :user="user" :wallet="wallet"/>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-form>
          <v-text-field v-model="depositValue" type="number"></v-text-field>
          <v-btn :disabled="!user" color="success" @click="deposit" append-icon="mdi-bank-plus">Deposit</v-btn>
        </v-form>
      </v-col>
      <v-col>
        <v-form>
          <v-text-field v-model="spendValue" type="number"></v-text-field>
          <v-btn :disabled="!user" color="primary" @click="spend" append-icon="mdi-beer">Spend</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>
