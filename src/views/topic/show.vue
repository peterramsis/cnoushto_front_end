<template>
    <header-app></header-app>
    <section class="container print-container" id="export-container">
        <div class="row">
            <div class="col-12">
                <h1 class="h1"> {{ store.topic.name }} </h1>
                <section class="topic__img text-center">
                    <img :src=" store.topic.image" alt="" srcset="">
                </section>

                <section class="topic_content" v-html="store.topic.description">
                     
                </section>
            </div>

            
        </div>
    </section>
    <footer-app></footer-app>
</template>

<script>
import { useTopicStore } from '@/stores/modules/topic';
import { onMounted } from 'vue';
import { useLoading } from 'vue-loading-overlay';
import { useRoute } from 'vue-router';
import { ExportToPdf,ExportToWord  } from  'vue-doc-exporter';
export default {
    components: {

    ExportToPdf,
    ExportToWord

    },
    setup() {
        const store = useTopicStore();
       
        const routes = useRoute();
        const loading = useLoading({
            color: "green",
            container: null, // Set container to null to use default behavior
            canCancel: () => true, // Enable the canCancel option
            onCancel: () => {},
        });

        onMounted(() => {
            store.showTopic(loading,routes.params.id );
            document.body.title = store.topic.name;
        });

      

        return {
            store,
        };
    },
    
}
</script>