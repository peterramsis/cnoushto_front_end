<template>
    <section :class="{btn_site: true , active: active}" :style="{ '--custom_background' : backgroundColor , '--custom_hover': hoverColor}">
         {{ title }}
    </section>
</template>


<style lang="scss" scoped>
  .btn_site{
    padding: 10px 20px;
    height: 50px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--custom_background);
    color: #fff;
    font-size: 16px;
    &:hover{
      cursor: pointer;
      background-color: var(--custom_hover) !important;
    }
    &.active{
        background-color: var(--custom_hover) !important;
    }
  }
</style>

<script>
export default {
    name: 'button-app',
  props: {
      backgroundColor: {
          type: String,
          default: 'red'
      },
      title: {
          type: String,
      },
      hoverColor: {
        type: String,
       
      },
      active: {
          type: Boolean,
          default: false
      }
  }
}
</script>