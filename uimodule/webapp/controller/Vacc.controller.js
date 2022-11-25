sap.ui.define([
    "./BaseController",
    "sap/ui/model/json/JSONModel",
    
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("com.ak.projectOne.controller.Vacc", {
     
            onInit: function () {
                let myVaccModel = new JSONModel("../model/vacc.json");
            
                this.getView().setModel(myVaccModel, "VaccModel");
                let myViewConfig = {
                    "table":true,
                    "calendar":false
                };
                let myViewModel = new JSONModel(myViewConfig);
                this.getView().setModel(myViewModel, "view");
      
            },

            formatDate: function(oInput){
                return new Date(oInput);
            },
            formatState:function(oInput){
                 if (oInput > 'May 11 2020') {
                    return 'Success'
                 } else {
                    return 'Error';
                 }
                

            }
           
           
           
        });
    });
