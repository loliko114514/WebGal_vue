<template>
    <div id="Load" class="LS_Main">
        <div id="loadMainBox" class="LS_mainBox">
            <div id="closeLoad" @click="closeLoad()">
                <img src="../img/closeBlack.svg"  class="closeSVG" id="LoadClose" alt="close">
            </div>
            <div id="LoadTitle">
                读档
            </div>
            <div id="LoadItems" class="LS_Items">
                <LoadModel />
            </div>
        </div>
    </div>
</template>

<script>
import LoadModel from './saveorload/LoadModel.vue'

export default {
    name:"WGLoad",
    components: {
        LoadModel
    },
    methods:{
        closeLoad(){
            this.$store.state.showLoad = false;
        }
    }
}
</script>

<style scoped>
.LS_Main{
    position: absolute;
    top: 20px;
    bottom: 20px;
    left: 45px;
    right: 45px;
    z-index: 14;
    background-color: rgba(255,255,255,0.95);
    /*background-image: linear-gradient(rgba(255,255,255,0) 0%,rgba(255,255,255,0) 75%,rgba(255,255,255,0.3)100%);*/
    /*border-radius: 15px;*/
    animation: showSoftly 0.5s;
    padding: 30px 30px 30px 30px;
    box-shadow: 5px 5px 15px rgba(0,0,0,0.5);
}

.LS_Items{
    padding: 5px 10px 10px 10px;
    height: 75%;
    display: flex;
    justify-items: center;
    justify-content: center;
}

.LS_mainBox{
    height: 100%;
}
#LoadTitle{
    color: #005CAF;
    font-size: 250%;
    padding: 5px 10px 5px 10px ;
}
.closeSVG{
    width: 45px;
    height:45px;
}

</style>