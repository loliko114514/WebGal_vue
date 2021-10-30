<template>
    <div id="MesModel">
        <div class="MesMainWindow">
            <div class="MesTitle">{{mesModelInfo.title}}</div>
            <div class="MesChooseContainer">
                <div class="MesChoose" @click="choose(true)">{{mesModelInfo.left}}</div>
                <div class="MesChoose" @click="choose(false)">{{mesModelInfo.right}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import {modulesMixin} from '../utils/mixin'
export default {
    mixins:[modulesMixin],
    name:"MesModel",
    computed:{
        mesModelInfo(){
            return this.$store.state.MesModelInfo;
        }
    },
    methods: {
        choose(bool){
            if(bool){
                switch(this.mesModelInfo.funs){
                    case 'deleteCookie':
                        this.deleteCookie();
                        this.$store.state.showMesModel = false;
                        break;
                    case 'backTitle':
                        this.backTitle();
                        this.$store.state.showMesModel = false;
                        break;
                    case 'close':
                        this.close();
                        break;
                    default:
                        break;
                }
            }else{
                this.$store.state.showMesModel = false;
            }
        },
        deleteCookie(){
            this.clearCookie();
            console.log("清除缓存");
            console.log(this.$store.state.Saves);
        },
        backTitle(){
            this.$store.state.gamebegin = false;
            this.$store.state.auto=0;
            this.$store.state.fast=0;
            this.$store.state.TimeInfo.autoWaitTime=1500;
            this.$store.state.showingText=false;
        },
        close(){
            window.close();
        }
    },
}
</script>

<style scoped>
#MesModel{
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 20;
    background-repeat: no-repeat;
    background-size:cover;
    background-color: rgba(0,0,0,0.25);
    display: block;
}

.MesMainWindow{
    background-color: rgba(255,255,255,1);
    color: black;
    position: relative;
    top: 35%;
    left:35%;
    width: 30%;
    /*height: 30%;*/
    border-radius: 10px;
    box-shadow: 5px 5px 15px rgba(0,0,0,0.3);
}

.MesTitle{
    text-align: center;
    padding: 20px 5px 5px 5px;
    font-size: 125%;
}

.MesChooseContainer{
    font-weight: bold;
    position: relative;
    bottom: 15px;
    text-align: center;
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 20px 0 0 0;
}

.MesChoose{
    font-weight: normal;
    padding: 5px 10px 5px 10px;
    text-align: center;
    color: #8E354A;
    margin: 0 10px 0 10px;
    border-bottom: 2px solid #8E354A;
}

.MesChoose:hover{
    background-color: rgba(0,0,0,0.1);
}
</style>