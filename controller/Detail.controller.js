sap.ui.define( [
    "sap/ui/core/mvc/Controller", 
    "sap/ui/core/routing/History",
	"sap/ui/model/json/JSONModel"], function (Controller,
	History,
	JSONModel) {
	"use strict";
	return Controller.extend("sap.ui.demo.controller.Detail", {
		onInit : function () {
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.getRoute("detail").attachPatternMatched(this._onDetailMatched, this);

		},
		_onDetailMatched: function (oEvent) {
			var sDetailPath = oEvent.getParameter("arguments").detailPath;
			console.log("detail", sDetailPath)

			this._getMoreInfo(sDetailPath)
		},
		onBack : function () {
            var oHistory = History.getInstance()
            var sPreviousHash = oHistory.getPreviousHash()

            if (sPreviousHash !== undefined) {
                window.history.go(-1)
            } else {
                var oRouter = this.getOwnerComponent().getRouter()
                oRouter.navTo("overview", {},true)
            }
		},
		_getMoreInfo: function (sDetailPath) {
			var that = this
			jQuery.ajax({
				method: "GET",
				url: "https://jsonplaceholder.typicode.com/todos/"+sDetailPath,
				success: function(data){
					// 1) define model from selecte element
					var oModel = new sap.ui.model.json.JSONModel(data);
					// 2) set model on the parent View
					 that.getView().setModel(oModel, "todosDetail");
					 that.getView().getParent().setModel(oModel, "todosDetail");
				},
				error: function(error){
					console.log(error)
				}
			})
		}
	});
});