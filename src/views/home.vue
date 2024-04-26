<template>
    <header-app></header-app>
    <slider-app></slider-app>
   
    <LastFiveTopic idCategory="1" :categories="categories.getCategories"></LastFiveTopic>
    
    <footer-app></footer-app>
</template>

<script>
import { useCategoryStore } from '@/stores/modules/category';
export default {
    name: 'home',
    setup() {
        const categories = useCategoryStore();
        return {
            categories
        }
    }
}
</script>