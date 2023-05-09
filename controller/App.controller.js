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

         var that = this
         jQuery.ajax({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/todos",
            success: function(data){

               // 1) define model
               var oModel = new sap.ui.model.json.JSONModel(data);

               // 2) model set to to View
               that.getView().setModel(oModel, "todosData");
               //console.log(data)
            }, 
            error: function(error){
               console.log(error)
            }
         })
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
         alert("Navigating to Detil of " + oEvent.getSource().getBindingContext());
         // var oItem = oEvent.getSource()
         // var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			// oRouter.navTo("detail", {
         //    detailPath: oItem.getBindingContext("todosData").getProperty("id")
         //    // detailPath: window.encodeURIComponent(oItem.getBindingContext("detail").getPath().substr(1))
         // });
      },
      onToPage2 : function() {
         this.getOwnerComponent().getRouter().navTo("detail");
      }

   })
})