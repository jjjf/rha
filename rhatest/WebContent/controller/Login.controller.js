sap.ui.define([
		'jquery.sap.global',
//		'./Formatter',
		'sap/ui/core/mvc/Controller',
		'sap/ui/model/json/JSONModel'
	], function(jQuery, Controller, JSONModel) {
	"use strict";

	var TableController = Controller.extend("sap.ui.rha.controller.Login", {
		onInit: function() {
		},

		doLogin: function(oEvent) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("HorseTable");
			}

		
		
	
	
	});

	return TableController;

});