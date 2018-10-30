<template>
  <div class="wrap">
    <div class="section">
      <router-view></router-view>
    </div>
    <div class="footer">
        <router-link :to='{path:"/home"}'>首页</router-link>
        <router-link :to='{path:"/attention"}'>关注</router-link>
        <span>+</span>
        <router-link :to='{path:"/conversation"}'>消息</router-link>
        <router-link :to='{path:"/information"}'>我</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding:0;
  list-style-type: none;
  text-decoration: none;
  color: #fff;
}
html,body{
  width: 100%;
  height: 100%;
  font-size: .32rem;
  background-color: #000;
}
.wrap{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.section{
  flex:1;
}
.footer{
  width:100%;
  height: .8rem;
  display: flex;
  justify-content: space-between;
  padding:0 .2rem;
  align-items: center;
  box-sizing: border-box;
  border-top: 1px solid #ccc;
}
.router-link-active{
  color:red;
}
</style>
