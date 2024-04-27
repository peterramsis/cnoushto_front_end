<template>
    <section class="your_topic">
        <header-app></header-app>
        <your-topics></your-topics>
        <footer-app></footer-app>
    </section>
</template>

<script>
import YourTopics from '@/components/component/topic/your_topics.vue';
import { onMounted } from 'vue';
export default {
    components: {
        YourTopics
    },
    setup() {
       
    }
}

</script>