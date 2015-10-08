sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
], function (Controller, JSONModel) {
	"use strict";
	return Controller.extend("sap.ui.rha.controller.HorseDetail", {
		onInit: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			
			oRouter.getRoute("HorseDetail").attachPatternMatched(this._onObjectMatched, this);
		},
		_onObjectMatched: function (oEvent) {
			var horseName = oEvent.getParameter("arguments").horsePath;
			var oM = new JSONModel();

	     	oM.loadData("/rha/data/RaceHorse.json", "", false);
	     	var data = oM.getData();
	     	var that = this;
	     	var tileDistance = this.getView().byId("tileDistance");
 	    	var tileSpeed =    this.getView().byId("tileSpeed");
 	    	var tileHeartRate = this.getView().byId("tileHeartRate");
	     	$(data.WorkoutData).each(function(i, v) {	     	    
	     		if (v.Horse == horseName) {
	     	    	tileDistance.setNumber(v.Distance);
	     	    	tileSpeed.setNumber(v.TopSpeed);
	     	    	tileHeartRate.setNumber(v.HeartRate);
	     	        return;
	     	    }
	     	});
	     }
	});
});