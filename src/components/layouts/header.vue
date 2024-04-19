<template>
    <header class="d-flex justify-content-around mt-3">
        <section class="logo">
           <img :src="logo" alt="Logo" srcset="" class="img-fluid" style="width: 100px">
        </section>
        <nav class="d-flex align-items-center">
           <ul class="nav ">
             <li><router-link to="/" class="nav-link">الرئيسية</router-link></li>
             <li><router-link to="login" class="nav-link">تسجيل الدخول</router-link></li>
             <li><router-link to="register" class="nav-link" exact>التسجيل</router-link></li>
            
           </ul>
        </nav>
    </header>
</template>

<script>
import logo from "@/assets/images/logo.png";
export default {
  name: 'header-app',
    
  setup() {
    return {
      logo
    }
  }
}
</script>