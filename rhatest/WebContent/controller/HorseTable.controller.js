sap.ui.define([
		'jquery.sap.global',
//		'./Formatter',
		'sap/ui/core/mvc/Controller',
		'sap/ui/model/json/JSONModel'
	], function(jQuery, Controller, JSONModel) {
	"use strict";

	var TableController = Controller.extend("sap.ui.rha.controller.HorseTable", {
		
		onInit: function () {
//			var oConfig = this.getMetadata().getConfig();
//	     	var sNamespace = this.getMetadata().getManifestEntry("sap.app").id;
			// set explored app's demo model on this sample
//			var oModel = new JSONModel(jQuery.sap.getModulePath('sap.ui.rha.data', '/RaceHorse.json'));
	//		this.getView().setModel(oModel);
			
			var oModel = new sap.ui.model.json.JSONModel();
			// load JSON file into model
			oModel.loadData(jQuery.sap.getModulePath('sap.ui.rha.data', '/RaceHorse.json'), "", false);
//			oModel.loadData("sap.ui.rha.data/RaceHorse.json");
			// bind model to whole view 
			this.getView().setModel(oModel);
			
				
			//On phone devices, there is nothing to select from the list. There is no need to attach events.
			if (sap.ui.Device.system.phone) {
				return;
			}


		},
		handleSelectionChange: function() {
			alert('test');
			var oItem, oCtx;
			oItem = oEvent.getSource();
			oCtx = oItem.getBindingContext();
			this.getRouter().navTo("HorseDetail",{
				Horse : oCtx.getProperty("Horse")
			});

		}
		
	
	
	})

	return TableController;

});