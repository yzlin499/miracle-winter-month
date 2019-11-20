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
                <div class="panel-body">
                    <div class="col-xs-4" :key="i" v-for="i in item.list">
                        <a @click="replaceComponent(item.type,i)" :class="{'select':aFullFace[item.type].data.name ===i.name }"
                           href="#" class="thumbnail">
                            <img :src="i.link" alt="...">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ThumbnailShow",
        props: ['leftData','aFullFace'],
        methods: {
            replaceComponent: function (type, obj) {
                this.$emit('replaceComponent', type, obj)
            }
        }
    }
</script>

<style scoped>
.select {
    border: 1px #337ab7 solid;
}
#accordion {
    height: 667px;
    overflow-y:auto;
}

</style>
