<template>
    <div class="box">
        <div class="top">
            <span>查找</span>
            <div>
                <router-link :to='{path:"/home/recommend"}'>推荐</router-link>
                <router-link :to='{path:"/home/location"}'>北京</router-link>
            </div>
            <span>··</span>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>

export default {
    name: 'page',
    data () {
        return {
            
        }
    }
}
</script>
<style scoped>
.box{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.top{
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: .2rem .2rem;
    box-sizing: border-box;
}
.router-link-active{
    color: red;
    font-weight: bold
}
</style>
