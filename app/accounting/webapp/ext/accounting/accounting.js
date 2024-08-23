sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
  ], function (Controller, JSONModel) {
    "use strict";
  
    return Controller.extend("com.revathi.gst.controller.Main", {
  
      onInit: function () {
        // Initialize the model or any necessary setup
      },
  
      fetchAllRecords: function () {
        var oModel = this.getView().getModel(); // Get the OData model from the view
        var sPath = "/accdoc"; // Replace with your actual entity set name
  
        oModel.read(sPath, {
          success: function (oData) {
            // Handle success - oData contains the retrieved records
            var oJSONModel = new JSONModel(oData.results);
            this.getView().setModel(oJSONModel, "fetchedData");
            sap.m.MessageToast.show("Records fetched successfully!");
          }.bind(this),
          error: function (oError) {
            // Handle errors here
            sap.m.MessageToast.show("Error fetching records.");
          }
        });
      }
    });
  });
  