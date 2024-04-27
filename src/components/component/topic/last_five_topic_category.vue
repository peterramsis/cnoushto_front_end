<template>
    <section class="last_five_topic">
        <h6 class="text-center mt-5">
            <label for="category" class="head-line"> اخر 5 مواضيع فى قسم</label>
            <select class="form-control" v-model='selectCategory' id="category">
                <option :value="category.id" v-for="category in categories" :key="category.id"> {{ category.name }} </option>
            </select>
        </h6>
        <section class="lines d-flex justify-content-center mb-5">
            <span class="line"></span>
        </section>
        <section class="topics" v-if="store.getLastFiveTopics">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-sm-6 col-lg-3"  v-for="topic in store.getLastFiveTopics" :key="topic.id">
                    
                        <section class="card_topic">
                            <section class="card_topic_content">
                                <div class="section__img">
                                    <img v-lazy="{ src: topic.image, loading: 'loading...', error: 'your error image url' }"  :alt="topic.name" class="img-fluid"/>
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
                                           <img :src="topic.image_user" :alt="topic.user.name" class="img-fluid rounded" style="width: 40px; oject-fit: cover">
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
    
        </section>
    </section>
</template>

<style lang="scss" scoped>
.line{
    width: 100px;
    height: 4px;
    background-color: $color-primary;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    &::after{
        content: "";
        position: absolute;
        top:10px;
        background-color: $color-secondary;
        width: 80px;
        height: 2px;
    }
    &::before{
        content: "";
        position: absolute;
        top:20px;
        background-color: $color-tertiary;
        width: 50px;
        height: 2px;
    }
}
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
.head-line{
    color:$color-primary;
    font-wight: bold;
}
#category{
    width: 300px;
    margin:auto;
    text-align:center;
    margin-top:10px;
}
</style>

<script>

import { onMounted, ref, watch } from 'vue';
import { useTopicStore } from '@/stores/modules/topic';
import { useLoading } from 'vue-loading-overlay';
import { useRoute } from 'vue-router';


export default {
  name: 'lastFiveTopic',
  props:{
    idCategory: String,
    categories: Object
  },
  setup(props) {

    const store = useTopicStore();
    const selectCategory = ref(1);
    const routes = useRoute()
    const loading = useLoading({
     container: ()=> true,  // Set container to null to use default behavior
    canCancel: () => true, // Enable the canCancel option
    onCancel: () => {},
    });

    
    onMounted(() => {
        selectCategory.value = props.idCategory;
        store.getActionLastFiveTopics(loading, props.idCategory);
    })

watch(() => selectCategory.value, (newValue, oldValue) => {
    
    store.getActionLastFiveTopics(loading, selectCategory.value);
});

    


    return { 
        store,
        selectCategory
    
    }


  }
}
</script>