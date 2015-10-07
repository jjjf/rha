sap.ui.core.mvc.Controller.extend("sap.ui.rha.controller.HorseDetail", {

	onInit : function() {
		var oView = this.getView();

		sap.ui.core.UIComponent.getRouterFor(this).attachRouteMatched(function(oEvent) {
			// when detail navigation occurs, update the binding context
			if (oEvent.getParameter("name") === "product") {

				var sProductPath = "/" + oEvent.getParameter("arguments").product;

				oView.bindElement(sProductPath);

				// Check that the product specified actually was found
				oView.getElementBinding().attachEventOnce("dataReceived", jQuery.proxy(function() {
					var oData = oView.getModel().getData(sProductPath);
					if (!oData) {
						sap.ui.core.UIComponent.getRouterFor(this).myNavToWithoutHash({
							currentView : oView,
							targetViewName : "sap.ui.demo.tdg.view.NotFound",
							targetViewType : "XML"
						});
					}
				}, this));
				// Make sure the master is here
				var oIconTabBar = oView.byId("idIconTabBar");
				oIconTabBar.getItems().forEach(function(oItem) {
					oItem.bindElement(sap.ui.demo.tdg.util.Formatter.uppercaseFirstChar(oItem.getKey()));
				});

				// Which tab?
				var sTabKey = oEvent.getParameter("arguments").tab || "supplier";
				if (oIconTabBar.getSelectedKey() !== sTabKey) {
					oIconTabBar.setSelectedKey(sTabKey);
				}
			}
		}, this);

	},
})
