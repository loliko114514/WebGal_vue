<template>
    <div id="Save" class="LS_Main">
        <div id="saveMainBox" class="LS_mainBox">
            <div id="closeSave" @click="closeSave()">
                <img src="../img/closeBlack.svg" class="closeSVG" alt="close">
            </div>
            <div id="SaveTitle">
                存档
            </div>
            <div id="SaveItems" class="LS_Items">
                <SaveModel />
            </div>
        </div>
    </div>
</template>

<script>
import SaveModel from './saveorload/SaveModel.vue'
export default {
    name:"WGSave",
    components:{
        SaveModel
    },
    methods:{
        closeSave(){
            this.$store.state.showSave = false;
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
#SaveTitle{
    color: #77428D;
    font-size: 250%;
    padding: 5px 10px 5px 10px ;
}
.closeSVG{
    width: 45px;
    height:45px;
}

</style>