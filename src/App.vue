<template>
   <div>
   
     <router-view></router-view>
    
   </div>
</template>

<script>
import './assets/scss/global.scss';
import { useCountStore } from '@/stores/modules/counter';
import { useAuthStore } from '@/stores/modules/auth';
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
