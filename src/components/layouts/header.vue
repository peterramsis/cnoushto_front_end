<template>
    <header class="d-flex justify-content-around">
        <section class="logo">
           <img :src="logo" alt="Logo" srcset="" class="img-fluid" style="width: 100px">
        </section>
        <nav class="d-flex align-items-center">
           <ul class="nav ">
             <li><router-link to="/" class="nav-link" v-if="token">الرئيسية </router-link></li>
             <li><router-link to="login" class="nav-link" v-if="!token">تسجيل الدخول</router-link></li>
             <li><router-link to="register" class="nav-link" exact v-if="!token">التسجيل</router-link></li>
            

             <li v-if="token">
              <div class="dropdown">
                <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                  الاقسام
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2" v-if="storeCategories">
                  <li v-for="category in storeCategories.getCategories" :key="category.id">
                    <router-link  class="dropdown-item"   :to='`/topics/${category.id}/${category.name}`' >{{ category.name }} </router-link>
                  </li>
                </ul>
              </div>
             </li>

             <li><router-link to="/your_topics" class="nav-link" exact v-if="token">مواضعيك</router-link></li>


             <li v-if="token">
              <div class="dropdown">
                <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                  {{store.user.name }}
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                  <li> <router-link to="/profile" class="dropdown-item"> الملف الشخصى </router-link> </li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#" @click="logout">تسجيل الخروج</a></li>
                </ul>
              </div>
             </li>

           </ul>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
 header{
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
 }
</style>

<script>
import logo from "@/assets/images/logo.png";
import { onMounted, ref ,watch  } from "vue";
import { useLoading } from 'vue-loading-overlay';
import { useAuthStore } from '@/stores/modules/auth';
import {  useRouter , useRoute } from "vue-router";
import { useCategoryStore } from "@/stores/modules/category";
import { useTopicStore } from "../../stores/modules/topic";
export default {
  name: 'header-app',
    
  setup() {
  
    const token = ref("");
    const store = useAuthStore();
    const storeCategories = useCategoryStore();
    const storeTopics = useTopicStore();

    const routes = useRoute();
    
    const loading = useLoading({
      color: "green",
    container: null, // Set container to null to use default behavior
    canCancel: () => true, // Enable the canCancel option
    onCancel: () => {},
    });

    
    const router = useRouter()
    

    function logout(){
      store.logout(loading,router);
    }      

    watch(routes, (to, from) => {
    
      // Check if the route has changed
      if (to.fullPath == from.fullPath) {
        storeTopics.getTopicsAction(loading, to.params.id);
      }
    });

    

    onMounted(() => {
      token.value = localStorage.getItem("token");
       if(token.value != null )
       {
        store.getUser(loading); 
        storeCategories.getActionCategories(loading);
       }
      
    })
    return {
      logo,
      token,
      store,
      logout,
      storeCategories,
      
    }
  }
}
</script>