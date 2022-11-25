sap.ui.define([
    "./BaseController",
    "sap/ui/model/json/JSONModel",
    'sap/viz/ui5/format/ChartFormatter',
    'sap/viz/ui5/api/env/Format',
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, ChartFormatter, Format) {
        "use strict";

        return Controller.extend("com.ak.projectOne.controller.PieView", {

            dataPath: "https://api.rootnet.in/covid19-in/stats/latest",
            oVizFrame : null,
            settingsModel : {
                dataset : {
                    name: "Dataset",
                    defaultSelected : 1,
                    values : [{
                        name : "Small",
                        value : "/small.json"
                    },{
                        name : "Medium",
                        value : "/medium.json"
                    }]
                },
                series : {
                    name : "Series",
                    defaultSelected : 0,
                    enabled : false,
                    values : [{
                        name : "1 Series"
                    }, {
                        name : '2 Series'
                    }]
                },
                dataLabel : {
                    name : "Value Label",
                    defaultState : false
                },
                axisTitle : {
                    name : "Axis Title",
                    defaultState : false,
                    enabled : false
                }
            },
    
           


            onInit: function () {
              
            
             
    
                var oVizFrame = this.oVizFrame = this.getView().byId("idVizFrame");
                oVizFrame.setVizProperties({
                    legend: {
                        title: {
                            visible: false
                        }
                    },
                    title: {
                        visible: false
                    }
                });

   
                var dataModel = new JSONModel(this.dataPath);
                oVizFrame.setModel(dataModel);
    
                var oPopOver = this.getView().byId("idPopOver");
                oPopOver.connect(oVizFrame.getVizUid());
                oPopOver.setFormatString(ChartFormatter.DefaultPattern.STANDARDFLOAT);
    
            
    
               
            }
        });
    });
