const getters= {
    GameInfo:state=>state.GameInfo,
    currentInfo:state=>state.currentInfo,
    TimeInfo:state=>state.TimeInfo,
    Settings:state=>state.Settings,
    currentScene:state=>state.currentScene,
    auto:state=>state.auto,
    fast:state=>state.fast,
    onTextPreview:state=>state.onTextPreview,
    showingText:state=>state.showingText,
    hideTextStatus:state=>state.hideTextStatus,
    showsetting:state=>state.showsetting,
    gamebegin:state=>state.gamebegin,
    Saves:state=>state.Saves,
    SaveBacklog:state=>state.SaveBacklog,
    CurrentBacklog:state=>state.CurrentBacklog,
    currentSavePage:state=>state.currentSavePage,
    currentLoadPage:state=>state.currentLoadPage,
}

export default getters