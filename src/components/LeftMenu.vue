<template>
    <div aria-multiselectable="true" class="panel-group" id="accordion" role="tablist">
        <div :key="index" class="panel panel-default" v-for="(item,index) in leftData">
            <div class="panel-heading" :href="'#collapse'+index" data-parent="#accordion" data-toggle="collapse">
                <h4 class="panel-title">
                    <a >
                        {{item.title}}
                    </a>
                </h4>
            </div>
            <div :id="'collapse'+index" class="panel-collapse collapse" :class="{'in':index===0}">
                <div class="list-group">
                    <a :key="i" class="list-group-item" :class="{'active':aFullFace[item.type].name ===i.name }" v-for="i in item.list"
                       @click="replaceComponent(item.type,i)">
                        {{i.name}}
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LeftMenu",
        props: ['leftData','aFullFace'],
        methods: {
            replaceComponent: function (type, obj) {
                this.$emit('replaceComponent', type, obj)
            }
        }
    }
</script>

<style scoped>
#accordion {
    height: 667px;
    overflow-y:auto;
}
</style>
