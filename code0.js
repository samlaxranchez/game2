gdjs.Main_32MenuCode = {};
gdjs.Main_32MenuCode.localVariables = [];
gdjs.Main_32MenuCode.idToCallbackMap = new Map();
gdjs.Main_32MenuCode.GDSpaceBackgroundObjects1= [];
gdjs.Main_32MenuCode.GDSpaceBackgroundObjects2= [];
gdjs.Main_32MenuCode.GDEarthObjects1= [];
gdjs.Main_32MenuCode.GDEarthObjects2= [];
gdjs.Main_32MenuCode.GDTitleTextObjects1= [];
gdjs.Main_32MenuCode.GDTitleTextObjects2= [];
gdjs.Main_32MenuCode.GDSubtitleTextObjects1= [];
gdjs.Main_32MenuCode.GDSubtitleTextObjects2= [];
gdjs.Main_32MenuCode.GDStartButtonObjects1= [];
gdjs.Main_32MenuCode.GDStartButtonObjects2= [];


gdjs.Main_32MenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SubtitleText"), gdjs.Main_32MenuCode.GDSubtitleTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("TitleText"), gdjs.Main_32MenuCode.GDTitleTextObjects1);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDTitleTextObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDTitleTextObjects1[i].getBehavior("Text").setText("Natural vs. Human-Induced Greenhouse Gases");
}
}
{for(var i = 0, len = gdjs.Main_32MenuCode.GDSubtitleTextObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDSubtitleTextObjects1[i].getBehavior("Text").setText("Sort the falling items into the right category!");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.Main_32MenuCode.GDStartButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDStartButtonObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDStartButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDStartButtonObjects1[k] = gdjs.Main_32MenuCode.GDStartButtonObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDStartButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "How to Play", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Forest Frolic Loop.aac", true, 50, 1);
}
}

}


};

gdjs.Main_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32MenuCode.GDSpaceBackgroundObjects1.length = 0;
gdjs.Main_32MenuCode.GDSpaceBackgroundObjects2.length = 0;
gdjs.Main_32MenuCode.GDEarthObjects1.length = 0;
gdjs.Main_32MenuCode.GDEarthObjects2.length = 0;
gdjs.Main_32MenuCode.GDTitleTextObjects1.length = 0;
gdjs.Main_32MenuCode.GDTitleTextObjects2.length = 0;
gdjs.Main_32MenuCode.GDSubtitleTextObjects1.length = 0;
gdjs.Main_32MenuCode.GDSubtitleTextObjects2.length = 0;
gdjs.Main_32MenuCode.GDStartButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDStartButtonObjects2.length = 0;

gdjs.Main_32MenuCode.eventsList0(runtimeScene);
gdjs.Main_32MenuCode.GDSpaceBackgroundObjects1.length = 0;
gdjs.Main_32MenuCode.GDSpaceBackgroundObjects2.length = 0;
gdjs.Main_32MenuCode.GDEarthObjects1.length = 0;
gdjs.Main_32MenuCode.GDEarthObjects2.length = 0;
gdjs.Main_32MenuCode.GDTitleTextObjects1.length = 0;
gdjs.Main_32MenuCode.GDTitleTextObjects2.length = 0;
gdjs.Main_32MenuCode.GDSubtitleTextObjects1.length = 0;
gdjs.Main_32MenuCode.GDSubtitleTextObjects2.length = 0;
gdjs.Main_32MenuCode.GDStartButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDStartButtonObjects2.length = 0;


return;

}

gdjs['Main_32MenuCode'] = gdjs.Main_32MenuCode;
