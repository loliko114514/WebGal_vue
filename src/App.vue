<template>
  <div id="app">
    <MesModel v-if="this.$store.state.showMesModel" />
    <WGBacklog v-if="this.$store.state.showBacklog" />
    <WGScene v-if="this.$store.state.gamebegin"/>
    <WGTitle v-else/>
    <WGSave v-if="this.$store.state.showSave" />
    <WGLoad v-if="this.$store.state.showLoad" />
    <WGsetting v-if="this.$store.state.showsetting"/>
  </div>
</template>

<script>
import WGTitle from './components/WGTitle.vue'
import WGsetting from './components/settings/WGsettings.vue'
import WGScene from './components/WGScene.vue'
import WGSave from './components/WGSave.vue'
import WGLoad from './components/WGLoad.vue'
import WGBacklog from './components/WGBacklog.vue'
import MesModel from './components/MesModel.vue'
import { modulesMixin } from './utils/mixin'
export default {
  mixins:[modulesMixin],
  name: 'App',
  components: {
    WGTitle,
    WGsetting,
    WGScene,
    WGSave,
    WGLoad,
    WGBacklog,
    MesModel
  },
  mounted(){
    this.getGameInfo();
    this.loadCookie();
  },
  methods:{

  }

}
</script>

<style>
::-webkit-scrollbar {
display: none;
}
* {
    margin: 0;
    padding: 0;
    user-select:none;
}
@keyframes showSoftly /* Safari 与 Chrome */
{
    from {opacity: 0;}
    to {opacity: 100%;}
}
</style>
