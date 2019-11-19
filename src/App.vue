<template>
    <div id="app">
        <div class="container-fluid">
            <div class="col-md-3">
                <LeftMenu></LeftMenu>
            </div>
            <div class="col-md-9">
                <MainShow/>
            </div>
        </div>
    </div>
</template>

<script>
    import MainShow from './components/MainShow.vue'
    import LeftMenu from "@/components/LeftMenu";

    export default {
        name: 'app',
        components: {
            MainShow, LeftMenu
        }
    }

</script>

<style scoped>
    #app {
        /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
        /*-webkit-font-smoothing: antialiased;*/
        /*-moz-osx-font-smoothing: grayscale;*/
        color: #2c3e50;
    }

    MainShow {

    }

</style>
