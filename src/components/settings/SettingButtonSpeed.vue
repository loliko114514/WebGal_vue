<template>
  <div id="SettingButtonSpeed">
      <span class="singleSettingItem">
            <span class="settingItemTitle">播放速度</span>
            <span :class="'settingItemButton'+buttonState[0]" @click="changeButtonState(0)">慢</span>
            <span :class="'settingItemButton'+buttonState[1]" @click="changeButtonState(1)">中</span>
            <span :class="'settingItemButton'+buttonState[2]" @click="changeButtonState(2)">快</span>
        </span>
  </div>
</template>

<script>
export default {
    name:"SettingButtonSpeed",
    data () {
        return {
        }
    },
    computed:{
        buttonState(){
            switch(this.$store.state.Settings.play_speed){
                case 55:
                    return ['On','',''];
                case 35:
                    return ['','On',''];
                case 20:
                    return ['','','On'];
                default:
                    return ['','On',''];
            }
        }
    },
    methods: {
        changeButtonState(size){
            switch(size){
                case 0:
                    this.$store.state.Settings.play_speed=55;
                    break;
                case 1:
                    this.$store.state.Settings.play_speed=35;
                    break;
                case 2:
                    this.$store.state.Settings.play_speed=20;
                    break;
                default:
                    this.$store.state.Settings.play_speed=35;
                    break;
            }
            this.clearword();
        }
    },
    props: ['clearword']
}
</script>

<style scoped>
.singleSettingItem{
    margin: 15px 45px 0 0;
    padding: 5px 0 5px 0;
    font-size: x-large;
}
.settingItemTitle{
    font-size: xx-large;
    border-bottom: 2px solid #8E354A;
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

</style>