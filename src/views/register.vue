<template>
    <header-app></header-app>
     
          <h3 class="text-center">التسجيل</h3>
          <section class="register text-center">
              <form action="">
                
                   <section class="form-group">
                       <label for="" class="form-label">الاسم</label>
                        <input
                            type="text" id="" class="form-control" placeholder="" aria-describedby="helpId"/>
                        <small id="helpId" class="text-muted">Help text</small>
                   </section>

              </form>
          </section>
    <footer-app></footer-app>
</template>

<style lang="scss" scoped>
   .register{
    display: flex;
    justify-content: center;
       width: 400px;
    }
</style>
<script>
export default {
     name: "register"
}
</script>
