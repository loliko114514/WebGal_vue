import { mapGetters, mapActions } from "vuex"
export const modulesMixin = {
  computed: {
    ...mapGetters([
        'GameInfo',
        'currentInfo',
        'TimeInfo',
        'Settings',
        'currentScene',
        'auto',
        'fast',
        'onTextPreview',
        'showingText',
        'hideTextStatus',
        'showsetting',
        'showSave',
        'showLoad',
        'gamebegin',
        'Saves',
        'SaveBacklog',
        'CurrentBacklog',
        'currentSavePage',
        'currentLoadPage',
    ])
  },
  methods: {
    ...mapActions([
      'getScene',
      'getGameInfo',
      'clearCookie',
      'loadCookie',
      'writeCookie',
      'SyncCurrentStatus',
      'saveGame',
      'LoadSavedGame',
      'LoadBacklog',
      'processSentence',
      'showMesModel',
      'nextSentenceProcessor',
      'autoPlay'
    ])
  }
}