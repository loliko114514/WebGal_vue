<template>
    <div id="SaveIndex" class="LS_Index">
        <span v-for="(item,index) in pagelist" :class="'SaveIndexButton'+item+' LS_indexButton'+item" @click="setCurrentPage(index)" :key="index">{{index+1}}</span>
    </div>
</template>

<script>
export default {
    name:"SaveTab",
    methods:{
        setCurrentPage(index){
            this.changeindex(index)
        }
    },
    props:['pagelist','changeindex']
}
</script>

<style scoped>
.LS_Index{
    padding: 5px 5px 7px 5px;
    width: 100%;
    border-bottom: 1px solid rgba(0,0,0,0.3);
}
.SaveIndexButton{
    color:#77428D;
}

.SaveIndexButton:hover{
    font-weight: bold;
    border-bottom: 2px solid #77428D;
}

.SaveIndexButtonOn{
    border-bottom: 3px solid #77428D;
    color:#77428D;
    background-color: rgba(119,66,141,0.07);
}
.LS_indexButton{
    font-size: large;
    padding: 5px 20px 5px 20px;
    margin: 0 5px 5px 5px;
}

.LS_indexButtonOn{
    font-weight: bold;
    padding: 5px 20px 5px 20px;
    margin: 0 5px 5px 5px;
}

.LS_indexButton:hover{
    font-weight: bold;
}
.SaveIndexButton{
    color:#77428D;
}
</style>