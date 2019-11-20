<template>
    <div class="row">
        <div class="col-md-12">
            <img :key="index" v-for="(item,index) in imgData" :src="aFullFace[item].data.link" :alt="item"
                 class="img-responsive" :class="index===0?'first-img':''" :style="{
             'filter':`hue-rotate(${aFullFace[item].hue}deg) brightness(${aFullFace[item].brightness}%) saturate(${aFullFace[item].saturate}%)`
             }">
        </div>
<!--        <img :src="aFullFace.afterHair.data.link" alt="" class="img-responsive" style="position:relative">-->
<!--        <img :src="aFullFace.face.data.link" alt="" :style="'filter:hue-rotate('+hue+'deg);'" class="img-responsive">-->
    </div>
</template>

<script>
    export default {
        name: "MainShow",
        props: ["aFullFace"],
        data:()=>({
            imgData:['afterHair','face','temples','bang','stayMAO']
        })
    }
</script>

<style scoped>
    .first-img{
        position: relative;
        float: none;
        margin-bottom: 20px;
    }

    img {
        position: absolute;
        left:0;
        top:0;
        border: 2px black solid;
    }

    .col-md-12 {
        padding: 0;
    }

</style>
