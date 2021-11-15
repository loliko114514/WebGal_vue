<template>
  <div id="vocal">
      <audio :src="bgmUrl"
        ref="audio" 
        controls="controls" />
  </div>
</template>

<script>
export default {
    name:"SceneVocal",
    data () {
        return {
        }
    },
    computed:{
        bgmUrl(){
           if(this.$store.state.currentInfo.vocal===''){
               return "";
           }else
           {
               console.log("bgm",this.$store.state.currentInfo.vocal)
               return require('../../public/game/vocal/'+this.$store.state.currentInfo.vocal);
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