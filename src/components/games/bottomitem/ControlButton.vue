<template>
    <div :class="'newButton'+selectedclass" id="ControlButton" @click.stop="func()">
        <span class="nB_left" :style="{borderBottom: `3px solid ${color}`}">{{simpleName}}</span>
        <span class="nB_right">{{name}}</span>
    </div>
</template>

<script>
import {modulesMixin} from '../../../utils/mixin'
export default {
    mixins:[modulesMixin],
    name:"ControlButton",
    data () {
        return {
            playSpeed:35,
        }
    },
    computed:{
        selectedclass(){
            return this.classlist[this.index];
        }
    },
    methods: { 
        func(){
            let info={
                        title:'要返回到标题界面吗',
                        left:'是',
                        right:'不要',
                        funs:'backTitle'
                    }
            switch(this.fun){
                case 'repeat':

                    break;
                case 'auto':
                    if(this.$store.state.auto===0||this.$store.state.fast===1){
                        this.$store.state.auto=1;
                        this.$store.state.fast=0;
                        this.nextSentenceProcessor();
                        this.selectclass(this.index);

                    }else{
                        this.$store.state.auto=0;
                        this.selectclass();
                    }
                    break;
                case 'fast':
                    if(this.$store.state.auto===0||this.$store.state.fast===0){
                        this.$store.state.auto=1;
                        this.$store.state.fast=1;
                        this.$store.state.TimeInfo.autoWaitTime=100;
                        this.nextSentenceProcessor();
                        this.selectclass(this.index);

                        
                    }else{
                        this.$store.state.auto=0;
                        this.$store.state.fast=0;
                        this.$store.state.TimeInfo.autoWaitTime=1500;
                        this.selectclass();
                    }
                    break;
                case 'showsave':
                    this.$store.state.showSave =true;
                    break;
                case 'showload':
                    this.$store.state.showLoad =true;
                    break;
                case 'setting':
                    this.$store.state.showsetting =true;
                    break;
                case 'title':
                    this.showMesModel(info);
                    break;
            }
        },
    },
    props: ['index','name','simpleName','color','fun','classlist','selectclass']
}
</script>

<style scoped>
.ButtonSelected{
    background-color: rgba(255,255,255,0);
    box-shadow: 0 0 25px rgba(255,255,255,0.8);

}   
.newButton{
    margin: 0 15px 7px 0;
    cursor: pointer;
    color: rgba(225,225,225,1);
}

.newButton:hover{
    background-color: rgba(255,255,255,0.195);
    box-shadow: 0 0 25px rgba(255,255,255,0.5);
}
.nB_left{
    border-right: none;
    padding: 1px 7px 1px 7px;
    /*border-radius: 5px 5px 5px 5px;*/
    color: white;
    /*font-weight: bold;*/
    opacity: 0.8;
}

.nB_left:hover{

}


.nB_right{
    border-left:none;
    padding: 1px 5px 1px 5px;
    border-radius: 0 5px 5px 0;
}

.nB_right:hover{

}

</style>