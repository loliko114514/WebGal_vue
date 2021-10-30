const actions = {
    getScene:({commit},url)=>{return commit('getScene',url)},
    getGameInfo:({commit})=>{return commit('getGameInfo')},
    clearCookie:({commit})=>{return commit('clearCookie')},
    loadCookie:({commit})=>{return commit('loadCookie')},
    writeCookie:({commit})=>{return commit('writeCookie')},
    SyncCurrentStatus:({commit},statusKey,newStatus)=>{return commit('SyncCurrentStatus',statusKey,newStatus)},
    saveGame:({commit},index)=>{return commit('saveGame',index)},
    LoadSavedGame:({commit},index)=>{return commit('LoadSavedGame',index)},
    LoadBacklog:({commit},index)=>{return commit('LoadBacklog',index)},
    showMesModel:({commit},info)=>{return commit('showMesModel',info)},
    processSentence:({commit},i)=>{return commit('processSentence',i)},
    nextSentenceProcessor:({commit})=>{return commit('nextSentenceProcessor')},
    autoPlay:({commit})=>{return commit('autoPlay')},
}

export default actions