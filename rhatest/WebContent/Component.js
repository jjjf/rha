sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel",
   "sap/ui/model/resource/ResourceModel",
   "sap/ui/rha/controller/HelloDialog"
   ], function (UIComponent, JSONModel, ResourceModel, HelloDialog) {
   "use strict";
   return UIComponent.extend("sap.ui.rha.Component", {
       metadata : {
		rootView: "sap.ui.rha.view.App",
		manifest: "json"
	  },
      init : function () {
         // call the init function of the parent
         UIComponent.prototype.init.apply(this, arguments);
         // set data model
         var oData = {
            recipient : {
               name : "World"
            }
         };
         var oModel = new JSONModel(oData);
         this.setModel(oModel);

     	// set invoice model - local
     	var oConfig = this.getMetadata().getConfig();
     	var sNamespace = this.getMetadata().getManifestEntry("sap.app").id;
     	var oDataModel = new JSONModel(jQuery.sap.getModulePath(sNamespace, oConfig.dataLocal));
     	this.setModel(oDataModel, "dataLocal");

         // set i18n model
         var i18nModel = new ResourceModel({
            bundleName : "sap.ui.rha.i18n.i18n"
         });
         this.setModel(i18nModel, "i18n");
		 
         // set dialog
		 this.helloDialog = new HelloDialog();
      }
   });
});