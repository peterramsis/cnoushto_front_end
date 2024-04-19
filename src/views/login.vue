<template>
    <header-app></header-app>
    <LoginComponent></LoginComponent>
    <footer-app></footer-app>
  </template>
  
  <style lang="scss" scoped>
  
  .login-card {
      .photo-picture {
          img{
              height: 300px;
              margin: 10px auto;
              /* width: 100%; */
              object-fit: cover;
              display: flex;
              border-radius: 51%;
          }
      }
    form {
      font-family: "Cairo", sans-serif;
     
      background-color: $color-secondary;
      padding: 10px 20px;
      @include border-radius(10px);
  
      input[type="text"] {
        @include border-radius(12px);
      }
    }
  }
  </style>
  <script>
  import LoginComponent from '@/components/component/login.vue';
  
  export default {
    name: "login",
    components:{
        LoginComponent
    }
    
  };
  </script>
  