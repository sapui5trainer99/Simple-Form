sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("simpleform.simpleform.controller.Simple_form", {
            onInit: function() {
                var json = new sap.ui.model.json.JSONModel("model/Data.json");
                var form = this.byId("EmpForm");
                this.getView().setModel(json, "formModel");
                form.bindElement("formModel>/results/0"); //element binding
    
            },
            
            onSelectBtn:function(evt){
                var key=evt.getSource().getSelectedKey();
                this.byId("EmpForm").bindElement("formModel>/results/"+key);
            },
            
            onDisplay:function(){
            var path=this.byId("EmpForm").getElementBinding("formModel").getPath();
              path =path.split("results/")[1];
              var obj =this.byId("EmpForm").getElementBinding("formModel").getModel().getData().results[path];
              sap.m.MessageToast.show("Name:"+obj.name +"\n ID:"+obj.id+"\n Email:"+obj.email+"\n City:"+obj.city,{width: "20em"});
              
            }
        });
    });
