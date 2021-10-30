<template>
<div id="pName">
    <span>{{name}}</span>
</div>
</template>

<script>
export default {
    name:"PName",
    computed: {
        name(){
            return this.$store.state.currentInfo.showName;
        }
    }
}
</script>

<style scoped>
#pName{
    color: white;
    font-size: x-large;
    /*background-color: rgba(255,255,255,0.7);*/
    padding: 3px 7px 3px 7px;
    /*border-radius: 5px;*/
    border-bottom: 2px solid rgba(255,255,255,0.5);
    width: 30%;
    /*background-color: rgba(0,0,0,0.5);*/
    /*border-radius: 5px;*/
}
</style>