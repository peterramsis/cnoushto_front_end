<template>
    <header-app></header-app>
      <topics></topics>
    <footer-app></footer-app>
</template>

<script>
import topics from '@/components/component/topic/topics.vue';
import { onMounted } from 'vue';
export default {
    components: {
        topics
    },
    setup() {
       
    }
}

</script>