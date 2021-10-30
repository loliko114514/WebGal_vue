<template>
    <div id="WGScene" @click="next()">
        <ChooseBox v-if="this.$store.state.showChooseBox" />
        <MainBackground />
        <FigureImage />
        <FigureImageLeft />
        <FigureImageRight />
        
        <WGbottomBox v-show="!this.$store.state.hideTextStatus" />
        <div id="bgm"></div>
        <div id="vocal"></div>
        <div id="panic-overlay"></div>
    </div>
</template>

<script>
import WGbottomBox from './games/WGbottomBox.vue'
import MainBackground from './games/MainBackground.vue'
import FigureImage from './games/FigureImage.vue'
import FigureImageLeft from './games/FigureImageLeft.vue'
import FigureImageRight from './games/FigureImageRight.vue'
import ChooseBox from './games/ChooseBox.vue'
import { modulesMixin } from '../utils/mixin'
export default {
    mixins:[modulesMixin],
    name:"WGScene",
    components:{
        WGbottomBox,
        MainBackground,
        FigureImage,
        FigureImageLeft,
        FigureImageRight,
        ChooseBox
    },
    computed:{
        
    },
    methods:{
        next(){
            this.nextSentenceProcessor();
        }
    }
    
}
</script>

<style ccoped>

</style>