<template>
    <div id="bottomBox">
        <div id="top_control">
            <span class="top_button" @click.stop="hideTextBox()">
                <img src="../../img/cross.svg" style="width: 22px;height: 22px">
            </span>
            <span class="top_button" @click.stop="showBacklog()" >
                <img src="../../img/up.svg" style="width: 25px;height: 25px">
            </span>
        </div>
        <div id="mainTextWindow">
                <PName />
                <SceneText />
        </div>
        <div id="controlBar">
            <ControlButton v-for="item in controlButtonList" :key="item.index" :index="item.index" :name="item.name" :simpleName="item.simpleName" :color="item.color" :fun="item.fun" :classlist="classlist" :selectclass="selectclass"/>
        </div>
    </div>
</template>

<script>
import ControlButton from './bottomitem/ControlButton.vue'
import PName from './bottomitem/PName.vue'
import SceneText from './bottomitem/SceneText.vue'
export default {
    name:"WGbottomBox",
    components:{
        ControlButton,
        PName,
        SceneText
    },
    data () {
        return {
            controlButtonList:[
                {   
                    index:0,
                    name:'重复',
                    simpleName:'V',
                    color:'#FEDFE1',
                    fun:'repeat'
                },
                {
                    index:1,
                    name:'自动',
                    simpleName:'A',
                    color:'#FB966E',
                    fun:'auto'
                },
                {
                    index:2,
                    name:'快进',
                    simpleName:'F',
                    color:'#FBE251',
                    fun:'fast'
                },
                {
                    index:3,
                    name:'存档',
                    simpleName:'S',
                    color:'#A5DEE4',
                    fun:'showsave'
                },
                {
                    index:4,
                    name:'读档',
                    simpleName:'L',
                    color:'#58B2DC',
                    fun:'showload'
                },
                {
                    index:5,
                    name:'设置',
                    simpleName:'C',
                    color:'#B28FCE',
                    fun:'setting'
                },
                {
                    index:6,
                    name:'标题',
                    simpleName:'T',
                    color:'#BDC0BA',
                    fun:'title'
                }
            ],
            classlist:[' ',' ',' ',' ',' ',' ',' ']
        }
    },
    methods:{
        selectclass(index=7){
            this.classlist=[' ',' ',' ',' ',' ',' ',' '];
            this.classlist[index]=' ButtonSelected';
        },
        showSaveBox(){
            return this.$store.state.showSave=true;
        },
        showLoadBox(){
            return this.$store.state.showSave=true;
        },
        hideTextBox(){
            this.$store.state.hideTextStatus =true;
        },
        showBacklog(){
            this.$store.state.showBacklog=true;
            this.$store.state.hideTextStatus = true;
        }
    }
}
</script>

<style>
#bottomBox{
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 35%;
}
#top_control{
    position: absolute;
    top:26px;
    z-index: 4;
    width: 100%;
    padding: 0 35px 0 0;
}
.top_button{
    float: right;
    margin: 0 25px 0 0;
    cursor: pointer;
}
.top_button:hover{
    background-color: rgba(255,255,255,0.15);
    box-shadow: 0 0 25px rgba(255,255,255,0.5);
}
#mainTextWindow{
    /*background-color: rgba(86,108,115,0.8);*/
    /*background-color: rgba(0,0,0,0.5);*/
    padding: 15px 10% 15px 10%;
    width: 100%;
    margin: 0 0 0 0;
    z-index: 3;
    background-image: linear-gradient(rgba(0,0,0,0.5) 0%,rgba(0,0,0,0.5) 40% ,rgba(0,0,0,0.5)100%);
    /*box-shadow: 5px 5px 10px rgba(0,0,0,0.3);*/
    /*border-radius: 10px;*/
}
#controlBar{
    position: absolute;
    bottom: 5px;
    display: flex;
    justify-content: center;
    width: 100%;
    z-index: 4;
}
</style>