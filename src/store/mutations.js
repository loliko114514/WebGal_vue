let utils = require("../utils/util")

const mutations = {
    // 获取场景脚本
    getScene(state,url="start.txt") {
        state.currentInfo={
            SceneName:'',
            SentenceID:0,
            bg_Name:'',
            fig_Name:'',
            fig_Name_left:'',
            fig_Name_right:'',
            showText:'',
            showName:'',
            command:'',
            choose:'',
            vocal:'',
            bgm:''
        },
        console.log("getScene url",url);
        state.currentScene=utils.doResult("/game/scene/"+url);
        state.currentInfo['SentenceID']=0;
        state.currentInfo["SceneName"] = url;
        state.noSaveback = true;
        this.commit('nextSentenceProcessor');
    },
    //获取游戏信息
    getGameInfo(state) {
        state.GameInfo=utils.getGameInfo();
    },
    //其实是清除缓存
    clearCookie(state){
        let toCookie = {
            SavedGame:[],
            SavedBacklog:[],
            SP:0,
            LP:0,
            cSettings:{
                font_size: "200%",
                play_speed:35
            }
        }
        localStorage.setItem(state.GameInfo['Game_key'],JSON.stringify(toCookie));
        this.commit('loadCookie')
    },
    //其实是从localStorage读
    loadCookie(state){
        if(localStorage.getItem(state.GameInfo['Game_key'])){
            // let pre_process = document.cookie;
            // let fst = pre_process.split(';')[0];
            // let scd = document.cookie.slice(fst.length+1);
            let data = JSON.parse(localStorage.getItem(state.GameInfo['Game_key']));
            state.Saves = data.SavedGame;
            state.SaveBacklog = data.SavedBacklog;
            state.currentSavePage = data.SP;
            state.currentLoadPage  = data.LP;
            state.Settings = data.cSettings;
        }
    },
    //其实是修改localStorage
    writeCookie(state){
        // var expire = new Date((new Date()).getTime() + 20000 * 24 * 60 * 60000);//有效期20000天
        // expire = ";expires=" + expire.toGMTString();
        let toCookie = {
            SavedGame:state.Saves,
            SavedBacklog:state.SaveBacklog,
            SP:state.currentSavePage,
            LP:state.currentLoadPage,
            cSettings:state.Settings
        }
        // console.log(JSON.stringify(toCookie));
        localStorage.setItem(state.GameInfo['Game_key'],JSON.stringify(toCookie));
        // document.cookie = JSON.stringify(toCookie);
    },
    //修改场景变量
    SyncCurrentStatus(state,statusKey,newStatus) {
    if(statusKey ==='all')
    {
        for(let prop in newStatus){
            if(Object.prototype.hasOwnProperty.call(state.currentInfo,prop)){
                state.currentInfo[prop] = newStatus[prop];
            }
        }
    }
    else
    state.currentInfo[statusKey] = newStatus;
    },
    //存档
    saveGame(state,index){
        let tempInfo = JSON.stringify(state.currentInfo);
        state.Saves[index] = JSON.parse(tempInfo);
        let tempBacklog = JSON.stringify(state.CurrentBacklog);
        state.SaveBacklog[index]= JSON.parse(tempBacklog);
        let toCookie = {
            SavedGame:state.Saves,
            SavedBacklog:state.SaveBacklog,
            SP:state.currentSavePage,
            LP:state.currentLoadPage,
            cSettings:state.Settings
        }
        // console.log(JSON.stringify(toCookie));
        localStorage.setItem(state.GameInfo['Game_key'],JSON.stringify(toCookie));
    },
    //读档
    LoadSavedGame(state,index){
        // hideTitle('non-restart');
        let save = state.Saves[index];
        let url = 'game/scene/';
        url = url + save['SceneName'];
        // console.log('url',url)
        state.currentScene =utils.doResult(url);
        state.CurrentBacklog = state.SaveBacklog[index];
        
        // this.commit('SyncCurrentStatus','SentenceID',save["SentenceID"]);
        // VC_restoreStatus(save);
        // state.CurrentBacklog = state.SaveBacklog[index];
        for(let prop in save){
            if(Object.prototype.hasOwnProperty.call(state.currentInfo,prop)){
                state.currentInfo[prop] = save[prop];
            }
        }
        console.log(state.currentInfo);
    },
    //回溯
    LoadBacklog(state,index){
        // hideTitle('non-restart');
        let save = state.CurrentBacklog[index];
        for (let i = state.CurrentBacklog.length - 1 ; i > index ; i--){
            state.CurrentBacklog.pop();
        }
        let url = 'game/scene/';
        url = url + save['SceneName'];
        state.currentScene =utils.doResult(url);

        // this.commit('SyncCurrentStatus','SentenceID',save["SentenceID"]);
        // VC_restoreStatus(save);
        // state.CurrentBacklog = state.SaveBacklog[index];
        for(let prop in save){
            if(Object.prototype.hasOwnProperty.call(state.currentInfo,prop)){
                state.currentInfo[prop] = save[prop];
            }
        }
    },
    processSentence(state,i){//其实是写对话
        if(i<state.currentScene.length)
        {
            let vocal = '';
            if(state.currentScene[i][1] !== '')
            {
                let text = state.currentScene[i][1];
                if(state.currentScene[i][1].split('vocal-').length > 1)
                {
                    vocal = state.currentScene[i][1].split('vocal-')[1].split(',')[0];
                    text = state.currentScene[i][1].split('vocal-')[1].slice(state.currentScene[i][1].split('vocal-')[1].split(',')[0].length+1);
                }
                state.currentInfo["showName"]=state.currentScene[i][0];
                state.currentInfo["command"]=state.currentScene[i][0];
                state.currentInfo["showText"]=text;
                state.currentInfo["vocal"]=vocal;
                // return {name:getStatus('showName'),text:text,vocal:vocal};
            }
            else
            {
                let text = state.currentScene[i][0];
                if(state.currentScene[i][0].split('vocal-').length > 1){
                    vocal = state.currentScene[i][0].split('vocal-')[1].split(',')[0];
                    text = state.currentScene[i][0].split('vocal-')[1].slice(state.currentScene[i][0].split('vocal-')[1].split(',')[0].length+1);
                    text = text.split(";")[0];
                }
                state.currentInfo["showText"]=text;
                state.currentInfo["vocal"]=vocal;
                // return {name:getStatus('showName'),text:text,vocal:vocal};
            }
        }
    },
    showMesModel(state,info){
        state.showMesModel = true;
        state.MesModelInfo.title = info.title;
        state.MesModelInfo.left = info.left;
        state.MesModelInfo.right = info.right;
        state.MesModelInfo.funs = info.funs;
    },
    // increaseSentence(state){
    //     state.currentInfo['SentenceID']+=1;
    // },

    // 读取下一条脚本
    nextSentenceProcessor(state) {
        if(state.hideTextStatus){
            state.hideTextStatus = false;
            return;
        }
        if(state.showingText&&state.fast!==1){
            state.showingText = false;
            return;
        }//检测目前是否正在进行文字渐显，如果渐显，则终止渐显，直接读完文本
        let saveBacklogNow = false;//该变量决定此条语句是否需要加入到backlog
        if(state.currentInfo['SentenceID'] >= state.currentScene.length){
            return;
        }//如果超过场景文本行数，停止处理语句。
        let thisSentence = state.currentScene[state.currentInfo['SentenceID']];//此条语句的内容
        console.log("thisSentence",thisSentence)
        console.log("state.currentInfo['SentenceID']",state.currentInfo['SentenceID'])
        console.log("state.currentScene",state.currentScene)
        let command = thisSentence[0];//此条语句的控制文本（也可能是省略人物对话的语句）
        let S_content = thisSentence[1];
        if (command === 'changeBG') {
            // VC_changeBG(S_content);//界面控制：换背景
            state.currentInfo["bg_Name"]=S_content;//同步当前状态
            this.commit('autoPlay','on');//在非next语句下调用autoplay
        }//改背景
        else if(command === 'changeBG_next'){
            // VC_changeBG(S_content);
            state.currentInfo['SentenceID']+=1;
            state.currentInfo["bg_Name"]=S_content;
            this.commit('nextSentenceProcessor');
            return;
        }
        else if(command.substr(0,7) === 'changeP'){//人物立绘处理
            if(command.slice(-4) === 'next'){
                switch(command){
                    case 'changeP_next':
                        // VC_changeP(S_content,'center');
                        state.currentInfo['fig_Name']=S_content;
                        break;
                    case 'changeP_left_next':
                        // VC_changeP(S_content,'left');
                        state.currentInfo['fig_Name_left']=S_content;
                        break;
                    case 'changeP_right_next':
                        // VC_changeP(S_content,'right');
                        state.currentInfo['fig_Name_right']=S_content;
                        break;
                    default:
                        return;
                }
                state.currentInfo['SentenceID']+=1;
                this.commit('nextSentenceProcessor');
                return;
            }
            else{
                switch(command){
                    case 'changeP':
                        // VC_changeP(S_content,'center');
                        state.currentInfo['fig_Name']=S_content;
                        break;
                    case 'changeP_left':
                        // VC_changeP(S_content,'left');
                        state.currentInfo['fig_Name_left']=S_content;
                        break;
                    case 'changeP_right':
                        // VC_changeP(S_content,'right');
                        state.currentInfo['fig_Name_right']=S_content;
                        break;
                    default:
                        break;
                }
                this.commit('autoPlay','on');
            }
        }
        else if(command === 'bgm'){
            state.currentInfo["bgm"] = thisSentence[1];
            // loadBGM();
            state.currentInfo['SentenceID']+=1;
            this.commit('nextSentenceProcessor');
            return;
        }
        else if(command === 'changeScene'){
            this.state['SceneName']=S_content;
            this.commit('getScene',thisSentence[1]);
            return;
        }
        else if(command === 'choose'){//选项
            state.currentInfo['command']=command;
            state.currentInfo['choose']=S_content;
            let chooseItems =S_content;
            chooseItems = chooseItems.split("}")[0];
            chooseItems = chooseItems.split("{")[1];
            let selection = chooseItems.split(',')
            for (let i = 0;i<selection.length;i++){
                selection[i] = selection[i].split(":");
            }
            console.log('selection',selection)
            state.selection=selection;
            state.mode = 'scene';
            state.showChooseBox = true;
            return;
        }
        else if(command === 'choose_label'){
            this.commit('SyncCurrentStatus','command',command);
            this.commit('SyncCurrentStatus','choose',S_content);
            let chooseItems =S_content;
            chooseItems = chooseItems.split("}")[0];
            chooseItems = chooseItems.split("{")[1];
            let selection = chooseItems.split(',')
            for (let i = 0;i<selection.length;i++){
                selection[i] = selection[i].split(":");
            }
            console.log('selection',selection)
            state.selection = selection;
            state.mode = 'label';
            state.showChooseBox = true;
            // VC_choose(selection,'label')
            return;
        }
        else if(command === 'jump_label'){
            let lab_name = thisSentence[1];
            //find the line of the label:
            let find = false;
            let jmp_sentence = 0;
            for (let i = 0; i < state.currentScene.length; i++) {
                if(state.currentScene[i][0] === 'label' && state.currentScene[i][1] === lab_name){
                    find = true;
                    jmp_sentence = i;
                }
            }
            if(find){
                this.state.currentInfo['SentenceID']=jmp_sentence;
                this.commit('nextSentenceProcessor');
                return;
            }else
            {
                this.state.currentInfo['SentenceID']++;
                this.commit('nextSentenceProcessor');
                return;
            }
        }
        else if(command === 'label'){
            this.state.currentInfo['SentenceID']++;
            this.commit('nextSentenceProcessor');
            return;
        }
        // else if(command === 'intro'){
        //     let introText = thisSentence[1];
        //     showIntro(introText);
        //     return;
        // }
        else {
            state.currentInfo.command=command;
            this.commit('processSentence',state.currentInfo["SentenceID"])
            // VC_textShow(getStatus('showName'),getStatus('showText'));
            if(state.currentInfo["vocal"]!== ''){
                // playVocal();
            }
            saveBacklogNow = true;
            this.commit('autoPlay','on');
        }
        state.currentInfo['SentenceID']+=1;
        if(saveBacklogNow){
            if(state.CurrentBacklog.length<=500){
                let temp = JSON.stringify(state.currentInfo);
                state.CurrentBacklog[state.CurrentBacklog.length] = JSON.parse(temp);
                state.backlogRefresh++;
            }else{
                state.CurrentBacklog.shift();
                let temp = JSON.stringify(state.currentInfo);
                state.CurrentBacklog[state.CurrentBacklog.length] = JSON.parse(temp);
                state.backlogRefresh++;
            }
        }
    },
    autoPlay(state,active){
        if(state.auto === 1 && active === 'on'){
            setTimeout(()=>{
                if(state.auto === 1)
                    this.commit('nextSentenceProcessor');
            },state.TimeInfo.autoWaitTime);
        }
    }
}

export default mutations