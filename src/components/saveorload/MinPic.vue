<template>
    <div id="ren_SE" class="miniPic">
        <span class="mini_fig mini_fig_left">
            <img v-if="checkleftFigUrl" :src="leftFigUrl" alt="mini_fig" class="mini_fig_pic"/>
        </span>
        <span class="mini_fig mini_fig_center">
            <img v-if="checkFigUrl" :src="FigUrl" alt="mini_fig" class="mini_fig_pic"/>
        </span>
        <span class="mini_fig mini_fig_right">
            <img v-if="checkrightFigUrl" :src="rightFigUrl" alt="mini_fig" class="mini_fig_pic"/>
        </span>
    </div>
</template>

<script>
export default {
    name:"MinPic",
    computed:{
        leftFigUrl(){
            return require("../../../public/game/figure/"+this.$store.state.Saves[this.picindex]["fig_Name_left"]);
        },
        FigUrl(){
            return require("../../../public/game/figure/"+this.$store.state.Saves[this.picindex]["fig_Name"]);
        },
        rightFigUrl(){
            return require("../../../public/game/figure/"+this.$store.state.Saves[this.picindex]["fig_Name_right"]);
        },
        checkleftFigUrl(){
            if(this.$store.state.Saves[this.picindex]["fig_Name_left"]!=='')
                return true;
            else
                return false;
        },
        checkFigUrl(){
            if(this.$store.state.Saves[this.picindex]["fig_Name"]!=='')
                return true;
            else
                return false;
        },
        checkrightFigUrl(){
            if(this.$store.state.Saves[this.picindex]["fig_Name_right"]!=='')
                return true;
            else
                return false;
        },
    },
    props:['picindex']
}
</script>

<style scoped>
.miniPic{
    width: 142px;
    height: 80px;
    position: relative;
    background-repeat: no-repeat;
    background-size:cover;
}

.mini_fig_pic{
    max-width: 142px;
    max-height: 80px;
    width: auto;
    height: auto;
}

.mini_fig{
    width: 142px;
    height: 80px;
    object-fit: cover;
}

.mini_fig_center{
    position: absolute;
    z-index: 21;
    width: 142px;
    height: 80px;
    display: flex;
    justify-content: center;
    justify-items: center;
}

.mini_fig_left{
    position: absolute;
    z-index: 20;
    width: 142px;
    height: 80px;
    display: flex;
    justify-content: left;
    justify-items: left;
}

.mini_fig_right{
    position: absolute;
    z-index: 22;
    width: 142px;
    height: 80px;
    display: flex;
    justify-content: right;
    justify-items: right;
}
</style>