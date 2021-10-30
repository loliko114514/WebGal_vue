<template>
    <div id="settings">
        <div id="settingsMainBox">
            <div id="close" @click="closeSettings()">
                <img src="../../img/closeBlack.svg" class="closeSVG" alt="close">
            </div>
            <div id="settingsTitle">
                设置
            </div>
            <SettingItem :clearword="clearword"/>
            <TextPreview :wordnum="wordnum" :clearword="clearword"/>
        </div>
    </div>
</template>

<script>
import TextPreview from './TextPreview.vue'
import SettingItem from './SettingItem.vue'
export default {
    name:"WGsetting",
    components: {
        SettingItem,
        TextPreview
    },
    data () {
        return {
            wordnum:0,
            interval2:1
        }
    },
    computed: {
        wordspeed(){
            return this.$store.state.Settings.play_speed;
        }
    },
    methods: {
        closeSettings(){
            this.$store.state.showsetting = false;
        },
        wordgo(){
            this.wordnum +=1;
        },
        clearword(){
            this.wordnum=0;
        }
    },
    mounted(){
        this.interval2 =setInterval(()=> {
            this.wordgo();
        },this.$store.state.Settings.play_speed)
        console.log(this.interval2);
    },
    watch: {
        wordspeed(val){
            clearInterval(this.interval2);
            this.interval2 =setInterval(()=> {
                this.wordgo();
            },val)
        }
    }
}
</script>

<style scoped>

#settings{
    position: absolute;
    top: 20px;
    bottom: 20px;
    left: 45px;
    right: 45px;
    display: block;
    z-index: 15;
    background-color: rgba(255,255,255,0.95);
    background-image: linear-gradient(rgba(255,255,255,0) 0%,rgba(255,255,255,0) 75%,rgba(255,255,255,0.3)100%);
    /*border-radius: 15px;*/
    animation: showSoftly 0.5s;
    padding: 30px 30px 30px 30px;
    box-shadow: 5px 5px 15px rgba(0,0,0,0.5);
}

#settingsMainBox{
    color: #8E354A;
    display: block;
    padding: 15px 15px 15px 15px;
    width: 100%;
    overflow: scroll;
}

#settingsTitle{
    font-size: 250%;
}

#close{
}

@-webkit-keyframes showSoftly /* Safari 与 Chrome */
{
    from {opacity: 0;}
    to {opacity: 100%;}
}





.closeSVG{
    width: 45px;
    height:45px;
}

.settingItemButton{
    padding: 3px 15px 3px 15px;
    min-width: 50px;
    margin: 0 0 0 10px;
    color: rgba(0,0,0,0.7);
    /*border-bottom: 2px solid #FEDFE1;*/
    /*border-radius: 5px;*/
    text-align: center;
}

.settingItemButton:hover{
    /*background-color: rgba(0,0,0,0.1);*/
    color: #8E354A;
    font-weight: bold;
    border-bottom: 2px solid #8E354A;
}

.settingItemButtonOn{
    background-color: rgba(219,77,109,0.05);
    padding: 3px 15px 3px 15px;
    min-width: 50px;
    margin: 0 0 0 10px;
    color: #8E354A;
    font-weight: bold;
    border-bottom: 2px solid #8E354A;
    /*border-radius: 5px;*/
    text-align: center;
}

#previewDiv{
    width: 100%;
}




div.importer-exporter {
    margin-bottom: 15px;
}

div.importer-exporter span {
    margin-right: 45px;
}

div.importer-exporter span:hover {
    color: rgba(0, 0, 0, 0.8);
    background-color: rgba(0, 0, 0, 0.1);
}
</style>