<template>
    <input type="submit" :value="title" :class="{btn_site: true}" :style="{ '--custom_background' : backgroundColor , '--custom_hover': hoverColor , '--color_text': colorText , '--disabled' :disabled}" :disabled="disabled" />
   
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
    border:none;
   

   
    
    
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
      disabled: {
          type: Boolean,
          default: false
      },
      colorText:{
          type: String,
          default: 'white'
      }
  }
}
</script>