<template>
    <div id="backlogContent">
        <div class='backlog_singleElement' v-for="item in backloglist" :key="item.index" @click.stop="jumpFromBacklog(item.index)">
            <div class="backlog_name">{{item.showName}}</div>
            <div class="backlog_text">{{item.showText}}</div>
        </div>
    </div>
</template>

<script>
import { modulesMixin } from '../../utils/mixin'
export default {
    mixins:[modulesMixin],
    name:"SingleElements",
    computed:{
        backlogRefresh(){
            return this.$store.state.backlogRefresh;
        },
        backloglist(){
            let list = [];
            for(let i=this.$store.state.CurrentBacklog.length-1;i>=0;i--){
                let temp = {
                    index:i,
                    showName:this.$store.state.CurrentBacklog[i].showName,
                    showText:this.$store.state.CurrentBacklog[i].showText,
                    refresh:this.backlogRefresh
                }
                list.push(temp);
            }
            return list;
        }
    },
    methods:{
        jumpFromBacklog(index){
            this.LoadBacklog(index);
            this.$store.state.hideTextStatus=false;
            this.$store.state.showBacklog = false;
        }
    }
}
</script>

<style scoped>
#backlogContent{
    position: absolute;
    bottom: 5px;
    display: flex;
    flex-flow: column-reverse;
    width: 88%;
    padding: 0 5% 0 5%;
    height: 86%;
    overflow: scroll;
}
.backlog_singleElement{
    font-size: larger;
    border-top: 1px solid rgba(255,255,255,1);
    padding: 10px 0 10px 0;
    width: 100%;
}

.backlog_singleElement:hover{
    background-color: rgba(255,255,255,0.2);
}
.backlog_name{
    font-size: larger;
}

</style>