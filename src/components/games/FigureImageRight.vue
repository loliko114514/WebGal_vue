<template>
    <div v-if="checkUrl" id="figureImage_right">
        <img  :src="pUrl" alt='figure' class='p_center'/>
    </div>
</template>

<script>
export default {
    name:"FigureImageRight",
    computed:{
        pUrl(){
            if(this.$store.state.currentInfo.fig_Name_right==="")
                return "";
            else
                return require('../../../public/game/figure/'+this.$store.state.currentInfo.fig_Name_right);
        },
        checkUrl(){
            if(this.$store.state.currentInfo.fig_Name_right==="")
                return false;
            else
                return true;
        }
    }
}
</script>

<style scoped>
#figureImage_right{
    right: 2%;
    width: 98%;
    position: absolute;
    display: flex;
    justify-content: right;
    top:5px;
    bottom: 0;
    z-index:2;
    animation: showSoftly 0.5s;
    /*min-width: 600px;*/
    /*overflow: hidden;*/
}
</style>