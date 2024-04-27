<template>
    <section class="topics" v-if="store.topics">
        <div class="container">
            <line-head :text="title"></line-head>
            <div class="row">
                <div class="col-md-4"  v-for="topic in store.topics.data" :key="topic.id">
                
                    <section class="card_topic">
                        <section class="card_topic_content">
                            <div class="section__img">
                                <img v-lazy="{ src: topic.image, loading: 'loading...', error: 'error' }" :alt="topic.name" class="img-fluid"/>
                            </div>
                            

                            <div class="d-flex justify-content-between mt-3">
                                <div class="section__date mt-3">
                                    <h6> {{ topic.date }} </h6>
                                </div>

                                <section class="section__user_info">
                                
    
                                    <section class="section__user d-flex justify-content-center align-items-center gap-2">
                                       <h6>
                                           {{ topic.user }}
                                       </h6>
                                       <img v-lazy="{ src: topic.image_user, loading: 'loading...', error: 'error' }" :alt="topic.user.name" class="img-fluid rounded" style="width: 40px; oject-fit: cover">
                                    </section>
                                 </section>
                            </div>
                            
                            <div class="section-title">
                                <h5> {{ topic.name }} </h5>
                            </div>
                        </section>
                        <section class="card_topic_link">
                            <router-link :to='`/topic/${topic.id}/${topic.name}`' class="text-left">
                                اقرا المزيد  ....
                                
                            </router-link>
                            <span v-for="year in topic.years" :key="year" class="m-3" style="font-size:12px"> # {{ year.name }}  </span>
                        </section>
               </section>
                
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
        
        aspect-ratio: 1;
        object-fit: cover;
    }

    .card_topic{
        position: relative;
        transition: all .5s ease-in-out;
        .card_topic_content{
            
              padding: 10px 0;
        }
        &:hover{
            transition: all 0.5s ease-in-out;
            .card_topic_link{
                display: flex !important;
                flex-direction: column;
               }
           }
        .card_topic_link{
            
            position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #4f0e0e;
    opacity: 0.9;
    /* left: -50%; */
    display: none;
    color: #fff;
    justify-content: center;
    align-items: center;
    transition: all .5s;

    a{
        color:#fff !important;
        text-decoration: none;
    }
        }
    }
}
</style>

<script>

import { computed, onMounted, ref, watch } from 'vue';
import { useTopicStore } from '@/stores/modules/topic';
import { useLoading } from 'vue-loading-overlay';
import { useRoute } from 'vue-router';



export default {
  name: 'topics',
  props:{
    data: String
  },
  setup(props) {

      const store = useTopicStore();
    const routes = useRoute();
    
    const loading = useLoading({
        container: ()=> true,  // Set container to null to use default behavior
    canCancel: () => true, // Enable the canCancel option
    onCancel: () => {},
    });

    const title = computed(() => {
      return props.data === "yourTopic" ? "مواضعيك" : "المواضعيك المفضلة";
    });


    
    onMounted(() => {
        console.log("click");
        props.data == "yourTopic" ? store.getYourTopicsAction(loading) : store.getYourFavoriteTopicsAction(loading);
    })

    function handlePaginationChange(newPage) {
              store.getYourTopicsAction(loading, newPage);
      }

    

    return { 
        store,
        handlePaginationChange,
        title
    }

    

   

  }
}
</script>