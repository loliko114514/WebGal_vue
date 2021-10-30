<template>
  <div id="SceneText" :style="{fontSize:fontSize}">
    <span class="singleWord" v-for="item in textlist" :key="item.key">{{item.word}}</span>
  </div>
</template>

<script>
export default {
  name:"SceneText",
  data () {
    return {
      interval:1,
      wordnum:0
    }
  },
  computed: {
      fontSize(){
        return this.$store.state.Settings.font_size;
      },
      showText(){
        return this.$store.state.currentInfo.showText;
      },
      textlist(){
        let textArray = this.showText.split("");
        let textlists =  textArray.map((item,index)=>{
            return {word:item,key:index}
        })
        if(this.wordnum>textArray.length+(1000/35))
        {
            clearInterval(this.interval);
        }
        return textlists.slice(0,this.wordnum);
      },
      wordClickEnd(){
        return this.$store.state.showingText;
      }
  },
  watch: {
    showText(val){
      if(this.$store.state.fast===0){
        this.wordnum =0;
        this.interval =setInterval(()=>{
          this.wordnum +=1;
        },this.$store.state.Settings.play_speed)
      }else{
        clearInterval(this.interval) 
        this.wordnum =val.length+1;
      }
    },
    textlist(newVal,oldVal){
      this.$store.state.showingText=true;
      if(newVal.length==oldVal.length){
        clearInterval(this.interval);
        this.$store.state.showingText=false;
      }
    },
    wordClickEnd(newVal,oldVal){
      if(oldVal==true&&newVal==false){
        this.wordnum=this.showText.split("").length;
      }
    }
  },
  mounted(){
    this.wordnum =0;
      this.interval =setInterval(()=>{
        this.wordnum +=1;
      },this.$store.state.Settings.play_speed)
  }
}
</script>

<style scoped>
#SceneText{
    padding: 15px 0 0 0;
    color: white;
    font-size: 200%;
    overflow: hidden;
    height: 60%;
}
.singleWord{
    animation: showSoftly 0.5s;
}
</style>