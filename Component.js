sap.ui.define([
   "sap/ui/core/UIComponent",
], function (UIComponent) {
   "use strict"
   return UIComponent.extend("sap.ui.demo.Component", {
      metadata: {
         "interfaces": ["sap.ui.core.IAsyncContentCreation"],
         manifest: "json"
      },
      init: function () {
         UIComponent.prototype.init.apply(this, arguments)

         // create the views based on the url/hash
         this.getRouter().initialize();
      }
   })
})