<template>
  <header-app></header-app>
  <section class="profile">
    <div class="container">
      <div class="row">
        <div class="col-6 col-md-6 col-lg-6">
          <section class="image">
            <img :src="user.user.image" alt="User profile image" class="img-fluid" />
          </section>
        </div>
        <div class="col-6 col-md-6 col-lg-6">
          <section class="card">
            <section class="name__user">
              <h3 class="text-center">{{ user.user.name }}</h3>
            </section>
            <section class="information__user p-4">
              <p>
                كنيسة : <span>{{ user.user.church }} </span>
              </p>
              <p>
                النوع : <span>{{ user.user.gander }} </span>
              </p>
              <p>
                تاريخ الميلاد : <span>{{ user.user.birthday }} </span>
              </p>
              <p>
                الموبايل : <span>{{ user.user.phone }} </span>
              </p>
            </section>
          </section>
        </div>
      </div>
    </div>
  </section>
  <footer-app></footer-app>
</template>

<style lang="scss" scoped>
.image {
  width: 200px;
  height: 300px;
  overflow: hidden;
  margin: 0 auto;
  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
    aspect-ratio: 1;
  }
}
</style>

<script>
import { useAuthStore } from "@/stores/modules/auth";

export default {
  name: "Profile",
  setup() {
    const user = useAuthStore();

    return {
      user,
    };
  },
};
</script>
