sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";
	return Controller.extend("sap.ui.rha.controller.HorseDetail", {
		onInit: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			
			oRouter.getRoute("HorseDetail").attachPatternMatched(this._onObjectMatched, this);
		},
		_onObjectMatched: function (oEvent) {
			alert();
			this.getView().bindElement({
				path: oEvent.getParameter("arguments").horsePath,
				model: "WorkoutData"
			});

		}
	});
});