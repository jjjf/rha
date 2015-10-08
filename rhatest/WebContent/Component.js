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
		manifest: "json",
		
		"routing": {
			  "config": {
				"routerClass": "sap.m.routing.Router",
				"viewType": "XML",
				"viewPath": "sap.ui.rha.view",
				"controlId": "App",
				"controlAggregation": "pages"
			  },
			  "routes": [
				{
				  "pattern": "",
				  "name": "Login",
				  "target": "Login"
				},
				{
					  "pattern": "Table",
					  "name": "HorseTable",
					  "target": "HorseTable"
					},
				{
				  "pattern": "Detail/{horsePath}",
				  "name": "HorseDetail",
				  "target": "HorseDetail"
				}
			  ],
			  "targets": {
				"Login": {
				  "viewName": "Login"
				},
				"HorseTable": {
				  "viewName": "HorseTable"
				},
				"HorseDetail": {
				  "viewName": "HorseDetail"
				}
				
			  }
			}
			
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
         jQuery.sap.require("sap.m.routing.RouteMatchedHandler");  
         jQuery.sap.require("sap.ui.core.routing.Router");  
         var router = this.getRouter();
         alert(router);
         router.initialize();
         var oModel = new JSONModel(oData);
         this.setModel(oModel);

     	// set invoice model - local
  /*  	var oConfig = this.getMetadata().getConfig();
     	var sNamespace = this.getMetadata().getManifestEntry("sap.app").id;
     	console.log(jQuery.sap.getModulePath(sNamespace, oConfig.invoiceLocal));
     	//var oInvoiceModel = new JSONModel(jQuery.sap.getModulePath(sNamespace, oConfig.invoiceLocal));
     	//var oInvoiceModel = new JSONModel(new sap.ui.model.odata.ODataModel(jQuery.sap.getModulePath(sNamespace, oConfig.invoiceLocal)));
     	var oInvoiceModel = new JSONModel();
//     	oInvoiceModel.attachRequestCompleted(function(){
//     	    this.setModel(oInvoiceModel, "invoice");
//     	});
     	//oInvoiceModel.setData(null);
     	oInvoiceModel.loadData(jQuery.sap.getModulePath(sNamespace, oConfig.invoiceLocal), "", false);
     	this.setModel(oInvoiceModel, "in");
     	var oDataModel = new JSONModel(jQuery.sap.getModulePath(sNamespace, oConfig.dataLocal));
     	this.setModel(oDataModel, "dataLocal");*/

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