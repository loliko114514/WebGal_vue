<template>
  <div id="mainBackground" :style="{backgroundImage:`url(${require('../../../public/game/background/'+beginBackgroundImg)})`}" >
  </div>
</template>

<script>
export default {
    name:"MainBackground",
    computed: {
        beginBackgroundImg(){
            return this.$store.state.currentInfo.bg_Name;
        }
    }
}
</script>

<style scoped>
#mainBackground{
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    background-repeat: no-repeat;
    background-size:cover;
    animation: showSoftly 0.5s;
}
</style>