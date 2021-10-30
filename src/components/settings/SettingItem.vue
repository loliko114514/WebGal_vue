<template>
  <div id="settingItems">
      <div class="singleSettingItem">
            <SettingButtonFont />
            <SettingButtonSpeed :clearword="clearword"/>
            <div class="deleteCookie" @click="deleteCookie()">清除所有设置选项以及存档</div>
            <!-- <ImporterExporter /> -->
            <div>本作品由 WebGAL 强力驱动，<a href="https://github.com/MakinoharaShoko/WebGAL">了解 WebGAL</a>。</div>
            <br/>
            <div class='settingItemTitle'>效果预览</div>
        </div>
  </div>
</template>

<script>
import SettingButtonFont from './SettingButtonFont.vue'
import SettingButtonSpeed from './SettingButtonSpeed.vue'
import { modulesMixin } from '../../utils/mixin'
export default {
    mixins:[modulesMixin],
    name:"SettingItem",
    components: {
        SettingButtonFont,
        SettingButtonSpeed
    },
    methods: {
        deleteCookie(){
            let info={
                title:'你确定要清除缓存吗',
                left:'要',
                right:'不要',
                funs:'deleteCookie'
            }
            this.showMesModel(info);
            // showMesModel('你确定要清除缓存吗','要','不要',clearCookie)
            // this.clearCookie();
            // console.log("清除缓存");
            // console.log(this.$store.state.Saves);
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

.deleteCookie{
    margin: 15px 0 15px 0;
    width: auto;
 }

.deleteCookie:hover{
    color: rgba(0,0,0,0.8);
    background-color: rgba(0,0,0,0.1);
}
.settingItemTitle{
    font-size: xx-large;
    border-bottom: 2px solid #8E354A;
}
a{
    color: #8E354A;
}

a:hover{
    color: #FEDFE1;
}

a:visited{
    color: #8E354A;
}
</style>