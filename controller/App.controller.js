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
      incrementBy1: function () {
         let myTextElem = this.getView().byId("counter")
         let myNum = parseInt(myTextElem.getText())
         let myNewNum = myNum + 1
         myTextElem.setText(myNewNum)
      },
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
      }
   })
})