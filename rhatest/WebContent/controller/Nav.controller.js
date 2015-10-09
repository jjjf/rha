sap.ui.define([
    'sap/ui/core/mvc/Controller',
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";
	return Controller.extend("sap.ui.rha.controller.Nav", {
		
		onInit: function() {
			$('body').on('swipeleft', '.swipe-page', function(e) {
				var navCon = this.getView().byId("navCon");
				navCon.back();
	        }.bind(this));  
		},
		handleNav: function(evt) {
			var navCon = this.getView().byId("navCon");
			debugger;
			var target = evt.getSource().data("target");
			if (target) {
				navCon.to(this.getView().byId(target), "slide");
			} else {
				navCon.back();
			}
		},
		doLogin : function (evt) {
	    	 var u = this.byId('loginUsername').getValue();
	    	 var p = this.byId('loginPassword').getValue();
	         var oBundle = this.getView().getModel("i18n").getResourceBundle();
	    	 if (false) {//(u.length == 0 || p.length == 0)) {
	    		 var sMsg = oBundle.getText("loginFailed");
		         MessageToast.show(sMsg);
	    	 }
	    	 else {
	    		 var sMsg = oBundle.getText("loginSucces");
		         MessageToast.show(sMsg);
				 var navCon = this.getView().byId("navCon");
		         navCon.to(this.getView().byId("MyHorses"), "slide");
	    	 }
	      }
	});
});