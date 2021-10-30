<template>
  <div id="textPreview" :style="{fontSize:fontsize}">
     <span class="singleWord" v-for="item in textlist" :key="item.key">{{item.word}}</span>
  </div>
</template>

<script>
export default {
    name:"TextPreview",
    data () {
        return {
            text:"现在预览的是文本框字体大小和播放速度的情况，您可以根据您的观感调整上面的选项。",
        }
    },
    mounted () {
    },
    computed: {
        textlist(){
            let textArray = this.text.split("");
            let textlists =  textArray.map((item,index)=>{
                return {word:item,key:index}
            })
            if(this.wordnum>textArray.length+(1000/35))
            {
                this.clearword();
            }
            return textlists.slice(0,this.wordnum);
        },
        fontsize(){
            return this.$store.state.Settings.font_size;
        }
    },
    props: ['wordnum','clearword']
}
</script>

<style scoped>
#textPreview{
    color: white;
    background-color: rgba(0,0,0,0.4);
    font-size: medium;
    padding: 10px 10px 10px 10px;
    margin: 10px 10px 10px 10px;
    border: 3px solid rgba(255,255,255,1);
    width: 95%;
    min-height: 20vh;
}
.singleWord{
    animation: showSoftly 0.5s;
}

@-webkit-keyframes showSoftly /* Safari 与 Chrome */
{
    from {opacity: 0;}
    to {opacity: 100%;}
}

</style>