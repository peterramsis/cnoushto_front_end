<template>
  <div class="container d-flex justify-content-center">
    <section class="login-card">
      <form action="" @submit="login">
        <section class="row">
          <h3 class="text-center text-white">تسجيل الدخول</h3>
         
          <div class="col-12 col-md-12 col-lg-12">
            
            
            <section class="">
              <label for="" class="form-label text-white">البريد الالكترونى</label>
              <input
                type="text"
                class="form-control"
                placeholder=""
                v-model="store.email"
               
              />
              <span class="text-danger" v-if="store.errors.email">  {{ store.errors.email[0] }}  </span>
            </section>

            <section class="">
              <label for="" class="form-label text-white"> كلمة المرور </label>
              <input
                type="password"
                class="form-control"
                placeholder=""
                v-model="store.password"
               
              />
              <span class="text-danger" v-if="store.errors.password">  {{ store.errors.password[0] }}  </span>
            </section>
        

            <section class="d-flex justify-content-center">
              <button-app
                class="mt-4"
                title="تسجيل الدخول"
                backgroundColor="#4F0E0E"
                hoverColor="#FFF1F1"
                colorText="#4F0E0E"
                :disabled="disabled"
              ></button-app>
            </section>
          </div>
        </section>
      </form>
    </section>
  </div>
</template>

<style lang="scss" scoped>

.login-card {
  width: 400px;
  .photo-picture {
    img {
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

    background-color: #dfbda3;
    padding: 10px 20px;
    @include border-radius(10px);

    input[type="text"], input[type="password"] {
      @include border-radius(12px);
    }
  }
}
</style>

<script>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/modules/auth';
import { useRouter } from 'vue-router';
export default {
  name: "register",
  setup() {

    const store = useAuthStore();
    const disabled = ref(false);
    const router = useRouter();

    function login(e){
        e.preventDefault();
        store.login(router);
    }


    return {
      store,
      login,
      disabled
      
    };
  },
};
</script>
