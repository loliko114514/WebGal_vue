<template>
    <div id="backlog">
        <div id="closeBl" @click.stop="closeBacklog()">
            <img src="../img/closeWhite.svg" class="closeSVG" alt="close">
        </div>
        <SingleElements />
    </div>
</template>

<script>
import SingleElements from './backlog/SingleElements.vue'
export default {
    name:"WGBacklog",
    components: {
        SingleElements
    },
    methods:{
        closeBacklog(){
            this.$store.state.showBacklog = false;
            this.$store.state.hideTextStatus = false;
        }
    }
}
</script>

<style scoped>
#backlog{
    color: white;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    z-index: 14;
    background-color: rgba(0,0,0,0.5);
    background-image: linear-gradient(rgba(255,255,255,0) 0%,rgba(255,255,255,0) 75%,rgba(255,255,255,0.3)100%);
    /*border-radius: 15px;*/
    -webkit-animation: showSoftly 0.5s;
    padding: 15px 1% 15px 1%;
}
.closeSVG{
    width: 45px;
    height:45px;
}

</style>