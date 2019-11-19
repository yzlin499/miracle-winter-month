<template>
    <div>
        <img :src="aFullFace.afterHair" alt="">
        <img :src="aFullFace.face" alt="">
        <img :src="aFullFace.temples" alt="">
        <img :src="aFullFace.bang" alt="">
        <img :src="aFullFace.stayMAO" alt="">
    </div>
</template>

<script>
    export default {
        name: "MainShow",
        props: ["aFullFace"]
    }
</script>

<style scoped>
    img {
        position: absolute;
        width: 500px;
    }

    div {
        height: 667px;
    }


</style>
