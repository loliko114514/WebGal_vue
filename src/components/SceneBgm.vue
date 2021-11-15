<template>
  <div id="bgm">
      <audio :src="bgmUrl"
        ref="audio" 
        loop="loop" controls="controls" />
  </div>
</template>

<script>
export default {
    name: "SceneBgm",
    data () {
        return {
        }
    },
    computed:{
        bgmUrl(){
           if(this.$store.state.currentInfo.bgm===''){
               return "";
           }else
           {
               console.log("bgm",this.$store.state.currentInfo.bgm)
               return require('../../public/game/bgm/'+this.$store.state.currentInfo.bgm);
           }
        },
    },
    watch:{
        bgmUrl(newVal,oldVal){
            console.log(oldVal+"-->"+newVal)
            if(newVal!=="")
            {
                this.play();
            }else{
                this.pause();
            }
        }
    },
    methods:{
        // 播放音频
        play () {
            console.log(this.$refs);
            this.$nextTick(()=>{this.$refs.audio.play()});
        },
        // 暂停音频
        pause () {
            this.$refs.audio.pause()
        },
    }
}
</script>

<style>

</style>