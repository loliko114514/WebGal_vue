<template>
  <div id="SettingButtonFont">
      <span class="singleSettingItem">
            <span class="settingItemTitle">字体大小</span>
            <span :class="'settingItemButton'+buttonState[0]" @click="changeButtonState(0)">小</span>
            <span :class="'settingItemButton'+buttonState[1]" @click="changeButtonState(1)">中</span>
            <span :class="'settingItemButton'+buttonState[2]" @click="changeButtonState(2)">大</span>
        </span>
  </div>
</template>

<script>
export default {
    name:"SettingButtonFont",
    data () {
        return {
            
        }
    },
    computed:{
        buttonState(){
            let num = this.$store.state.Settings.font_size.split("%")[0];
            let button = ['','',''];
            button[(num-150)/50]='On';
            return button;
        }
    },
    methods: {
        changeButtonState(size){
            this.$store.state.Settings.font_size=150+size*50+'%';
        }
    }
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