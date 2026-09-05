gdjs.How_32to_32PlayCode = {};
gdjs.How_32to_32PlayCode.localVariables = [];
gdjs.How_32to_32PlayCode.idToCallbackMap = new Map();
gdjs.How_32to_32PlayCode.GDSpaceBackgroundObjects1= [];
gdjs.How_32to_32PlayCode.GDSpaceBackgroundObjects2= [];
gdjs.How_32to_32PlayCode.GDTitleTextObjects1= [];
gdjs.How_32to_32PlayCode.GDTitleTextObjects2= [];
gdjs.How_32to_32PlayCode.GDHowToTextObjects1= [];
gdjs.How_32to_32PlayCode.GDHowToTextObjects2= [];
gdjs.How_32to_32PlayCode.GDBackButtonObjects1= [];
gdjs.How_32to_32PlayCode.GDBackButtonObjects2= [];
gdjs.How_32to_32PlayCode.GDStartButtonObjects1= [];
gdjs.How_32to_32PlayCode.GDStartButtonObjects2= [];


gdjs.How_32to_32PlayCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("HowToText"), gdjs.How_32to_32PlayCode.GDHowToTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("TitleText"), gdjs.How_32to_32PlayCode.GDTitleTextObjects1);
{for(var i = 0, len = gdjs.How_32to_32PlayCode.GDTitleTextObjects1.length ;i < len;++i) {
    gdjs.How_32to_32PlayCode.GDTitleTextObjects1[i].getBehavior("Text").setText("How to Play");
}
}
{for(var i = 0, len = gdjs.How_32to_32PlayCode.GDHowToTextObjects1.length ;i < len;++i) {
    gdjs.How_32to_32PlayCode.GDHowToTextObjects1[i].getBehavior("Text").setText("1. Items fall from the top of the screen." + gdjs.evtTools.string.newLine() + "2. Drag each item into the correct zone:" + gdjs.evtTools.string.newLine() + "   - Natural GHGs (left)" + gdjs.evtTools.string.newLine() + "   - Enhanced / Human-Induced GHGs (right)" + gdjs.evtTools.string.newLine() + "3. Correct = +score and a green flash." + gdjs.evtTools.string.newLine() + "4. Wrong = -score and a red flash." + gdjs.evtTools.string.newLine() + "5. Between rounds, use action cards to change" + gdjs.evtTools.string.newLine() + "   your Greenhouse Gas Level." + gdjs.evtTools.string.newLine() + "6. After 5 rounds, see the Earth's climate result!" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Some gases (CO2, CH4, N2O) occur naturally but are" + gdjs.evtTools.string.newLine() + "also increased by human activities - read the info box!");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.How_32to_32PlayCode.GDBackButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.How_32to_32PlayCode.GDBackButtonObjects1.length;i<l;++i) {
    if ( gdjs.How_32to_32PlayCode.GDBackButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.How_32to_32PlayCode.GDBackButtonObjects1[k] = gdjs.How_32to_32PlayCode.GDBackButtonObjects1[i];
        ++k;
    }
}
gdjs.How_32to_32PlayCode.GDBackButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.How_32to_32PlayCode.GDStartButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.How_32to_32PlayCode.GDStartButtonObjects1.length;i<l;++i) {
    if ( gdjs.How_32to_32PlayCode.GDStartButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.How_32to_32PlayCode.GDStartButtonObjects1[k] = gdjs.How_32to_32PlayCode.GDStartButtonObjects1[i];
        ++k;
    }
}
gdjs.How_32to_32PlayCode.GDStartButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}
}

}


};

gdjs.How_32to_32PlayCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.How_32to_32PlayCode.GDSpaceBackgroundObjects1.length = 0;
gdjs.How_32to_32PlayCode.GDSpaceBackgroundObjects2.length = 0;
gdjs.How_32to_32PlayCode.GDTitleTextObjects1.length = 0;
gdjs.How_32to_32PlayCode.GDTitleTextObjects2.length = 0;
gdjs.How_32to_32PlayCode.GDHowToTextObjects1.length = 0;
gdjs.How_32to_32PlayCode.GDHowToTextObjects2.length = 0;
gdjs.How_32to_32PlayCode.GDBackButtonObjects1.length = 0;
gdjs.How_32to_32PlayCode.GDBackButtonObjects2.length = 0;
gdjs.How_32to_32PlayCode.GDStartButtonObjects1.length = 0;
gdjs.How_32to_32PlayCode.GDStartButtonObjects2.length = 0;

gdjs.How_32to_32PlayCode.eventsList0(runtimeScene);
gdjs.How_32to_32PlayCode.GDSpaceBackgroundObjects1.length = 0;
gdjs.How_32to_32PlayCode.GDSpaceBackgroundObjects2.length = 0;
gdjs.How_32to_32PlayCode.GDTitleTextObjects1.length = 0;
gdjs.How_32to_32PlayCode.GDTitleTextObjects2.length = 0;
gdjs.How_32to_32PlayCode.GDHowToTextObjects1.length = 0;
gdjs.How_32to_32PlayCode.GDHowToTextObjects2.length = 0;
gdjs.How_32to_32PlayCode.GDBackButtonObjects1.length = 0;
gdjs.How_32to_32PlayCode.GDBackButtonObjects2.length = 0;
gdjs.How_32to_32PlayCode.GDStartButtonObjects1.length = 0;
gdjs.How_32to_32PlayCode.GDStartButtonObjects2.length = 0;


return;

}

gdjs['How_32to_32PlayCode'] = gdjs.How_32to_32PlayCode;
