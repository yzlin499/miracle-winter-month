<template>
    <div aria-multiselectable="true" class="panel-group" id="accordion" role="tablist">
        <div :key="index" class="panel panel-default" v-for="(item,index) in leftData">
            <div class="panel-heading">
                <h4 class="panel-title">
                    <a :href="'#collapse'+index" data-parent="#accordion" data-toggle="collapse">
                        {{item.title}}
                    </a>
                </h4>
            </div>
            <div :id="'collapse'+index" class="panel-collapse collapse">
                <ul class="list-group">
                    <li :key="i" class="list-group-item" v-for="i in item.list">
                        <a @click="replaceComponent(item.type,i)">{{i.name}}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "LeftMenu",
        props: ['leftData'],
        methods: {
            replaceComponent: function (type, obj) {
                this.$emit('replaceComponent', type, obj)
            }
        }
    }
</script>

<style scoped>

</style>
