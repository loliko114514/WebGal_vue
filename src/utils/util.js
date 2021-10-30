function doResult(url) {
    let currentScene='';
    console.log('urlutil:',url)
    let getScReq = new XMLHttpRequest();
    console.log('now read scene')
    getScReq.onreadystatechange = function(){
        if (this.readyState === 4&&this.status === 200){
            currentScene = this.responseText;
            currentScene = currentScene.split('\n');
            for (let i = 0;i<currentScene.length;i++){
                let tempSentence = currentScene[i].split(";")[0];
                let commandLength = tempSentence.split(":")[0].length;
                let command = currentScene[i].split(":")[0];
                command = command.split(';')[0];
                let content = tempSentence.slice(commandLength+1);
                currentScene[i] = currentScene[i].split(":");
                currentScene[i][0] = command;
                currentScene[i][1] = content;
            }
        }
    }
    getScReq.open("get",url,false);
    getScReq.send();
    console.log(currentScene);
    return currentScene;
    
    // console.log('Read scene complete.');
    // console.log(currentScene);
    // SyncCurrentStatus('SentenceID',0);
    // nextSentenceProcessor();
}
function getGameInfo(){
    let GameInfo={
        Game_name:'WebGAL Demo',
        Game_key:'WG_default',
        Title_img:'Title.png',
        Title_bgm:'夏影.mp3'
    };
    let getInfoCon = new XMLHttpRequest();
    getInfoCon.onreadystatechange = function(){
        if(this.status === 200&&this.readyState === 4){
            let textList = getInfoCon.responseText;
            textList = textList.split('\n');
            for (let i = 0; i < textList.length; i++) {
                let tempStr = textList[i].split(";")[0];
                let temp = tempStr.split(':');
                switch (temp[0]) {
                    case 'Game_name':
                        GameInfo['Game_name'] = temp[1];
                        break;
                    case 'Game_key':
                        GameInfo['Game_key'] = temp[1];
                        break;
                    case 'Title_img':
                        GameInfo['Title_img'] = temp[1];
                        break;
                    case 'Title_bgm':
                        GameInfo['Title_bgm'] = temp[1];
                        break;
                }
            }
            // document.getElementById('Title').style.backgroundImage = 'url("./game/background/'+GameInfo["Title_img"]+'")';
            // SyncCurrentStatus('bgm',GameInfo['Title_bgm']);
            // loadBGM();
            // document.title = GameInfo['Game_name'];
        }
    }
    getInfoCon.open('GET','game/config.txt',false);
    getInfoCon.send();
    console.log("GameInfo::",GameInfo)
    return GameInfo;
}


exports.doResult = doResult
exports.getGameInfo = getGameInfo
