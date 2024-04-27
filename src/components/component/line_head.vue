<template>
    <section class="line_head">
        <h6 class="text-center mt-5">
            {{ text }} 
        </h6>
        <section class="lines d-flex justify-content-center mb-5">
            <span class="line"></span>
        </section>
    </section>
</template>


<style lang="scss" scoped>
.line{
    width: 100px;
    height: 4px;
    background-color: $color-primary;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    &::after{
        content: "";
        position: absolute;
        top:10px;
        background-color: $color-secondary;
        width: 80px;
        height: 2px;
    }
    &::before{
        content: "";
        position: absolute;
        top:20px;
        background-color: $color-tertiary;
        width: 50px;
        height: 2px;
    }
}

.head-line{
    color:$color-primary;
    font-weight: bold;
}
#category{
    width: 300px;
    margin:auto;
    text-align:center;
    margin-top:10px;
}
</style>

<script>

export default{
    props:['text']
}
</script>