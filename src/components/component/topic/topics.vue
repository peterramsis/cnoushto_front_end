<template>
    <section class="topics" v-if="store.topics">
        <div class="container">
            <div class="row">
                <div class="col-md-4"  v-for="topic in store.topics.data" :key="topic.id">
                   <router-link :to='`/topic/${topic.id}`'>
                    <div class="section-title">
                        <h5> {{ topic.name }} </h5>
                        <img :src="topic.image" :alt="topic.name" class="img-fluid"/>
                    </div>
                   </router-link>
                </div>
            </div>

        </div>

        <section class="container mt-5">
            <section class="row">
                    <div class="col-md-12 d-flex justify-content-center align-items-center">
                        <Bootstrap5Pagination
                        :data="store.topics"
                        @pagination-change-page="handlePaginationChange">
                        <slot name="prev-nav">Previous</slot>
                        <slot name="next-nav">Next</slot>
                        </Bootstrap5Pagination>
                    </div>
            </section>
        </section>
    </section>
</template>

<style lang="scss" scoped>
.topics{
    img{
        height:300px;
        aspect-ratio: 1;
        object-fit: cover;
    }
}
</style>

<script>

import { onMounted, watch } from 'vue';
import { useTopicStore } from '@/stores/modules/topic';
import { useLoading } from 'vue-loading-overlay';
import { useRoute } from 'vue-router';


export default {
  name: 'topics',
  setup() {

      const store = useTopicStore();
    const routes = useRoute()
    const loading = useLoading({
    container: true, // Set container to null to use default behavior
    canCancel: () => true, // Enable the canCancel option
    onCancel: () => {},
    });

    
    onMounted(() => {
        store.getTopicsAction(loading, routes.params.id);
    })

    


    return { 
        store,
        
        handlePaginationChange
    }

    

    function handlePaginationChange(newPage) {
              store.getTopicsAction(loading, routes.params.id , newPage);
      }

  }
}
</script>