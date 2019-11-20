<template>
    <div>
        <div aria-multiselectable="true" class="panel-group" id="rightMenuAccordion" role="tablist">
            <div :key="index" class="panel panel-default" v-for="(item,index) in aFullFace">
                <div class="panel-heading" :href="'#collapse'+index" data-parent="#rightMenuAccordion" data-toggle="collapse">
                    <h4 class="panel-title">
                        <a >{{item.name}}调整</a>
                    </h4>
                </div>
                <div :id="'collapse'+index" class="panel-collapse collapse">
                    <div class="panel-body">
                        <div class="form-group">
                            <label :for="index+'hue'">{{item.name}}色相：{{aFullFace[index].hue}}</label>
                            <input type="range" min="0" max="360" step="1" :id="index+'hue'" v-model="aFullFace[index].hue"/>
                        </div>
                        <div class="form-group">
                            <label :for="index+'brightness'">{{item.name}}亮度：{{aFullFace[index].brightness}}%</label>
                            <input type="range" min="0" max="200" step="1" :id="index+'brightness'" v-model="aFullFace[index].brightness"/>
                        </div>
                        <div class="form-group">
                            <label :for="index+'saturate'">{{item.name}}饱和度：{{aFullFace[index].saturate}}%</label>
                            <input type="range" min="0" max="200" step="1" :id="index+'saturate'" v-model="aFullFace[index].saturate"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RightMenu",
        props: ["aFullFace"]
    }
</script>

<style scoped>

</style>
