<template>
    <div id="app">
        <div class="container-fluid">
            <div class="col-md-3 col-md-offset-1">
                <ThumbnailShow :left-data="componentData" :aFullFace="aFullFace"
                               @replaceComponent="replaceComponent"></ThumbnailShow>
            </div>
            <div class="col-md-4">
                <MainShow :a-full-face="aFullFace"/>
            </div>
            <div class="col-md-3">
                <RightMenu :a-full-face="aFullFace"></RightMenu>
            </div>
        </div>
    </div>
</template>

<script>
    import MainShow from './components/MainShow.vue'
    // import LeftMenu from "./components/LeftMenu";
    import ThumbnailShow from "@/components/ThumbnailMenu";
    import RightMenu from "@/components/RightMenu";

    export default {
        name: 'app',
        components: {
            RightMenu,
            ThumbnailShow,
            MainShow,
            // LeftMenu
        },
        data: () => ({
            aFullFace: {
                afterHair: {
                    name:"后发",
                    hue:0,
                    brightness:100,
                    saturate:100,
                    data: {name: '后发1', link: './后发png/后发1.png'}
                },
                face: {
                    name:"脸型",
                    hue:0,
                    brightness:100,
                    saturate:100,
                    data: {name: '标准脸', link: "./标准脸.png"}
                },
                temples: {
                    name:"鬓角",
                    hue:0,
                    brightness:100,
                    saturate:100,
                    data: {name: '鬓角1', link: './鬓角png/鬓角1.png'}
                },
                bang: {
                    name:"刘海",
                    hue:0,
                    brightness:100,
                    saturate:100,
                    data: {name: '刘海1', link: './刘海1/刘海1.png'}
                },
                stayMAO: {
                    name:"呆毛",
                    hue:0,
                    brightness:100,
                    saturate:100,
                    data: {name: '呆毛1', link: './呆毛png/呆毛1.png'}
                }
            },
            componentData: [
                {
                    title: '呆毛',
                    type: 'stayMAO',
                    list: [
                        {name: '呆毛1', link: './呆毛png/呆毛1.png'},
                        {name: '呆毛2', link: './呆毛png/呆毛2.png'},
                        {name: '呆毛3', link: './呆毛png/呆毛3.png'},
                        {name: '呆毛4', link: './呆毛png/呆毛4.png'},
                        {name: '呆毛5', link: './呆毛png/呆毛5.png'},
                        {name: '呆毛6', link: './呆毛png/呆毛6.png'}
                    ]
                }, {
                    title: '刘海',
                    type: 'bang',
                    list: [
                        {name: '刘海1', link: './刘海1/刘海1.png'},
                        {name: '刘海2', link: './刘海1/刘海2.png'},
                        {name: '刘海3', link: './刘海1/刘海3.png'}
                    ]
                }, {
                    title: '鬓角',
                    type: 'temples',
                    list: [
                        {name: '鬓角1', link: './鬓角png/鬓角1.png'},
                        {name: '鬓角2', link: './鬓角png/鬓角2.png'},
                        {name: '鬓角3', link: './鬓角png/鬓角3.png'},
                        {name: '鬓角4', link: './鬓角png/鬓角4.png'}
                    ]
                }, {
                    title: '后发',
                    type: 'afterHair',
                    list: [
                        {name: '后发1', link: './后发png/后发1.png'},
                        {name: '后发1', link: './后发png/后发1.png'},
                        {name: '后发1', link: './后发png/后发1.png'},
                        {name: '后发1', link: './后发png/后发1.png'},
                        {name: '后发1', link: './后发png/后发1.png'},
                        {name: '后发1', link: './后发png/后发1.png'},
                        {name: '后发1', link: './后发png/后发1.png'},
                        {name: '后发1', link: './后发png/后发1.png'},
                        {name: '后发1', link: './后发png/后发1.png'},
                        {name: '后发1', link: './后发png/后发1.png'}
                    ]
                }
            ]
        }),
        methods: {
            replaceComponent: function (type, obj) {
                this.aFullFace[type].data = obj;
            }
        }
    }

</script>

<style scoped>
    #app {
        margin-top: 20px;
        color: #2c3e50;
    }
</style>
