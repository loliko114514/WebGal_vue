<template>
    <div id="chooseBox">
        <div class='singleChoose' v-for="(item,index) in selection" :key="index" @click="choose(item.laburl,item.mode)">{{item.text}}</div>
    </div>
</template>

<script>
import {modulesMixin} from '../../utils/mixin'
export default {
    mixins:[modulesMixin],
    name:"ChooseBox",
    computed:{
        selection(){
            let list = [];
            for(let i=0;i<this.$store.state.selection.length;i++){
                let select={
                text:this.$store.state.selection[i][0],
                laburl:this.$store.state.selection[i][1],
                mode:this.$store.state.mode
                }
                list.push(select)
            }
            console.log(list);
            return list;
        }
    },
    methods:{
        choose(laburl,mode){
            console.log("laburl",laburl)
            console.log("mode",mode)
            if(mode==='scene'){
                this.$store.state.currentInfo["SceneName"] = laburl;
                this.getScene(laburl);
                this.$store.state.showChooseBox = false;
            }
            if(mode==='label'){
                let lab_name = laburl;
                //find the line of the label:
                let find = false;
                let jmp_sentence = 0;
                for (let i = 0; i < this.$store.state.currentScene.length; i++) {
                    if(this.$store.state.currentScene[i][0] === 'label' && this.$store.state.currentScene[i][1] === lab_name){
                        find = true;
                        jmp_sentence = i;
                    }
                }
                if(find){
                    this.$store.state.currentInfo['SentenceID']=jmp_sentence;
                    this.nextSentenceProcessor();
                    this.$store.state.showChooseBox = false;
                }else
                {
                    this.increaseSentence();
                    this.nextSentenceProcessor();
                    this.$store.state.showChooseBox = false;
                }
            }
            
        }
    },
}
</script>

<style scoped>
#chooseBox {
    position: absolute;
    top: 30%;
    bottom: 30%;
    left: 15px;
    right: 15px;
    display: block;
    z-index: 5;
    /*background-color: rgba(0, 0, 0, 0.1);*/
    /*background-image: linear-gradient(rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 75%, rgba(255, 255, 255, 0.3) 100%);*/
    /*border-radius: 15px;*/
    -webkit-animation: showSoftly 0.5s;
    justify-content: center;

}

.singleChoose{
    background-color: #FEDFE1;
    color: #8E354A;
    padding: 20px 15px 20px 15px;
    width: 30vw;
    margin: 10px 0 10px 0;
    border: 2px solid #8E354A;
    text-align: center;
    border-radius: 15px;
    font-size: xx-large;
}

.singleChoose:hover{
    background-color: rgba(255,255,255,1);
    font-weight: bold;
}

</style>