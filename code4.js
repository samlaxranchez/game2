gdjs.Final_32Climate_32ResultCode = {};
gdjs.Final_32Climate_32ResultCode.localVariables = [];
gdjs.Final_32Climate_32ResultCode.idToCallbackMap = new Map();
gdjs.Final_32Climate_32ResultCode.GDSpaceBackgroundObjects1= [];
gdjs.Final_32Climate_32ResultCode.GDSpaceBackgroundObjects2= [];
gdjs.Final_32Climate_32ResultCode.GDSpaceBackgroundObjects3= [];
gdjs.Final_32Climate_32ResultCode.GDTitleTextObjects1= [];
gdjs.Final_32Climate_32ResultCode.GDTitleTextObjects2= [];
gdjs.Final_32Climate_32ResultCode.GDTitleTextObjects3= [];
gdjs.Final_32Climate_32ResultCode.GDGHGTextObjects1= [];
gdjs.Final_32Climate_32ResultCode.GDGHGTextObjects2= [];
gdjs.Final_32Climate_32ResultCode.GDGHGTextObjects3= [];
gdjs.Final_32Climate_32ResultCode.GDEarthObjects1= [];
gdjs.Final_32Climate_32ResultCode.GDEarthObjects2= [];
gdjs.Final_32Climate_32ResultCode.GDEarthObjects3= [];
gdjs.Final_32Climate_32ResultCode.GDResultTextObjects1= [];
gdjs.Final_32Climate_32ResultCode.GDResultTextObjects2= [];
gdjs.Final_32Climate_32ResultCode.GDResultTextObjects3= [];
gdjs.Final_32Climate_32ResultCode.GDPlayAgainButtonObjects1= [];
gdjs.Final_32Climate_32ResultCode.GDPlayAgainButtonObjects2= [];
gdjs.Final_32Climate_32ResultCode.GDPlayAgainButtonObjects3= [];


gdjs.Final_32Climate_32ResultCode.eventsList0 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() <= 30);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Earth"), gdjs.Final_32Climate_32ResultCode.GDEarthObjects2);
gdjs.copyArray(runtimeScene.getObjects("ResultText"), gdjs.Final_32Climate_32ResultCode.GDResultTextObjects2);
{for(var i = 0, len = gdjs.Final_32Climate_32ResultCode.GDResultTextObjects2.length ;i < len;++i) {
    gdjs.Final_32Climate_32ResultCode.GDResultTextObjects2[i].getBehavior("Text").setText("🌍 Stable Climate" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "The climate is relatively stable. Keep making choices that reduce greenhouse gas emissions!");
}
}
{for(var i = 0, len = gdjs.Final_32Climate_32ResultCode.GDEarthObjects2.length ;i < len;++i) {
    gdjs.Final_32Climate_32ResultCode.GDEarthObjects2[i].setColor("255;255;255");
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() <= 70);
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Earth"), gdjs.Final_32Climate_32ResultCode.GDEarthObjects2);
gdjs.copyArray(runtimeScene.getObjects("ResultText"), gdjs.Final_32Climate_32ResultCode.GDResultTextObjects2);
{for(var i = 0, len = gdjs.Final_32Climate_32ResultCode.GDResultTextObjects2.length ;i < len;++i) {
    gdjs.Final_32Climate_32ResultCode.GDResultTextObjects2[i].getBehavior("Text").setText("🌡️ Warming Climate" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "The climate is getting warmer. Reducing greenhouse gas emissions can help slow warming.");
}
}
{for(var i = 0, len = gdjs.Final_32Climate_32ResultCode.GDEarthObjects2.length ;i < len;++i) {
    gdjs.Final_32Climate_32ResultCode.GDEarthObjects2[i].setColor("255;170;40");
}
}
elseEventsChainSatisfied = true;
}
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(runtimeScene.getObjects("Earth"), gdjs.Final_32Climate_32ResultCode.GDEarthObjects1);
gdjs.copyArray(runtimeScene.getObjects("ResultText"), gdjs.Final_32Climate_32ResultCode.GDResultTextObjects1);
{for(var i = 0, len = gdjs.Final_32Climate_32ResultCode.GDResultTextObjects1.length ;i < len;++i) {
    gdjs.Final_32Climate_32ResultCode.GDResultTextObjects1[i].getBehavior("Text").setText("🔥 Dangerously Warm" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "The climate is becoming dangerously warm. Human activities that increase greenhouse gases can contribute to climate change.");
}
}
{for(var i = 0, len = gdjs.Final_32Climate_32ResultCode.GDEarthObjects1.length ;i < len;++i) {
    gdjs.Final_32Climate_32ResultCode.GDEarthObjects1[i].setColor("255;40;20");
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.Final_32Climate_32ResultCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GHGText"), gdjs.Final_32Climate_32ResultCode.GDGHGTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("TitleText"), gdjs.Final_32Climate_32ResultCode.GDTitleTextObjects1);
{for(var i = 0, len = gdjs.Final_32Climate_32ResultCode.GDTitleTextObjects1.length ;i < len;++i) {
    gdjs.Final_32Climate_32ResultCode.GDTitleTextObjects1[i].getBehavior("Text").setText("Final Climate Result");
}
}
{for(var i = 0, len = gdjs.Final_32Climate_32ResultCode.GDGHGTextObjects1.length ;i < len;++i) {
    gdjs.Final_32Climate_32ResultCode.GDGHGTextObjects1[i].getBehavior("Text").setText("Final Greenhouse Gas Level: " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber()));
}
}

{ //Subevents
gdjs.Final_32Climate_32ResultCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayAgainButton"), gdjs.Final_32Climate_32ResultCode.GDPlayAgainButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Final_32Climate_32ResultCode.GDPlayAgainButtonObjects1.length;i<l;++i) {
    if ( gdjs.Final_32Climate_32ResultCode.GDPlayAgainButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Final_32Climate_32ResultCode.GDPlayAgainButtonObjects1[k] = gdjs.Final_32Climate_32ResultCode.GDPlayAgainButtonObjects1[i];
        ++k;
    }
}
gdjs.Final_32Climate_32ResultCode.GDPlayAgainButtonObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(30);
}
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}
}

}


};

gdjs.Final_32Climate_32ResultCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Final_32Climate_32ResultCode.GDSpaceBackgroundObjects1.length = 0;
gdjs.Final_32Climate_32ResultCode.GDSpaceBackgroundObjects2.length = 0;
gdjs.Final_32Climate_32ResultCode.GDSpaceBackgroundObjects3.length = 0;
gdjs.Final_32Climate_32ResultCode.GDTitleTextObjects1.length = 0;
gdjs.Final_32Climate_32ResultCode.GDTitleTextObjects2.length = 0;
gdjs.Final_32Climate_32ResultCode.GDTitleTextObjects3.length = 0;
gdjs.Final_32Climate_32ResultCode.GDGHGTextObjects1.length = 0;
gdjs.Final_32Climate_32ResultCode.GDGHGTextObjects2.length = 0;
gdjs.Final_32Climate_32ResultCode.GDGHGTextObjects3.length = 0;
gdjs.Final_32Climate_32ResultCode.GDEarthObjects1.length = 0;
gdjs.Final_32Climate_32ResultCode.GDEarthObjects2.length = 0;
gdjs.Final_32Climate_32ResultCode.GDEarthObjects3.length = 0;
gdjs.Final_32Climate_32ResultCode.GDResultTextObjects1.length = 0;
gdjs.Final_32Climate_32ResultCode.GDResultTextObjects2.length = 0;
gdjs.Final_32Climate_32ResultCode.GDResultTextObjects3.length = 0;
gdjs.Final_32Climate_32ResultCode.GDPlayAgainButtonObjects1.length = 0;
gdjs.Final_32Climate_32ResultCode.GDPlayAgainButtonObjects2.length = 0;
gdjs.Final_32Climate_32ResultCode.GDPlayAgainButtonObjects3.length = 0;

gdjs.Final_32Climate_32ResultCode.eventsList1(runtimeScene);
gdjs.Final_32Climate_32ResultCode.GDSpaceBackgroundObjects1.length = 0;
gdjs.Final_32Climate_32ResultCode.GDSpaceBackgroundObjects2.length = 0;
gdjs.Final_32Climate_32ResultCode.GDSpaceBackgroundObjects3.length = 0;
gdjs.Final_32Climate_32ResultCode.GDTitleTextObjects1.length = 0;
gdjs.Final_32Climate_32ResultCode.GDTitleTextObjects2.length = 0;
gdjs.Final_32Climate_32ResultCode.GDTitleTextObjects3.length = 0;
gdjs.Final_32Climate_32ResultCode.GDGHGTextObjects1.length = 0;
gdjs.Final_32Climate_32ResultCode.GDGHGTextObjects2.length = 0;
gdjs.Final_32Climate_32ResultCode.GDGHGTextObjects3.length = 0;
gdjs.Final_32Climate_32ResultCode.GDEarthObjects1.length = 0;
gdjs.Final_32Climate_32ResultCode.GDEarthObjects2.length = 0;
gdjs.Final_32Climate_32ResultCode.GDEarthObjects3.length = 0;
gdjs.Final_32Climate_32ResultCode.GDResultTextObjects1.length = 0;
gdjs.Final_32Climate_32ResultCode.GDResultTextObjects2.length = 0;
gdjs.Final_32Climate_32ResultCode.GDResultTextObjects3.length = 0;
gdjs.Final_32Climate_32ResultCode.GDPlayAgainButtonObjects1.length = 0;
gdjs.Final_32Climate_32ResultCode.GDPlayAgainButtonObjects2.length = 0;
gdjs.Final_32Climate_32ResultCode.GDPlayAgainButtonObjects3.length = 0;


return;

}

gdjs['Final_32Climate_32ResultCode'] = gdjs.Final_32Climate_32ResultCode;
