<template>
  <div class="new-request">
    <h1>Create request</h1>
    <hr>
    <NewRequest v-bind:phones="phones"/>
  </div>
</template>

<script>
// @ is an alias to /src
import NewRequest from '@/components/NewRequest.vue'
import phones from '@/assets/phones.json'

export default {
  name: 'CreateRequest',
  data() {
    return {
      phones
    }
  },
  components: {
    NewRequest
  }
}
</script>

<style scoped>
.new-request {
  border: 3px rgba(0, 0, 0, 0.1) solid;
  border-radius: 8px;
  margin: 50px;
  padding: 25px;
  font-family: montserrat, sans-serif;
  font-weight: 300;
}
</style>
