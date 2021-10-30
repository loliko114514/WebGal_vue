<template>
    <div id="SaveMain" class="LS_renderMain">
        <SLTab :pagelist="pagelist" :changeindex="changeindex" />
        <SLWin :clickindex="clickindex" :act="act" />
    </div>
</template>

<script>
import SLTab from './SLTab.vue'
import SLWin from './SLWin.vue'
export default {
    name:"SaveModel",
    components:{
        SLTab,
        SLWin
    },
    data () {
        return {
            clickindex:0,
            act:'save'
        }
    },
    computed:{
        pagelist(){
            let list = [];
            for(let i=0;i<10;i++){
                list[i]='';
            }
            list[this.clickindex]='On';
            return list;
        }
    },
    methods:{
        changeindex(index){
            this.clickindex=index;
        }
    }
}
</script>

<style scoped>
.LS_renderMain{
    width: 100%;
    height: 90%;
}
</style>