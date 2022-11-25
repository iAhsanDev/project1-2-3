sap.ui.define([
    "./BaseController",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("com.ak.projectOne.controller.ListView", {

            dataPath: "https://api.rootnet.in/covid19-in/stats/history",
            onInit: function () {
               
                var dataModel = new JSONModel(this.dataPath);
                this.getView().setModel(dataModel, "Latest")
            }
            
        });
    });
