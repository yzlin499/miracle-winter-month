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
                        <a :href="i.link">{{i.name}}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => ({
            leftData: [
                {
                    'title': '社区管理',
                    'list': [
                        {
                            'name': '帖子审核',
                            'link': '/admin/review.html'
                        },
                        {
                            'name': '黑名单',
                            'link': '/admin/baned.html'
                        }
                    ]
                }
            ]
        }),
        name: "LeftMenu"
    }
</script>

<style scoped>

</style>
