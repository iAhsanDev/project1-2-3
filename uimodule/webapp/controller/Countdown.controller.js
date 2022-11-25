sap.ui.define([
    "./BaseController",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("com.ak.projectOne.controller.Countdown", {
            onInit: function () {
                this.timer ={
                    "day":0,
                    "hours":0,
                    "minutes":0,
                    "seconds":0

                }

                let myTimerModel = new JSONModel(this.timer);
            
                this.getView().setModel(myTimerModel, "timer")
                setInterval(this.calculateTime.bind(this),1000);
            },
            calculateTime:function(){
                let techDate = new Date("Dec 8 2022");
                let currentDate = new Date();
                let diff = techDate.getTime() - currentDate.getTime();
                this.timer.days = Math.floor(diff / (1000* 60 * 60 * 24));
                this.timer.hours = Math.floor((diff % (1000* 60 * 60 * 24))/ (1000 * 60 * 60));
                this.timer.minutes = Math.floor((diff % (1000* 60 * 60 ))/ (1000 * 60 ));
                this.timer.seconds = Math.floor((diff % (1000 * 60  ))/ ( 1000 ));
                this.getView().getModel("timer").setData(this.timer);
            }
        });
    });
