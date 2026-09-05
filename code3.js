gdjs.Round_32SummaryCode = {};
gdjs.Round_32SummaryCode.localVariables = [];
gdjs.Round_32SummaryCode.idToCallbackMap = new Map();
gdjs.Round_32SummaryCode.GDSpaceBackgroundObjects1= [];
gdjs.Round_32SummaryCode.GDSpaceBackgroundObjects2= [];
gdjs.Round_32SummaryCode.GDSpaceBackgroundObjects3= [];
gdjs.Round_32SummaryCode.GDTitleTextObjects1= [];
gdjs.Round_32SummaryCode.GDTitleTextObjects2= [];
gdjs.Round_32SummaryCode.GDTitleTextObjects3= [];
gdjs.Round_32SummaryCode.GDScoreTextObjects1= [];
gdjs.Round_32SummaryCode.GDScoreTextObjects2= [];
gdjs.Round_32SummaryCode.GDScoreTextObjects3= [];
gdjs.Round_32SummaryCode.GDGHGTextObjects1= [];
gdjs.Round_32SummaryCode.GDGHGTextObjects2= [];
gdjs.Round_32SummaryCode.GDGHGTextObjects3= [];
gdjs.Round_32SummaryCode.GDCorrectTextObjects1= [];
gdjs.Round_32SummaryCode.GDCorrectTextObjects2= [];
gdjs.Round_32SummaryCode.GDCorrectTextObjects3= [];
gdjs.Round_32SummaryCode.GDIncorrectTextObjects1= [];
gdjs.Round_32SummaryCode.GDIncorrectTextObjects2= [];
gdjs.Round_32SummaryCode.GDIncorrectTextObjects3= [];
gdjs.Round_32SummaryCode.GDActionLabelObjects1= [];
gdjs.Round_32SummaryCode.GDActionLabelObjects2= [];
gdjs.Round_32SummaryCode.GDActionLabelObjects3= [];
gdjs.Round_32SummaryCode.GDPlantTreesObjects1= [];
gdjs.Round_32SummaryCode.GDPlantTreesObjects2= [];
gdjs.Round_32SummaryCode.GDPlantTreesObjects3= [];
gdjs.Round_32SummaryCode.GDMinimizeWasteObjects1= [];
gdjs.Round_32SummaryCode.GDMinimizeWasteObjects2= [];
gdjs.Round_32SummaryCode.GDMinimizeWasteObjects3= [];
gdjs.Round_32SummaryCode.GDSolarEnergyObjects1= [];
gdjs.Round_32SummaryCode.GDSolarEnergyObjects2= [];
gdjs.Round_32SummaryCode.GDSolarEnergyObjects3= [];
gdjs.Round_32SummaryCode.GDUseCarsObjects1= [];
gdjs.Round_32SummaryCode.GDUseCarsObjects2= [];
gdjs.Round_32SummaryCode.GDUseCarsObjects3= [];
gdjs.Round_32SummaryCode.GDBurnFossilFuelsObjects1= [];
gdjs.Round_32SummaryCode.GDBurnFossilFuelsObjects2= [];
gdjs.Round_32SummaryCode.GDBurnFossilFuelsObjects3= [];
gdjs.Round_32SummaryCode.GDCutDownTreesObjects1= [];
gdjs.Round_32SummaryCode.GDCutDownTreesObjects2= [];
gdjs.Round_32SummaryCode.GDCutDownTreesObjects3= [];
gdjs.Round_32SummaryCode.GDActionFeedbackObjects1= [];
gdjs.Round_32SummaryCode.GDActionFeedbackObjects2= [];
gdjs.Round_32SummaryCode.GDActionFeedbackObjects3= [];
gdjs.Round_32SummaryCode.GDContinueButtonObjects1= [];
gdjs.Round_32SummaryCode.GDContinueButtonObjects2= [];
gdjs.Round_32SummaryCode.GDContinueButtonObjects3= [];
gdjs.Round_32SummaryCode.GD_95127793_9595Plant_9595Trees_9595_959510Objects1= [];
gdjs.Round_32SummaryCode.GD_95127793_9595Plant_9595Trees_9595_959510Objects2= [];
gdjs.Round_32SummaryCode.GD_95127793_9595Plant_9595Trees_9595_959510Objects3= [];
gdjs.Round_32SummaryCode.GDNewTextObjects1= [];
gdjs.Round_32SummaryCode.GDNewTextObjects2= [];
gdjs.Round_32SummaryCode.GDNewTextObjects3= [];
gdjs.Round_32SummaryCode.GD_95127793_9595Plant_9595Trees_9595_959511Objects1= [];
gdjs.Round_32SummaryCode.GD_95127793_9595Plant_9595Trees_9595_959511Objects2= [];
gdjs.Round_32SummaryCode.GD_95127793_9595Plant_9595Trees_9595_959511Objects3= [];
gdjs.Round_32SummaryCode.GD_95127793_9595Plant_9595Trees_9595_959512Objects1= [];
gdjs.Round_32SummaryCode.GD_95127793_9595Plant_9595Trees_9595_959512Objects2= [];
gdjs.Round_32SummaryCode.GD_95127793_9595Plant_9595Trees_9595_959512Objects3= [];
gdjs.Round_32SummaryCode.GD_95127793_9595Plant_9595Trees_9595_959513Objects1= [];
gdjs.Round_32SummaryCode.GD_95127793_9595Plant_9595Trees_9595_959513Objects2= [];
gdjs.Round_32SummaryCode.GD_95127793_9595Plant_9595Trees_9595_959513Objects3= [];
gdjs.Round_32SummaryCode.GD_95127793_9595Plant_9595Trees_9595_959514Objects1= [];
gdjs.Round_32SummaryCode.GD_95127793_9595Plant_9595Trees_9595_959514Objects2= [];
gdjs.Round_32SummaryCode.GD_95127793_9595Plant_9595Trees_9595_959514Objects3= [];
gdjs.Round_32SummaryCode.GD_95127793_9595Plant_9595Trees_9595_959515Objects1= [];
gdjs.Round_32SummaryCode.GD_95127793_9595Plant_9595Trees_9595_959515Objects2= [];
gdjs.Round_32SummaryCode.GD_95127793_9595Plant_9595Trees_9595_959515Objects3= [];
gdjs.Round_32SummaryCode.GD_95127793_9595Plant_9595Trees_9595_959516Objects1= [];
gdjs.Round_32SummaryCode.GD_95127793_9595Plant_9595Trees_9595_959516Objects2= [];
gdjs.Round_32SummaryCode.GD_95127793_9595Plant_9595Trees_9595_959516Objects3= [];


gdjs.Round_32SummaryCode.eventsList0 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() < 5);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(5).add(1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Final Climate Result", false);
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.Round_32SummaryCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ActionLabel"), gdjs.Round_32SummaryCode.GDActionLabelObjects1);
gdjs.copyArray(runtimeScene.getObjects("CorrectText"), gdjs.Round_32SummaryCode.GDCorrectTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("GHGText"), gdjs.Round_32SummaryCode.GDGHGTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("IncorrectText"), gdjs.Round_32SummaryCode.GDIncorrectTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.Round_32SummaryCode.GDScoreTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("TitleText"), gdjs.Round_32SummaryCode.GDTitleTextObjects1);
{for(var i = 0, len = gdjs.Round_32SummaryCode.GDTitleTextObjects1.length ;i < len;++i) {
    gdjs.Round_32SummaryCode.GDTitleTextObjects1[i].getBehavior("Text").setText("Round " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber()) + " Summary");
}
}
{for(var i = 0, len = gdjs.Round_32SummaryCode.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.Round_32SummaryCode.GDScoreTextObjects1[i].getBehavior("Text").setText("⭐ Score: " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber()));
}
}
{for(var i = 0, len = gdjs.Round_32SummaryCode.GDGHGTextObjects1.length ;i < len;++i) {
    gdjs.Round_32SummaryCode.GDGHGTextObjects1[i].getBehavior("Text").setText("🌍 GHG Level: " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber()));
}
}
{for(var i = 0, len = gdjs.Round_32SummaryCode.GDCorrectTextObjects1.length ;i < len;++i) {
    gdjs.Round_32SummaryCode.GDCorrectTextObjects1[i].getBehavior("Text").setText("✅ Correct: " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber()));
}
}
{for(var i = 0, len = gdjs.Round_32SummaryCode.GDIncorrectTextObjects1.length ;i < len;++i) {
    gdjs.Round_32SummaryCode.GDIncorrectTextObjects1[i].getBehavior("Text").setText("❌ Incorrect: " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()));
}
}
{for(var i = 0, len = gdjs.Round_32SummaryCode.GDActionLabelObjects1.length ;i < len;++i) {
    gdjs.Round_32SummaryCode.GDActionLabelObjects1[i].getBehavior("Text").setText("Choose actions for the next round (they change your Greenhouse Gas Level):");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlantTrees"), gdjs.Round_32SummaryCode.GDPlantTreesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Round_32SummaryCode.GDPlantTreesObjects1.length;i<l;++i) {
    if ( gdjs.Round_32SummaryCode.GDPlantTreesObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Round_32SummaryCode.GDPlantTreesObjects1[k] = gdjs.Round_32SummaryCode.GDPlantTreesObjects1[i];
        ++k;
    }
}
gdjs.Round_32SummaryCode.GDPlantTreesObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ActionFeedback"), gdjs.Round_32SummaryCode.GDActionFeedbackObjects1);
gdjs.copyArray(runtimeScene.getObjects("GHGText"), gdjs.Round_32SummaryCode.GDGHGTextObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(4).sub(10);
}
{for(var i = 0, len = gdjs.Round_32SummaryCode.GDActionFeedbackObjects1.length ;i < len;++i) {
    gdjs.Round_32SummaryCode.GDActionFeedbackObjects1[i].getBehavior("Text").setText("🌱 Plant Trees: -10 GHG. Trees absorb CO2 and help cool the climate!");
}
}
{for(var i = 0, len = gdjs.Round_32SummaryCode.GDGHGTextObjects1.length ;i < len;++i) {
    gdjs.Round_32SummaryCode.GDGHGTextObjects1[i].getBehavior("Text").setText("🌍 GHG Level: " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber()));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MinimizeWaste"), gdjs.Round_32SummaryCode.GDMinimizeWasteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Round_32SummaryCode.GDMinimizeWasteObjects1.length;i<l;++i) {
    if ( gdjs.Round_32SummaryCode.GDMinimizeWasteObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Round_32SummaryCode.GDMinimizeWasteObjects1[k] = gdjs.Round_32SummaryCode.GDMinimizeWasteObjects1[i];
        ++k;
    }
}
gdjs.Round_32SummaryCode.GDMinimizeWasteObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ActionFeedback"), gdjs.Round_32SummaryCode.GDActionFeedbackObjects1);
gdjs.copyArray(runtimeScene.getObjects("GHGText"), gdjs.Round_32SummaryCode.GDGHGTextObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(4).sub(10);
}
{for(var i = 0, len = gdjs.Round_32SummaryCode.GDActionFeedbackObjects1.length ;i < len;++i) {
    gdjs.Round_32SummaryCode.GDActionFeedbackObjects1[i].getBehavior("Text").setText("♻️ Minimize Waste: -10 GHG. Less waste means fewer emissions!");
}
}
{for(var i = 0, len = gdjs.Round_32SummaryCode.GDGHGTextObjects1.length ;i < len;++i) {
    gdjs.Round_32SummaryCode.GDGHGTextObjects1[i].getBehavior("Text").setText("🌍 GHG Level: " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber()));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SolarEnergy"), gdjs.Round_32SummaryCode.GDSolarEnergyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Round_32SummaryCode.GDSolarEnergyObjects1.length;i<l;++i) {
    if ( gdjs.Round_32SummaryCode.GDSolarEnergyObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Round_32SummaryCode.GDSolarEnergyObjects1[k] = gdjs.Round_32SummaryCode.GDSolarEnergyObjects1[i];
        ++k;
    }
}
gdjs.Round_32SummaryCode.GDSolarEnergyObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ActionFeedback"), gdjs.Round_32SummaryCode.GDActionFeedbackObjects1);
gdjs.copyArray(runtimeScene.getObjects("GHGText"), gdjs.Round_32SummaryCode.GDGHGTextObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(4).sub(10);
}
{for(var i = 0, len = gdjs.Round_32SummaryCode.GDActionFeedbackObjects1.length ;i < len;++i) {
    gdjs.Round_32SummaryCode.GDActionFeedbackObjects1[i].getBehavior("Text").setText("☀️ Use Solar Energy: -10 GHG. Clean energy produces no CO2!");
}
}
{for(var i = 0, len = gdjs.Round_32SummaryCode.GDGHGTextObjects1.length ;i < len;++i) {
    gdjs.Round_32SummaryCode.GDGHGTextObjects1[i].getBehavior("Text").setText("🌍 GHG Level: " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber()));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("UseCars"), gdjs.Round_32SummaryCode.GDUseCarsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Round_32SummaryCode.GDUseCarsObjects1.length;i<l;++i) {
    if ( gdjs.Round_32SummaryCode.GDUseCarsObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Round_32SummaryCode.GDUseCarsObjects1[k] = gdjs.Round_32SummaryCode.GDUseCarsObjects1[i];
        ++k;
    }
}
gdjs.Round_32SummaryCode.GDUseCarsObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ActionFeedback"), gdjs.Round_32SummaryCode.GDActionFeedbackObjects1);
gdjs.copyArray(runtimeScene.getObjects("GHGText"), gdjs.Round_32SummaryCode.GDGHGTextObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(4).add(10);
}
{for(var i = 0, len = gdjs.Round_32SummaryCode.GDActionFeedbackObjects1.length ;i < len;++i) {
    gdjs.Round_32SummaryCode.GDActionFeedbackObjects1[i].getBehavior("Text").setText("🚗 Use Cars: +10 GHG. Cars burn gasoline and release CO2.");
}
}
{for(var i = 0, len = gdjs.Round_32SummaryCode.GDGHGTextObjects1.length ;i < len;++i) {
    gdjs.Round_32SummaryCode.GDGHGTextObjects1[i].getBehavior("Text").setText("🌍 GHG Level: " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber()));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BurnFossilFuels"), gdjs.Round_32SummaryCode.GDBurnFossilFuelsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Round_32SummaryCode.GDBurnFossilFuelsObjects1.length;i<l;++i) {
    if ( gdjs.Round_32SummaryCode.GDBurnFossilFuelsObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Round_32SummaryCode.GDBurnFossilFuelsObjects1[k] = gdjs.Round_32SummaryCode.GDBurnFossilFuelsObjects1[i];
        ++k;
    }
}
gdjs.Round_32SummaryCode.GDBurnFossilFuelsObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ActionFeedback"), gdjs.Round_32SummaryCode.GDActionFeedbackObjects1);
gdjs.copyArray(runtimeScene.getObjects("GHGText"), gdjs.Round_32SummaryCode.GDGHGTextObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(4).add(15);
}
{for(var i = 0, len = gdjs.Round_32SummaryCode.GDActionFeedbackObjects1.length ;i < len;++i) {
    gdjs.Round_32SummaryCode.GDActionFeedbackObjects1[i].getBehavior("Text").setText("🛢️ Burn Fossil Fuels: +15 GHG. Burning coal, oil and gas releases lots of CO2.");
}
}
{for(var i = 0, len = gdjs.Round_32SummaryCode.GDGHGTextObjects1.length ;i < len;++i) {
    gdjs.Round_32SummaryCode.GDGHGTextObjects1[i].getBehavior("Text").setText("🌍 GHG Level: " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber()));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CutDownTrees"), gdjs.Round_32SummaryCode.GDCutDownTreesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Round_32SummaryCode.GDCutDownTreesObjects1.length;i<l;++i) {
    if ( gdjs.Round_32SummaryCode.GDCutDownTreesObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Round_32SummaryCode.GDCutDownTreesObjects1[k] = gdjs.Round_32SummaryCode.GDCutDownTreesObjects1[i];
        ++k;
    }
}
gdjs.Round_32SummaryCode.GDCutDownTreesObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ActionFeedback"), gdjs.Round_32SummaryCode.GDActionFeedbackObjects1);
gdjs.copyArray(runtimeScene.getObjects("GHGText"), gdjs.Round_32SummaryCode.GDGHGTextObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(4).add(10);
}
{for(var i = 0, len = gdjs.Round_32SummaryCode.GDActionFeedbackObjects1.length ;i < len;++i) {
    gdjs.Round_32SummaryCode.GDActionFeedbackObjects1[i].getBehavior("Text").setText("🪓 Cut Down Trees: +10 GHG. Cutting trees releases stored carbon.");
}
}
{for(var i = 0, len = gdjs.Round_32SummaryCode.GDGHGTextObjects1.length ;i < len;++i) {
    gdjs.Round_32SummaryCode.GDGHGTextObjects1[i].getBehavior("Text").setText("🌍 GHG Level: " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber()));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ContinueButton"), gdjs.Round_32SummaryCode.GDContinueButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Round_32SummaryCode.GDContinueButtonObjects1.length;i<l;++i) {
    if ( gdjs.Round_32SummaryCode.GDContinueButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Round_32SummaryCode.GDContinueButtonObjects1[k] = gdjs.Round_32SummaryCode.GDContinueButtonObjects1[i];
        ++k;
    }
}
gdjs.Round_32SummaryCode.GDContinueButtonObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Round_32SummaryCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.Round_32SummaryCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Round_32SummaryCode.GDSpaceBackgroundObjects1.length = 0;
gdjs.Round_32SummaryCode.GDSpaceBackgroundObjects2.length = 0;
gdjs.Round_32SummaryCode.GDSpaceBackgroundObjects3.length = 0;
gdjs.Round_32SummaryCode.GDTitleTextObjects1.length = 0;
gdjs.Round_32SummaryCode.GDTitleTextObjects2.length = 0;
gdjs.Round_32SummaryCode.GDTitleTextObjects3.length = 0;
gdjs.Round_32SummaryCode.GDScoreTextObjects1.length = 0;
gdjs.Round_32SummaryCode.GDScoreTextObjects2.length = 0;
gdjs.Round_32SummaryCode.GDScoreTextObjects3.length = 0;
gdjs.Round_32SummaryCode.GDGHGTextObjects1.length = 0;
gdjs.Round_32SummaryCode.GDGHGTextObjects2.length = 0;
gdjs.Round_32SummaryCode.GDGHGTextObjects3.length = 0;
gdjs.Round_32SummaryCode.GDCorrectTextObjects1.length = 0;
gdjs.Round_32SummaryCode.GDCorrectTextObjects2.length = 0;
gdjs.Round_32SummaryCode.GDCorrectTextObjects3.length = 0;
gdjs.Round_32SummaryCode.GDIncorrectTextObjects1.length = 0;
gdjs.Round_32SummaryCode.GDIncorrectTextObjects2.length = 0;
gdjs.Round_32SummaryCode.GDIncorrectTextObjects3.length = 0;
gdjs.Round_32SummaryCode.GDActionLabelObjects1.length = 0;
gdjs.Round_32SummaryCode.GDActionLabelObjects2.length = 0;
gdjs.Round_32SummaryCode.GDActionLabelObjects3.length = 0;
gdjs.Round_32SummaryCode.GDPlantTreesObjects1.length = 0;
gdjs.Round_32SummaryCode.GDPlantTreesObjects2.length = 0;
gdjs.Round_32SummaryCode.GDPlantTreesObjects3.length = 0;
gdjs.Round_32SummaryCode.GDMinimizeWasteObjects1.length = 0;
gdjs.Round_32SummaryCode.GDMinimizeWasteObjects2.length = 0;
gdjs.Round_32SummaryCode.GDMinimizeWasteObjects3.length = 0;
gdjs.Round_32SummaryCode.GDSolarEnergyObjects1.length = 0;
gdjs.Round_32SummaryCode.GDSolarEnergyObjects2.length = 0;
gdjs.Round_32SummaryCode.GDSolarEnergyObjects3.length = 0;
gdjs.Round_32SummaryCode.GDUseCarsObjects1.length = 0;
gdjs.Round_32SummaryCode.GDUseCarsObjects2.length = 0;
gdjs.Round_32SummaryCode.GDUseCarsObjects3.length = 0;
gdjs.Round_32SummaryCode.GDBurnFossilFuelsObjects1.length = 0;
gdjs.Round_32SummaryCode.GDBurnFossilFuelsObjects2.length = 0;
gdjs.Round_32SummaryCode.GDBurnFossilFuelsObjects3.length = 0;
gdjs.Round_32SummaryCode.GDCutDownTreesObjects1.length = 0;
gdjs.Round_32SummaryCode.GDCutDownTreesObjects2.length = 0;
gdjs.Round_32SummaryCode.GDCutDownTreesObjects3.length = 0;
gdjs.Round_32SummaryCode.GDActionFeedbackObjects1.length = 0;
gdjs.Round_32SummaryCode.GDActionFeedbackObjects2.length = 0;
gdjs.Round_32SummaryCode.GDActionFeedbackObjects3.length = 0;
gdjs.Round_32SummaryCode.GDContinueButtonObjects1.length = 0;
gdjs.Round_32SummaryCode.GDContinueButtonObjects2.length = 0;
gdjs.Round_32SummaryCode.GDContinueButtonObjects3.length = 0;
gdjs.Round_32SummaryCode.GD_95127793_9595Plant_9595Trees_9595_959510Objects1.length = 0;
gdjs.Round_32SummaryCode.GD_95127793_9595Plant_9595Trees_9595_959510Objects2.length = 0;
gdjs.Round_32SummaryCode.GD_95127793_9595Plant_9595Trees_9595_959510Objects3.length = 0;
gdjs.Round_32SummaryCode.GDNewTextObjects1.length = 0;
gdjs.Round_32SummaryCode.GDNewTextObjects2.length = 0;
gdjs.Round_32SummaryCode.GDNewTextObjects3.length = 0;
gdjs.Round_32SummaryCode.GD_95127793_9595Plant_9595Trees_9595_959511Objects1.length = 0;
gdjs.Round_32SummaryCode.GD_95127793_9595Plant_9595Trees_9595_959511Objects2.length = 0;
gdjs.Round_32SummaryCode.GD_95127793_9595Plant_9595Trees_9595_959511Objects3.length = 0;
gdjs.Round_32SummaryCode.GD_95127793_9595Plant_9595Trees_9595_959512Objects1.length = 0;
gdjs.Round_32SummaryCode.GD_95127793_9595Plant_9595Trees_9595_959512Objects2.length = 0;
gdjs.Round_32SummaryCode.GD_95127793_9595Plant_9595Trees_9595_959512Objects3.length = 0;
gdjs.Round_32SummaryCode.GD_95127793_9595Plant_9595Trees_9595_959513Objects1.length = 0;
gdjs.Round_32SummaryCode.GD_95127793_9595Plant_9595Trees_9595_959513Objects2.length = 0;
gdjs.Round_32SummaryCode.GD_95127793_9595Plant_9595Trees_9595_959513Objects3.length = 0;
gdjs.Round_32SummaryCode.GD_95127793_9595Plant_9595Trees_9595_959514Objects1.length = 0;
gdjs.Round_32SummaryCode.GD_95127793_9595Plant_9595Trees_9595_959514Objects2.length = 0;
gdjs.Round_32SummaryCode.GD_95127793_9595Plant_9595Trees_9595_959514Objects3.length = 0;
gdjs.Round_32SummaryCode.GD_95127793_9595Plant_9595Trees_9595_959515Objects1.length = 0;
gdjs.Round_32SummaryCode.GD_95127793_9595Plant_9595Trees_9595_959515Objects2.length = 0;
gdjs.Round_32SummaryCode.GD_95127793_9595Plant_9595Trees_9595_959515Objects3.length = 0;
gdjs.Round_32SummaryCode.GD_95127793_9595Plant_9595Trees_9595_959516Objects1.length = 0;
gdjs.Round_32SummaryCode.GD_95127793_9595Plant_9595Trees_9595_959516Objects2.length = 0;
gdjs.Round_32SummaryCode.GD_95127793_9595Plant_9595Trees_9595_959516Objects3.length = 0;

gdjs.Round_32SummaryCode.eventsList1(runtimeScene);
gdjs.Round_32SummaryCode.GDSpaceBackgroundObjects1.length = 0;
gdjs.Round_32SummaryCode.GDSpaceBackgroundObjects2.length = 0;
gdjs.Round_32SummaryCode.GDSpaceBackgroundObjects3.length = 0;
gdjs.Round_32SummaryCode.GDTitleTextObjects1.length = 0;
gdjs.Round_32SummaryCode.GDTitleTextObjects2.length = 0;
gdjs.Round_32SummaryCode.GDTitleTextObjects3.length = 0;
gdjs.Round_32SummaryCode.GDScoreTextObjects1.length = 0;
gdjs.Round_32SummaryCode.GDScoreTextObjects2.length = 0;
gdjs.Round_32SummaryCode.GDScoreTextObjects3.length = 0;
gdjs.Round_32SummaryCode.GDGHGTextObjects1.length = 0;
gdjs.Round_32SummaryCode.GDGHGTextObjects2.length = 0;
gdjs.Round_32SummaryCode.GDGHGTextObjects3.length = 0;
gdjs.Round_32SummaryCode.GDCorrectTextObjects1.length = 0;
gdjs.Round_32SummaryCode.GDCorrectTextObjects2.length = 0;
gdjs.Round_32SummaryCode.GDCorrectTextObjects3.length = 0;
gdjs.Round_32SummaryCode.GDIncorrectTextObjects1.length = 0;
gdjs.Round_32SummaryCode.GDIncorrectTextObjects2.length = 0;
gdjs.Round_32SummaryCode.GDIncorrectTextObjects3.length = 0;
gdjs.Round_32SummaryCode.GDActionLabelObjects1.length = 0;
gdjs.Round_32SummaryCode.GDActionLabelObjects2.length = 0;
gdjs.Round_32SummaryCode.GDActionLabelObjects3.length = 0;
gdjs.Round_32SummaryCode.GDPlantTreesObjects1.length = 0;
gdjs.Round_32SummaryCode.GDPlantTreesObjects2.length = 0;
gdjs.Round_32SummaryCode.GDPlantTreesObjects3.length = 0;
gdjs.Round_32SummaryCode.GDMinimizeWasteObjects1.length = 0;
gdjs.Round_32SummaryCode.GDMinimizeWasteObjects2.length = 0;
gdjs.Round_32SummaryCode.GDMinimizeWasteObjects3.length = 0;
gdjs.Round_32SummaryCode.GDSolarEnergyObjects1.length = 0;
gdjs.Round_32SummaryCode.GDSolarEnergyObjects2.length = 0;
gdjs.Round_32SummaryCode.GDSolarEnergyObjects3.length = 0;
gdjs.Round_32SummaryCode.GDUseCarsObjects1.length = 0;
gdjs.Round_32SummaryCode.GDUseCarsObjects2.length = 0;
gdjs.Round_32SummaryCode.GDUseCarsObjects3.length = 0;
gdjs.Round_32SummaryCode.GDBurnFossilFuelsObjects1.length = 0;
gdjs.Round_32SummaryCode.GDBurnFossilFuelsObjects2.length = 0;
gdjs.Round_32SummaryCode.GDBurnFossilFuelsObjects3.length = 0;
gdjs.Round_32SummaryCode.GDCutDownTreesObjects1.length = 0;
gdjs.Round_32SummaryCode.GDCutDownTreesObjects2.length = 0;
gdjs.Round_32SummaryCode.GDCutDownTreesObjects3.length = 0;
gdjs.Round_32SummaryCode.GDActionFeedbackObjects1.length = 0;
gdjs.Round_32SummaryCode.GDActionFeedbackObjects2.length = 0;
gdjs.Round_32SummaryCode.GDActionFeedbackObjects3.length = 0;
gdjs.Round_32SummaryCode.GDContinueButtonObjects1.length = 0;
gdjs.Round_32SummaryCode.GDContinueButtonObjects2.length = 0;
gdjs.Round_32SummaryCode.GDContinueButtonObjects3.length = 0;
gdjs.Round_32SummaryCode.GD_95127793_9595Plant_9595Trees_9595_959510Objects1.length = 0;
gdjs.Round_32SummaryCode.GD_95127793_9595Plant_9595Trees_9595_959510Objects2.length = 0;
gdjs.Round_32SummaryCode.GD_95127793_9595Plant_9595Trees_9595_959510Objects3.length = 0;
gdjs.Round_32SummaryCode.GDNewTextObjects1.length = 0;
gdjs.Round_32SummaryCode.GDNewTextObjects2.length = 0;
gdjs.Round_32SummaryCode.GDNewTextObjects3.length = 0;
gdjs.Round_32SummaryCode.GD_95127793_9595Plant_9595Trees_9595_959511Objects1.length = 0;
gdjs.Round_32SummaryCode.GD_95127793_9595Plant_9595Trees_9595_959511Objects2.length = 0;
gdjs.Round_32SummaryCode.GD_95127793_9595Plant_9595Trees_9595_959511Objects3.length = 0;
gdjs.Round_32SummaryCode.GD_95127793_9595Plant_9595Trees_9595_959512Objects1.length = 0;
gdjs.Round_32SummaryCode.GD_95127793_9595Plant_9595Trees_9595_959512Objects2.length = 0;
gdjs.Round_32SummaryCode.GD_95127793_9595Plant_9595Trees_9595_959512Objects3.length = 0;
gdjs.Round_32SummaryCode.GD_95127793_9595Plant_9595Trees_9595_959513Objects1.length = 0;
gdjs.Round_32SummaryCode.GD_95127793_9595Plant_9595Trees_9595_959513Objects2.length = 0;
gdjs.Round_32SummaryCode.GD_95127793_9595Plant_9595Trees_9595_959513Objects3.length = 0;
gdjs.Round_32SummaryCode.GD_95127793_9595Plant_9595Trees_9595_959514Objects1.length = 0;
gdjs.Round_32SummaryCode.GD_95127793_9595Plant_9595Trees_9595_959514Objects2.length = 0;
gdjs.Round_32SummaryCode.GD_95127793_9595Plant_9595Trees_9595_959514Objects3.length = 0;
gdjs.Round_32SummaryCode.GD_95127793_9595Plant_9595Trees_9595_959515Objects1.length = 0;
gdjs.Round_32SummaryCode.GD_95127793_9595Plant_9595Trees_9595_959515Objects2.length = 0;
gdjs.Round_32SummaryCode.GD_95127793_9595Plant_9595Trees_9595_959515Objects3.length = 0;
gdjs.Round_32SummaryCode.GD_95127793_9595Plant_9595Trees_9595_959516Objects1.length = 0;
gdjs.Round_32SummaryCode.GD_95127793_9595Plant_9595Trees_9595_959516Objects2.length = 0;
gdjs.Round_32SummaryCode.GD_95127793_9595Plant_9595Trees_9595_959516Objects3.length = 0;


return;

}

gdjs['Round_32SummaryCode'] = gdjs.Round_32SummaryCode;
