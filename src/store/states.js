const state = {
    GameInfo:{
        Game_name:'WebGAL Demo',
        Game_key:'WG_default',
        Title_img:'Title.png',
        Title_bgm:'夏影.mp3'
    },
    currentInfo:{
        SceneName:'',//场景文件名
        SentenceID:0,//语句ID
        bg_Name:'',//背景文件名
        fig_Name:'',//立绘_中 文件名
        fig_Name_left:'',//立绘_左 文件名
        fig_Name_right:'',//立绘_右 文件名
        showText:'',//文字
        showName:'',//人物名
        command:'',//语句指令
        choose:'',//选项列表
        vocal:'',//语音 文件名
        bgm:''//背景音乐 文件名
    },
    TimeInfo:{
        setAutoWaitTime: 1500,
        autoWaitTime: 1500,
        textShowWatiTime: 35,
    },
    Settings: {
        font_size: "200%",
        play_speed:35
    },
    currentScene: '',
    auto:0,
    fast:0,
    onTextPreview: 0,
    showingText: false,
    hideTextStatus: false,
    showsetting:false,//显示设置
    gamebegin:false,//游戏开始
    showSave:false,//显示存档界面
    showLoad:false,//显示读档界面
    showBacklog:false,//显示回溯界面
    showMesModel:false,//显示确认选项
    showChooseBox:false,

    MesModelInfo:{
        title:'',
        left:'',
        right:'',
        funs:''
    },
    //初始化选择表
    mode:'',
    selection:[],

    // 初始化存档系统
    Saves:[],
    SaveBacklog:[],
    // 初始化backlog存储表
    CurrentBacklog:[],
    backlogRefresh:0,//骗computed更新
    //初始化需要记录到cookie的变量
    currentSavePage: 0,
    currentLoadPage: 0,
}

export default state