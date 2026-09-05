gdjs.GameCode = {};
gdjs.GameCode.localVariables = [];
gdjs.GameCode.idToCallbackMap = new Map();
gdjs.GameCode.GDSpaceBackgroundObjects1= [];
gdjs.GameCode.GDSpaceBackgroundObjects2= [];
gdjs.GameCode.GDSpaceBackgroundObjects3= [];
gdjs.GameCode.GDEarthObjects1= [];
gdjs.GameCode.GDEarthObjects2= [];
gdjs.GameCode.GDEarthObjects3= [];
gdjs.GameCode.GDNaturalZoneLabelObjects1= [];
gdjs.GameCode.GDNaturalZoneLabelObjects2= [];
gdjs.GameCode.GDNaturalZoneLabelObjects3= [];
gdjs.GameCode.GDEnhancedZoneLabelObjects1= [];
gdjs.GameCode.GDEnhancedZoneLabelObjects2= [];
gdjs.GameCode.GDEnhancedZoneLabelObjects3= [];
gdjs.GameCode.GDThermometerObjects1= [];
gdjs.GameCode.GDThermometerObjects2= [];
gdjs.GameCode.GDThermometerObjects3= [];
gdjs.GameCode.GDTempTextObjects1= [];
gdjs.GameCode.GDTempTextObjects2= [];
gdjs.GameCode.GDTempTextObjects3= [];
gdjs.GameCode.GDGHGTextObjects1= [];
gdjs.GameCode.GDGHGTextObjects2= [];
gdjs.GameCode.GDGHGTextObjects3= [];
gdjs.GameCode.GDScoreTextObjects1= [];
gdjs.GameCode.GDScoreTextObjects2= [];
gdjs.GameCode.GDScoreTextObjects3= [];
gdjs.GameCode.GDRoundTextObjects1= [];
gdjs.GameCode.GDRoundTextObjects2= [];
gdjs.GameCode.GDRoundTextObjects3= [];
gdjs.GameCode.GDInfoTextObjects1= [];
gdjs.GameCode.GDInfoTextObjects2= [];
gdjs.GameCode.GDInfoTextObjects3= [];
gdjs.GameCode.GDFeedbackTextObjects1= [];
gdjs.GameCode.GDFeedbackTextObjects2= [];
gdjs.GameCode.GDFeedbackTextObjects3= [];
gdjs.GameCode.GDVolcanoObjects1= [];
gdjs.GameCode.GDVolcanoObjects2= [];
gdjs.GameCode.GDVolcanoObjects3= [];
gdjs.GameCode.GDWaterVaporObjects1= [];
gdjs.GameCode.GDWaterVaporObjects2= [];
gdjs.GameCode.GDWaterVaporObjects3= [];
gdjs.GameCode.GDCO2Objects1= [];
gdjs.GameCode.GDCO2Objects2= [];
gdjs.GameCode.GDCO2Objects3= [];
gdjs.GameCode.GDCH4Objects1= [];
gdjs.GameCode.GDCH4Objects2= [];
gdjs.GameCode.GDCH4Objects3= [];
gdjs.GameCode.GDN2OObjects1= [];
gdjs.GameCode.GDN2OObjects2= [];
gdjs.GameCode.GDN2OObjects3= [];
gdjs.GameCode.GDCowObjects1= [];
gdjs.GameCode.GDCowObjects2= [];
gdjs.GameCode.GDCowObjects3= [];
gdjs.GameCode.GDDeforestationObjects1= [];
gdjs.GameCode.GDDeforestationObjects2= [];
gdjs.GameCode.GDDeforestationObjects3= [];
gdjs.GameCode.GDFridgeObjects1= [];
gdjs.GameCode.GDFridgeObjects2= [];
gdjs.GameCode.GDFridgeObjects3= [];
gdjs.GameCode.GDAirconObjects1= [];
gdjs.GameCode.GDAirconObjects2= [];
gdjs.GameCode.GDAirconObjects3= [];
gdjs.GameCode.GDCarObjects1= [];
gdjs.GameCode.GDCarObjects2= [];
gdjs.GameCode.GDCarObjects3= [];
gdjs.GameCode.GDOilBarrelObjects1= [];
gdjs.GameCode.GDOilBarrelObjects2= [];
gdjs.GameCode.GDOilBarrelObjects3= [];
gdjs.GameCode.GDAxeObjects1= [];
gdjs.GameCode.GDAxeObjects2= [];
gdjs.GameCode.GDAxeObjects3= [];
gdjs.GameCode.GDInfoBoxObjects1= [];
gdjs.GameCode.GDInfoBoxObjects2= [];
gdjs.GameCode.GDInfoBoxObjects3= [];
gdjs.GameCode.GDNaturalZoneObjects1= [];
gdjs.GameCode.GDNaturalZoneObjects2= [];
gdjs.GameCode.GDNaturalZoneObjects3= [];
gdjs.GameCode.GDEnhancedZoneObjects1= [];
gdjs.GameCode.GDEnhancedZoneObjects2= [];
gdjs.GameCode.GDEnhancedZoneObjects3= [];


gdjs.GameCode.eventsList0 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() <= 30);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Thermometer"), gdjs.GameCode.GDThermometerObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Stable");
}
{for(var i = 0, len = gdjs.GameCode.GDThermometerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDThermometerObjects2[i].setColor("0;255;0");
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
gdjs.copyArray(runtimeScene.getObjects("Thermometer"), gdjs.GameCode.GDThermometerObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Warming");
}
{for(var i = 0, len = gdjs.GameCode.GDThermometerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDThermometerObjects2[i].setColor("255;200;0");
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
gdjs.copyArray(runtimeScene.getObjects("Thermometer"), gdjs.GameCode.GDThermometerObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Dangerous");
}
{for(var i = 0, len = gdjs.GameCode.GDThermometerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDThermometerObjects2[i].setColor("255;0;0");
}
}
elseEventsChainSatisfied = true;
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("FeedbackText"), gdjs.GameCode.GDFeedbackTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("InfoBox"), gdjs.GameCode.GDInfoBoxObjects1);
gdjs.copyArray(runtimeScene.getObjects("InfoText"), gdjs.GameCode.GDInfoTextObjects1);
{for(var i = 0, len = gdjs.GameCode.GDInfoBoxObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDInfoBoxObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.GameCode.GDFeedbackTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFeedbackTextObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.GameCode.GDInfoTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDInfoTextObjects1[i].getBehavior("Text").setText("");
}
}
}

}

}

};gdjs.GameCode.mapOfEmptyGDVolcanoObjectsEmptyGDWaterVaporObjectsEmptyGDCO2ObjectsEmptyGDCH4ObjectsEmptyGDN2OObjectsEmptyGDCowObjectsEmptyGDDeforestationObjectsEmptyGDFridgeObjectsEmptyGDAirconObjectsEmptyGDCarObjectsEmptyGDOilBarrelObjectsEmptyGDAxeObjects = Hashtable.newFrom({"Volcano": [], "WaterVapor": [], "CO2": [], "CH4": [], "N2O": [], "Cow": [], "Deforestation": [], "Fridge": [], "Aircon": [], "Car": [], "OilBarrel": [], "Axe": []});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDVolcanoObjects1ObjectsGDgdjs_9546GameCode_9546GDWaterVaporObjects1ObjectsGDgdjs_9546GameCode_9546GDCO2Objects1ObjectsGDgdjs_9546GameCode_9546GDCH4Objects1ObjectsGDgdjs_9546GameCode_9546GDN2OObjects1ObjectsGDgdjs_9546GameCode_9546GDCowObjects1ObjectsGDgdjs_9546GameCode_9546GDDeforestationObjects1ObjectsGDgdjs_9546GameCode_9546GDFridgeObjects1ObjectsGDgdjs_9546GameCode_9546GDAirconObjects1ObjectsGDgdjs_9546GameCode_9546GDCarObjects1ObjectsGDgdjs_9546GameCode_9546GDOilBarrelObjects1ObjectsGDgdjs_9546GameCode_9546GDAxeObjects1Objects = Hashtable.newFrom({"Volcano": gdjs.GameCode.GDVolcanoObjects1, "WaterVapor": gdjs.GameCode.GDWaterVaporObjects1, "CO2": gdjs.GameCode.GDCO2Objects1, "CH4": gdjs.GameCode.GDCH4Objects1, "N2O": gdjs.GameCode.GDN2OObjects1, "Cow": gdjs.GameCode.GDCowObjects1, "Deforestation": gdjs.GameCode.GDDeforestationObjects1, "Fridge": gdjs.GameCode.GDFridgeObjects1, "Aircon": gdjs.GameCode.GDAirconObjects1, "Car": gdjs.GameCode.GDCarObjects1, "OilBarrel": gdjs.GameCode.GDOilBarrelObjects1, "Axe": gdjs.GameCode.GDAxeObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDVolcanoObjects1ObjectsGDgdjs_9546GameCode_9546GDWaterVaporObjects1ObjectsGDgdjs_9546GameCode_9546GDCO2Objects1ObjectsGDgdjs_9546GameCode_9546GDCH4Objects1ObjectsGDgdjs_9546GameCode_9546GDN2OObjects1ObjectsGDgdjs_9546GameCode_9546GDCowObjects1ObjectsGDgdjs_9546GameCode_9546GDDeforestationObjects1ObjectsGDgdjs_9546GameCode_9546GDFridgeObjects1ObjectsGDgdjs_9546GameCode_9546GDAirconObjects1ObjectsGDgdjs_9546GameCode_9546GDCarObjects1ObjectsGDgdjs_9546GameCode_9546GDOilBarrelObjects1ObjectsGDgdjs_9546GameCode_9546GDAxeObjects1Objects = Hashtable.newFrom({"Volcano": gdjs.GameCode.GDVolcanoObjects1, "WaterVapor": gdjs.GameCode.GDWaterVaporObjects1, "CO2": gdjs.GameCode.GDCO2Objects1, "CH4": gdjs.GameCode.GDCH4Objects1, "N2O": gdjs.GameCode.GDN2OObjects1, "Cow": gdjs.GameCode.GDCowObjects1, "Deforestation": gdjs.GameCode.GDDeforestationObjects1, "Fridge": gdjs.GameCode.GDFridgeObjects1, "Aircon": gdjs.GameCode.GDAirconObjects1, "Car": gdjs.GameCode.GDCarObjects1, "OilBarrel": gdjs.GameCode.GDOilBarrelObjects1, "Axe": gdjs.GameCode.GDAxeObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDNaturalZoneObjects1Objects = Hashtable.newFrom({"NaturalZone": gdjs.GameCode.GDNaturalZoneObjects1});
gdjs.GameCode.eventsList1 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{

gdjs.copyArray(gdjs.GameCode.GDAirconObjects1, gdjs.GameCode.GDAirconObjects2);

gdjs.copyArray(gdjs.GameCode.GDAxeObjects1, gdjs.GameCode.GDAxeObjects2);

gdjs.copyArray(gdjs.GameCode.GDCH4Objects1, gdjs.GameCode.GDCH4Objects2);

gdjs.copyArray(gdjs.GameCode.GDCO2Objects1, gdjs.GameCode.GDCO2Objects2);

gdjs.copyArray(gdjs.GameCode.GDCarObjects1, gdjs.GameCode.GDCarObjects2);

gdjs.copyArray(gdjs.GameCode.GDCowObjects1, gdjs.GameCode.GDCowObjects2);

gdjs.copyArray(gdjs.GameCode.GDDeforestationObjects1, gdjs.GameCode.GDDeforestationObjects2);

gdjs.copyArray(gdjs.GameCode.GDFridgeObjects1, gdjs.GameCode.GDFridgeObjects2);

gdjs.copyArray(gdjs.GameCode.GDN2OObjects1, gdjs.GameCode.GDN2OObjects2);

gdjs.copyArray(gdjs.GameCode.GDOilBarrelObjects1, gdjs.GameCode.GDOilBarrelObjects2);

gdjs.copyArray(gdjs.GameCode.GDVolcanoObjects1, gdjs.GameCode.GDVolcanoObjects2);

gdjs.copyArray(gdjs.GameCode.GDWaterVaporObjects1, gdjs.GameCode.GDWaterVaporObjects2);


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDVolcanoObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDVolcanoObjects2[i].getVariableString(gdjs.GameCode.GDVolcanoObjects2[i].getVariables().get("Category")) == "natural" ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDVolcanoObjects2[k] = gdjs.GameCode.GDVolcanoObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDVolcanoObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDWaterVaporObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDWaterVaporObjects2[i].getVariableString(gdjs.GameCode.GDWaterVaporObjects2[i].getVariables().get("Category")) == "natural" ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDWaterVaporObjects2[k] = gdjs.GameCode.GDWaterVaporObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDWaterVaporObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCO2Objects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDCO2Objects2[i].getVariableString(gdjs.GameCode.GDCO2Objects2[i].getVariables().get("Category")) == "natural" ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCO2Objects2[k] = gdjs.GameCode.GDCO2Objects2[i];
        ++k;
    }
}
gdjs.GameCode.GDCO2Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCH4Objects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDCH4Objects2[i].getVariableString(gdjs.GameCode.GDCH4Objects2[i].getVariables().get("Category")) == "natural" ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCH4Objects2[k] = gdjs.GameCode.GDCH4Objects2[i];
        ++k;
    }
}
gdjs.GameCode.GDCH4Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDN2OObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDN2OObjects2[i].getVariableString(gdjs.GameCode.GDN2OObjects2[i].getVariables().get("Category")) == "natural" ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDN2OObjects2[k] = gdjs.GameCode.GDN2OObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDN2OObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCowObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDCowObjects2[i].getVariableString(gdjs.GameCode.GDCowObjects2[i].getVariables().get("Category")) == "natural" ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCowObjects2[k] = gdjs.GameCode.GDCowObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDCowObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDDeforestationObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDDeforestationObjects2[i].getVariableString(gdjs.GameCode.GDDeforestationObjects2[i].getVariables().get("Category")) == "natural" ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDDeforestationObjects2[k] = gdjs.GameCode.GDDeforestationObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDDeforestationObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDFridgeObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDFridgeObjects2[i].getVariableString(gdjs.GameCode.GDFridgeObjects2[i].getVariables().get("Category")) == "natural" ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDFridgeObjects2[k] = gdjs.GameCode.GDFridgeObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDFridgeObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDAirconObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDAirconObjects2[i].getVariableString(gdjs.GameCode.GDAirconObjects2[i].getVariables().get("Category")) == "natural" ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDAirconObjects2[k] = gdjs.GameCode.GDAirconObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDAirconObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCarObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDCarObjects2[i].getVariableString(gdjs.GameCode.GDCarObjects2[i].getVariables().get("Category")) == "natural" ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCarObjects2[k] = gdjs.GameCode.GDCarObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDCarObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDOilBarrelObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDOilBarrelObjects2[i].getVariableString(gdjs.GameCode.GDOilBarrelObjects2[i].getVariables().get("Category")) == "natural" ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDOilBarrelObjects2[k] = gdjs.GameCode.GDOilBarrelObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDOilBarrelObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDAxeObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDAxeObjects2[i].getVariableString(gdjs.GameCode.GDAxeObjects2[i].getVariables().get("Category")) == "natural" ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDAxeObjects2[k] = gdjs.GameCode.GDAxeObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDAxeObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDAirconObjects2 */
/* Reuse gdjs.GameCode.GDAxeObjects2 */
/* Reuse gdjs.GameCode.GDCH4Objects2 */
/* Reuse gdjs.GameCode.GDCO2Objects2 */
/* Reuse gdjs.GameCode.GDCarObjects2 */
/* Reuse gdjs.GameCode.GDCowObjects2 */
/* Reuse gdjs.GameCode.GDDeforestationObjects2 */
gdjs.copyArray(runtimeScene.getObjects("FeedbackText"), gdjs.GameCode.GDFeedbackTextObjects2);
/* Reuse gdjs.GameCode.GDFridgeObjects2 */
gdjs.copyArray(runtimeScene.getObjects("InfoBox"), gdjs.GameCode.GDInfoBoxObjects2);
gdjs.copyArray(runtimeScene.getObjects("InfoText"), gdjs.GameCode.GDInfoTextObjects2);
/* Reuse gdjs.GameCode.GDN2OObjects2 */
/* Reuse gdjs.GameCode.GDOilBarrelObjects2 */
/* Reuse gdjs.GameCode.GDVolcanoObjects2 */
/* Reuse gdjs.GameCode.GDWaterVaporObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(6).add(10);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(3).add(1);
}
{for(var i = 0, len = gdjs.GameCode.GDFeedbackTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFeedbackTextObjects2[i].getBehavior("Text").setText("Correct!");
}
}
{for(var i = 0, len = gdjs.GameCode.GDFeedbackTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFeedbackTextObjects2[i].setColor("0;255;0");
}
}
{for(var i = 0, len = gdjs.GameCode.GDInfoBoxObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDInfoBoxObjects2[i].setColor("0;180;80");
}
}
{for(var i = 0, len = gdjs.GameCode.GDInfoTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDInfoTextObjects2[i].getBehavior("Text").setText(((gdjs.GameCode.GDAxeObjects2.length === 0 ) ? ((gdjs.GameCode.GDOilBarrelObjects2.length === 0 ) ? ((gdjs.GameCode.GDCarObjects2.length === 0 ) ? ((gdjs.GameCode.GDAirconObjects2.length === 0 ) ? ((gdjs.GameCode.GDFridgeObjects2.length === 0 ) ? ((gdjs.GameCode.GDDeforestationObjects2.length === 0 ) ? ((gdjs.GameCode.GDCowObjects2.length === 0 ) ? ((gdjs.GameCode.GDN2OObjects2.length === 0 ) ? ((gdjs.GameCode.GDCH4Objects2.length === 0 ) ? ((gdjs.GameCode.GDCO2Objects2.length === 0 ) ? ((gdjs.GameCode.GDWaterVaporObjects2.length === 0 ) ? ((gdjs.GameCode.GDVolcanoObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDVolcanoObjects2[0].getVariables()) : gdjs.GameCode.GDWaterVaporObjects2[0].getVariables()) : gdjs.GameCode.GDCO2Objects2[0].getVariables()) : gdjs.GameCode.GDCH4Objects2[0].getVariables()) : gdjs.GameCode.GDN2OObjects2[0].getVariables()) : gdjs.GameCode.GDCowObjects2[0].getVariables()) : gdjs.GameCode.GDDeforestationObjects2[0].getVariables()) : gdjs.GameCode.GDFridgeObjects2[0].getVariables()) : gdjs.GameCode.GDAirconObjects2[0].getVariables()) : gdjs.GameCode.GDCarObjects2[0].getVariables()) : gdjs.GameCode.GDOilBarrelObjects2[0].getVariables()) : gdjs.GameCode.GDAxeObjects2[0].getVariables()).get("Label").getAsString() + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + ((gdjs.GameCode.GDAxeObjects2.length === 0 ) ? ((gdjs.GameCode.GDOilBarrelObjects2.length === 0 ) ? ((gdjs.GameCode.GDCarObjects2.length === 0 ) ? ((gdjs.GameCode.GDAirconObjects2.length === 0 ) ? ((gdjs.GameCode.GDFridgeObjects2.length === 0 ) ? ((gdjs.GameCode.GDDeforestationObjects2.length === 0 ) ? ((gdjs.GameCode.GDCowObjects2.length === 0 ) ? ((gdjs.GameCode.GDN2OObjects2.length === 0 ) ? ((gdjs.GameCode.GDCH4Objects2.length === 0 ) ? ((gdjs.GameCode.GDCO2Objects2.length === 0 ) ? ((gdjs.GameCode.GDWaterVaporObjects2.length === 0 ) ? ((gdjs.GameCode.GDVolcanoObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDVolcanoObjects2[0].getVariables()) : gdjs.GameCode.GDWaterVaporObjects2[0].getVariables()) : gdjs.GameCode.GDCO2Objects2[0].getVariables()) : gdjs.GameCode.GDCH4Objects2[0].getVariables()) : gdjs.GameCode.GDN2OObjects2[0].getVariables()) : gdjs.GameCode.GDCowObjects2[0].getVariables()) : gdjs.GameCode.GDDeforestationObjects2[0].getVariables()) : gdjs.GameCode.GDFridgeObjects2[0].getVariables()) : gdjs.GameCode.GDAirconObjects2[0].getVariables()) : gdjs.GameCode.GDCarObjects2[0].getVariables()) : gdjs.GameCode.GDOilBarrelObjects2[0].getVariables()) : gdjs.GameCode.GDAxeObjects2[0].getVariables()).get("InfoText").getAsString());
}
}
{for(var i = 0, len = gdjs.GameCode.GDInfoBoxObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDInfoBoxObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.GameCode.GDFeedbackTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFeedbackTextObjects2[i].hide(false);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setBoolean(true);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Powerup 3.aac", false, 100, 1);
}
{for(var i = 0, len = gdjs.GameCode.GDVolcanoObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDVolcanoObjects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDWaterVaporObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDWaterVaporObjects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDCO2Objects2.length ;i < len;++i) {
    gdjs.GameCode.GDCO2Objects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDCH4Objects2.length ;i < len;++i) {
    gdjs.GameCode.GDCH4Objects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDN2OObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDN2OObjects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDCowObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCowObjects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDDeforestationObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDeforestationObjects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDFridgeObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFridgeObjects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDAirconObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDAirconObjects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDCarObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCarObjects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDOilBarrelObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDOilBarrelObjects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDAxeObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDAxeObjects2[i].deleteFromScene(runtimeScene);
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
/* Reuse gdjs.GameCode.GDAirconObjects1 */
/* Reuse gdjs.GameCode.GDAxeObjects1 */
/* Reuse gdjs.GameCode.GDCH4Objects1 */
/* Reuse gdjs.GameCode.GDCO2Objects1 */
/* Reuse gdjs.GameCode.GDCarObjects1 */
/* Reuse gdjs.GameCode.GDCowObjects1 */
/* Reuse gdjs.GameCode.GDDeforestationObjects1 */
gdjs.copyArray(runtimeScene.getObjects("FeedbackText"), gdjs.GameCode.GDFeedbackTextObjects1);
/* Reuse gdjs.GameCode.GDFridgeObjects1 */
gdjs.copyArray(runtimeScene.getObjects("InfoBox"), gdjs.GameCode.GDInfoBoxObjects1);
gdjs.copyArray(runtimeScene.getObjects("InfoText"), gdjs.GameCode.GDInfoTextObjects1);
/* Reuse gdjs.GameCode.GDN2OObjects1 */
/* Reuse gdjs.GameCode.GDOilBarrelObjects1 */
/* Reuse gdjs.GameCode.GDVolcanoObjects1 */
/* Reuse gdjs.GameCode.GDWaterVaporObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(6).sub(5);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}
{for(var i = 0, len = gdjs.GameCode.GDFeedbackTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFeedbackTextObjects1[i].getBehavior("Text").setText("Wrong!");
}
}
{for(var i = 0, len = gdjs.GameCode.GDFeedbackTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFeedbackTextObjects1[i].setColor("255;0;0");
}
}
{for(var i = 0, len = gdjs.GameCode.GDInfoBoxObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDInfoBoxObjects1[i].setColor("220;60;30");
}
}
{for(var i = 0, len = gdjs.GameCode.GDInfoTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDInfoTextObjects1[i].getBehavior("Text").setText(((gdjs.GameCode.GDAxeObjects1.length === 0 ) ? ((gdjs.GameCode.GDOilBarrelObjects1.length === 0 ) ? ((gdjs.GameCode.GDCarObjects1.length === 0 ) ? ((gdjs.GameCode.GDAirconObjects1.length === 0 ) ? ((gdjs.GameCode.GDFridgeObjects1.length === 0 ) ? ((gdjs.GameCode.GDDeforestationObjects1.length === 0 ) ? ((gdjs.GameCode.GDCowObjects1.length === 0 ) ? ((gdjs.GameCode.GDN2OObjects1.length === 0 ) ? ((gdjs.GameCode.GDCH4Objects1.length === 0 ) ? ((gdjs.GameCode.GDCO2Objects1.length === 0 ) ? ((gdjs.GameCode.GDWaterVaporObjects1.length === 0 ) ? ((gdjs.GameCode.GDVolcanoObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDVolcanoObjects1[0].getVariables()) : gdjs.GameCode.GDWaterVaporObjects1[0].getVariables()) : gdjs.GameCode.GDCO2Objects1[0].getVariables()) : gdjs.GameCode.GDCH4Objects1[0].getVariables()) : gdjs.GameCode.GDN2OObjects1[0].getVariables()) : gdjs.GameCode.GDCowObjects1[0].getVariables()) : gdjs.GameCode.GDDeforestationObjects1[0].getVariables()) : gdjs.GameCode.GDFridgeObjects1[0].getVariables()) : gdjs.GameCode.GDAirconObjects1[0].getVariables()) : gdjs.GameCode.GDCarObjects1[0].getVariables()) : gdjs.GameCode.GDOilBarrelObjects1[0].getVariables()) : gdjs.GameCode.GDAxeObjects1[0].getVariables()).get("Label").getAsString() + " belongs in: Enhanced / Human-Induced GHGs" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + ((gdjs.GameCode.GDAxeObjects1.length === 0 ) ? ((gdjs.GameCode.GDOilBarrelObjects1.length === 0 ) ? ((gdjs.GameCode.GDCarObjects1.length === 0 ) ? ((gdjs.GameCode.GDAirconObjects1.length === 0 ) ? ((gdjs.GameCode.GDFridgeObjects1.length === 0 ) ? ((gdjs.GameCode.GDDeforestationObjects1.length === 0 ) ? ((gdjs.GameCode.GDCowObjects1.length === 0 ) ? ((gdjs.GameCode.GDN2OObjects1.length === 0 ) ? ((gdjs.GameCode.GDCH4Objects1.length === 0 ) ? ((gdjs.GameCode.GDCO2Objects1.length === 0 ) ? ((gdjs.GameCode.GDWaterVaporObjects1.length === 0 ) ? ((gdjs.GameCode.GDVolcanoObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDVolcanoObjects1[0].getVariables()) : gdjs.GameCode.GDWaterVaporObjects1[0].getVariables()) : gdjs.GameCode.GDCO2Objects1[0].getVariables()) : gdjs.GameCode.GDCH4Objects1[0].getVariables()) : gdjs.GameCode.GDN2OObjects1[0].getVariables()) : gdjs.GameCode.GDCowObjects1[0].getVariables()) : gdjs.GameCode.GDDeforestationObjects1[0].getVariables()) : gdjs.GameCode.GDFridgeObjects1[0].getVariables()) : gdjs.GameCode.GDAirconObjects1[0].getVariables()) : gdjs.GameCode.GDCarObjects1[0].getVariables()) : gdjs.GameCode.GDOilBarrelObjects1[0].getVariables()) : gdjs.GameCode.GDAxeObjects1[0].getVariables()).get("InfoText").getAsString());
}
}
{for(var i = 0, len = gdjs.GameCode.GDInfoBoxObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDInfoBoxObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.GameCode.GDFeedbackTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFeedbackTextObjects1[i].hide(false);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setBoolean(true);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Lose 1.aac", false, 100, 1);
}
{for(var i = 0, len = gdjs.GameCode.GDVolcanoObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDVolcanoObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDWaterVaporObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDWaterVaporObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDCO2Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDCO2Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDCH4Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDCH4Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDN2OObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDN2OObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDCowObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCowObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDDeforestationObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDDeforestationObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDFridgeObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFridgeObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDAirconObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDAirconObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDCarObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCarObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDOilBarrelObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDOilBarrelObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDAxeObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDAxeObjects1[i].deleteFromScene(runtimeScene);
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDVolcanoObjects1ObjectsGDgdjs_9546GameCode_9546GDWaterVaporObjects1ObjectsGDgdjs_9546GameCode_9546GDCO2Objects1ObjectsGDgdjs_9546GameCode_9546GDCH4Objects1ObjectsGDgdjs_9546GameCode_9546GDN2OObjects1ObjectsGDgdjs_9546GameCode_9546GDCowObjects1ObjectsGDgdjs_9546GameCode_9546GDDeforestationObjects1ObjectsGDgdjs_9546GameCode_9546GDFridgeObjects1ObjectsGDgdjs_9546GameCode_9546GDAirconObjects1ObjectsGDgdjs_9546GameCode_9546GDCarObjects1ObjectsGDgdjs_9546GameCode_9546GDOilBarrelObjects1ObjectsGDgdjs_9546GameCode_9546GDAxeObjects1Objects = Hashtable.newFrom({"Volcano": gdjs.GameCode.GDVolcanoObjects1, "WaterVapor": gdjs.GameCode.GDWaterVaporObjects1, "CO2": gdjs.GameCode.GDCO2Objects1, "CH4": gdjs.GameCode.GDCH4Objects1, "N2O": gdjs.GameCode.GDN2OObjects1, "Cow": gdjs.GameCode.GDCowObjects1, "Deforestation": gdjs.GameCode.GDDeforestationObjects1, "Fridge": gdjs.GameCode.GDFridgeObjects1, "Aircon": gdjs.GameCode.GDAirconObjects1, "Car": gdjs.GameCode.GDCarObjects1, "OilBarrel": gdjs.GameCode.GDOilBarrelObjects1, "Axe": gdjs.GameCode.GDAxeObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDEnhancedZoneObjects1Objects = Hashtable.newFrom({"EnhancedZone": gdjs.GameCode.GDEnhancedZoneObjects1});
gdjs.GameCode.eventsList2 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{

gdjs.copyArray(gdjs.GameCode.GDAirconObjects1, gdjs.GameCode.GDAirconObjects2);

gdjs.copyArray(gdjs.GameCode.GDAxeObjects1, gdjs.GameCode.GDAxeObjects2);

gdjs.copyArray(gdjs.GameCode.GDCH4Objects1, gdjs.GameCode.GDCH4Objects2);

gdjs.copyArray(gdjs.GameCode.GDCO2Objects1, gdjs.GameCode.GDCO2Objects2);

gdjs.copyArray(gdjs.GameCode.GDCarObjects1, gdjs.GameCode.GDCarObjects2);

gdjs.copyArray(gdjs.GameCode.GDCowObjects1, gdjs.GameCode.GDCowObjects2);

gdjs.copyArray(gdjs.GameCode.GDDeforestationObjects1, gdjs.GameCode.GDDeforestationObjects2);

gdjs.copyArray(gdjs.GameCode.GDFridgeObjects1, gdjs.GameCode.GDFridgeObjects2);

gdjs.copyArray(gdjs.GameCode.GDN2OObjects1, gdjs.GameCode.GDN2OObjects2);

gdjs.copyArray(gdjs.GameCode.GDOilBarrelObjects1, gdjs.GameCode.GDOilBarrelObjects2);

gdjs.copyArray(gdjs.GameCode.GDVolcanoObjects1, gdjs.GameCode.GDVolcanoObjects2);

gdjs.copyArray(gdjs.GameCode.GDWaterVaporObjects1, gdjs.GameCode.GDWaterVaporObjects2);


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDVolcanoObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDVolcanoObjects2[i].getVariableString(gdjs.GameCode.GDVolcanoObjects2[i].getVariables().get("Category")) == "enhanced" ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDVolcanoObjects2[k] = gdjs.GameCode.GDVolcanoObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDVolcanoObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDWaterVaporObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDWaterVaporObjects2[i].getVariableString(gdjs.GameCode.GDWaterVaporObjects2[i].getVariables().get("Category")) == "enhanced" ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDWaterVaporObjects2[k] = gdjs.GameCode.GDWaterVaporObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDWaterVaporObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCO2Objects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDCO2Objects2[i].getVariableString(gdjs.GameCode.GDCO2Objects2[i].getVariables().get("Category")) == "enhanced" ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCO2Objects2[k] = gdjs.GameCode.GDCO2Objects2[i];
        ++k;
    }
}
gdjs.GameCode.GDCO2Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCH4Objects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDCH4Objects2[i].getVariableString(gdjs.GameCode.GDCH4Objects2[i].getVariables().get("Category")) == "enhanced" ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCH4Objects2[k] = gdjs.GameCode.GDCH4Objects2[i];
        ++k;
    }
}
gdjs.GameCode.GDCH4Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDN2OObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDN2OObjects2[i].getVariableString(gdjs.GameCode.GDN2OObjects2[i].getVariables().get("Category")) == "enhanced" ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDN2OObjects2[k] = gdjs.GameCode.GDN2OObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDN2OObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCowObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDCowObjects2[i].getVariableString(gdjs.GameCode.GDCowObjects2[i].getVariables().get("Category")) == "enhanced" ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCowObjects2[k] = gdjs.GameCode.GDCowObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDCowObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDDeforestationObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDDeforestationObjects2[i].getVariableString(gdjs.GameCode.GDDeforestationObjects2[i].getVariables().get("Category")) == "enhanced" ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDDeforestationObjects2[k] = gdjs.GameCode.GDDeforestationObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDDeforestationObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDFridgeObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDFridgeObjects2[i].getVariableString(gdjs.GameCode.GDFridgeObjects2[i].getVariables().get("Category")) == "enhanced" ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDFridgeObjects2[k] = gdjs.GameCode.GDFridgeObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDFridgeObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDAirconObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDAirconObjects2[i].getVariableString(gdjs.GameCode.GDAirconObjects2[i].getVariables().get("Category")) == "enhanced" ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDAirconObjects2[k] = gdjs.GameCode.GDAirconObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDAirconObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCarObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDCarObjects2[i].getVariableString(gdjs.GameCode.GDCarObjects2[i].getVariables().get("Category")) == "enhanced" ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCarObjects2[k] = gdjs.GameCode.GDCarObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDCarObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDOilBarrelObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDOilBarrelObjects2[i].getVariableString(gdjs.GameCode.GDOilBarrelObjects2[i].getVariables().get("Category")) == "enhanced" ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDOilBarrelObjects2[k] = gdjs.GameCode.GDOilBarrelObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDOilBarrelObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDAxeObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDAxeObjects2[i].getVariableString(gdjs.GameCode.GDAxeObjects2[i].getVariables().get("Category")) == "enhanced" ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDAxeObjects2[k] = gdjs.GameCode.GDAxeObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDAxeObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDAirconObjects2 */
/* Reuse gdjs.GameCode.GDAxeObjects2 */
/* Reuse gdjs.GameCode.GDCH4Objects2 */
/* Reuse gdjs.GameCode.GDCO2Objects2 */
/* Reuse gdjs.GameCode.GDCarObjects2 */
/* Reuse gdjs.GameCode.GDCowObjects2 */
/* Reuse gdjs.GameCode.GDDeforestationObjects2 */
gdjs.copyArray(runtimeScene.getObjects("FeedbackText"), gdjs.GameCode.GDFeedbackTextObjects2);
/* Reuse gdjs.GameCode.GDFridgeObjects2 */
gdjs.copyArray(runtimeScene.getObjects("InfoBox"), gdjs.GameCode.GDInfoBoxObjects2);
gdjs.copyArray(runtimeScene.getObjects("InfoText"), gdjs.GameCode.GDInfoTextObjects2);
/* Reuse gdjs.GameCode.GDN2OObjects2 */
/* Reuse gdjs.GameCode.GDOilBarrelObjects2 */
/* Reuse gdjs.GameCode.GDVolcanoObjects2 */
/* Reuse gdjs.GameCode.GDWaterVaporObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(6).add(10);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(3).add(1);
}
{for(var i = 0, len = gdjs.GameCode.GDFeedbackTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFeedbackTextObjects2[i].getBehavior("Text").setText("Correct!");
}
}
{for(var i = 0, len = gdjs.GameCode.GDFeedbackTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFeedbackTextObjects2[i].setColor("0;255;0");
}
}
{for(var i = 0, len = gdjs.GameCode.GDInfoBoxObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDInfoBoxObjects2[i].setColor("0;180;80");
}
}
{for(var i = 0, len = gdjs.GameCode.GDInfoTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDInfoTextObjects2[i].getBehavior("Text").setText(((gdjs.GameCode.GDAxeObjects2.length === 0 ) ? ((gdjs.GameCode.GDOilBarrelObjects2.length === 0 ) ? ((gdjs.GameCode.GDCarObjects2.length === 0 ) ? ((gdjs.GameCode.GDAirconObjects2.length === 0 ) ? ((gdjs.GameCode.GDFridgeObjects2.length === 0 ) ? ((gdjs.GameCode.GDDeforestationObjects2.length === 0 ) ? ((gdjs.GameCode.GDCowObjects2.length === 0 ) ? ((gdjs.GameCode.GDN2OObjects2.length === 0 ) ? ((gdjs.GameCode.GDCH4Objects2.length === 0 ) ? ((gdjs.GameCode.GDCO2Objects2.length === 0 ) ? ((gdjs.GameCode.GDWaterVaporObjects2.length === 0 ) ? ((gdjs.GameCode.GDVolcanoObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDVolcanoObjects2[0].getVariables()) : gdjs.GameCode.GDWaterVaporObjects2[0].getVariables()) : gdjs.GameCode.GDCO2Objects2[0].getVariables()) : gdjs.GameCode.GDCH4Objects2[0].getVariables()) : gdjs.GameCode.GDN2OObjects2[0].getVariables()) : gdjs.GameCode.GDCowObjects2[0].getVariables()) : gdjs.GameCode.GDDeforestationObjects2[0].getVariables()) : gdjs.GameCode.GDFridgeObjects2[0].getVariables()) : gdjs.GameCode.GDAirconObjects2[0].getVariables()) : gdjs.GameCode.GDCarObjects2[0].getVariables()) : gdjs.GameCode.GDOilBarrelObjects2[0].getVariables()) : gdjs.GameCode.GDAxeObjects2[0].getVariables()).get("Label").getAsString() + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + ((gdjs.GameCode.GDAxeObjects2.length === 0 ) ? ((gdjs.GameCode.GDOilBarrelObjects2.length === 0 ) ? ((gdjs.GameCode.GDCarObjects2.length === 0 ) ? ((gdjs.GameCode.GDAirconObjects2.length === 0 ) ? ((gdjs.GameCode.GDFridgeObjects2.length === 0 ) ? ((gdjs.GameCode.GDDeforestationObjects2.length === 0 ) ? ((gdjs.GameCode.GDCowObjects2.length === 0 ) ? ((gdjs.GameCode.GDN2OObjects2.length === 0 ) ? ((gdjs.GameCode.GDCH4Objects2.length === 0 ) ? ((gdjs.GameCode.GDCO2Objects2.length === 0 ) ? ((gdjs.GameCode.GDWaterVaporObjects2.length === 0 ) ? ((gdjs.GameCode.GDVolcanoObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDVolcanoObjects2[0].getVariables()) : gdjs.GameCode.GDWaterVaporObjects2[0].getVariables()) : gdjs.GameCode.GDCO2Objects2[0].getVariables()) : gdjs.GameCode.GDCH4Objects2[0].getVariables()) : gdjs.GameCode.GDN2OObjects2[0].getVariables()) : gdjs.GameCode.GDCowObjects2[0].getVariables()) : gdjs.GameCode.GDDeforestationObjects2[0].getVariables()) : gdjs.GameCode.GDFridgeObjects2[0].getVariables()) : gdjs.GameCode.GDAirconObjects2[0].getVariables()) : gdjs.GameCode.GDCarObjects2[0].getVariables()) : gdjs.GameCode.GDOilBarrelObjects2[0].getVariables()) : gdjs.GameCode.GDAxeObjects2[0].getVariables()).get("InfoText").getAsString());
}
}
{for(var i = 0, len = gdjs.GameCode.GDInfoBoxObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDInfoBoxObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.GameCode.GDFeedbackTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFeedbackTextObjects2[i].hide(false);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setBoolean(true);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Powerup 3.aac", false, 100, 1);
}
{for(var i = 0, len = gdjs.GameCode.GDVolcanoObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDVolcanoObjects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDWaterVaporObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDWaterVaporObjects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDCO2Objects2.length ;i < len;++i) {
    gdjs.GameCode.GDCO2Objects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDCH4Objects2.length ;i < len;++i) {
    gdjs.GameCode.GDCH4Objects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDN2OObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDN2OObjects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDCowObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCowObjects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDDeforestationObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDeforestationObjects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDFridgeObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFridgeObjects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDAirconObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDAirconObjects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDCarObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCarObjects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDOilBarrelObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDOilBarrelObjects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDAxeObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDAxeObjects2[i].deleteFromScene(runtimeScene);
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
/* Reuse gdjs.GameCode.GDAirconObjects1 */
/* Reuse gdjs.GameCode.GDAxeObjects1 */
/* Reuse gdjs.GameCode.GDCH4Objects1 */
/* Reuse gdjs.GameCode.GDCO2Objects1 */
/* Reuse gdjs.GameCode.GDCarObjects1 */
/* Reuse gdjs.GameCode.GDCowObjects1 */
/* Reuse gdjs.GameCode.GDDeforestationObjects1 */
gdjs.copyArray(runtimeScene.getObjects("FeedbackText"), gdjs.GameCode.GDFeedbackTextObjects1);
/* Reuse gdjs.GameCode.GDFridgeObjects1 */
gdjs.copyArray(runtimeScene.getObjects("InfoBox"), gdjs.GameCode.GDInfoBoxObjects1);
gdjs.copyArray(runtimeScene.getObjects("InfoText"), gdjs.GameCode.GDInfoTextObjects1);
/* Reuse gdjs.GameCode.GDN2OObjects1 */
/* Reuse gdjs.GameCode.GDOilBarrelObjects1 */
/* Reuse gdjs.GameCode.GDVolcanoObjects1 */
/* Reuse gdjs.GameCode.GDWaterVaporObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(6).sub(5);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}
{for(var i = 0, len = gdjs.GameCode.GDFeedbackTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFeedbackTextObjects1[i].getBehavior("Text").setText("Wrong!");
}
}
{for(var i = 0, len = gdjs.GameCode.GDFeedbackTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFeedbackTextObjects1[i].setColor("255;0;0");
}
}
{for(var i = 0, len = gdjs.GameCode.GDInfoBoxObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDInfoBoxObjects1[i].setColor("220;60;30");
}
}
{for(var i = 0, len = gdjs.GameCode.GDInfoTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDInfoTextObjects1[i].getBehavior("Text").setText(((gdjs.GameCode.GDAxeObjects1.length === 0 ) ? ((gdjs.GameCode.GDOilBarrelObjects1.length === 0 ) ? ((gdjs.GameCode.GDCarObjects1.length === 0 ) ? ((gdjs.GameCode.GDAirconObjects1.length === 0 ) ? ((gdjs.GameCode.GDFridgeObjects1.length === 0 ) ? ((gdjs.GameCode.GDDeforestationObjects1.length === 0 ) ? ((gdjs.GameCode.GDCowObjects1.length === 0 ) ? ((gdjs.GameCode.GDN2OObjects1.length === 0 ) ? ((gdjs.GameCode.GDCH4Objects1.length === 0 ) ? ((gdjs.GameCode.GDCO2Objects1.length === 0 ) ? ((gdjs.GameCode.GDWaterVaporObjects1.length === 0 ) ? ((gdjs.GameCode.GDVolcanoObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDVolcanoObjects1[0].getVariables()) : gdjs.GameCode.GDWaterVaporObjects1[0].getVariables()) : gdjs.GameCode.GDCO2Objects1[0].getVariables()) : gdjs.GameCode.GDCH4Objects1[0].getVariables()) : gdjs.GameCode.GDN2OObjects1[0].getVariables()) : gdjs.GameCode.GDCowObjects1[0].getVariables()) : gdjs.GameCode.GDDeforestationObjects1[0].getVariables()) : gdjs.GameCode.GDFridgeObjects1[0].getVariables()) : gdjs.GameCode.GDAirconObjects1[0].getVariables()) : gdjs.GameCode.GDCarObjects1[0].getVariables()) : gdjs.GameCode.GDOilBarrelObjects1[0].getVariables()) : gdjs.GameCode.GDAxeObjects1[0].getVariables()).get("Label").getAsString() + " belongs in: Natural GHGs" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + ((gdjs.GameCode.GDAxeObjects1.length === 0 ) ? ((gdjs.GameCode.GDOilBarrelObjects1.length === 0 ) ? ((gdjs.GameCode.GDCarObjects1.length === 0 ) ? ((gdjs.GameCode.GDAirconObjects1.length === 0 ) ? ((gdjs.GameCode.GDFridgeObjects1.length === 0 ) ? ((gdjs.GameCode.GDDeforestationObjects1.length === 0 ) ? ((gdjs.GameCode.GDCowObjects1.length === 0 ) ? ((gdjs.GameCode.GDN2OObjects1.length === 0 ) ? ((gdjs.GameCode.GDCH4Objects1.length === 0 ) ? ((gdjs.GameCode.GDCO2Objects1.length === 0 ) ? ((gdjs.GameCode.GDWaterVaporObjects1.length === 0 ) ? ((gdjs.GameCode.GDVolcanoObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDVolcanoObjects1[0].getVariables()) : gdjs.GameCode.GDWaterVaporObjects1[0].getVariables()) : gdjs.GameCode.GDCO2Objects1[0].getVariables()) : gdjs.GameCode.GDCH4Objects1[0].getVariables()) : gdjs.GameCode.GDN2OObjects1[0].getVariables()) : gdjs.GameCode.GDCowObjects1[0].getVariables()) : gdjs.GameCode.GDDeforestationObjects1[0].getVariables()) : gdjs.GameCode.GDFridgeObjects1[0].getVariables()) : gdjs.GameCode.GDAirconObjects1[0].getVariables()) : gdjs.GameCode.GDCarObjects1[0].getVariables()) : gdjs.GameCode.GDOilBarrelObjects1[0].getVariables()) : gdjs.GameCode.GDAxeObjects1[0].getVariables()).get("InfoText").getAsString());
}
}
{for(var i = 0, len = gdjs.GameCode.GDInfoBoxObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDInfoBoxObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.GameCode.GDFeedbackTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFeedbackTextObjects1[i].hide(false);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setBoolean(true);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Lose 1.aac", false, 100, 1);
}
{for(var i = 0, len = gdjs.GameCode.GDVolcanoObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDVolcanoObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDWaterVaporObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDWaterVaporObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDCO2Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDCO2Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDCH4Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDCH4Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDN2OObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDN2OObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDCowObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCowObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDDeforestationObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDDeforestationObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDFridgeObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFridgeObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDAirconObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDAirconObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDCarObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCarObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDOilBarrelObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDOilBarrelObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDAxeObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDAxeObjects1[i].deleteFromScene(runtimeScene);
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.GameCode.eventsList3 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{

gdjs.copyArray(gdjs.GameCode.GDAirconObjects1, gdjs.GameCode.GDAirconObjects2);

gdjs.copyArray(gdjs.GameCode.GDAxeObjects1, gdjs.GameCode.GDAxeObjects2);

gdjs.copyArray(gdjs.GameCode.GDCH4Objects1, gdjs.GameCode.GDCH4Objects2);

gdjs.copyArray(gdjs.GameCode.GDCO2Objects1, gdjs.GameCode.GDCO2Objects2);

gdjs.copyArray(gdjs.GameCode.GDCarObjects1, gdjs.GameCode.GDCarObjects2);

gdjs.copyArray(gdjs.GameCode.GDCowObjects1, gdjs.GameCode.GDCowObjects2);

gdjs.copyArray(gdjs.GameCode.GDDeforestationObjects1, gdjs.GameCode.GDDeforestationObjects2);

gdjs.copyArray(gdjs.GameCode.GDFridgeObjects1, gdjs.GameCode.GDFridgeObjects2);

gdjs.copyArray(gdjs.GameCode.GDN2OObjects1, gdjs.GameCode.GDN2OObjects2);

gdjs.copyArray(gdjs.GameCode.GDOilBarrelObjects1, gdjs.GameCode.GDOilBarrelObjects2);

gdjs.copyArray(gdjs.GameCode.GDVolcanoObjects1, gdjs.GameCode.GDVolcanoObjects2);

gdjs.copyArray(gdjs.GameCode.GDWaterVaporObjects1, gdjs.GameCode.GDWaterVaporObjects2);


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDVolcanoObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDVolcanoObjects2[i].getVariableString(gdjs.GameCode.GDVolcanoObjects2[i].getVariables().get("Category")) == "natural" ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDVolcanoObjects2[k] = gdjs.GameCode.GDVolcanoObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDVolcanoObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDWaterVaporObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDWaterVaporObjects2[i].getVariableString(gdjs.GameCode.GDWaterVaporObjects2[i].getVariables().get("Category")) == "natural" ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDWaterVaporObjects2[k] = gdjs.GameCode.GDWaterVaporObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDWaterVaporObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCO2Objects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDCO2Objects2[i].getVariableString(gdjs.GameCode.GDCO2Objects2[i].getVariables().get("Category")) == "natural" ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCO2Objects2[k] = gdjs.GameCode.GDCO2Objects2[i];
        ++k;
    }
}
gdjs.GameCode.GDCO2Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCH4Objects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDCH4Objects2[i].getVariableString(gdjs.GameCode.GDCH4Objects2[i].getVariables().get("Category")) == "natural" ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCH4Objects2[k] = gdjs.GameCode.GDCH4Objects2[i];
        ++k;
    }
}
gdjs.GameCode.GDCH4Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDN2OObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDN2OObjects2[i].getVariableString(gdjs.GameCode.GDN2OObjects2[i].getVariables().get("Category")) == "natural" ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDN2OObjects2[k] = gdjs.GameCode.GDN2OObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDN2OObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCowObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDCowObjects2[i].getVariableString(gdjs.GameCode.GDCowObjects2[i].getVariables().get("Category")) == "natural" ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCowObjects2[k] = gdjs.GameCode.GDCowObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDCowObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDDeforestationObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDDeforestationObjects2[i].getVariableString(gdjs.GameCode.GDDeforestationObjects2[i].getVariables().get("Category")) == "natural" ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDDeforestationObjects2[k] = gdjs.GameCode.GDDeforestationObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDDeforestationObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDFridgeObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDFridgeObjects2[i].getVariableString(gdjs.GameCode.GDFridgeObjects2[i].getVariables().get("Category")) == "natural" ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDFridgeObjects2[k] = gdjs.GameCode.GDFridgeObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDFridgeObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDAirconObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDAirconObjects2[i].getVariableString(gdjs.GameCode.GDAirconObjects2[i].getVariables().get("Category")) == "natural" ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDAirconObjects2[k] = gdjs.GameCode.GDAirconObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDAirconObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCarObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDCarObjects2[i].getVariableString(gdjs.GameCode.GDCarObjects2[i].getVariables().get("Category")) == "natural" ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCarObjects2[k] = gdjs.GameCode.GDCarObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDCarObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDOilBarrelObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDOilBarrelObjects2[i].getVariableString(gdjs.GameCode.GDOilBarrelObjects2[i].getVariables().get("Category")) == "natural" ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDOilBarrelObjects2[k] = gdjs.GameCode.GDOilBarrelObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDOilBarrelObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDAxeObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDAxeObjects2[i].getVariableString(gdjs.GameCode.GDAxeObjects2[i].getVariables().get("Category")) == "natural" ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDAxeObjects2[k] = gdjs.GameCode.GDAxeObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDAxeObjects2.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setString("Natural GHGs");
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setString("Enhanced / Human-Induced GHGs");
}
elseEventsChainSatisfied = true;
}
}

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.GameCode.GDAirconObjects1 */
/* Reuse gdjs.GameCode.GDAxeObjects1 */
/* Reuse gdjs.GameCode.GDCH4Objects1 */
/* Reuse gdjs.GameCode.GDCO2Objects1 */
/* Reuse gdjs.GameCode.GDCarObjects1 */
/* Reuse gdjs.GameCode.GDCowObjects1 */
/* Reuse gdjs.GameCode.GDDeforestationObjects1 */
gdjs.copyArray(runtimeScene.getObjects("FeedbackText"), gdjs.GameCode.GDFeedbackTextObjects1);
/* Reuse gdjs.GameCode.GDFridgeObjects1 */
gdjs.copyArray(runtimeScene.getObjects("InfoBox"), gdjs.GameCode.GDInfoBoxObjects1);
gdjs.copyArray(runtimeScene.getObjects("InfoText"), gdjs.GameCode.GDInfoTextObjects1);
/* Reuse gdjs.GameCode.GDN2OObjects1 */
/* Reuse gdjs.GameCode.GDOilBarrelObjects1 */
/* Reuse gdjs.GameCode.GDVolcanoObjects1 */
/* Reuse gdjs.GameCode.GDWaterVaporObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}
{for(var i = 0, len = gdjs.GameCode.GDFeedbackTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFeedbackTextObjects1[i].getBehavior("Text").setText("Missed!");
}
}
{for(var i = 0, len = gdjs.GameCode.GDFeedbackTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFeedbackTextObjects1[i].setColor("255;165;0");
}
}
{for(var i = 0, len = gdjs.GameCode.GDInfoBoxObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDInfoBoxObjects1[i].setColor("220;60;30");
}
}
{for(var i = 0, len = gdjs.GameCode.GDInfoTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDInfoTextObjects1[i].getBehavior("Text").setText(((gdjs.GameCode.GDAxeObjects1.length === 0 ) ? ((gdjs.GameCode.GDOilBarrelObjects1.length === 0 ) ? ((gdjs.GameCode.GDCarObjects1.length === 0 ) ? ((gdjs.GameCode.GDAirconObjects1.length === 0 ) ? ((gdjs.GameCode.GDFridgeObjects1.length === 0 ) ? ((gdjs.GameCode.GDDeforestationObjects1.length === 0 ) ? ((gdjs.GameCode.GDCowObjects1.length === 0 ) ? ((gdjs.GameCode.GDN2OObjects1.length === 0 ) ? ((gdjs.GameCode.GDCH4Objects1.length === 0 ) ? ((gdjs.GameCode.GDCO2Objects1.length === 0 ) ? ((gdjs.GameCode.GDWaterVaporObjects1.length === 0 ) ? ((gdjs.GameCode.GDVolcanoObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDVolcanoObjects1[0].getVariables()) : gdjs.GameCode.GDWaterVaporObjects1[0].getVariables()) : gdjs.GameCode.GDCO2Objects1[0].getVariables()) : gdjs.GameCode.GDCH4Objects1[0].getVariables()) : gdjs.GameCode.GDN2OObjects1[0].getVariables()) : gdjs.GameCode.GDCowObjects1[0].getVariables()) : gdjs.GameCode.GDDeforestationObjects1[0].getVariables()) : gdjs.GameCode.GDFridgeObjects1[0].getVariables()) : gdjs.GameCode.GDAirconObjects1[0].getVariables()) : gdjs.GameCode.GDCarObjects1[0].getVariables()) : gdjs.GameCode.GDOilBarrelObjects1[0].getVariables()) : gdjs.GameCode.GDAxeObjects1[0].getVariables()).get("Label").getAsString() + " fell off. It belongs in: " + runtimeScene.getScene().getVariables().getFromIndex(2).getAsString() + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + ((gdjs.GameCode.GDAxeObjects1.length === 0 ) ? ((gdjs.GameCode.GDOilBarrelObjects1.length === 0 ) ? ((gdjs.GameCode.GDCarObjects1.length === 0 ) ? ((gdjs.GameCode.GDAirconObjects1.length === 0 ) ? ((gdjs.GameCode.GDFridgeObjects1.length === 0 ) ? ((gdjs.GameCode.GDDeforestationObjects1.length === 0 ) ? ((gdjs.GameCode.GDCowObjects1.length === 0 ) ? ((gdjs.GameCode.GDN2OObjects1.length === 0 ) ? ((gdjs.GameCode.GDCH4Objects1.length === 0 ) ? ((gdjs.GameCode.GDCO2Objects1.length === 0 ) ? ((gdjs.GameCode.GDWaterVaporObjects1.length === 0 ) ? ((gdjs.GameCode.GDVolcanoObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDVolcanoObjects1[0].getVariables()) : gdjs.GameCode.GDWaterVaporObjects1[0].getVariables()) : gdjs.GameCode.GDCO2Objects1[0].getVariables()) : gdjs.GameCode.GDCH4Objects1[0].getVariables()) : gdjs.GameCode.GDN2OObjects1[0].getVariables()) : gdjs.GameCode.GDCowObjects1[0].getVariables()) : gdjs.GameCode.GDDeforestationObjects1[0].getVariables()) : gdjs.GameCode.GDFridgeObjects1[0].getVariables()) : gdjs.GameCode.GDAirconObjects1[0].getVariables()) : gdjs.GameCode.GDCarObjects1[0].getVariables()) : gdjs.GameCode.GDOilBarrelObjects1[0].getVariables()) : gdjs.GameCode.GDAxeObjects1[0].getVariables()).get("InfoText").getAsString());
}
}
{for(var i = 0, len = gdjs.GameCode.GDInfoBoxObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDInfoBoxObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.GameCode.GDFeedbackTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFeedbackTextObjects1[i].hide(false);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setBoolean(true);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Lose 1.aac", false, 100, 1);
}
{for(var i = 0, len = gdjs.GameCode.GDVolcanoObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDVolcanoObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDWaterVaporObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDWaterVaporObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDCO2Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDCO2Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDCH4Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDCH4Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDN2OObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDN2OObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDCowObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCowObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDDeforestationObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDDeforestationObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDFridgeObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFridgeObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDAirconObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDAirconObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDCarObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCarObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDOilBarrelObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDOilBarrelObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDAxeObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDAxeObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}

}

};gdjs.GameCode.mapOfEmptyGDVolcanoObjectsEmptyGDWaterVaporObjectsEmptyGDCO2ObjectsEmptyGDCH4ObjectsEmptyGDN2OObjectsEmptyGDCowObjectsEmptyGDDeforestationObjectsEmptyGDFridgeObjectsEmptyGDAirconObjectsEmptyGDCarObjectsEmptyGDOilBarrelObjectsEmptyGDAxeObjects = Hashtable.newFrom({"Volcano": [], "WaterVapor": [], "CO2": [], "CH4": [], "N2O": [], "Cow": [], "Deforestation": [], "Fridge": [], "Aircon": [], "Car": [], "OilBarrel": [], "Axe": []});
gdjs.GameCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EnhancedZone"), gdjs.GameCode.GDEnhancedZoneObjects1);
gdjs.copyArray(runtimeScene.getObjects("EnhancedZoneLabel"), gdjs.GameCode.GDEnhancedZoneLabelObjects1);
gdjs.copyArray(runtimeScene.getObjects("NaturalZone"), gdjs.GameCode.GDNaturalZoneObjects1);
gdjs.copyArray(runtimeScene.getObjects("NaturalZoneLabel"), gdjs.GameCode.GDNaturalZoneLabelObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setBoolean(false);
}
{gdjs.evtsExt__ArrayTools__Splice.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0), 0, gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(0)), null);
}
{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().getFromIndex(0), "Volcano");
}
{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().getFromIndex(0), "WaterVapor");
}
{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().getFromIndex(0), "CO2");
}
{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().getFromIndex(0), "CH4");
}
{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().getFromIndex(0), "N2O");
}
{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().getFromIndex(0), "Cow");
}
{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().getFromIndex(0), "Deforestation");
}
{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().getFromIndex(0), "Fridge");
}
{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().getFromIndex(0), "Aircon");
}
{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().getFromIndex(0), "Car");
}
{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().getFromIndex(0), "OilBarrel");
}
{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().getFromIndex(0), "Axe");
}
{gdjs.evtsExt__ArrayTools__Shuffle.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0), null);
}
{gdjs.evtsExt__ArrayTools__Splice.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0), 8, gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(0)) - 8, null);
}
{for(var i = 0, len = gdjs.GameCode.GDNaturalZoneObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDNaturalZoneObjects1[i].setColor("0;200;80");
}
}
{for(var i = 0, len = gdjs.GameCode.GDEnhancedZoneObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDEnhancedZoneObjects1[i].setColor("220;80;30");
}
}
{for(var i = 0, len = gdjs.GameCode.GDNaturalZoneLabelObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDNaturalZoneLabelObjects1[i].getBehavior("Text").setText("Natural GHGs");
}
}
{for(var i = 0, len = gdjs.GameCode.GDEnhancedZoneLabelObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDEnhancedZoneLabelObjects1[i].getBehavior("Text").setText("Enhanced / Human-Induced GHGs");
}
}

{ //Subevents
gdjs.GameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setString("");
variables._declare("itemName", variable);
}
gdjs.GameCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.GameCode.mapOfEmptyGDVolcanoObjectsEmptyGDWaterVaporObjectsEmptyGDCO2ObjectsEmptyGDCH4ObjectsEmptyGDN2OObjectsEmptyGDCowObjectsEmptyGDDeforestationObjectsEmptyGDFridgeObjectsEmptyGDAirconObjectsEmptyGDCarObjectsEmptyGDOilBarrelObjectsEmptyGDAxeObjects) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(3).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() < gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
}
if (isConditionTrue_0) {
gdjs.GameCode.GDAirconObjects1.length = 0;

gdjs.GameCode.GDAxeObjects1.length = 0;

gdjs.GameCode.GDCH4Objects1.length = 0;

gdjs.GameCode.GDCO2Objects1.length = 0;

gdjs.GameCode.GDCarObjects1.length = 0;

gdjs.GameCode.GDCowObjects1.length = 0;

gdjs.GameCode.GDDeforestationObjects1.length = 0;

gdjs.GameCode.GDFridgeObjects1.length = 0;

gdjs.GameCode.GDN2OObjects1.length = 0;

gdjs.GameCode.GDOilBarrelObjects1.length = 0;

gdjs.GameCode.GDVolcanoObjects1.length = 0;

gdjs.GameCode.GDWaterVaporObjects1.length = 0;

{gdjs.GameCode.localVariables[0].getFromIndex(0).setString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber()).getAsString());
}
{gdjs.evtTools.object.createObjectFromGroupOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDVolcanoObjects1ObjectsGDgdjs_9546GameCode_9546GDWaterVaporObjects1ObjectsGDgdjs_9546GameCode_9546GDCO2Objects1ObjectsGDgdjs_9546GameCode_9546GDCH4Objects1ObjectsGDgdjs_9546GameCode_9546GDN2OObjects1ObjectsGDgdjs_9546GameCode_9546GDCowObjects1ObjectsGDgdjs_9546GameCode_9546GDDeforestationObjects1ObjectsGDgdjs_9546GameCode_9546GDFridgeObjects1ObjectsGDgdjs_9546GameCode_9546GDAirconObjects1ObjectsGDgdjs_9546GameCode_9546GDCarObjects1ObjectsGDgdjs_9546GameCode_9546GDOilBarrelObjects1ObjectsGDgdjs_9546GameCode_9546GDAxeObjects1Objects, gdjs.GameCode.localVariables[0].getFromIndex(0).getAsString(), gdjs.randomInRange(120, 680), -60, "");
}
{for(var i = 0, len = gdjs.GameCode.GDVolcanoObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDVolcanoObjects1[i].getBehavior("Resizable").setSize(80, 80);
}
for(var i = 0, len = gdjs.GameCode.GDWaterVaporObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDWaterVaporObjects1[i].getBehavior("Resizable").setSize(80, 80);
}
for(var i = 0, len = gdjs.GameCode.GDCowObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCowObjects1[i].getBehavior("Resizable").setSize(80, 80);
}
for(var i = 0, len = gdjs.GameCode.GDDeforestationObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDDeforestationObjects1[i].getBehavior("Resizable").setSize(80, 80);
}
for(var i = 0, len = gdjs.GameCode.GDFridgeObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFridgeObjects1[i].getBehavior("Resizable").setSize(80, 80);
}
for(var i = 0, len = gdjs.GameCode.GDAirconObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDAirconObjects1[i].getBehavior("Resizable").setSize(80, 80);
}
for(var i = 0, len = gdjs.GameCode.GDCarObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCarObjects1[i].getBehavior("Resizable").setSize(80, 80);
}
for(var i = 0, len = gdjs.GameCode.GDOilBarrelObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDOilBarrelObjects1[i].getBehavior("Resizable").setSize(80, 80);
}
for(var i = 0, len = gdjs.GameCode.GDAxeObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDAxeObjects1[i].getBehavior("Resizable").setSize(80, 80);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(4).add(1);
}
}
gdjs.GameCode.localVariables.pop();

}


{

gdjs.copyArray(runtimeScene.getObjects("Aircon"), gdjs.GameCode.GDAirconObjects1);
gdjs.copyArray(runtimeScene.getObjects("Axe"), gdjs.GameCode.GDAxeObjects1);
gdjs.copyArray(runtimeScene.getObjects("CH4"), gdjs.GameCode.GDCH4Objects1);
gdjs.copyArray(runtimeScene.getObjects("CO2"), gdjs.GameCode.GDCO2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.GameCode.GDCarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Cow"), gdjs.GameCode.GDCowObjects1);
gdjs.copyArray(runtimeScene.getObjects("Deforestation"), gdjs.GameCode.GDDeforestationObjects1);
gdjs.copyArray(runtimeScene.getObjects("Fridge"), gdjs.GameCode.GDFridgeObjects1);
gdjs.copyArray(runtimeScene.getObjects("N2O"), gdjs.GameCode.GDN2OObjects1);
gdjs.copyArray(runtimeScene.getObjects("OilBarrel"), gdjs.GameCode.GDOilBarrelObjects1);
gdjs.copyArray(runtimeScene.getObjects("Volcano"), gdjs.GameCode.GDVolcanoObjects1);
gdjs.copyArray(runtimeScene.getObjects("WaterVapor"), gdjs.GameCode.GDWaterVaporObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDVolcanoObjects1.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDVolcanoObjects1[i].getBehavior("Draggable").isDragged()) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDVolcanoObjects1[k] = gdjs.GameCode.GDVolcanoObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDVolcanoObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDWaterVaporObjects1.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDWaterVaporObjects1[i].getBehavior("Draggable").isDragged()) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDWaterVaporObjects1[k] = gdjs.GameCode.GDWaterVaporObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDWaterVaporObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCO2Objects1.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDCO2Objects1[i].getBehavior("Draggable").isDragged()) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCO2Objects1[k] = gdjs.GameCode.GDCO2Objects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCO2Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCH4Objects1.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDCH4Objects1[i].getBehavior("Draggable").isDragged()) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCH4Objects1[k] = gdjs.GameCode.GDCH4Objects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCH4Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDN2OObjects1.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDN2OObjects1[i].getBehavior("Draggable").isDragged()) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDN2OObjects1[k] = gdjs.GameCode.GDN2OObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDN2OObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCowObjects1.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDCowObjects1[i].getBehavior("Draggable").isDragged()) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCowObjects1[k] = gdjs.GameCode.GDCowObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCowObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDDeforestationObjects1.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDDeforestationObjects1[i].getBehavior("Draggable").isDragged()) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDDeforestationObjects1[k] = gdjs.GameCode.GDDeforestationObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDDeforestationObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDFridgeObjects1.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDFridgeObjects1[i].getBehavior("Draggable").isDragged()) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDFridgeObjects1[k] = gdjs.GameCode.GDFridgeObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDFridgeObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDAirconObjects1.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDAirconObjects1[i].getBehavior("Draggable").isDragged()) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDAirconObjects1[k] = gdjs.GameCode.GDAirconObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDAirconObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCarObjects1.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDCarObjects1[i].getBehavior("Draggable").isDragged()) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCarObjects1[k] = gdjs.GameCode.GDCarObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCarObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDOilBarrelObjects1.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDOilBarrelObjects1[i].getBehavior("Draggable").isDragged()) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDOilBarrelObjects1[k] = gdjs.GameCode.GDOilBarrelObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDOilBarrelObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDAxeObjects1.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDAxeObjects1[i].getBehavior("Draggable").isDragged()) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDAxeObjects1[k] = gdjs.GameCode.GDAxeObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDAxeObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDAirconObjects1 */
/* Reuse gdjs.GameCode.GDAxeObjects1 */
/* Reuse gdjs.GameCode.GDCH4Objects1 */
/* Reuse gdjs.GameCode.GDCO2Objects1 */
/* Reuse gdjs.GameCode.GDCarObjects1 */
/* Reuse gdjs.GameCode.GDCowObjects1 */
/* Reuse gdjs.GameCode.GDDeforestationObjects1 */
/* Reuse gdjs.GameCode.GDFridgeObjects1 */
/* Reuse gdjs.GameCode.GDN2OObjects1 */
/* Reuse gdjs.GameCode.GDOilBarrelObjects1 */
/* Reuse gdjs.GameCode.GDVolcanoObjects1 */
/* Reuse gdjs.GameCode.GDWaterVaporObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDVolcanoObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDVolcanoObjects1[i].setY(gdjs.GameCode.GDVolcanoObjects1[i].getY() + (80 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
for(var i = 0, len = gdjs.GameCode.GDWaterVaporObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDWaterVaporObjects1[i].setY(gdjs.GameCode.GDWaterVaporObjects1[i].getY() + (80 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
for(var i = 0, len = gdjs.GameCode.GDCO2Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDCO2Objects1[i].setY(gdjs.GameCode.GDCO2Objects1[i].getY() + (80 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
for(var i = 0, len = gdjs.GameCode.GDCH4Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDCH4Objects1[i].setY(gdjs.GameCode.GDCH4Objects1[i].getY() + (80 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
for(var i = 0, len = gdjs.GameCode.GDN2OObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDN2OObjects1[i].setY(gdjs.GameCode.GDN2OObjects1[i].getY() + (80 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
for(var i = 0, len = gdjs.GameCode.GDCowObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCowObjects1[i].setY(gdjs.GameCode.GDCowObjects1[i].getY() + (80 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
for(var i = 0, len = gdjs.GameCode.GDDeforestationObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDDeforestationObjects1[i].setY(gdjs.GameCode.GDDeforestationObjects1[i].getY() + (80 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
for(var i = 0, len = gdjs.GameCode.GDFridgeObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFridgeObjects1[i].setY(gdjs.GameCode.GDFridgeObjects1[i].getY() + (80 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
for(var i = 0, len = gdjs.GameCode.GDAirconObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDAirconObjects1[i].setY(gdjs.GameCode.GDAirconObjects1[i].getY() + (80 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
for(var i = 0, len = gdjs.GameCode.GDCarObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCarObjects1[i].setY(gdjs.GameCode.GDCarObjects1[i].getY() + (80 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
for(var i = 0, len = gdjs.GameCode.GDOilBarrelObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDOilBarrelObjects1[i].setY(gdjs.GameCode.GDOilBarrelObjects1[i].getY() + (80 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
for(var i = 0, len = gdjs.GameCode.GDAxeObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDAxeObjects1[i].setY(gdjs.GameCode.GDAxeObjects1[i].getY() + (80 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Aircon"), gdjs.GameCode.GDAirconObjects1);
gdjs.copyArray(runtimeScene.getObjects("Axe"), gdjs.GameCode.GDAxeObjects1);
gdjs.copyArray(runtimeScene.getObjects("CH4"), gdjs.GameCode.GDCH4Objects1);
gdjs.copyArray(runtimeScene.getObjects("CO2"), gdjs.GameCode.GDCO2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.GameCode.GDCarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Cow"), gdjs.GameCode.GDCowObjects1);
gdjs.copyArray(runtimeScene.getObjects("Deforestation"), gdjs.GameCode.GDDeforestationObjects1);
gdjs.copyArray(runtimeScene.getObjects("Fridge"), gdjs.GameCode.GDFridgeObjects1);
gdjs.copyArray(runtimeScene.getObjects("N2O"), gdjs.GameCode.GDN2OObjects1);
gdjs.copyArray(runtimeScene.getObjects("NaturalZone"), gdjs.GameCode.GDNaturalZoneObjects1);
gdjs.copyArray(runtimeScene.getObjects("OilBarrel"), gdjs.GameCode.GDOilBarrelObjects1);
gdjs.copyArray(runtimeScene.getObjects("Volcano"), gdjs.GameCode.GDVolcanoObjects1);
gdjs.copyArray(runtimeScene.getObjects("WaterVapor"), gdjs.GameCode.GDWaterVaporObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDVolcanoObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDVolcanoObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDVolcanoObjects1[k] = gdjs.GameCode.GDVolcanoObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDVolcanoObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDWaterVaporObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDWaterVaporObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDWaterVaporObjects1[k] = gdjs.GameCode.GDWaterVaporObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDWaterVaporObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCO2Objects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDCO2Objects1[i].getBehavior("Draggable").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCO2Objects1[k] = gdjs.GameCode.GDCO2Objects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCO2Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCH4Objects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDCH4Objects1[i].getBehavior("Draggable").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCH4Objects1[k] = gdjs.GameCode.GDCH4Objects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCH4Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDN2OObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDN2OObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDN2OObjects1[k] = gdjs.GameCode.GDN2OObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDN2OObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCowObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDCowObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCowObjects1[k] = gdjs.GameCode.GDCowObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCowObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDDeforestationObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDDeforestationObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDDeforestationObjects1[k] = gdjs.GameCode.GDDeforestationObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDDeforestationObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDFridgeObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDFridgeObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDFridgeObjects1[k] = gdjs.GameCode.GDFridgeObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDFridgeObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDAirconObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDAirconObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDAirconObjects1[k] = gdjs.GameCode.GDAirconObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDAirconObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCarObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDCarObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCarObjects1[k] = gdjs.GameCode.GDCarObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCarObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDOilBarrelObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDOilBarrelObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDOilBarrelObjects1[k] = gdjs.GameCode.GDOilBarrelObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDOilBarrelObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDAxeObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDAxeObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDAxeObjects1[k] = gdjs.GameCode.GDAxeObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDAxeObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDVolcanoObjects1ObjectsGDgdjs_9546GameCode_9546GDWaterVaporObjects1ObjectsGDgdjs_9546GameCode_9546GDCO2Objects1ObjectsGDgdjs_9546GameCode_9546GDCH4Objects1ObjectsGDgdjs_9546GameCode_9546GDN2OObjects1ObjectsGDgdjs_9546GameCode_9546GDCowObjects1ObjectsGDgdjs_9546GameCode_9546GDDeforestationObjects1ObjectsGDgdjs_9546GameCode_9546GDFridgeObjects1ObjectsGDgdjs_9546GameCode_9546GDAirconObjects1ObjectsGDgdjs_9546GameCode_9546GDCarObjects1ObjectsGDgdjs_9546GameCode_9546GDOilBarrelObjects1ObjectsGDgdjs_9546GameCode_9546GDAxeObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDNaturalZoneObjects1Objects, false, runtimeScene, false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Aircon"), gdjs.GameCode.GDAirconObjects1);
gdjs.copyArray(runtimeScene.getObjects("Axe"), gdjs.GameCode.GDAxeObjects1);
gdjs.copyArray(runtimeScene.getObjects("CH4"), gdjs.GameCode.GDCH4Objects1);
gdjs.copyArray(runtimeScene.getObjects("CO2"), gdjs.GameCode.GDCO2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.GameCode.GDCarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Cow"), gdjs.GameCode.GDCowObjects1);
gdjs.copyArray(runtimeScene.getObjects("Deforestation"), gdjs.GameCode.GDDeforestationObjects1);
gdjs.copyArray(runtimeScene.getObjects("EnhancedZone"), gdjs.GameCode.GDEnhancedZoneObjects1);
gdjs.copyArray(runtimeScene.getObjects("Fridge"), gdjs.GameCode.GDFridgeObjects1);
gdjs.copyArray(runtimeScene.getObjects("N2O"), gdjs.GameCode.GDN2OObjects1);
gdjs.copyArray(runtimeScene.getObjects("OilBarrel"), gdjs.GameCode.GDOilBarrelObjects1);
gdjs.copyArray(runtimeScene.getObjects("Volcano"), gdjs.GameCode.GDVolcanoObjects1);
gdjs.copyArray(runtimeScene.getObjects("WaterVapor"), gdjs.GameCode.GDWaterVaporObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDVolcanoObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDVolcanoObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDVolcanoObjects1[k] = gdjs.GameCode.GDVolcanoObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDVolcanoObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDWaterVaporObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDWaterVaporObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDWaterVaporObjects1[k] = gdjs.GameCode.GDWaterVaporObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDWaterVaporObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCO2Objects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDCO2Objects1[i].getBehavior("Draggable").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCO2Objects1[k] = gdjs.GameCode.GDCO2Objects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCO2Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCH4Objects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDCH4Objects1[i].getBehavior("Draggable").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCH4Objects1[k] = gdjs.GameCode.GDCH4Objects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCH4Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDN2OObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDN2OObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDN2OObjects1[k] = gdjs.GameCode.GDN2OObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDN2OObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCowObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDCowObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCowObjects1[k] = gdjs.GameCode.GDCowObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCowObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDDeforestationObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDDeforestationObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDDeforestationObjects1[k] = gdjs.GameCode.GDDeforestationObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDDeforestationObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDFridgeObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDFridgeObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDFridgeObjects1[k] = gdjs.GameCode.GDFridgeObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDFridgeObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDAirconObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDAirconObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDAirconObjects1[k] = gdjs.GameCode.GDAirconObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDAirconObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCarObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDCarObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCarObjects1[k] = gdjs.GameCode.GDCarObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCarObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDOilBarrelObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDOilBarrelObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDOilBarrelObjects1[k] = gdjs.GameCode.GDOilBarrelObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDOilBarrelObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDAxeObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDAxeObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDAxeObjects1[k] = gdjs.GameCode.GDAxeObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDAxeObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDVolcanoObjects1ObjectsGDgdjs_9546GameCode_9546GDWaterVaporObjects1ObjectsGDgdjs_9546GameCode_9546GDCO2Objects1ObjectsGDgdjs_9546GameCode_9546GDCH4Objects1ObjectsGDgdjs_9546GameCode_9546GDN2OObjects1ObjectsGDgdjs_9546GameCode_9546GDCowObjects1ObjectsGDgdjs_9546GameCode_9546GDDeforestationObjects1ObjectsGDgdjs_9546GameCode_9546GDFridgeObjects1ObjectsGDgdjs_9546GameCode_9546GDAirconObjects1ObjectsGDgdjs_9546GameCode_9546GDCarObjects1ObjectsGDgdjs_9546GameCode_9546GDOilBarrelObjects1ObjectsGDgdjs_9546GameCode_9546GDAxeObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDEnhancedZoneObjects1Objects, false, runtimeScene, false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Aircon"), gdjs.GameCode.GDAirconObjects1);
gdjs.copyArray(runtimeScene.getObjects("Axe"), gdjs.GameCode.GDAxeObjects1);
gdjs.copyArray(runtimeScene.getObjects("CH4"), gdjs.GameCode.GDCH4Objects1);
gdjs.copyArray(runtimeScene.getObjects("CO2"), gdjs.GameCode.GDCO2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.GameCode.GDCarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Cow"), gdjs.GameCode.GDCowObjects1);
gdjs.copyArray(runtimeScene.getObjects("Deforestation"), gdjs.GameCode.GDDeforestationObjects1);
gdjs.copyArray(runtimeScene.getObjects("Fridge"), gdjs.GameCode.GDFridgeObjects1);
gdjs.copyArray(runtimeScene.getObjects("N2O"), gdjs.GameCode.GDN2OObjects1);
gdjs.copyArray(runtimeScene.getObjects("OilBarrel"), gdjs.GameCode.GDOilBarrelObjects1);
gdjs.copyArray(runtimeScene.getObjects("Volcano"), gdjs.GameCode.GDVolcanoObjects1);
gdjs.copyArray(runtimeScene.getObjects("WaterVapor"), gdjs.GameCode.GDWaterVaporObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDVolcanoObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDVolcanoObjects1[i].getY() > 620 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDVolcanoObjects1[k] = gdjs.GameCode.GDVolcanoObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDVolcanoObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDWaterVaporObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDWaterVaporObjects1[i].getY() > 620 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDWaterVaporObjects1[k] = gdjs.GameCode.GDWaterVaporObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDWaterVaporObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCO2Objects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDCO2Objects1[i].getY() > 620 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCO2Objects1[k] = gdjs.GameCode.GDCO2Objects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCO2Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCH4Objects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDCH4Objects1[i].getY() > 620 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCH4Objects1[k] = gdjs.GameCode.GDCH4Objects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCH4Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDN2OObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDN2OObjects1[i].getY() > 620 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDN2OObjects1[k] = gdjs.GameCode.GDN2OObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDN2OObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCowObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDCowObjects1[i].getY() > 620 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCowObjects1[k] = gdjs.GameCode.GDCowObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCowObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDDeforestationObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDDeforestationObjects1[i].getY() > 620 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDDeforestationObjects1[k] = gdjs.GameCode.GDDeforestationObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDDeforestationObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDFridgeObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDFridgeObjects1[i].getY() > 620 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDFridgeObjects1[k] = gdjs.GameCode.GDFridgeObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDFridgeObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDAirconObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDAirconObjects1[i].getY() > 620 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDAirconObjects1[k] = gdjs.GameCode.GDAirconObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDAirconObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCarObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDCarObjects1[i].getY() > 620 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCarObjects1[k] = gdjs.GameCode.GDCarObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCarObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDOilBarrelObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDOilBarrelObjects1[i].getY() > 620 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDOilBarrelObjects1[k] = gdjs.GameCode.GDOilBarrelObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDOilBarrelObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDAxeObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDAxeObjects1[i].getY() > 620 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDAxeObjects1[k] = gdjs.GameCode.GDAxeObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDAxeObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDVolcanoObjects1.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDVolcanoObjects1[i].getBehavior("Draggable").isDragged()) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDVolcanoObjects1[k] = gdjs.GameCode.GDVolcanoObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDVolcanoObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDWaterVaporObjects1.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDWaterVaporObjects1[i].getBehavior("Draggable").isDragged()) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDWaterVaporObjects1[k] = gdjs.GameCode.GDWaterVaporObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDWaterVaporObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCO2Objects1.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDCO2Objects1[i].getBehavior("Draggable").isDragged()) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCO2Objects1[k] = gdjs.GameCode.GDCO2Objects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCO2Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCH4Objects1.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDCH4Objects1[i].getBehavior("Draggable").isDragged()) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCH4Objects1[k] = gdjs.GameCode.GDCH4Objects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCH4Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDN2OObjects1.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDN2OObjects1[i].getBehavior("Draggable").isDragged()) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDN2OObjects1[k] = gdjs.GameCode.GDN2OObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDN2OObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCowObjects1.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDCowObjects1[i].getBehavior("Draggable").isDragged()) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCowObjects1[k] = gdjs.GameCode.GDCowObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCowObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDDeforestationObjects1.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDDeforestationObjects1[i].getBehavior("Draggable").isDragged()) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDDeforestationObjects1[k] = gdjs.GameCode.GDDeforestationObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDDeforestationObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDFridgeObjects1.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDFridgeObjects1[i].getBehavior("Draggable").isDragged()) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDFridgeObjects1[k] = gdjs.GameCode.GDFridgeObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDFridgeObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDAirconObjects1.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDAirconObjects1[i].getBehavior("Draggable").isDragged()) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDAirconObjects1[k] = gdjs.GameCode.GDAirconObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDAirconObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCarObjects1.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDCarObjects1[i].getBehavior("Draggable").isDragged()) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCarObjects1[k] = gdjs.GameCode.GDCarObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCarObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDOilBarrelObjects1.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDOilBarrelObjects1[i].getBehavior("Draggable").isDragged()) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDOilBarrelObjects1[k] = gdjs.GameCode.GDOilBarrelObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDOilBarrelObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDAxeObjects1.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDAxeObjects1[i].getBehavior("Draggable").isDragged()) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDAxeObjects1[k] = gdjs.GameCode.GDAxeObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDAxeObjects1.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(3).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FeedbackText"), gdjs.GameCode.GDFeedbackTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("InfoBox"), gdjs.GameCode.GDInfoBoxObjects1);
gdjs.copyArray(runtimeScene.getObjects("InfoText"), gdjs.GameCode.GDInfoTextObjects1);
{for(var i = 0, len = gdjs.GameCode.GDInfoBoxObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDInfoBoxObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.GameCode.GDFeedbackTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFeedbackTextObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.GameCode.GDInfoTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDInfoTextObjects1[i].getBehavior("Text").setText("");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setBoolean(false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() >= gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.GameCode.mapOfEmptyGDVolcanoObjectsEmptyGDWaterVaporObjectsEmptyGDCO2ObjectsEmptyGDCH4ObjectsEmptyGDN2OObjectsEmptyGDCowObjectsEmptyGDDeforestationObjectsEmptyGDFridgeObjectsEmptyGDAirconObjectsEmptyGDCarObjectsEmptyGDOilBarrelObjectsEmptyGDAxeObjects) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(3).getAsBoolean();
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Round Summary", false);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("GHGText"), gdjs.GameCode.GDGHGTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("RoundText"), gdjs.GameCode.GDRoundTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.GameCode.GDScoreTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("TempText"), gdjs.GameCode.GDTempTextObjects1);
{for(var i = 0, len = gdjs.GameCode.GDTempTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDTempTextObjects1[i].getBehavior("Text").setText("🌡️ Climate: " + runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
}
{for(var i = 0, len = gdjs.GameCode.GDGHGTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDGHGTextObjects1[i].getBehavior("Text").setText("🌍 GHG Level: " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber()));
}
}
{for(var i = 0, len = gdjs.GameCode.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDScoreTextObjects1[i].getBehavior("Text").setText("⭐ Score: " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber()));
}
}
{for(var i = 0, len = gdjs.GameCode.GDRoundTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDRoundTextObjects1[i].getBehavior("Text").setText("🔄 Round: " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber()));
}
}
}

}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDSpaceBackgroundObjects1.length = 0;
gdjs.GameCode.GDSpaceBackgroundObjects2.length = 0;
gdjs.GameCode.GDSpaceBackgroundObjects3.length = 0;
gdjs.GameCode.GDEarthObjects1.length = 0;
gdjs.GameCode.GDEarthObjects2.length = 0;
gdjs.GameCode.GDEarthObjects3.length = 0;
gdjs.GameCode.GDNaturalZoneLabelObjects1.length = 0;
gdjs.GameCode.GDNaturalZoneLabelObjects2.length = 0;
gdjs.GameCode.GDNaturalZoneLabelObjects3.length = 0;
gdjs.GameCode.GDEnhancedZoneLabelObjects1.length = 0;
gdjs.GameCode.GDEnhancedZoneLabelObjects2.length = 0;
gdjs.GameCode.GDEnhancedZoneLabelObjects3.length = 0;
gdjs.GameCode.GDThermometerObjects1.length = 0;
gdjs.GameCode.GDThermometerObjects2.length = 0;
gdjs.GameCode.GDThermometerObjects3.length = 0;
gdjs.GameCode.GDTempTextObjects1.length = 0;
gdjs.GameCode.GDTempTextObjects2.length = 0;
gdjs.GameCode.GDTempTextObjects3.length = 0;
gdjs.GameCode.GDGHGTextObjects1.length = 0;
gdjs.GameCode.GDGHGTextObjects2.length = 0;
gdjs.GameCode.GDGHGTextObjects3.length = 0;
gdjs.GameCode.GDScoreTextObjects1.length = 0;
gdjs.GameCode.GDScoreTextObjects2.length = 0;
gdjs.GameCode.GDScoreTextObjects3.length = 0;
gdjs.GameCode.GDRoundTextObjects1.length = 0;
gdjs.GameCode.GDRoundTextObjects2.length = 0;
gdjs.GameCode.GDRoundTextObjects3.length = 0;
gdjs.GameCode.GDInfoTextObjects1.length = 0;
gdjs.GameCode.GDInfoTextObjects2.length = 0;
gdjs.GameCode.GDInfoTextObjects3.length = 0;
gdjs.GameCode.GDFeedbackTextObjects1.length = 0;
gdjs.GameCode.GDFeedbackTextObjects2.length = 0;
gdjs.GameCode.GDFeedbackTextObjects3.length = 0;
gdjs.GameCode.GDVolcanoObjects1.length = 0;
gdjs.GameCode.GDVolcanoObjects2.length = 0;
gdjs.GameCode.GDVolcanoObjects3.length = 0;
gdjs.GameCode.GDWaterVaporObjects1.length = 0;
gdjs.GameCode.GDWaterVaporObjects2.length = 0;
gdjs.GameCode.GDWaterVaporObjects3.length = 0;
gdjs.GameCode.GDCO2Objects1.length = 0;
gdjs.GameCode.GDCO2Objects2.length = 0;
gdjs.GameCode.GDCO2Objects3.length = 0;
gdjs.GameCode.GDCH4Objects1.length = 0;
gdjs.GameCode.GDCH4Objects2.length = 0;
gdjs.GameCode.GDCH4Objects3.length = 0;
gdjs.GameCode.GDN2OObjects1.length = 0;
gdjs.GameCode.GDN2OObjects2.length = 0;
gdjs.GameCode.GDN2OObjects3.length = 0;
gdjs.GameCode.GDCowObjects1.length = 0;
gdjs.GameCode.GDCowObjects2.length = 0;
gdjs.GameCode.GDCowObjects3.length = 0;
gdjs.GameCode.GDDeforestationObjects1.length = 0;
gdjs.GameCode.GDDeforestationObjects2.length = 0;
gdjs.GameCode.GDDeforestationObjects3.length = 0;
gdjs.GameCode.GDFridgeObjects1.length = 0;
gdjs.GameCode.GDFridgeObjects2.length = 0;
gdjs.GameCode.GDFridgeObjects3.length = 0;
gdjs.GameCode.GDAirconObjects1.length = 0;
gdjs.GameCode.GDAirconObjects2.length = 0;
gdjs.GameCode.GDAirconObjects3.length = 0;
gdjs.GameCode.GDCarObjects1.length = 0;
gdjs.GameCode.GDCarObjects2.length = 0;
gdjs.GameCode.GDCarObjects3.length = 0;
gdjs.GameCode.GDOilBarrelObjects1.length = 0;
gdjs.GameCode.GDOilBarrelObjects2.length = 0;
gdjs.GameCode.GDOilBarrelObjects3.length = 0;
gdjs.GameCode.GDAxeObjects1.length = 0;
gdjs.GameCode.GDAxeObjects2.length = 0;
gdjs.GameCode.GDAxeObjects3.length = 0;
gdjs.GameCode.GDInfoBoxObjects1.length = 0;
gdjs.GameCode.GDInfoBoxObjects2.length = 0;
gdjs.GameCode.GDInfoBoxObjects3.length = 0;
gdjs.GameCode.GDNaturalZoneObjects1.length = 0;
gdjs.GameCode.GDNaturalZoneObjects2.length = 0;
gdjs.GameCode.GDNaturalZoneObjects3.length = 0;
gdjs.GameCode.GDEnhancedZoneObjects1.length = 0;
gdjs.GameCode.GDEnhancedZoneObjects2.length = 0;
gdjs.GameCode.GDEnhancedZoneObjects3.length = 0;

gdjs.GameCode.eventsList4(runtimeScene);
gdjs.GameCode.GDSpaceBackgroundObjects1.length = 0;
gdjs.GameCode.GDSpaceBackgroundObjects2.length = 0;
gdjs.GameCode.GDSpaceBackgroundObjects3.length = 0;
gdjs.GameCode.GDEarthObjects1.length = 0;
gdjs.GameCode.GDEarthObjects2.length = 0;
gdjs.GameCode.GDEarthObjects3.length = 0;
gdjs.GameCode.GDNaturalZoneLabelObjects1.length = 0;
gdjs.GameCode.GDNaturalZoneLabelObjects2.length = 0;
gdjs.GameCode.GDNaturalZoneLabelObjects3.length = 0;
gdjs.GameCode.GDEnhancedZoneLabelObjects1.length = 0;
gdjs.GameCode.GDEnhancedZoneLabelObjects2.length = 0;
gdjs.GameCode.GDEnhancedZoneLabelObjects3.length = 0;
gdjs.GameCode.GDThermometerObjects1.length = 0;
gdjs.GameCode.GDThermometerObjects2.length = 0;
gdjs.GameCode.GDThermometerObjects3.length = 0;
gdjs.GameCode.GDTempTextObjects1.length = 0;
gdjs.GameCode.GDTempTextObjects2.length = 0;
gdjs.GameCode.GDTempTextObjects3.length = 0;
gdjs.GameCode.GDGHGTextObjects1.length = 0;
gdjs.GameCode.GDGHGTextObjects2.length = 0;
gdjs.GameCode.GDGHGTextObjects3.length = 0;
gdjs.GameCode.GDScoreTextObjects1.length = 0;
gdjs.GameCode.GDScoreTextObjects2.length = 0;
gdjs.GameCode.GDScoreTextObjects3.length = 0;
gdjs.GameCode.GDRoundTextObjects1.length = 0;
gdjs.GameCode.GDRoundTextObjects2.length = 0;
gdjs.GameCode.GDRoundTextObjects3.length = 0;
gdjs.GameCode.GDInfoTextObjects1.length = 0;
gdjs.GameCode.GDInfoTextObjects2.length = 0;
gdjs.GameCode.GDInfoTextObjects3.length = 0;
gdjs.GameCode.GDFeedbackTextObjects1.length = 0;
gdjs.GameCode.GDFeedbackTextObjects2.length = 0;
gdjs.GameCode.GDFeedbackTextObjects3.length = 0;
gdjs.GameCode.GDVolcanoObjects1.length = 0;
gdjs.GameCode.GDVolcanoObjects2.length = 0;
gdjs.GameCode.GDVolcanoObjects3.length = 0;
gdjs.GameCode.GDWaterVaporObjects1.length = 0;
gdjs.GameCode.GDWaterVaporObjects2.length = 0;
gdjs.GameCode.GDWaterVaporObjects3.length = 0;
gdjs.GameCode.GDCO2Objects1.length = 0;
gdjs.GameCode.GDCO2Objects2.length = 0;
gdjs.GameCode.GDCO2Objects3.length = 0;
gdjs.GameCode.GDCH4Objects1.length = 0;
gdjs.GameCode.GDCH4Objects2.length = 0;
gdjs.GameCode.GDCH4Objects3.length = 0;
gdjs.GameCode.GDN2OObjects1.length = 0;
gdjs.GameCode.GDN2OObjects2.length = 0;
gdjs.GameCode.GDN2OObjects3.length = 0;
gdjs.GameCode.GDCowObjects1.length = 0;
gdjs.GameCode.GDCowObjects2.length = 0;
gdjs.GameCode.GDCowObjects3.length = 0;
gdjs.GameCode.GDDeforestationObjects1.length = 0;
gdjs.GameCode.GDDeforestationObjects2.length = 0;
gdjs.GameCode.GDDeforestationObjects3.length = 0;
gdjs.GameCode.GDFridgeObjects1.length = 0;
gdjs.GameCode.GDFridgeObjects2.length = 0;
gdjs.GameCode.GDFridgeObjects3.length = 0;
gdjs.GameCode.GDAirconObjects1.length = 0;
gdjs.GameCode.GDAirconObjects2.length = 0;
gdjs.GameCode.GDAirconObjects3.length = 0;
gdjs.GameCode.GDCarObjects1.length = 0;
gdjs.GameCode.GDCarObjects2.length = 0;
gdjs.GameCode.GDCarObjects3.length = 0;
gdjs.GameCode.GDOilBarrelObjects1.length = 0;
gdjs.GameCode.GDOilBarrelObjects2.length = 0;
gdjs.GameCode.GDOilBarrelObjects3.length = 0;
gdjs.GameCode.GDAxeObjects1.length = 0;
gdjs.GameCode.GDAxeObjects2.length = 0;
gdjs.GameCode.GDAxeObjects3.length = 0;
gdjs.GameCode.GDInfoBoxObjects1.length = 0;
gdjs.GameCode.GDInfoBoxObjects2.length = 0;
gdjs.GameCode.GDInfoBoxObjects3.length = 0;
gdjs.GameCode.GDNaturalZoneObjects1.length = 0;
gdjs.GameCode.GDNaturalZoneObjects2.length = 0;
gdjs.GameCode.GDNaturalZoneObjects3.length = 0;
gdjs.GameCode.GDEnhancedZoneObjects1.length = 0;
gdjs.GameCode.GDEnhancedZoneObjects2.length = 0;
gdjs.GameCode.GDEnhancedZoneObjects3.length = 0;


return;

}

gdjs['GameCode'] = gdjs.GameCode;
