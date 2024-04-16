<template>
 
  <section class="all">
    <header-app></header-app>
  </section>
 
</template>

<style scoped>

</style>

<script>
import { useCountStore } from './stores/moudels/counter';
import { useAuthStore } from './stores/moudels/auth';
export default {
  setup() {
    const store = useCountStore();
    const storeAuth = useAuthStore();
    return {
      store,
      storeAuth
    }
  }
}

</script>
