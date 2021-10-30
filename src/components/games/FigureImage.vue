<template>
    <div v-if="checkUrl" id="figureImage">
        <img :src="pUrl" alt='figure' class='p_center'/>
    </div>
</template>

<script>
export default {
    name:"FigureImage",
    computed:{
        pUrl(){
            if(this.$store.state.currentInfo.fig_Name==="")
                return "";
            else
                return require('../../../public/game/figure/'+this.$store.state.currentInfo.fig_Name);
        },
        checkUrl(){
            if(this.$store.state.currentInfo.fig_Name==="")
                return false;
            else
                return true;
        }
    }
}
</script>

<style scoped>
#figureImage{
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    top:5px;
    bottom: 0;
    z-index:2;
    animation: showSoftly 0.5s;
    /*min-width: 600px;*/
    /*overflow: hidden;*/
}

</style>