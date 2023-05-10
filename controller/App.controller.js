sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/ui/model/json/JSONModel",
   "sap/ui/model/Filter",
   "sap/ui/model/FilterOperator"
], function (Controller,
	JSONModel,
	Filter,
	FilterOperator) {
   "use strict"
   return Controller.extend("sap.ui.demo.controller.App", {
      onInit: function () {

      },
      mySerach : function(oEvent) {
         // get the search query entered by the user
         var sQuery = oEvent.getParameter("newValue");
         var oList = this.getView().byId("todosListId");
         var oBinding = oList.getBinding("items");

         // create a filter for the search query
         var oFilter = new sap.ui.model.Filter("title", sap.ui.model.FilterOperator.Contains, sQuery);

         // apply the filter to the list binding
         oBinding.filter([oFilter]);
      },
      onPress : function(oEvent) {
         var oItem = oEvent.getSource()
         var oRouter = this.getOwnerComponent().getRouter()
			oRouter.navTo("detail", {
            detailPath: window.encodeURIComponent(oItem.getBindingContext("todosModel").getPath().substr(1)),
         })
         // console.log(window.encodeURIComponent(oItem.getBindingContext("todosModel").getPath().substr(1)))
      }
   })
})