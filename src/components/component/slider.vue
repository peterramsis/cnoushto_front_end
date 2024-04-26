<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-12 col-md-12">
                <Carousel :itemsToShow=3 :wrapAround="true" :transition=500 autoplay=500>
                    <Slide v-for="slide in store.getSliderTopic" :key="slide">
                      <router-link :to='`/topic/${slide.id}`'>
                        <div class="carousel__item">
                          <section class="carousel__item__title">
                             <p>{{ slide.name }}</p>
                          </section>
                          <section class="carousel__item__img">
                             <img :src="slide.image" alt="">
                          </section>
                       </div>
                      </router-link>
                    </Slide>
                
                    <template #addons>
                      <navigation />
                      <pagination />
                    </template>
                  </carousel>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.carousel__slide {
  padding: 5px;
  position: relative;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
  
}

.carousel__item{
   
   

   
    img{
        /* Ensure the image fills the container */
  width: 100%;
  height: 100%;
  object-fit: cover; 
  aspect-ratio: 1;
    }

    .carousel__item__title{
        position: absolute;
        bottom: 12px;
        right: 1px;
        width: 96%;
        background-color: #4F0E0E;
        left: 6px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
    }
}
</style>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { onMounted } from 'vue';
import { useTopicStore } from '../../stores/modules/topic';
import { useLoading } from 'vue-loading-overlay';


export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },

  setup() {

    const store = useTopicStore();
    const loading = useLoading({
    container: true, // Set container to null to use default behavior
    canCancel: () => true, // Enable the canCancel option
    onCancel: () => {},
    });

    onMounted(() => {
        store.getActionSliderTopic(loading);
    })

    return { 
        store
    }

  }
}
</script>