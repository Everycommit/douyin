<template>
    <div class="box">
        <div class="xin" ref="xin">
            <i v-show="xinshow" class="iconfont icon-xin2"></i>
        </div>
        <div class="content"  @click='xinxin'>
            <div class="danmu">
                <marquee v-for="(item,index) in resdata.msg" :key="index">{{item.txt}}</marquee> 
            </div>
            <div class="content-view">
                <div class="video">
                    <video controls src='http://vodkgeyttp8.vod.126.net/cloudmusic/IDEwMWA1ICImOSAwICIwZA==/mv/361153/baaeac3331840e0d1ae704b18e05e8a2.mp4?wsSecret=b2f40bcb24d081837b8ecdefd4a96acc&wsTime=1540888548'></video>
                </div>
            </div>
            
        </div>
        <div class="content-txt">
            <p>@{{resdata.tit}}</p>
            <p>{{resdata.txt}}</p>
            <p>{{resdata.bgc}}</p>
        </div>
        <div class="fixed">
            <div>
                <span>头像</span>
            </div>
            <div>
                <span @click="like" :data-txt='resdata.like' :data-id='resdata.id' :class="add?'active':''">点赞{{resdata.like}}</span>
            </div>
            <div>
                <span @click="contact">评论</span>
            </div>
            <div><span>分享</span></div>
        </div>    
        <div class="pinglun" ref='btnImg' v-show='flag' 
          @touchstart.stop='touchStart' 
          @touchmove.stop='touchMove' 
          @touchend.stop='touchEnd' >
            <div class="pinglun_top">
                <span></span>
                <span class="fontsmall">{{resdata.msg&&resdata.msg.length}}条评论</span>
                <span @click="close_contact">X</span>
            </div>
            <div class="pinglun_fabiao">
                <div class="pinglun_fabiao_every" v-for="(item,index) in resdata.msg" :key='index'>
                    <div>
                        <div>{{item.name}}</div>
                        <div>{{item.txt}}</div>
                        <div>{{item.date}}</div>
                    </div>
                    <div>{{item.dianzan}}</div>
                </div>

            </div>
            <div class="pinglun_liaotian">
              <input type="text" placeholder="有爱评论,说点好听的~" ref="ipt" :data-id='resdata.id'/><span @click="getOn">发表</span>
              <div>
                <span>@</span>
                <span>表情</span>
              </div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapState,mapActions} from 'vuex';
export default {
  name: '',
  data () {
    return {
      flag:false,
      add:false,
      xinshow:false
    }
  },
  computed:{
    ...mapState({
        resdata:(state)=>{
          return state.data.data
        }
    })
  },
  mounted(){
      this.getdata();
  },
  methods:{
     touchStart(e) {
      this.startY = e.touches[0].clientY;
    },
    touchMove(e) {
      e = e || event;
      e.preventDefault();
      let btnheight = this.$refs.btnImg.getBoundingClientRect().height;
      if (e.touches.length == 1) {
        this.moveY = e.touches[0].clientY;
      }
      this.disY = this.moveY - this.startY;
      if (this.disY < 0 || this.disY == 0) {
        this.$refs.btnImg.style.transform = "translateY(0px)";
      } else if (this.disY > 0) {
        this.$refs.btnImg.style.transform = "translateY(" + this.disY + "px)";
      }
    },
    touchEnd(e) {
      this.$refs.btnImg.style.transform = "";
      if (this.disY >= window.innerHeight * 0.35) {
        this.flag = false;
      }
    },
    ...mapActions({
      getdata:'data/getdata',
      dianzan:'data/dianzan',
      pinglun:'data/pinglun'
    }),
    contact(){
      this.flag=true;//打开评论
    },
    close_contact(){
      this.flag=false;//关闭评论
    },
    //点赞
    like(e){
        this.add=!this.add
        let obj={
          ids:e.target.dataset.id,
          txt:e.target.dataset.txt,
          add:this.add
        }
        this.dianzan(obj)
    },
    //评论
    getOn(){
      let obj={
        id:this.$refs.ipt.dataset.id,
        val:this.$refs.ipt.value.trim()
      }
      this.pinglun(obj)
    },
    xinxin(e){
      this.xinshow=true;
      setTimeout(()=>{
        this.xinshow=false;
      },300)
      this.$refs.xin.style.left=e.pageX+'px';
      this.$refs.xin.style.top=e.pageY-45+'px';
    }
  }
}
</script>
<style  scoped>
.icon-xin2{
  color:red;
}
.xin{
  position: absolute;
}
.box{
  width:100%;
  height: 100%;
  position: relative;
}
.content{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* position: relative; */
}
/* .content-txt{
  position: absolute;
  bottom: .2rem;
  left: .2rem;
} */
.content-view{
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.content-txt{
  bottom: 0;
  position: absolute;
  width: 100%;
  padding: .2rem .2rem;
  box-sizing: border-box;
}
.fixed{
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  padding: .2rem .2rem;
  box-sizing: border-box;
  flex-direction: column;
}
.fixed>div{
  margin: .2rem 0;
}
.pinglun{
  width:100%;
  height:70%;
  background-color: #000;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 0 .2rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  color: #fff;
}
.pinglun_top{
  width: 100%;
  height: .8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.fontsmall{
  font-size: .24rem;
}
.pinglun_top span{
  color: #fff;
}
.pinglun_fabiao{
  flex:1;
  overflow: hidden;
  overflow-y: scroll;
}
.pinglun_liaotian{
  width: 100%;
  height: .8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.pinglun_liaotian>div>span{
  padding:0 .2rem
}
.pinglun_liaotian span{
  color: #fff;
}
.pinglun_liaotian input{
  background-color: #000;
  outline: none;
  border: none;
  color: #fff;
}
.pinglun_fabiao_every{
  width:100%;
  
}
.pinglun_fabiao_every div{
  color:#fff;
}
.active{
  color: red
}

.danmudonghua{
  position: absolute;
  animation: spin 4s linear infinite;/*鼠标hover时，i图标旋转,infinite表示动画无限循环*/
}
.danmu{
  position: absolute;
  width: 100%;
}
.video{
  width: 100%;
}
.video video{
  width: 100%;
}
@keyframes spin {
  from {
    transform: translateX(200%);
  }
  to {
    transform: translateX(-100%);
  }
}

</style>
