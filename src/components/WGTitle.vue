<template>
    <div id="Title" :style="{backgroundImage:`url(${require('../../public/game/background/'+beginBackgroundImg)})`}" >
      <div id="TitleModel">
        <div id="setButtonBottom">
          <div class="TitleSingleButton" id="leftTitleButton" @click="hideTitle()">开始游戏</div>
          <div class="TitleSingleButton" @click="continueGame()">继续游戏</div>
          <div class="TitleSingleButton" @click="onLoadGame()">读取存档</div>
          <div class="TitleSingleButton" @click="onSetting()">设置界面</div>
          <div class="TitleSingleButton" @click="exit()">退出游戏</div>
        </div>
      </div>
    </div>
</template>

<script>
import { modulesMixin } from '../utils/mixin'
export default{
  name:'WGTitle',
  mixins:[modulesMixin],
  data () {
    return {
      testval:123
    }
  },
  computed:{
    beginBackgroundImg(){
      return this.$store.state.GameInfo.Title_img;
    }
  },
  methods: {
    hideTitle(){
      this.$store.state.currentInfo={
          SceneName:'',
          SentenceID:0,
          bg_Name:'',
          fig_Name:'',
          fig_Name_left:'',
          fig_Name_right:'',
          showText:'',
          showName:'',
          command:'',
          choose:'',
          vocal:'',
          bgm:''
      },
      this.$store.state.gamebegin = true;
      this.getScene("start.txt");
    },
    continueGame(){
      if(this.$store.state.currentInfo.SentenceID===0)
      {
        this.getScene("start.txt");
      }
      this.$store.state.gamebegin = true;
    },
    onLoadGame(){
      this.$store.state.showLoad = true;
    },
    onSetting(){
      this.$store.state.showsetting = true;
    },
    exit(){
      let info={
        title:'你确定要退出吗',
        left:'退出',
        right:'留在本页',
        funs:'close'
      }
      this.showMesModel(info);
    }
  },
  props:['hidetitle']
    
}
</script>

<style scoped>
#Title{
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 11;
    background-repeat: no-repeat;
    background-size:cover;
    /* background-image: url(../game/background/Title1.png); */
}



#TitleModel{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 13%;
    background-color: rgba(0,0,0,0.7);
    /*background-image: linear-gradient(rgba(255,255,255,1) 0%,rgba(255,255,255,0) 30%,rgba(255,255,255,0)100%);*/
    z-index: 12;
}

#setButtonBottom{
    position: absolute;
    display: flex;
    justify-content: center;
    top: 15px;
    width: 100%;
    font-size: xx-large;
}

.TitleSingleButton{
    padding: 10px 10px 10px 10px;
    border-right: 2px solid #FEDFE1;
    color: white;
    width: 50%;
    text-align: center;
}

.TitleSingleButton:hover{
    background-color: rgba(255,255,255,0.2);
}


</style>