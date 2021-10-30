<template>
    <div id="SaveButtonList" class="LS_ButtonList">
        <div v-for="item in winlist" class="SaveSingleElement LS_singleElement" :key="item.index" @click="SaveorLoadFun(item.index)">
            <div v-if="item.haveSave" class="flexElement">
                <div class="ren"  :style="{backgroundImage: `url(${item.backUrl})`}">
                    <MiniPic :picindex="item.index" />
                </div>
                <div>
                    <div class="LSE_top">
                        <span class="LSE_index">{{item.i}}</span>
                        <span class="LSE_name">{{item.thisButtonName}}</span>
                    </div>
                    <div class="LSE_bottom">
                        {{item.thisButtonText}}
                    </div>
                </div>
            </div>
            <div v-else>空</div>
        </div>
    </div>
</template>

<script>
import MiniPic from './MinPic.vue'
import { modulesMixin } from '../../utils/mixin'
export default {
    mixins:[modulesMixin],
    name:"SaveWin",
    components:{
        MiniPic
    },
    data () {
        return {
            refresh:0
        }
    },
    computed:{
        winlist(){
            let list = [];
            for(let i=this.clickindex*6;i<this.clickindex*6+6;i++){
                if(this.$store.state.Saves[i]){
                    let item={
                        index: i,
                        thisButtonName: this.$store.state.Saves[i].showName,
                        thisButtonText: this.$store.state.Saves[i].showText,
                        backUrl: require("../../../public/game/background/"+this.$store.state.Saves[i].bg_Name),
                        haveSave:true,
                        refresh:this.refresh
                    }
                    this.$set(list,list.length,item);
                }else
                {
                    let noitem={
                        index: i,
                        thisButtonName: '',
                        thisButtonText: '',
                        backUrl: '',
                        haveSave:false,
                        refresh:this.refresh
                    }
                    this.$set(list,list.length,noitem);
                }
            }
            return list;
        },
    },
    methods:{
        SaveorLoadFun(index){
            if(this.act==='load'){
                this.LoadSavedGame(index);
                this.$store.state.showLoad=false;
                this.$store.state.gamebegin=true;
            }
            else if(this.act==='save'){
                this.refresh++;
                this.saveGame(index);
            }
        }
    },
    props:['clickindex','act']
}
</script>

<style scoped>
.ren{
    position: relative;
    top: 7px;
    width: 142px;
    height: 80px;
    background-color: white;
    background-repeat: no-repeat;
    background-size:cover;
    margin: 0 12px 0 0;
    border: 2px solid #8E354A;
    border-radius: 5px;
}

.LS_ButtonList{
    height: 100%;
    overflow: scroll;
    overflow-scrolling: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.LS_singleElement{
    overflow: hidden;
    margin: 15px 5px 5px 5px;
    width: 600px;
    height: 100px;
    font-size: xx-large;
    padding: 5px 10px 5px 10px;
    border: 2px solid rgba(0,0,0,0.15);
    background-color: rgba(255,255,255,0.95);
    box-shadow: 3px 3px 15px  rgba(0,0,0,0.05);
    display: flex;
}
.flexElement{
    display: flex;
}
.SaveSingleElement{
    color: #77428D;
}
.LSE_top{
    padding: 0 0 0 0;
    font-size: 75%;
    text-align: left;
}

.LSE_index{
    display: none;
    padding: 0 15px 0 15px;
    border: 2px solid #8E354A;
    margin: 0 5px 0 0;
    border-radius: 5px;

}
.LSE_bottom{
    height: 39px;
    color: rgba(0,0,0,0.8);
    margin: 3px 0 0 0;
    text-align: left;
    font-size: 60%;
    overflow: hidden;
    padding: 0 0 10px 0;
}
</style>