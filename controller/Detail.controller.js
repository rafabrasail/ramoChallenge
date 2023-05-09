sap.ui.define( [
    "sap/ui/core/mvc/Controller", 
    "sap/ui/core/routing/History"], function (Controller, History) {
	"use strict";
	return Controller.extend("sap.ui.demo.controller.Detail", {
		onInit : function () {
			// var sUrl = "#" + this.getOwnerComponent().getRouter().getURL("page1");
			// this.byId("link").setHref(sUrl);
		},
		onBack : function () {
			this.getOwnerComponent().getRouter().navTo("overview");
		}
	});

});